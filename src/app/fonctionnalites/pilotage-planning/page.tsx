import CTABanner from "../../components/CTABanner";

const features = [
  {
    title: "Vue calendrier drag-drop",
    description:
      "Planifiez vos formations sur un calendrier interactif. Deplacez les sessions par glisser-deposer, visualisez les conflits.",
  },
  {
    title: "Vue tableau edition inline",
    description:
      "Editez directement dans le tableau : dates, formateurs, salles, statuts. Modifications en temps reel.",
  },
  {
    title: "Assignment formateurs",
    description:
      "Assignez les formateurs par niveau hierarchique (bloc, module, sequence, seance). Visualisez leur charge.",
  },
  {
    title: "Export Excel 7 onglets",
    description:
      "Export complet avec 7 onglets : planning general, par formateur, par salle, par bloc, statistiques, heures, couts.",
  },
  {
    title: "Suivi incoherences d'heures",
    description:
      "Detection automatique des incoherences entre heures planifiees et heures du referentiel. Alertes visuelles.",
  },
  {
    title: "Dashboard KPI",
    description:
      "Tableau de bord avec indicateurs cles : taux de completion, heures realisees, progression par bloc.",
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
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-brand-700">
                Pilotage & Planning
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Pilotage &{" "}
              <span className="text-brand-600">Planning</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700">
              Gerez vos formations de bout en bout
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
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="rgb(127 86 217)"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
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
              "Planning general",
              "Planning par formateur",
              "Planning par salle",
              "Planning par bloc de competences",
              "Statistiques globales",
              "Repartition des heures",
              "Suivi des couts",
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
        description="Calendrier, assignations, export Excel — decouvrez comment Syllabis centralise la gestion de vos formations."
        primaryLabel="Demander une demo"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalites"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
