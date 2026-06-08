import { ArrowRight, Award02, Briefcase01, Calendar, FileCheck01, LayersThree01, Lightbulb02 } from '@untitledui/icons'
import { Button } from '@/components/base/buttons/button'
import InfoChips from '@/components/formations/InfoChips'
import {
  METRIC_FPA_HOURS_SAVED,
  METRIC_FPA_HOURS_WITH,
  METRIC_FPA_HOURS_WITHOUT,
  formatHoursFr,
} from '@/data/metrics'
import type { Formation } from '@/types/formation'

const dateFmt = new Intl.DateTimeFormat('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })

type Props = { formation: Formation }

export default function FormationHero({ formation }: Props) {
  const chips = [
    { label: formation.niveauLabel.split(' (')[0], icon: <Award02 /> },
    { label: `${formation.ccps.length} CCP`, icon: <LayersThree01 /> },
    { label: `${formation.competencesProfessionnelles.length} compétences`, icon: <Lightbulb02 /> },
    { label: `ROME ${formation.codeROME}`, icon: <Briefcase01 /> },
    { label: `NSF ${formation.codesNSF.join(', ')}`, icon: <FileCheck01 /> },
    { label: `MAJ ${dateFmt.format(new Date(formation.dateValidation))}`, icon: <Calendar /> },
  ]

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 hero-grid hero-grid-mask" aria-hidden="true" />
      <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 mb-5">
            <span className="text-sm font-semibold text-brand-700">
              Titre Professionnel · {formation.rncp}
            </span>
          </div>

          <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900 text-balance">
            {formation.intitule}
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {formation.accroche}
          </p>

          <div className="mt-8 flex justify-center">
            <InfoChips chips={chips} className="justify-center" />
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button size="xl" href="/essai-gratuit">
              <span className="inline-flex items-center gap-2 whitespace-nowrap">
                Générer ce TP avec Syllabis
                <ArrowRight className="size-5 shrink-0 inline-block" aria-hidden="true" />
              </span>
            </Button>
            <Button size="xl" color="secondary" href="#arborescence">
              <span className="whitespace-nowrap">Voir l'arborescence générée</span>
            </Button>
          </div>

          <div className="mt-12 mx-auto max-w-2xl rounded-2xl border border-brand-100 bg-brand-50/60 p-6 sm:p-8">
            <p className="text-display-xs sm:text-display-sm font-bold text-brand-700 tabular-nums">
              {formatHoursFr(METRIC_FPA_HOURS_WITHOUT)} → {formatHoursFr(METRIC_FPA_HOURS_WITH)}
            </p>
            <p className="mt-2 text-md text-neutral-700">
              de production pédagogique.{' '}
              <a href="#cas-usage" className="text-brand-700 font-semibold hover:underline">
                Économisez {formatHoursFr(METRIC_FPA_HOURS_SAVED)} sur ce TP avec Syllabis.
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
