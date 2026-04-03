import CTABanner from "../../components/CTABanner";
import BrowserMockup from "../../components/BrowserMockup";
import { Check } from "@untitledui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pilotage & Planning | Syllabis — Calendrier, tableau et export Excel",
  description: "Gérez vos formations avec vue calendrier, tableau édition inline, assignment formateurs et export Excel 7 onglets.",
};

const features = [
  {
    title: "Vue calendrier drag-drop",
    description:
      "Planifiez vos formations sur un calendrier interactif. Déplacez les sessions par glisser-déposer, visualisez les conflits.",
  },
  {
    title: "Vue tableau édition inline",
    description:
      "Éditez directement dans le tableau : dates, formateurs, salles, statuts. Modifications en temps réel.",
  },
  {
    title: "Assignment formateurs",
    description:
      "Assignez les formateurs par niveau hiérarchique (bloc, module, séquence, séance). Visualisez leur charge.",
  },
  {
    title: "Export Excel 7 onglets",
    description:
      "Export complet avec 7 onglets : planning général, par formateur, par salle, par bloc, statistiques, heures, coûts.",
  },
  {
    title: "Suivi incohérences d'heures",
    description:
      "Détection automatique des incohérences entre heures planifiées et heures du référentiel. Alertes visuelles.",
  },
  {
    title: "Dashboard KPI",
    description:
      "Tableau de bord avec indicateurs clés : taux de complétion, heures réalisées, progression par bloc.",
  },
];

export default function PilotagePlanningPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                Pilotage & Planning
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Pilotage &{" "}
              <span className="text-brand-600">Planning</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700">
              Gérez vos formations de bout en bout
            </p>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Calendrier, tableau, assignation formateurs, export Excel — tous
              les outils pour piloter vos formations efficacement.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Outils de pilotage
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Tout pour organiser et suivre vos formations
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                  <Check className="size-5 text-[#0A1E3D]" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12 mb-16 max-w-4xl mx-auto px-4 sm:px-8">
        <BrowserMockup src="/screenshots/formation-dashboard.png" alt="Dashboard de formation avec graphiques Syllabis" />
      </div>

      {/* ── Excel export detail ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Export Excel
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              7 onglets pour tout piloter
            </h2>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-white overflow-hidden divide-y divide-neutral-100">
            {[
              "Planning général",
              "Planning par formateur",
              "Planning par salle",
              "Planning par bloc de compétences",
              "Statistiques globales",
              "Répartition des heures",
              "Suivi des coûts",
            ].map((tab, i) => (
              <div key={tab} className="flex items-center gap-4 px-6 py-4">
                <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <span className="text-md font-medium text-neutral-900">
                  {tab}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Simplifiez le pilotage de vos formations"
        description="Calendrier, assignations, export Excel — découvrez comment Syllabis centralise la gestion de vos formations."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
