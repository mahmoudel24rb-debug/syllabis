import { NextRequest, NextResponse } from 'next/server'
import { Pool } from 'pg'
import { payload as getPayload } from '@/lib/payload'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

const TWENTY_BASE = (process.env.TWENTY_API_URL || 'https://crm.syllabis.fr').replace(/\/+$/, '').replace(/\/graphql$/, '')
const TWENTY_REST = TWENTY_BASE.startsWith('http') ? `${TWENTY_BASE}/rest` : 'https://crm.syllabis.fr/rest'

let calPool: Pool | null = null
function getCalPool(): Pool | null {
  if (calPool) return calPool
  const url = process.env.CAL_DB_URL
  if (!url) return null
  calPool = new Pool({ connectionString: url, max: 2 })
  return calPool
}

function checkAdmin(req: NextRequest): boolean {
  const expected = process.env.ADMIN_API_TOKEN
  if (!expected) return false
  const got = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim()
  return got !== '' && got === expected
}

function twentyHeaders(): Record<string, string> {
  const key = process.env.TWENTY_API_KEY
  if (!key) throw new Error('TWENTY_API_KEY missing')
  return { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' }
}

async function twentyDelete(path: string): Promise<{ ok: boolean; status: number }> {
  try {
    const res = await fetch(`${TWENTY_REST}${path}`, { method: 'DELETE', headers: twentyHeaders() })
    return { ok: res.ok, status: res.status }
  } catch {
    return { ok: false, status: 0 }
  }
}

export async function POST(req: NextRequest) {
  if (!checkAdmin(req)) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }

  let body: { email?: string }
  try {
    body = (await req.json()) as { email?: string }
  } catch {
    return NextResponse.json({ ok: false, error: 'invalid_json' }, { status: 400 })
  }
  const email = (body.email || '').trim().toLowerCase()
  if (!email || !email.includes('@')) {
    return NextResponse.json({ ok: false, error: 'invalid_email' }, { status: 400 })
  }

  const p = await getPayload()
  const found = await p.find({
    collection: 'leads',
    where: { email: { equals: email } },
    limit: 100,
    depth: 0,
  })

  type LeadDoc = {
    id: string
    twentySync?: { twentyPersonId?: string | null; twentyOpportunityId?: string | null } | null
    calSync?: { calBookingUid?: string | null; calBookingId?: number | null } | null
  }
  const personIds: string[] = []
  const opportunityIds: string[] = []
  const calBookingUids: string[] = []
  for (const d of found.docs as unknown as LeadDoc[]) {
    if (d.twentySync?.twentyPersonId) personIds.push(d.twentySync.twentyPersonId)
    if (d.twentySync?.twentyOpportunityId) opportunityIds.push(d.twentySync.twentyOpportunityId)
    if (d.calSync?.calBookingUid) calBookingUids.push(d.calSync.calBookingUid)
  }

  // 1. Twenty : delete Opportunities then People (Company conservée — partagée)
  const twentyResults: { type: string; id: string; ok: boolean; status: number }[] = []
  for (const id of opportunityIds) {
    const r = await twentyDelete(`/opportunities/${encodeURIComponent(id)}`)
    twentyResults.push({ type: 'opportunity', id, ...r })
  }
  for (const id of personIds) {
    const r = await twentyDelete(`/people/${encodeURIComponent(id)}`)
    twentyResults.push({ type: 'person', id, ...r })
  }

  // 2. Cal.com : annuler les bookings via la DB cal.com (UPDATE status=CANCELLED).
  //    Plus fiable qu'une CAL_API_KEY (pas dispo) et identique à ce que fait le
  //    bouton "Annuler" dans l'UI cal.com.
  const calResults: { uid: string; ok: boolean; updated: number; error?: string }[] = []
  const pool = getCalPool()
  if (pool && calBookingUids.length > 0) {
    const client = await pool.connect()
    try {
      for (const uid of calBookingUids) {
        try {
          const res = await client.query(
            `UPDATE bookings SET status='CANCELLED', "cancellationReason"=$2, "updatedAt"=NOW() WHERE uid=$1`,
            [uid, 'RGPD: anonymisation à la demande du contact'],
          )
          calResults.push({ uid, ok: true, updated: res.rowCount ?? 0 })
        } catch (e) {
          calResults.push({ uid, ok: false, updated: 0, error: e instanceof Error ? e.message : String(e) })
        }
      }
    } finally {
      client.release()
    }
  } else if (calBookingUids.length > 0) {
    for (const uid of calBookingUids) {
      calResults.push({ uid, ok: false, updated: 0, error: 'CAL_DB_URL missing' })
    }
  }

  // 3. Payload : suppression des Leads correspondants
  const payloadDeleted: string[] = []
  for (const d of found.docs as unknown as LeadDoc[]) {
    try {
      await p.delete({ collection: 'leads', id: d.id })
      payloadDeleted.push(d.id)
    } catch (e) {
      console.warn(`[forget] payload delete failed for ${d.id}:`, e instanceof Error ? e.message : e)
    }
  }

  return NextResponse.json({
    ok: true,
    email,
    payloadDeleted: payloadDeleted.length,
    twentyResults,
    calResults,
  })
}
