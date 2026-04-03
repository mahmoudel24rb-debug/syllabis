import CTABanner from "../../components/CTABanner";

const certifications = [
  "TP (Titre Professionnel)",
  "BTS",
  "CAP",
  "CQP",
  "BPJEPS",
  "Custom (texte libre)",
];

const hierarchy = [
  "Formation",
  "Blocs de competences",
  "Modules",
  "Sequences",
  "Seances",
  "Architecture pedagogique",
  "Contenu interactif",
];

const keyFeatures = [
  {
    title: "6 certifications supportees",
    description:
      "TP, BTS, CAP, CQP, BPJEPS et mode Custom pour vos formations sur mesure.",
  },
  {
    title: "Detection automatique de la structure",
    description:
      "L'IA identifie le type de certification, blocs de competences, modules, heures et prerequis directement depuis le PDF.",
  },
  {
    title: "Preview avant validation",
    description:
      "Visualisez la structure generee et ajustez-la avant de lancer la generation de contenu. Feedback loop integre.",
  },
  {
    title: "Mode 'from scratch'",
    description:
      "Pas de referentiel ? Decrivez votre formation en texte libre et l'IA genere la structure complete.",
  },
  {
    title: "4 modeles IA disponibles",
    description:
      "Choisissez le modele adapte a votre besoin : rapidite, qualite ou equilibre.",
  },
  {
    title: "Regeneration personnalisee",
    description:
      "Ajoutez des instructions specifiques pour regenerer tout ou partie de la formation selon vos criteres.",
  },
];

export default function GenerationIAPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                Generation IA
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Generation IA{" "}
              <span className="text-brand-600">complete</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700">
              Du PDF au cours en 3 clics
            </p>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Upload d&apos;un referentiel RNCP (TP, BTS, CAP, CQP, BPJEPS) en
              PDF. L&apos;IA analyse le document et detecte automatiquement type
              de certification, blocs de competences, modules, heures, prerequis,
              RNCP ID. Generation de toute la hierarchie pedagogique.
            </p>
          </div>
        </div>
      </section>

      {/* ── Hierarchy visualization ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Hierarchie generee
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              De la Formation au Contenu
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-3">
              {hierarchy.map((level, i) => (
                <div
                  key={level}
                  className="flex items-center gap-4"
                  style={{ paddingLeft: `${i * 24}px` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-xl border border-neutral-200 bg-white px-5 py-3">
                    <span className="text-md font-medium text-neutral-900">
                      {level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Compatibilite
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              6 types de certifications supportes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center hover:border-brand-200 hover:shadow-sm transition-all"
              >
                <span className="text-md font-medium text-neutral-900">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key features ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Fonctionnalites cles
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Tout est pense pour vous faire gagner du temps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => (
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
                    stroke="rgb(10 30 61)"
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

      {/* ── CTA ── */}
      <CTABanner
        title="Testez la generation IA"
        description="Uploadez un referentiel et voyez le resultat en quelques minutes."
        primaryLabel="Demander une demo"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalites"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
