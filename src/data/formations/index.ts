// Registre des fiches formations SEO. Pour ajouter une nouvelle fiche :
//   1. Créer src/data/formations/{slug}.ts qui exporte un Formation
//   2. L'importer ici et l'ajouter au Record ci-dessous
// Le routing /formations/[slug] et le sitemap consomment ce registre.

import type { Formation } from '@/types/formation'
import { FORMATION_FPA } from './rncp37275-titre-professionnel-formateur-professionnel-adultes'
import { FORMATION_NTC } from './rncp39063-titre-professionnel-negociateur-technico-commercial'
import { FORMATION_AEPE } from './rncp28048-cap-accompagnant-educatif-petite-enfance'

const REGISTRY: Record<string, Formation> = {
  [FORMATION_FPA.slug]: FORMATION_FPA,
  [FORMATION_NTC.slug]: FORMATION_NTC,
  [FORMATION_AEPE.slug]: FORMATION_AEPE,
}

export function getFormationBySlug(slug: string): Formation | undefined {
  return REGISTRY[slug]
}

export function getAllFormationSlugs(): string[] {
  return Object.keys(REGISTRY)
}

export function getAllFormations(): Formation[] {
  return Object.values(REGISTRY)
}
