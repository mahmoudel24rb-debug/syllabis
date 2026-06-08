/**
 * POST /api/demo-signup — inscription self-service essai gratuit syllabis.fr/demo
 *
 * Flux SSR (server-to-server vers l'app Syllabis + Twenty CRM, jamais exposé au browser) :
 *  1. Validation inputs (email, prenom, nom, organisme, password >= 8 chars)
 *  2. Lecture cookie last-touch (UTM/gclid/fbclid/sourcePage)
 *  3. POST app /enterprise/public-signup via shared secret VITRINE_TO_APP_SECRET
 *     → crée org demo Inbound + user owner + session token
 *  4. Push Twenty : Person + Company (dedup par domaine email) + Opportunity
 *     stage SCREENING + Task « Relancer suite à essai gratuit » assignée à Anthony
 *     (TWENTY_DEMO_TASK_ASSIGNEE_ID configurable, due NOW+24h)
 *  5. Retourne {ok, session_token, auto_login_url} au browser → redirect vers
 *     https://dev.syllabis.fr/auto-login?t=<token> pour auto-login client-side
 *
 * Sécurité :
 *  - Le secret VITRINE_TO_APP_SECRET reste server-side (process.env, jamais
 *    NEXT_PUBLIC_*). La page /demo POST ici sans secret côté client.
 *  - Mot de passe transmis en clair via HTTPS au backend qui le bcrypt-hash
 *    avant INSERT.
 *  - Idempotence : si l'app retourne 409 (email déjà en BDD), on relaie l'erreur
 *    au client sans toucher Twenty (pas de doublon CRM).
 */
import { NextRequest, NextResponse } from 'next/server'
import {
  pushLeadToTwenty,
  createOpportunity,
  createTaskForBooking,
  findWorkspaceMemberIdByEmail,
  type LeadPayload,
} from '@/lib/twenty'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const COOKIE_LAST = 'syl_last_touch'
const APP_BASE_URL = process.env.SYLLABIS_APP_BASE_URL || 'https://dev.syllabis.fr'
const SHARED_SECRET = process.env.VITRINE_TO_APP_SECRET || ''
const DEMO_TASK_ASSIGNEE_ID = process.env.TWENTY_DEMO_TASK_ASSIGNEE_ID || ''
const DEMO_TASK_ASSIGNEE_EMAIL = process.env.TWENTY_DEMO_TASK_ASSIGNEE_EMAIL || ''

type TouchCookie = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  fbclid?: string
  referrer?: string
  landing?: string
  at?: string
}

function str(v: unknown, max = 2000): string {
  if (typeof v !== 'string') return ''
  return v.trim().slice(0, max)
}

function readTouchCookie(req: NextRequest, name: string): TouchCookie | null {
  const raw = req.cookies.get(name)?.value
  if (!raw) return null
  try {
    return JSON.parse(decodeURIComponent(raw)) as TouchCookie
  } catch {
    return null
  }
}

function pick(...candidates: Array<string | undefined | null>): string {
  for (const c of candidates) if (c) return c
  return ''
}

