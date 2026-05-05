import { NextRequest, NextResponse } from 'next/server'
import { payload as getPayload } from '@/lib/payload'
import { pushLeadToTwenty, createOpportunity, type LeadPayload } from '@/lib/twenty'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type LeadDoc = {
  id: string
  source: 'contact' | 'demo'
  nom?: string | null
  email?: string | null
  organisme?: string | null
  message?: string | null
  titreReferentiel?: string | null
  tailleEtablissement?: string | null
  dateHeureDemoSouhaitee?: string | null
  nbApprenants?: number | null
  dateLancementSouhaitee?: string | null
  consentRgpd?: boolean | null
  tracking?: Record<string, string | undefined> | null
  firstTouch?: Record<string, string | undefined> | null
  twentySync?: { twentyOpportunityId?: string | null } | null
}

function checkAdmin(req: NextRequest): boolean {
  const expected = process.env.ADMIN_API_TOKEN
  if (!expected) return false
  const got = (req.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim()
  return got !== '' && got === expected
}

function leadDocToPayload(d: LeadDoc): LeadPayload {
  return {
    source: d.source,
    nom: d.nom || '',
    email: (d.email || '').toLowerCase(),
    organisme: d.organisme || undefined,
    message: d.message || undefined,
    titreReferentiel: d.titreReferentiel || undefined,
    tailleEtablissement: d.tailleEtablissement || undefined,
    dateHeureDemoSouhaitee: d.dateHeureDemoSouhaitee || undefined,
    nbApprenants: typeof d.nbApprenants === 'number' ? d.nbApprenants : undefined,
    dateLancementSouhaitee: d.dateLancementSouhaitee || undefined,
    consentRgpd: Boolean(d.consentRgpd),
    tracking: (d.tracking as LeadPayload['tracking']) || undefined,
    firstTouch: (d.firstTouch as LeadPayload['firstTouch']) || undefined,
  }
}

export async function POST(req: NextRequest) {
  if (!checkAdmin(req)) {
    return NextResponse.json({ ok: false, error: 'unauthorized' }, { status: 401 })
  }

  const url = new URL(req.url)
  const limit = Math.min(Number(url.searchParams.get('limit') || 50), 200)

  const p = await getPayload()
  const failed = await p.find({
    collection: 'leads',
    where: { 'twentySync.twentySyncStatus': { equals: 'error' } },
    limit,
    depth: 0,
  })

  const results: { id: string; ok: boolean; reason?: string }[] = []
  for (const raw of failed.docs as unknown as LeadDoc[]) {
    if (!raw.email) {
      results.push({ id: raw.id, ok: false, reason: 'no_email' })
      continue
    }
    try {
      const lead = leadDocToPayload(raw)
      const { personId, companyId } = await pushLeadToTwenty(lead)
      let opportunityId = raw.twentySync?.twentyOpportunityId || undefined
      if (!opportunityId && lead.source === 'demo') {
        try {
          const opp = await createOpportunity({ lead, personId, companyId })
          opportunityId = opp.id
        } catch (e) {
          console.warn(`[replay] opp create failed for ${raw.id}:`, e instanceof Error ? e.message : e)
        }
      }
      await p.update({
        collection: 'leads',
        id: raw.id,
        data: {
          twentySync: {
            twentyPersonId: personId,
            twentyCompanyId: companyId || undefined,
            twentyOpportunityId: opportunityId,
            twentySyncStatus: 'synced',
            twentySyncError: undefined,
          },
        } as never,
      })
      results.push({ id: raw.id, ok: true })
    } catch (e) {
      const msg = e instanceof Error ? e.message : String(e)
      results.push({ id: raw.id, ok: false, reason: msg.slice(0, 200) })
    }
  }

  const okCount = results.filter((r) => r.ok).length
  return NextResponse.json({
    ok: true,
    scanned: failed.docs.length,
    succeeded: okCount,
    failed: results.length - okCount,
    results,
  })
}
