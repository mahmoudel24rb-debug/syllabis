import { Button } from "@/components/base/buttons/button";

const rows = [
  { label: "Arborescence pédagogique", sans: "80h", avec: "8h" },
  { label: "Contenu + validation compétences", sans: "1 600h", avec: "80h" },
  { label: "Contrôle qualité", sans: "40h", avec: "40h" },
];

export default function ComparisonSection() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 mb-3">Gain de temps</p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            1 592 heures économisées sur un seul titre professionnel
          </h2>
          <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
            Temps réel de production mesuré sur un TP Formateur pour adultes.
          </p>
        </div>

        <div className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-neutral-50 p-6 sm:p-8 md:border-r md:border-neutral-200">
              <p className="text-xs uppercase tracking-wide font-semibold text-neutral-500 mb-1">Sans Syllabis</p>
              <p className="text-display-md sm:text-display-lg font-bold text-neutral-700 tabular-nums">1 720h</p>
              <p className="text-sm text-neutral-500 mt-1 mb-6">~12 mois de production</p>
              <div className="divide-y divide-neutral-200">
                {rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-4">
                    <span className="text-sm text-neutral-600">{row.label}</span>
                    <span className="text-sm font-semibold text-neutral-700 tabular-nums">{row.sans}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-neutral-100 px-5 py-4 text-center">
                <span className="text-sm font-semibold text-neutral-600">Total : 1 720h</span>
              </div>
            </div>
            <div className="bg-white p-6 sm:p-8">
              <p className="text-xs uppercase tracking-wide font-semibold text-brand-600 mb-1">Avec Syllabis</p>
              <p className="text-display-md sm:text-display-lg font-bold text-brand-600 tabular-nums">128h</p>
              <p className="text-sm text-neutral-600 mt-1 mb-6">~4 semaines de production</p>
              <div className="divide-y divide-neutral-100">
                {rows.map((row) => (
                  <div key={row.label} className="flex items-center justify-between py-4">
                    <span className="text-sm text-neutral-700">{row.label}</span>
                    <span className="text-sm font-bold text-emerald-600 tabular-nums">{row.avec}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4 text-center">
                <span className="text-sm font-semibold text-emerald-700">Temps économisé : 1 592h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Réassurance */}
        <p className="text-center text-sm text-neutral-500 mt-6 max-w-2xl mx-auto">
          Le contrôle qualité reste entre vos mains. Syllabis élimine le travail de production répétitif, pas votre expertise pédagogique.
        </p>

        {/* CTA */}
        <div className="text-center mt-10">
          <Button color="primary" size="xl" href="/demo">
            Estimez le gain sur votre prochain titre
          </Button>
        </div>
      </div>
    </section>
  );
}
