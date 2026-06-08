/**
 * Helper client-side pour pousser des events au dataLayer GTM.
 * Usage : track('cta_click', { cta: 'demo', location: 'hero' })
 *
 * GTM route ces events vers GA4, Meta Pixel, Google Ads selon les triggers configures.
 */

declare global {
  interface Window {
    dataLayer?: any[]
  }
}

export function track(event: string, params?: Record<string, any>) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event, ...params })
}

/**
 * Met a jour le Consent Mode v2 (a appeler depuis ta banniere de consentement).
 */
export type ConsentState = 'granted' | 'denied'
export interface ConsentUpdate {
  ad_storage?: ConsentState
  ad_user_data?: ConsentState
  ad_personalization?: ConsentState
  analytics_storage?: ConsentState
  functionality_storage?: ConsentState
  personalization_storage?: ConsentState
}

export function updateConsent(consent: ConsentUpdate) {
  if (typeof window === 'undefined') return
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({ event: 'consent_update', ...consent })
  function gtag() {
    // eslint-disable-next-line prefer-rest-params
    window.dataLayer!.push(arguments as any)
  }
  // @ts-ignore
  gtag('consent', 'update', consent)
}

// =============================================================================
//                            EVENTS BUSINESS — 6 conversions GTM
// =============================================================================

// --- Tier 1 : Premières interactions (micro-conversions) ---

/** Démarrage du formulaire contact (premier champ touché). */
export const trackFormStartContact = () =>
  track('form_start_contact', { form_name: 'contact', value: 2, currency: 'EUR' })

/** Démarrage du formulaire demo (premier champ touché). */
export const trackFormStartDemo = () =>
  track('form_start_demo', { form_name: 'demo', value: 3, currency: 'EUR' })

/** Click sur le bouton "Voir la démo (60 sec)" qui ouvre Arcade. */
export const trackEngagedDemoClick = (params?: { page?: string }) =>
  track('engaged_demo_click', {
    cta_label: 'voir-la-demo',
    cta_location: 'arcade-trigger',
    value: 5,
    currency: 'EUR',
    ...params,
  })

// --- Tier 2 : Lead capturé ---

/** Email donné dans la démo Arcade interactive. */
export const trackArcadeEmailSubmit = (params?: { email_hashed?: string; page?: string }) =>
  track('arcade_email_submit', {
    lead_source: 'Arcade',
    content_name: 'Arcade',
    value: 20,
    currency: 'EUR',
    ...params,
  })

/** Formulaire de contact soumis avec succès. */
export const trackContactFormSubmit = () =>
  track('contact_form_submit', {
    form_name: 'contact',
    lead_source: 'Contact',
    content_name: 'Contact',
    value: 30,
    currency: 'EUR',
  })

// --- Tier 3 : Conversion finale ---

/** Demande de démo (formulaire /demo soumis avec succès). */
export const trackDemoRequest = () =>
  track('demo_request', {
    form_name: 'demo',
    lead_source: 'Demo',
    content_name: 'Demo',
    value: 100,
    currency: 'EUR',
  })

// --- Essai gratuit self-service (page /essai-gratuit) ---

/** Démarrage du formulaire essai gratuit (premier champ touché sur /essai-gratuit). */
export const trackFormStartDemoSignup = () =>
  track('form_start_demo_signup', { form_name: 'demo_signup', value: 5, currency: 'EUR' })

/** Inscription essai gratuit réussie — compte démo Inbound (14j) créé côté app
 *  + Twenty Person/Company/Opportunity/Task. Conversion finale équivalente à
 *  demo_request (lead chaud activé). */
export const trackDemoSignupSuccess = (params?: { org_id?: number; user_id?: number }) =>
  track('demo_signup_success', {
    form_name: 'demo_signup',
    lead_source: 'Demo Signup',
    content_name: 'Demo Signup',
    value: 100,
    currency: 'EUR',
    ...params,
  })

// --- Helpers génériques ---

/** Click sur un CTA non spécifique. */
export const trackCtaClick = (ctaLabel: string, location?: string) =>
  track('cta_click', { cta_label: ctaLabel, cta_location: location })

/** Soumission de formulaire générique (autre que contact/demo). */
export const trackFormSubmit = (formName: string, params?: Record<string, any>) =>
  track('form_submit', { form_name: formName, ...params })

/** RDV pris sur Cal.com (futur). */
export const trackBookingCompleted = (params?: Record<string, any>) =>
  track('cal_booking_completed', params)
