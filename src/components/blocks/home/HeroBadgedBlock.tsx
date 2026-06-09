import Image from 'next/image'
import { Button } from '@/components/base/buttons/button'
import ArcadeEmbed from '@/app/(frontend)/components/ArcadeEmbed'
import HeroSlider from '@/app/(frontend)/components/HeroSlider'

type Media = { url?: string; alt?: string } | null

type Props = {
  badge?: { tag?: string; label?: string }
  titleStart: string
  titleHighlight: string
  subtitle?: string
  primaryCTA?: { label: string; url: string }
  showArcade?: boolean
  arcade?: {
    url?: string
    title?: string
    buttonLabel?: string
    gateTitle?: string
    gateSubtitle?: string
    gatePlaceholder?: string
    gateButton?: string
    gateFootnote?: string
  }
  reassurance?: string
  mockup?: {
    beforeImage?: Media
    afterImage?: Media
    showCompareSlider?: boolean
    mobileImageUrl?: string
  }
}

export default function HeroBadgedBlock({
  badge,
  titleStart,
  titleHighlight,
  subtitle,
  primaryCTA,
  showArcade,
  arcade,
  reassurance,
  mockup,
}: Props) {
  const beforeSrc = mockup?.beforeImage?.url || '/screenshots/hero-avant2.png'
  const beforeAlt = mockup?.beforeImage?.alt || 'Fiche RNCP chargée'
  const afterSrc = mockup?.afterImage?.url || mockup?.mobileImageUrl || '/screenshots/hero-apres2.png'
  const afterAlt = mockup?.afterImage?.alt || 'Formation complète générée par Syllabis'
  const mobileSrc = mockup?.afterImage?.url || mockup?.mobileImageUrl || '/screenshots/hero-apres2.png'

  return (
    <section className="relative pt-16 md:pt-24">
      <div className="absolute inset-0 hero-grid hero-grid-mask" />
      <div className="relative mx-auto max-w-container px-4 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {badge?.label && (
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 pl-1 pr-3.5 py-1 mb-6">
              {badge.tag && (
                <span className="flex items-center gap-1.5 rounded-full bg-white border border-brand-200 px-2.5 py-0.5 text-xs font-semibold text-brand-800">
                  <span className="w-2 h-2 rounded-full bg-brand-400" />
                  {badge.tag}
                </span>
              )}
              <span className="text-sm font-medium text-brand-800">{badge.label}</span>
            </div>
          )}

          <h1 className="text-display-md sm:text-display-lg md:text-display-xl font-semibold text-neutral-900">
            {titleStart} <span className="text-brand-600">{titleHighlight}</span>
          </h1>
          {subtitle && (
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">{subtitle}</p>
          )}

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            {primaryCTA?.label && (
              <Button color="primary" size="xl" href={primaryCTA.url}>
                {primaryCTA.label}
              </Button>
            )}
            {showArcade && <ArcadeEmbed {...(arcade ?? {})} />}
          </div>

          {reassurance && <p className="mt-4 text-xs text-neutral-400">{reassurance}</p>}
        </div>
      </div>

      <div className="relative mt-10 md:mt-16 -mb-20 md:-mb-32">
        <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
          <div className="rounded-[24px] bg-white p-[3px] shadow-[0_12px_24px_-4px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.06)] border-[2px] border-neutral-200 md:rounded-[32px] md:p-1">
            <div className="rounded-[21px] bg-white p-1 shadow-[inset_0_0_4px_1.5px_rgba(10,13,18,0.08),inset_0_0_3px_1.5px_rgba(10,13,18,0.03)] md:rounded-[28px] md:p-[5.4px]">
              <div className="relative rounded-[18px] bg-neutral-50 md:rounded-[24px] overflow-hidden">
                {/* Mobile : preload injecté côté page (`(frontend)/page.tsx`)
                    en width-based + `media="(max-width: 767px)"`. Pas de
                    `loading="eager"` ni `fetchPriority="high"` ici : Next
                    injecterait alors un 2e preload sans media query, faisant
                    télécharger l'image mobile sur desktop inutilement. Le
                    preload manuel page-side suffit pour le LCP mobile. */}
                <div className="md:hidden">
                  <Image
                    src={mobileSrc}
                    alt={afterAlt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                    sizes="100vw"
                  />
                </div>
                {mockup?.showCompareSlider && (
                  <div className="hidden md:block aspect-[1824/891] relative">
                    <HeroSlider
                      beforeSrc={beforeSrc}
                      beforeAlt={beforeAlt}
                      afterSrc={afterSrc}
                      afterAlt={afterAlt}
                    />
                    <div className="pointer-events-none absolute top-4 left-4 z-20 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur-sm">
                      Avant
                    </div>
                    <div className="pointer-events-none absolute top-4 right-4 z-20 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Après
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
