import { getGlobal } from '@/lib/payload'
import NavbarClient from './NavbarClient'

const DEFAULT_NAV_LINKS = [
  { label: 'Accueil', href: '/' },
  { label: 'Fonctionnalités', href: '/fonctionnalites' },
  { label: 'Formations', href: '/formations' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]
const DEFAULT_LOGO_URL = '/sylbi.webp'
const DEFAULT_LOGO_TEXT = 'Syllabis'
const DEFAULT_CTA_PRIMARY = { label: 'Demander une démo', href: '/demo' }
const DEFAULT_CTA_SECONDARY = { label: 'Essai gratuit', href: '/essai-gratuit' }

export default async function Navbar() {
  const header: any = await getGlobal('header')

  // Logo : preference image upload, sinon URL fallback
  const logoUrl: string =
    header?.logo?.image?.url || header?.logo?.imageUrl || DEFAULT_LOGO_URL
  const logoText: string = header?.logo?.text || DEFAULT_LOGO_TEXT

  // Nav links : si Payload renseigne, on l'utilise ; sinon defaults
  // (Le lien 'Formations' est désormais dans le schéma Payload + seedé en BDD,
  //  cf. scripts/seed-nav-formations.mjs et src/globals/Header.ts.)
  const navLinks =
    header?.navItems?.length > 0
      ? header.navItems.map((it: any) => ({ label: it.label, href: it.url }))
      : DEFAULT_NAV_LINKS

  // CTAs
  const ctaPrimary =
    header?.ctaPrimary?.label && header?.ctaPrimary?.url
      ? { label: header.ctaPrimary.label, href: header.ctaPrimary.url }
      : DEFAULT_CTA_PRIMARY
  const ctaSecondary =
    header?.ctaSecondary?.label && header?.ctaSecondary?.url
      ? { label: header.ctaSecondary.label, href: header.ctaSecondary.url }
      : DEFAULT_CTA_SECONDARY

  return (
    <NavbarClient
      logoUrl={logoUrl}
      logoText={logoText}
      navLinks={navLinks}
      ctaPrimary={ctaPrimary}
      ctaSecondary={ctaSecondary}
    />
  )
}
