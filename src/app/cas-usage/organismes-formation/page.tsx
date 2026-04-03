import Link from "next/link";
import CTABanner from "../../components/CTABanner";

const problems = [
  "50 a 200 formations a produire chaque annee",
  "Production manuelle chronophage et repetitive",
  "Conformite RNCP a respecter pour chaque referentiel",
  "Equipes de conception pedagogique surchargees",
];

const solutions = [
  {
    title: "Generation IA",
    description:
      "Upload d\u2019un referentiel RNCP en PDF, l\u2019IA analyse et genere toute la hierarchie pedagogique automatiquement.",
  },
  {
    title: "Export SCORM",
    description:
      "Export SCORM 1.2 & 2004 compatible avec tous les LMS du marche. Player React moderne.",
  },
  {
    title: "Planning & Pilotage",
    description:
      "Vue calendrier, tableau, assignment formateurs, export Excel 7 onglets pour piloter votre activite.",
  },
  {
    title: "Multi-tenant",
    description:
      "Organisations, 5 roles, branch access, cost tracking et analytics pour gerer plusieurs centres.",
  },
];

export default function OrganismesFormationPage() {
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
              Organismes de formation
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Industrialisez la production de contenu e-learning
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
              La production manuelle ne passe pas a l&apos;echelle
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
              Automatisez 80% de la production
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {solutions.map((s) => (
                <div
                  key={s.title}
                  className="rounded-xl border border-neutral-200 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">
                    {s.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Key Stat ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="text-display-md sm:text-display-lg font-semibold text-brand-600">
              De 3 semaines a 3 minutes
            </div>
            <p className="mt-4 text-lg text-neutral-600">
              pour creer une formation complete a partir d&apos;un referentiel de
              certification.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Demander une demo pour votre OF"
        description="Decouvrez comment Syllabis peut industrialiser la production de vos formations."
        primaryLabel="Demander une demo"
        primaryHref="/demo"
      />
    </>
  );
}
