import Link from "next/link";
import CTABanner from "../components/CTABanner";

const useCases = [
  {
    icon: "\uD83C\uDFEB",
    title: "Organismes de formation",
    href: "/cas-usage/organismes-formation",
    description:
      "Industrialisez la production de 50-200 formations/an avec l\u2019IA. Conformite RNCP, export SCORM, planning formateurs.",
    features: [
      "Generation IA depuis referentiels",
      "Export SCORM 1.2 & 2004",
      "Planning & pilotage",
      "Multi-tenant",
    ],
  },
  {
    icon: "\uD83D\uDC64",
    title: "Formateurs independants",
    href: "/cas-usage/formateurs-independants",
    description:
      "Creez des formations certifiantes sans equipe technique. Upload, generation, publication en quelques minutes.",
    features: [
      "Generation IA complete",
      "Editeur 39+ blocs",
      "Export SCORM",
      "Interface intuitive",
    ],
  },
  {
    icon: "\uD83C\uDFE2",
    title: "Entreprises",
    href: "/cas-usage/entreprises",
    description:
      "Digitalisez la formation interne de vos collaborateurs. Contenu e-learning de qualite sans expertise pedagogique.",
    features: [
      "Editeur visuel",
      "Medias IA",
      "Export SCORM",
      "Analytics integres",
    ],
  },
  {
    icon: "\uD83D\uDE80",
    title: "EdTech & Startups",
    href: "/cas-usage/edtech",
    description:
      "Proposez du contenu e-learning en white-label via API. Multi-tenant, branding custom, 227+ routes.",
    features: [
      "API 227+ routes",
      "Multi-tenant",
      "Branding custom",
      "Organisations multiples",
    ],
  },
];

export default function CasUsagePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Cas d&apos;usage
            </p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Syllabis s&apos;adapte a votre realite
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Decouvrez comment nos utilisateurs transforment leurs referentiels
              en formations.
            </p>
          </div>
        </div>
      </section>

      {/* ── Use Case Cards ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {useCases.map((uc) => (
              <Link
                key={uc.title}
                href={uc.href}
                className="group rounded-2xl border border-neutral-200 bg-white p-8 hover:border-brand-200 hover:shadow-lg transition-all"
              >
                <span className="text-3xl">{uc.icon}</span>
                <h3 className="mt-4 text-xl font-semibold text-neutral-900 group-hover:text-brand-600 transition-colors">
                  {uc.title}
                </h3>
                <p className="mt-3 text-md text-neutral-600 leading-relaxed">
                  {uc.description}
                </p>
                <ul className="mt-5 space-y-2">
                  {uc.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-neutral-700"
                    >
                      <svg
                        className="w-4 h-4 text-brand-600 shrink-0"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>
                <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                  En savoir plus
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
                    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Pret a decouvrir Syllabis ?"
        description="Demandez une demo personnalisee selon votre cas d'usage."
        primaryLabel="Demander une demo"
        primaryHref="/demo"
      />
    </>
  );
}
