import Link from "next/link";
import CTABanner from "../../components/CTABanner";

const problems = [
  "Creer seul, sans equipe de conception pedagogique",
  "Pas d\u2019outils adaptes pour produire du e-learning",
  "Temps de production trop long pour etre rentable",
  "Export SCORM complexe et technique",
];

const features = [
  {
    title: "Generation IA",
    description:
      "Uploadez votre referentiel ou decrivez votre formation en texte libre. L\u2019IA genere toute la structure et le contenu.",
  },
  {
    title: "Editeur 39+ blocs",
    description:
      "Editeur visuel style Notion avec quiz interactifs, videos, podcasts, flashcards, mind maps et plus.",
  },
  {
    title: "Export SCORM",
    description:
      "Exportez en SCORM 1.2 ou 2004 en un clic. Compatible avec tous les LMS du marche.",
  },
];

export default function FormateursIndependantsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <Link
              href="/cas-usage"
              className="inline-flex items-center gap-1 text-sm font-medium text-brand-600 hover:text-brand-700 mb-4"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12.67 8H3.33M7.33 4l-4 4 4 4" />
              </svg>
              Cas d&apos;usage
            </Link>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Formateurs independants
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Creez des formations certifiantes sans equipe technique
            </p>
          </div>
        </div>
      </section>

      {/* ── Probleme ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Le probleme
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Creer du e-learning seul, c&apos;est complique
            </h2>
            <ul className="mt-8 space-y-4">
              {problems.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-3 text-md text-neutral-700"
                >
                  <span className="shrink-0 w-6 h-6 rounded-full bg-red-50 border border-red-100 flex items-center justify-center mt-0.5">
                    <svg
                      className="w-4 h-4 text-red-500"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <line x1="18" y1="6" x2="6" y2="18" />
                      <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Solution ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              La solution Syllabis
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Uploadez votre referentiel, l&apos;IA fait le reste
            </h2>
            <div className="mt-10 space-y-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Creez votre premiere formation gratuitement"
        description="14 jours d'essai gratuit, sans carte bancaire. Uploadez votre premier referentiel en 3 minutes."
        primaryLabel="Commencer gratuitement"
        primaryHref="/demo"
      />
    </>
  );
}
