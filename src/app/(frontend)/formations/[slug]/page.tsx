import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ChevronRight } from '@untitledui/icons'

import CTABanner from '@/app/(frontend)/components/CTABanner'
import CCPCard from '@/components/formations/CCPCard'
import CompetenceItem from '@/components/formations/CompetenceItem'
import FAQAccordion from '@/components/formations/FAQAccordion'
import FormationFactSheet from '@/components/formations/FormationFactSheet'
import FormationHero from '@/components/formations/FormationHero'
import InteractiveArborescenceBuilder from '@/components/formations/InteractiveArborescenceBuilder'
import TimeComparisonTable from '@/components/formations/TimeComparisonTable'
import FormationJsonLd from '@/components/seo/FormationJsonLd'
import { getAllFormationSlugs, getFormationBySlug } from '@/data/formations'
import { buildPageMetadata } from '@/lib/seo/metadata'

type RouteParams = { slug: string }

const SITE_URL = 'https://syllabis.fr'

export const revalidate = 3600
export const dynamicParams = false

export async function generateStaticParams(): Promise<RouteParams[]> {
  return getAllFormationSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<RouteParams>
}): Promise<Metadata> {
  const { slug } = await params
  const formation = getFormationBySlug(slug)
  if (!formation) {
    return {
      title: 'Formation introuvable, Syllabis',
      robots: { index: false, follow: false },
    }
  }

  return buildPageMetadata({
    title: formation.seoTitle,
    description: formation.seoDescription,
    path: `/formations/${formation.slug}`,
    image: {
      url: formation.ogImage.src,
      width: formation.ogImage.width,
      height: formation.ogImage.height,
      alt: formation.ogImage.alt,
    },
  })
}

function formatDuree(minutes: number): string {
  if (minutes < 60) return `${minutes} min`
  const h = Math.floor(minutes / 60)
  const m = minutes % 60
  return m === 0 ? `${h} h` : `${h} h ${m}`
}

