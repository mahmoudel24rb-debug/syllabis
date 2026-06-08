import type { Metadata } from 'next'
import { buildPageMetadata } from '@/lib/seo/metadata'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import HardcodedEssaiGratuitPage from './_hardcoded'

const SITE_URL = 'https://syllabis.fr'
const TITLE = 'Essai gratuit 14 jours, Syllabis | Créez votre compte sans engagement'
const DESCRIPTION =
  "Activez votre essai gratuit Syllabis en 30 secondes : 14 jours pour générer une formation à partir d'un référentiel RNCP, sans carte bancaire."

export const metadata: Metadata = buildPageMetadata({
  title: TITLE,
  description: DESCRIPTION,
  path: '/essai-gratuit',
})

export default function EssaiGratuitPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: `${SITE_URL}/` },
          { name: 'Essai gratuit', url: `${SITE_URL}/essai-gratuit` },
        ]}
      />
      <HardcodedEssaiGratuitPage />
    </>
  )
}
