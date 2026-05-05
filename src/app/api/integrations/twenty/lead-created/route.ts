/**
 * Endpoint de webhook ENTRANT côté vitrine.
 *
 * Twenty appelle cet endpoint via un Workflow programmé (Time-based trigger,
 * toutes les heures par exemple) pour permettre la relance automatique des
 * leads démo non confirmés.
 *
 * Logique :
 *   - on cherche les leads Payload `source=demo` créés il y a entre 24 h et 48 h
 *     dont le `calBookingStatus` n'est pas `booked`
 *   - on retourne la liste à Twenty (qui pourra créer les Tasks et envoyer
 *     les emails depuis son Workflow Builder)
 *
 * Sécurité : signature HMAC partagée Twenty → vitrine via la lib existante
 * `verifyTwentySignature` (cf. src/lib/twenty-webhook.ts).
 */
import { NextRequest, NextResponse } from 'next/server'
import { payload as getPayload } from '@/lib/payload'
import { readSignature, verifyTwentySignature } from '@/lib/twenty-webhook'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const SECRET_ENV = 'TWENTY_LEAD_WEBHOOK_SECRET'
const HOURS_MIN = 24
const HOURS_MAX = 48

type LeadDoc = {
  id: string
  email?: string | null
  nom?: string | null
  organisme?: string | null
  createdAt?: string | null
  source?: string | null
  calSync?: { calBookingStatus?: string | null } | null
  twentySync?: { twentyPersonId?: string | null; twentyOpportunityId?: string | null } | null
}

export async function POST(req: NextRequest) {
  const secret = process.env[SECRET_ENV]
  if (!secret) {
    console.error(`[lead-created] ${SECRET_ENV} missing`)
    return NextResponse.json({ ok: false, error: 'server_misconfigured' }, { status: 500 })
  }
  const rawBody = await req.text()
  const sigHeaders = readSignature(req.headers)
  if (!verifyTwentySignature(rawBody, sigHeaders, secret)) {
    return NextResponse.json({ ok: false, error: 'invalid_signature' }, { status: 401 })
  }

  const now = Date.now()
  const minIso = new Date(now - HOURS_MAX * 3_600_000).toISOString()
  const maxIso = new Date(now - HOURS_MIN * 3_600_000).toISOString()

  const p = await getPayload()
  const found = await p.find({
    collection: 'leads',
    where: {
      and: [
        { source: { equals: 'demo' } },
        { createdAt: { greater_than: minIso } },
        { createdAt: { less_than: maxIso } },
      ],
    },
    limit: 200,
    depth: 0,
  })

  const candidates = (found.docs as unknown as LeadDoc[]).filter((d) => {
    const status = d.calSync?.calBookingStatus
    return status !== 'booked'
  })

  return NextResponse.json({
    ok: true,
    window: { minIso, maxIso },
    count: candidates.length,
    leads: candidates.map((d) => ({
      payloadId: d.id,
      email: d.email,
      nom: d.nom,
      organisme: d.organisme,
      createdAt: d.createdAt,
      twentyPersonId: d.twentySync?.twentyPersonId || null,
      twentyOpportunityId: d.twentySync?.twentyOpportunityId || null,
    })),
  })
}
