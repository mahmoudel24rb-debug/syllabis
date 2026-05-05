export type LeadTracking = {
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmTerm: string
  utmContent: string
  gclid: string
  fbclid: string
  referrer: string
  sourcePage: string
}

export function captureTracking(): LeadTracking {
  if (typeof window === 'undefined') {
    return {
      utmSource: '', utmMedium: '', utmCampaign: '', utmTerm: '', utmContent: '',
      gclid: '', fbclid: '', referrer: '', sourcePage: '',
    }
  }
  const params = new URLSearchParams(window.location.search)
  return {
    utmSource: params.get('utm_source') || '',
    utmMedium: params.get('utm_medium') || '',
    utmCampaign: params.get('utm_campaign') || '',
    utmTerm: params.get('utm_term') || '',
    utmContent: params.get('utm_content') || '',
    gclid: params.get('gclid') || '',
    fbclid: params.get('fbclid') || '',
    referrer: document.referrer || '',
    sourcePage: window.location.pathname || '',
  }
}

export type SubmitLeadInput = {
  source: 'contact' | 'demo'
  prenom?: string
  nom: string
  email: string
  telephone?: string
  indicatif?: string
  organisme?: string
  message?: string
  titreReferentiel?: string
  tailleEtablissement?: string
  dateHeureDemoSouhaitee?: string
  nbApprenants?: number
  dateLancementSouhaitee?: string
  consentRgpd?: boolean
}

export type SubmitLeadResult =
  | { ok: true }
  | { ok: false; reason: 'slot_taken' | 'network' | 'server' }

export async function submitLead(input: SubmitLeadInput): Promise<SubmitLeadResult> {
  try {
    const res = await fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...input, tracking: captureTracking() }),
    })
    if (res.ok) return { ok: true }
    if (res.status === 409) return { ok: false, reason: 'slot_taken' }
    return { ok: false, reason: 'server' }
  } catch {
    return { ok: false, reason: 'network' }
  }
}
