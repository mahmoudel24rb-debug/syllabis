import { NextRequest, NextResponse } from 'next/server'
import { payload } from '@/lib/payload'
import { pushLeadToTwenty, createOpportunity, type LeadPayload } from '@/lib/twenty'
import { createCalBooking } from '@/lib/cal'
import { findOwnerForSlot, getCalOwnerInfo } from '@/lib/cal-availability'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const COOKIE_FIRST = 'syl_first_touch'
const COOKIE_LAST = 'syl_last_touch'

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

function clientIp(req: NextRequest): string {
  return (
    req.headers.get('cf-connecting-ip') ||
    req.headers.get('x-real-ip') ||
    (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    ''
  )
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
  let body: unknown
  try {
    body = await req.json()
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }
  const b = body as Record<string, unknown>

  const source = str(b.source) === 'demo' ? 'demo' : str(b.source) === 'contact' ? 'contact' : null
  if (!source) return NextResponse.json({ ok: false, error: 'invalid_source' }, { status: 400 })

  const email = str(b.email, 200).toLowerCase()
  const nom = str(b.nom, 100)
  if (!email || !email.includes('@')) return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  if (!nom) return NextResponse.json({ ok: false, error: 'missing_name' }, { status: 400 })

  const tracking = (b.tracking || {}) as Record<string, unknown>
  // Cookies (source de vérité prioritaire — capturés via middleware au landing,
  // persistent durant toute la session). Le payload client reste un fallback.
  const lastCookie = readTouchCookie(req, COOKIE_LAST)
  const firstCookie = readTouchCookie(req, COOKIE_FIRST)

  // Lead complet — envoyé à Twenty (CRM = source de vérité avec tous les champs)
  const lead: LeadPayload = {
    source,
    prenom: str(b.prenom, 100),
    nom,
    email,
    telephone: str(b.telephone, 50),
    indicatif: str(b.indicatif, 8),
    organisme: str(b.organisme, 200),
    message: str(b.message, 5000),
    titreReferentiel: str(b.titreReferentiel, 300),
    tailleEtablissement: str(b.tailleEtablissement, 20),
    dateHeureDemoSouhaitee: str(b.dateHeureDemoSouhaitee, 50),
    nbApprenants: typeof b.nbApprenants === 'number' && Number.isFinite(b.nbApprenants)
      ? Math.max(0, Math.floor(b.nbApprenants))
      : undefined,
    dateLancementSouhaitee: str(b.dateLancementSouhaitee, 50),
    consentRgpd: Boolean(b.consentRgpd),
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
    firstTouch: firstCookie
      ? {
          utmSource: firstCookie.utm_source || '',
          utmMedium: firstCookie.utm_medium || '',
          utmCampaign: firstCookie.utm_campaign || '',
          utmTerm: firstCookie.utm_term || '',
          utmContent: firstCookie.utm_content || '',
          gclid: firstCookie.gclid || '',
          fbclid: firstCookie.fbclid || '',
          referrer: firstCookie.referrer || '',
          landing: firstCookie.landing || '',
          at: firstCookie.at || '',
        }
      : undefined,
  }

  // 0. Garde-fou anti double-booking + résolution du bon "owner" Cal pour ce slot.
  //    En multi-user (Florent + Victor), on prend le PREMIER dispo à l'heure choisie.
  //    Si personne n'est dispo → 409 (le visiteur choisira un autre créneau).
  let resolvedCalOwner: { username: string; eventTypeId: number; eventTypeSlug: string; eventTypeLength: number } | null = null
  if (lead.source === 'demo' && lead.dateHeureDemoSouhaitee) {
    const start = new Date(lead.dateHeureDemoSouhaitee)
    if (!Number.isNaN(start.getTime()) && start.getTime() > Date.now()) {
      try {
        const parisParts = new Intl.DateTimeFormat('en-CA', {
          timeZone: 'Europe/Paris',
          year: 'numeric', month: '2-digit', day: '2-digit',
          hour: '2-digit', minute: '2-digit', hour12: false,
        }).formatToParts(start)
        const get = (t: string) => parisParts.find((x) => x.type === t)?.value ?? ''
        const date = `${get('year')}-${get('month')}-${get('day')}`
        const wantedHour = Number(get('hour'))
        const wantedMin = Number(get('minute'))
        const owner = await findOwnerForSlot({ date, hour: wantedHour, minute: wantedMin })
        if (!owner) {
          return NextResponse.json({ ok: false, error: 'slot_taken' }, { status: 409 })
        }
        const info = await getCalOwnerInfo(owner)
        if (info) {
          resolvedCalOwner = {
            username: info.username,
            eventTypeId: owner.eventTypeId,
            eventTypeSlug: info.eventTypeSlug,
            eventTypeLength: info.eventTypeLength,
          }
        }
      } catch (e) {
        // Si la vérif échoue (DB down), on log et on continue avec le user par défaut.
        console.warn(`[leads ${traceId}] slot precheck failed:`, e instanceof Error ? e.message : e)
      }
    }
  }

  // 1. Persist to Payload (filet de sécurité, schéma simplifié — données complètes dans Twenty)
  const p = await payload()
  const created = await p.create({
    collection: 'leads',
    data: {
      source: lead.source,
      nom: lead.nom,
      email: lead.email,
      organisme: lead.organisme,
      message: lead.message,
      titreReferentiel: lead.titreReferentiel,
      tailleEtablissement: lead.tailleEtablissement,
      nbApprenants: lead.nbApprenants,
      dateLancementSouhaitee: lead.dateLancementSouhaitee
        ? new Date(lead.dateLancementSouhaitee).toISOString()
        : undefined,
      dateHeureDemoSouhaitee: lead.dateHeureDemoSouhaitee
        ? new Date(lead.dateHeureDemoSouhaitee).toISOString()
        : undefined,
      consentRgpd: lead.consentRgpd,
      tracking: {
        ...lead.tracking,
        userAgent: req.headers.get('user-agent') || '',
        ip: clientIp(req),
      },
      ...(lead.firstTouch
        ? {
            firstTouch: {
              ...lead.firstTouch,
              at: lead.firstTouch.at ? new Date(lead.firstTouch.at).toISOString() : undefined,
            },
          }
        : {}),
      twentySync: { twentySyncStatus: 'pending' },
    } as never,
  })

  // 2. Push to Twenty (avec tous les champs) + Opportunity si démo
  try {
    const { personId, companyId, created: createdPerson } = await pushLeadToTwenty(lead)
    let opportunityId: string | undefined
    if (lead.source === 'demo') {
      try {
        const opp = await createOpportunity({ lead, personId, companyId })
        opportunityId = opp.id
      } catch (oppErr) {
        const m = oppErr instanceof Error ? oppErr.message : String(oppErr)
        console.warn(`[leads ${traceId}] Opportunity create failed:`, m)
      }
    }
    void createdPerson
    await p.update({
      collection: 'leads',
      id: created.id,
      data: {
        twentySync: {
          twentyPersonId: personId,
          twentyCompanyId: companyId || undefined,
          twentyOpportunityId: opportunityId,
          twentySyncStatus: 'synced',
        },
      } as never,
    })
  } catch (e) {
    const msg = e instanceof Error ? e.message : String(e)
    console.error(`[leads ${traceId}] Twenty sync failed:`, msg)
    await p.update({
      collection: 'leads',
      id: created.id,
      data: {
        twentySync: {
          twentySyncStatus: 'error',
          twentySyncError: msg.slice(0, 1000),
        },
      } as never,
    })
  }

  // 3. Si demande de démo avec date future, créer un booking Cal.com confirmé.
  // Echec Cal = on ne casse pas la requête : le Lead reste, l'équipe relance manuellement.
  if (lead.source === 'demo' && lead.dateHeureDemoSouhaitee) {
    const start = new Date(lead.dateHeureDemoSouhaitee)
    if (!Number.isNaN(start.getTime()) && start.getTime() > Date.now()) {
      try {
        const booking = await createCalBooking({
          email: lead.email,
          name: `${lead.prenom || ''} ${lead.nom}`.trim(),
          startISO: start.toISOString(),
          ownerUsername: resolvedCalOwner?.username,
          eventTypeId: resolvedCalOwner?.eventTypeId,
          eventTypeSlug: resolvedCalOwner?.eventTypeSlug,
          eventTypeLength: resolvedCalOwner?.eventTypeLength,
          notes: [
            lead.organisme ? `Organisme : ${lead.organisme}` : '',
            lead.titreReferentiel ? `Titre : ${lead.titreReferentiel}` : '',
            lead.tailleEtablissement ? `Taille : ${lead.tailleEtablissement}` : '',
            lead.message ? `Message : ${lead.message}` : '',
          ].filter(Boolean).join('\n'),
          metadata: { source: 'vitrine_form' },
        })
        await p.update({
          collection: 'leads',
          id: created.id,
          data: {
            calSync: {
              calBookingUid: booking.uid,
              calBookingId: booking.id ?? undefined,
              calBookingStatus: 'booked',
            },
          } as never,
        })
      } catch (e) {
        const msg = e instanceof Error ? e.message : String(e)
        console.warn(`[leads ${traceId}] Cal booking failed:`, msg)
        await p.update({
          collection: 'leads',
          id: created.id,
          data: {
            calSync: {
              calBookingStatus: 'error',
              calBookingError: msg.slice(0, 1000),
            },
          } as never,
        })
      }
    }
  }

  return NextResponse.json({ ok: true, id: created.id, traceId })
}
