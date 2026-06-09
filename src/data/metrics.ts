// Single source of truth pour la métrique de production pédagogique du TP FPA.
// Dupliquée à terme entre la home (ComparisonSection) et la future page
// /formations/rncp37275-... — toute évolution doit passer par ce fichier.

/** Heures totales de production pédagogique sans Syllabis (méthode classique) */
export const METRIC_FPA_HOURS_WITHOUT = 1720

/** Heures totales avec Syllabis */
export const METRIC_FPA_HOURS_WITH = 128

/** Heures économisées = WITHOUT - WITH */
export const METRIC_FPA_HOURS_SAVED = METRIC_FPA_HOURS_WITHOUT - METRIC_FPA_HOURS_WITH

/** Détail par étape, utilisé par les tableaux comparatifs */
export const METRIC_FPA_PRODUCTION_BREAKDOWN = {
  arborescence: { withoutSyllabis: 80, withSyllabis: 8 },
  contenu: { withoutSyllabis: 1600, withSyllabis: 80 },
  controleQualite: { withoutSyllabis: 40, withSyllabis: 40 },
} as const

/** Durée éditoriale du cycle de production sans Syllabis (libellé affiché) */
export const METRIC_FPA_DURATION_WITHOUT = '12 mois'

/** Durée éditoriale du cycle de production avec Syllabis (libellé affiché) */
export const METRIC_FPA_DURATION_WITH = '3 semaines'

// ─────────────────────────────────────────────────────────────────────────────
// Métriques TP NTC (Négociateur Technico-Commercial, RNCP39063)
// ─────────────────────────────────────────────────────────────────────────────
// Référentiel = 2 activités types / 9 compétences professionnelles. Volume
// total de production pédagogique inférieur au FPA (4 CCP / 13 compétences) —
// proportions ajustées en conséquence (~70% du FPA).

export const METRIC_NTC_HOURS_WITHOUT = 1190
export const METRIC_NTC_HOURS_WITH = 96
export const METRIC_NTC_HOURS_SAVED = METRIC_NTC_HOURS_WITHOUT - METRIC_NTC_HOURS_WITH

export const METRIC_NTC_PRODUCTION_BREAKDOWN = {
  arborescence: { withoutSyllabis: 50, withSyllabis: 6 },
  contenu: { withoutSyllabis: 1100, withSyllabis: 60 },
  controleQualite: { withoutSyllabis: 40, withSyllabis: 30 },
} as const

export const METRIC_NTC_DURATION_WITHOUT = '9 mois'
export const METRIC_NTC_DURATION_WITH = '2 semaines'

const NBSP = ' '

/**
 * Formate un nombre d'heures façon FR avec espace insécable comme séparateur de
 * milliers et suffixe "h" collé. Ex: 1720 → "1[NBSP]720h".
 * L'insécable empêche le retour ligne entre "1" et "720h" sur mobile.
 */
export function formatHoursFr(hours: number): string {
  return `${hours.toLocaleString('fr-FR').replace(/\s/g, NBSP)}h`
}
