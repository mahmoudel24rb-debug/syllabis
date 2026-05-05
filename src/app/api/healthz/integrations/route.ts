import { NextResponse } from 'next/server'
import { payload as getPayload } from '@/lib/payload'

export const runtime = 'nodejs'
export const dynamic = 'force-dynamic'

type CheckResult = { ok: boolean; status?: number; latencyMs?: number; error?: string }

const TWENTY_BASE = (process.env.TWENTY_API_URL || 'https://crm.syllabis.fr').replace(/\/+$/, '').replace(/\/graphql$/, '')
const CAL_BASE = (process.env.CAL_BASE_URL || 'https://cal.syllabis.fr').replace(/\/+$/, '')

async function timed<T>(fn: () => Promise<T>): Promise<{ result: T; latencyMs: number }> {
  const t0 = Date.now()
  const result = await fn()
  return { result, latencyMs: Date.now() - t0 }
}

async function checkTwenty(): Promise<CheckResult> {
  const key = process.env.TWENTY_API_KEY
  if (!key) return { ok: false, error: 'TWENTY_API_KEY missing' }
  try {
    const { result, latencyMs } = await timed(async () => {
      const ctrl = new AbortController()
      const timeout = setTimeout(() => ctrl.abort(), 5000)
      const res = await fetch(`${TWENTY_BASE}/rest/people?limit=1`, {
        headers: { Authorization: `Bearer ${key}` },
        signal: ctrl.signal,
      })
      clearTimeout(timeout)
      return res
    })
    return { ok: result.ok, status: result.status, latencyMs }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}

async function checkCal(): Promise<CheckResult> {
  try {
    const { result, latencyMs } = await timed(async () => {
      const ctrl = new AbortController()
      const timeout = setTimeout(() => ctrl.abort(), 5000)
      const res = await fetch(`${CAL_BASE}/api/auth/session`, { signal: ctrl.signal })
      clearTimeout(timeout)
      return res
    })
    return { ok: result.ok, status: result.status, latencyMs }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}

async function checkPayload(): Promise<CheckResult> {
  try {
    const { result: _r, latencyMs } = await timed(async () => {
      const p = await getPayload()
      return p.count({ collection: 'leads', where: {} })
    })
    return { ok: true, latencyMs }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}

async function checkPendingErrors(): Promise<CheckResult & { count?: number }> {
  try {
    const p = await getPayload()
    const { totalDocs } = await p.count({
      collection: 'leads',
      where: { 'twentySync.twentySyncStatus': { equals: 'error' } },
    })
    return { ok: totalDocs === 0, count: totalDocs }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : String(e) }
  }
}

export async function GET() {
  const [twenty, cal, payload, pending] = await Promise.all([
    checkTwenty(),
    checkCal(),
    checkPayload(),
    checkPendingErrors(),
  ])
  const allOk = twenty.ok && cal.ok && payload.ok && pending.ok
  return NextResponse.json(
    { ok: allOk, twenty, cal, payload, pendingSyncErrors: pending, checkedAt: new Date().toISOString() },
    { status: allOk ? 200 : 503 },
  )
}
