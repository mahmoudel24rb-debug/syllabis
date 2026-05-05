'use client'

import React, { useEffect, useState } from 'react'

type Check = { ok: boolean; status?: number; latencyMs?: number; error?: string }
type PendingCheck = Check & { count?: number }
type HealthResponse = {
  ok: boolean
  twenty: Check
  cal: Check
  payload: Check
  pendingSyncErrors: PendingCheck
  checkedAt: string
}

const REFRESH_INTERVAL_MS = 60_000

function Pill({ label, check, hint }: { label: string; check: Check | PendingCheck; hint?: string }) {
  const color = check.ok ? '#16a34a' : '#dc2626'
  const bg = check.ok ? 'rgba(22,163,74,0.08)' : 'rgba(220,38,38,0.08)'
  const status = check.ok ? 'OK' : 'KO'
  const detail = check.ok
    ? typeof (check as Check).latencyMs === 'number'
      ? `${(check as Check).latencyMs} ms`
      : ''
    : (check.error || `HTTP ${(check as Check).status ?? '—'}`).slice(0, 80)
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
        padding: '12px 14px',
        borderRadius: 8,
        background: bg,
        border: `1px solid ${color}`,
        minWidth: 180,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, fontSize: 14 }}>{label}</span>
        <span style={{ color, fontWeight: 700, fontSize: 12 }}>{status}</span>
      </div>
      <span style={{ color: 'var(--theme-elevation-500, #6b7280)', fontSize: 12 }}>
        {detail || hint || '—'}
      </span>
    </div>
  )
}

export default function IntegrationsHealthSection() {
  const [data, setData] = useState<HealthResponse | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    const fetchHealth = async () => {
      try {
        const res = await fetch('/api/healthz/integrations', { cache: 'no-store' })
        const json = (await res.json()) as HealthResponse
        if (!cancelled) {
          setData(json)
          setError(null)
        }
      } catch (e) {
        if (!cancelled) setError(e instanceof Error ? e.message : String(e))
      } finally {
        if (!cancelled) setLoading(false)
      }
    }
    fetchHealth()
    const id = setInterval(fetchHealth, REFRESH_INTERVAL_MS)
    return () => {
      cancelled = true
      clearInterval(id)
    }
  }, [])

  if (loading && !data) {
    return <div style={{ color: 'var(--theme-elevation-500, #6b7280)' }}>Chargement…</div>
  }
  if (error && !data) {
    return <div style={{ color: '#dc2626' }}>Erreur : {error}</div>
  }
  if (!data) return null

  const pendingHint =
    data.pendingSyncErrors.count !== undefined
      ? `${data.pendingSyncErrors.count} lead(s) en erreur`
      : undefined

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
        <Pill label="Twenty CRM" check={data.twenty} />
        <Pill label="Cal.com" check={data.cal} />
        <Pill label="Payload DB" check={data.payload} />
        <Pill
          label="Sync Twenty"
          check={data.pendingSyncErrors}
          hint={pendingHint}
        />
      </div>
      <p style={{ marginTop: 8, fontSize: 11, color: 'var(--theme-elevation-400, #9ca3af)' }}>
        Mis à jour : {new Date(data.checkedAt).toLocaleTimeString('fr-FR')} · refresh auto toutes les 60 s
      </p>
    </div>
  )
}