export async function POST(req: NextRequest) {
  const traceId = crypto.randomUUID().slice(0, 8)

  if (!SHARED_SECRET) {
    console.error(`[demo-signup ${traceId}] VITRINE_TO_APP_SECRET non configuré`)
    return NextResponse.json({ ok: false, error: 'server_misconfig' }, { status: 500 })
  }

  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }
  const b = body as Record<string, unknown>

  const email = str(b.email, 200).toLowerCase()
  const prenom = str(b.prenom, 100)
  const nom = str(b.nom, 100)
  const telephone = str(b.telephone, 50)
  const indicatif = str(b.indicatif, 8)
  const organisme = str(b.organisme, 200)
  const password = str(b.password, 128)
  const consentRgpd = Boolean(b.consentRgpd)

  if (!email || !email.includes('@')) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }
  if (!prenom || !nom) {
    return NextResponse.json({ ok: false, error: 'missing_name' }, { status: 400 })
  }
  // Téléphone obligatoire pour le CRM (relance Anthony) — sans regex stricte
  // (variations FR/BE/CH/CA), juste un minimum de longueur après nettoyage.
  if (!telephone || telephone.replace(/\D/g, '').length < 6) {
    return NextResponse.json({ ok: false, error: 'missing_phone' }, { status: 400 })
  }
  if (!organisme || organisme.length < 2) {
    return NextResponse.json({ ok: false, error: 'missing_organisme' }, { status: 400 })
  }
  if (!password || password.length < 8) {
    return NextResponse.json({ ok: false, error: 'invalid_password' }, { status: 400 })
  }
  if (!consentRgpd) {
    return NextResponse.json({ ok: false, error: 'missing_consent' }, { status: 400 })
  }

  // Tracking : cookie last-touch prioritaire, payload client fallback
  const tracking = (b.tracking || {}) as Record<string, unknown>
  const lastCookie = readTouchCookie(req, COOKIE_LAST)
  const lead: LeadPayload = {
    source: 'demo_signup',
    prenom,
    nom,
    email,
    telephone,
    indicatif,
    organisme,
    consentRgpd: true,
    tracking: {
      utmSource: pick(lastCookie?.utm_source, str(tracking.utmSource, 200)),
      utmMedium: pick(lastCookie?.utm_medium, str(tracking.utmMedium, 200)),
      utmCampaign: pick(lastCookie?.utm_campaign, str(tracking.utmCampaign, 200)),
      utmTerm: pick(lastCookie?.utm_term, str(tracking.utmTerm, 200)),
      utmContent: pick(lastCookie?.utm_content, str(tracking.utmContent, 200)),
      gclid: pick(lastCookie?.gclid, str(tracking.gclid, 200)),
      fbclid: pick(lastCookie?.fbclid, str(tracking.fbclid, 200)),
      referrer: pick(lastCookie?.referrer, str(tracking.referrer, 500)),
      sourcePage: pick(lastCookie?.landing, str(tracking.sourcePage, 200)),
    },
  }

  // 1. POST app /enterprise/public-signup — crée org démo Inbound + user + session
  //    Le tracking JSON est stocké dans organization.created_via_tracking côté app.
  let signupResp: {
    signup: boolean
    session_token: string
    user_id: number
    org_id: number
    username: string
    demo_expires_at: string
    email_sent: boolean
  }
  try {
    const appUrl = `${APP_BASE_URL}/enterprise/public-signup`
    const r = await fetch(appUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Syllabis-Vitrine-Secret': SHARED_SECRET,
        Accept: 'application/json',
      },
      body: JSON.stringify({
        email,
        prenom,
        nom,
        organisme,
        password,
        tracking: lead.tracking,
      }),
    })
    if (r.status === 409) {
      const j = (await r.json().catch(() => ({}))) as { detail?: unknown }
      return NextResponse.json({ ok: false, error: 'email_already_used', detail: j.detail }, { status: 409 })
    }
    if (!r.ok) {
      const text = await r.text().catch(() => '')
      console.error(`[demo-signup ${traceId}] app /public-signup ${r.status}: ${text.slice(0, 500)}`)
      return NextResponse.json({ ok: false, error: 'app_signup_failed' }, { status: 502 })
    }
    signupResp = await r.json()
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error(`[demo-signup ${traceId}] app fetch failed:`, msg)
    return NextResponse.json({ ok: false, error: 'app_unreachable' }, { status: 502 })
  }

  // 2. Push Twenty (best-effort — un échec ne casse pas le signup)
  try {
    const { personId, companyId } = await pushLeadToTwenty(lead)

    let opportunityId: string | undefined
    try {
      const opp = await createOpportunity({ lead, personId, companyId })
      opportunityId = opp.id
    } catch (oppErr) {
      const m = oppErr instanceof Error ? oppErr.message : String(oppErr)
      console.warn(`[demo-signup ${traceId}] Opportunity create failed:`, m)
    }

    // Résout l'assignee Task : ENV ID prioritaire, sinon recherche par email
    let assigneeId: string | null = DEMO_TASK_ASSIGNEE_ID || null
    if (!assigneeId && DEMO_TASK_ASSIGNEE_EMAIL) {
      try {
        assigneeId = await findWorkspaceMemberIdByEmail(DEMO_TASK_ASSIGNEE_EMAIL)
      } catch {
        assigneeId = null
      }
    }

    // Task : Relance J+1 ouvré (simplifié à NOW+24h ; affinement post-MVP)
    const dueAt = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    const fullName = `${prenom} ${nom}`.trim()
    const taskTitle = `Relancer ${fullName} – essai gratuit Syllabis`.slice(0, 200)
    const trackingLines = [
      lead.tracking?.utmSource ? `- utm_source : ${lead.tracking.utmSource}` : '',
      lead.tracking?.utmCampaign ? `- utm_campaign : ${lead.tracking.utmCampaign}` : '',
      lead.tracking?.gclid ? `- gclid : ${lead.tracking.gclid}` : '',
      lead.tracking?.fbclid ? `- fbclid : ${lead.tracking.fbclid}` : '',
      lead.tracking?.referrer ? `- referrer : ${lead.tracking.referrer}` : '',
      lead.tracking?.sourcePage ? `- sourcePage : ${lead.tracking.sourcePage}` : '',
    ].filter(Boolean).join('\n')
    const phoneLine = telephone
      ? `- Téléphone : ${indicatif ? `(${indicatif}) ` : ''}${telephone}`
      : ''
    const bodyMarkdown = [
      `**Inscription essai gratuit Syllabis (Inbound, 14 jours)**`,
      ``,
      `- Contact : ${fullName} <${email}>`,
      phoneLine,
      `- Organisme : ${organisme}`,
      `- Compte actif jusqu'au : ${signupResp.demo_expires_at}`,
      `- App : ${APP_BASE_URL} (org_id ${signupResp.org_id})`,
      ``,
      trackingLines ? `**Source marketing**\n${trackingLines}` : '',
    ].filter(Boolean).join('\n')

    try {
      await createTaskForBooking({
        title: taskTitle,
        dueAt,
        bodyMarkdown,
        assigneeWorkspaceMemberId: assigneeId,
        personId,
        companyId,
        opportunityId,
      })
    } catch (taskErr) {
      const m = taskErr instanceof Error ? taskErr.message : String(taskErr)
      console.warn(`[demo-signup ${traceId}] Task create failed:`, m)
    }
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error(`[demo-signup ${traceId}] Twenty sync failed:`, msg)
    // Le compte est créé côté app, on continue malgré tout
  }

  // 3. Réponse au browser → page /demo redirige vers /auto-login
  const autoLoginUrl = `${APP_BASE_URL}/auto-login?t=${encodeURIComponent(signupResp.session_token)}`
  return NextResponse.json({
    ok: true,
    session_token: signupResp.session_token,
    auto_login_url: autoLoginUrl,
    org_id: signupResp.org_id,
    user_id: signupResp.user_id,
    demo_expires_at: signupResp.demo_expires_at,
    traceId,
  })
}
