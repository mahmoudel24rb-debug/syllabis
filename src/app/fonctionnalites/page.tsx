import Link from "next/link";
import CTABanner from "../components/CTABanner";

const features = [
  {
    icon: "🤖",
    title: "Generation IA",
    href: "/fonctionnalites/generation-ia",
    description:
      "Upload d'un referentiel RNCP en PDF, l'IA analyse et genere toute la hierarchie pedagogique en quelques minutes.",
  },
  {
    icon: "✏️",
    title: "Editeur 39+ blocs",
    href: "/fonctionnalites/editeur",
    description:
      "Editeur style Notion avec quiz interactifs, medias riches, blocs pedagogiques et visualisation.",
  },
  {
    icon: "🎬",
    title: "Medias IA",
    href: "/fonctionnalites/medias-ia",
    description:
      "Generation automatique de videos, podcasts, quiz, flashcards, mind maps a partir du contenu.",
  },
  {
    icon: "📦",
    title: "Export SCORM",
    href: "/fonctionnalites/export-scorm",
    description:
      "Export SCORM 1.2 & 2004 compatible avec tous les LMS, player React moderne.",
  },
  {
    icon: "📅",
    title: "Pilotage & Planning",
    href: "/fonctionnalites/pilotage-planning",
    description:
      "Vue calendrier, tableau, assignment formateurs, export Excel 7 onglets.",
  },
  {
    icon: "🏢",
    title: "Multi-tenant",
    href: "/fonctionnalites/multi-tenant",
    description:
      "Organisations, 5 roles, branch access, cost tracking, analytics.",
  },
];

const stats = [
  { value: "39+", label: "blocs" },
  { value: "7", label: "types de medias" },
  { value: "4", label: "modeles IA" },
  { value: "5", label: "roles" },
  { value: "2", label: "formats SCORM" },
];

export default function FonctionnalitesPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                6 modules integres
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Tout ce dont vous avez besoin pour creer des formations{" "}
              <span className="text-brand-600">e-learning</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              6 modules integres, de l&apos;analyse du referentiel au
              deploiement sur votre LMS.
            </p>
          </div>
        </div>
      </section>

      {/* ── Feature cards grid ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 hover:border-brand-200 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center text-2xl mb-5">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed mb-5">
                  {feature.description}
                </p>
                <Link
                  href={feature.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors"
                >
                  Decouvrir
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
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stats band ── */}
      <section className="py-8 sm:py-12 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-neutral-600">
            {stats.map((stat) => (
              <span key={stat.label} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500" />
                <span className="font-semibold text-neutral-900">
                  {stat.value}
                </span>{" "}
                {stat.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Pret a decouvrir Syllabis ?"
        description="Demandez une demo et voyez comment l'IA transforme vos referentiels en formations."
        primaryLabel="Demander une demo"
        primaryHref="/demo"
        secondaryLabel="Voir les tarifs"
        secondaryHref="/tarifs"
      />
    </>
  );
}