export default async function FormationPage({
  params,
}: {
  params: Promise<RouteParams>
}) {
  const { slug } = await params
  const formation = getFormationBySlug(slug)
  if (!formation) notFound()

  const contextParagraphs = formation.contexteEvolution.split('\n\n').filter(Boolean)
  const competencesByCcp = (ccpNumero: number) =>
    formation.competencesProfessionnelles.filter((c) => c.ccpNumero === ccpNumero)

  const comparisonRows = [
    {
      label: 'Arborescence pédagogique des 4 CCP',
      withoutHours: formation.metriques.sansSyllabis.arborescenceHeures,
      withSyllabisHours: formation.metriques.avecSyllabis.arborescenceHeures,
    },
    {
      label: 'Contenu + validation des 13 compétences',
      withoutHours: formation.metriques.sansSyllabis.contenuHeures,
      withSyllabisHours: formation.metriques.avecSyllabis.contenuHeures,
    },
    {
      label: 'Contrôle qualité Qualiopi',
      withoutHours: formation.metriques.sansSyllabis.controleQualiteHeures,
      withSyllabisHours: formation.metriques.avecSyllabis.controleQualiteHeures,
    },
  ]

  return (
    <article>
      <FormationJsonLd formation={formation} />

      {/* ── Section 0 : Breadcrumb (3 niveaux, aligné sur BreadcrumbList JSON-LD) ─ */}
      <nav aria-label="Fil d'Ariane" className="border-b border-neutral-100 bg-white">
        <div className="mx-auto max-w-container px-4 sm:px-8 py-3">
          <ol className="flex items-center gap-2 text-sm text-neutral-600 flex-wrap">
            <li>
              <Link href="/" className="hover:text-brand-700">Accueil</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-4 text-neutral-400" /></li>
            <li>
              <Link href="/formations" className="hover:text-brand-700">Formations</Link>
            </li>
            <li aria-hidden="true"><ChevronRight className="size-4 text-neutral-400" /></li>
            <li>
              <span aria-current="page" className="font-medium text-neutral-900">{formation.intitule}</span>
            </li>
          </ol>
        </div>
      </nav>

      {/* ── Section 1 : Hero ───────────────────────────────────── */}
      <FormationHero formation={formation} />

      {/* ── Section 1.5 : Démo interactive arborescence ────────── */}
      <section id="arborescence" className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <InteractiveArborescenceBuilder
            arborescence={formation.arborescenceSyllabis}
            sigle={formation.sigle}
            rncp={formation.rncp}
            codeTitre={formation.codeTitre}
            ccpsCount={formation.ccps.length}
            competencesCount={formation.competencesProfessionnelles.length}
          />
        </div>
      </section>

      {/* ── Section 2 : Fact sheet ─────────────────────────────── */}
      <FormationFactSheet formation={formation} />

      {/* ── Section 3 : Contexte évolution ─────────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">Évolution du référentiel</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Pourquoi le référentiel {formation.sigle} a évolué en 2022
            </h2>
            <div className="mt-8 space-y-5 text-md text-neutral-700 leading-relaxed">
              {contextParagraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {/* TODO maillage interne : 1 lien blog FPA — à intégrer quand articles disponibles (cf. liste sujets candidats dans le récap F) */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4 : Les 4 CCP ──────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">Architecture certifiante</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Les {formation.ccps.length} CCP du TP {formation.sigle}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formation.ccps.map((ccp) => (
              <CCPCard key={ccp.numero} ccp={ccp} competences={competencesByCcp(ccp.numero)} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 5 : Les 13 compétences pro ─────────────────── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">Référentiel détaillé</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Les {formation.competencesProfessionnelles.length} compétences professionnelles du formateur d'adultes
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            {formation.competencesProfessionnelles.map((c) => (
              <CompetenceItem key={c.numero} competence={c} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 6 : Compétences transversales ──────────────── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3 text-center">Posture du formateur</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900 text-center">
              {formation.competencesTransversales.length} compétences transversales communes à l'emploi
            </h2>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {formation.competencesTransversales.map((ct, i) => (
                <div key={i} className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <h3 className="text-md font-semibold text-brand-700 mb-3">{ct.intitule}</h3>
                  <p className="text-sm text-neutral-700 leading-relaxed">{ct.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 8 : Modalités d'évaluation ─────────────────── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">Examen</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Comment se passe l'examen du TP {formation.sigle}
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4">
                Une épreuve totale de {formatDuree(formation.modalitesEvaluation.dureeEpreuveTotaleMinutes)}, structurée en {formation.modalitesEvaluation.modalites.length} modalités
              </h3>
              <ul className="space-y-2">
                {formation.modalitesEvaluation.modalites.map((m, i) => (
                  <li key={i} className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-md text-neutral-700">
                    <span className="font-medium text-neutral-900">{m.intitule}</span>
                    <span className="text-sm text-neutral-500">({formatDuree(m.dureeMinutes)})</span>
                    {m.competencesEvaluees.length > 0 && (
                      <span className="text-sm text-neutral-500">
                        — compétence{m.competencesEvaluees.length > 1 ? 's' : ''} {m.competencesEvaluees.join(', ')}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3">
                Le dossier technique : {formation.modalitesEvaluation.dossierTechnique.pagesMin} à {formation.modalitesEvaluation.dossierTechnique.pagesMax} pages structurées en {formation.modalitesEvaluation.dossierTechnique.chapitres} chapitres
              </h3>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3">
                L'analyse de pratiques professionnelles : {formation.modalitesEvaluation.analysePratiquesProfessionnelles.sujetsTiresAuSort} sujets tirés au sort
              </h3>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-3">
                La période en entreprise obligatoire : {formation.periodeEntreprise.titreCompletHeures} h pour le titre complet
              </h3>
              <ul className="space-y-1 text-md text-neutral-700">
                {Object.entries(formation.periodeEntreprise.parCcpHeures).map(([ccpNum, h]) => (
                  <li key={ccpNum}>
                    <span className="font-medium">CCP {ccpNum}</span> : {h} h
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-4">
                Récapitulatif modalités par CCP
              </h3>
              <div className="overflow-x-auto rounded-2xl border border-neutral-200 bg-white">
                <table className="w-full border-collapse text-sm">
                  <thead className="bg-neutral-50">
                    <tr className="border-b border-neutral-200">
                      <th scope="col" className="text-left py-3 px-4 font-semibold text-neutral-700">CCP</th>
                      <th scope="col" className="text-left py-3 px-4 font-semibold text-neutral-700">Type d'épreuve</th>
                      <th scope="col" className="text-right py-3 px-4 font-semibold text-neutral-700">Durée</th>
                      <th scope="col" className="text-left py-3 px-4 font-semibold text-neutral-700">Compétences évaluées</th>
                    </tr>
                  </thead>
                  <tbody>
                    {formation.modalitesEvaluation.parCcp.map((m) => (
                      <tr key={m.ccpNumero} className="border-b border-neutral-100 last:border-b-0">
                        <th scope="row" className="text-left py-3 px-4 font-semibold text-brand-700 whitespace-nowrap">CCP {m.ccpNumero}</th>
                        <td className="py-3 px-4 text-neutral-700">{m.typeEpreuve}</td>
                        <td className="text-right py-3 px-4 text-neutral-700 tabular-nums whitespace-nowrap">{formatDuree(m.dureeMinutes)}</td>
                        <td className="py-3 px-4 text-neutral-700">{m.competencesEvaluees.join(', ')}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 9 : Cas d'usage Syllabis ───────────────────── */}
      <section id="cas-usage" className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">Cas d'usage</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Comment Syllabis accélère la création du TP {formation.sigle}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <TimeComparisonTable rows={comparisonRows} />
            <div className="mt-12 space-y-5 text-md text-neutral-700 leading-relaxed">
              {formation.capacitesSyllabis.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
              {/* TODO maillage interne : 1 lien blog ingénierie pédagogique / SCORM / Qualiopi — à intégrer quand articles disponibles */}
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 10 : Témoignages ───────────────────────────── */}
      {/* TODO: témoignages Pikango + MadSkills à intégrer après audit du composant home */}

      {/* ── Section 11 : FAQ ───────────────────────────────────── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">FAQ</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Questions fréquentes sur le {formation.sigle}
            </h2>
          </div>
          <div className="max-w-4xl mx-auto rounded-2xl border border-neutral-200 bg-white px-6 sm:px-10 py-4">
            <FAQAccordion items={formation.faqs} />
          </div>
        </div>
      </section>

      {/* ── Section 12 : CTA final ─────────────────────────────── */}
      <CTABanner
        title={`Lancez votre prochain TP ${formation.sigle} en moins de 3 semaines`}
        description="Sans carte bancaire · Sans engagement · 14 jours d'essai gratuit, ou démo personnalisée sous 24h."
        primaryLabel="Activer mon essai gratuit"
        primaryHref="/essai-gratuit"
        secondaryLabel="Demander une démo"
        secondaryHref="/demo"
      />
    </article>
  )
}
