import Link from "next/link";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organismes de formation | Syllabis — Industrialisez vos formations",
  description: "De 3 semaines à 3 minutes. Syllabis permet aux OF de créer des formations certifiantes conformes RNCP à grande échelle.",
};

const problems = [
  "50 à 200 formations à produire chaque année",
  "Production manuelle chronophage et répétitive",
  "Conformité RNCP à respecter pour chaque référentiel",
  "Équipes de conception pédagogique surchargées",
];

const solutions = [
  {
    title: "Génération IA",
    description:
      "Upload d\u2019un référentiel RNCP en PDF, l\u2019IA analyse et génère toute la hiérarchie pédagogique automatiquement.",
  },
  {
    title: "Export SCORM",
    description:
      "Export SCORM 1.2 & 2004 compatible avec tous les LMS du marché. Player React moderne.",
  },
  {
    title: "Planning & Pilotage",
    description:
      "Vue calendrier, tableau, assignment formateurs, export Excel 7 onglets pour piloter votre activité.",
  },
  {
    title: "Multi-tenant",
    description:
      "Organisations, 5 rôles, branch access, cost tracking et analytics pour gérer plusieurs centres.",
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
              Le problème
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              La production manuelle ne passe pas à l&apos;échelle
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
              De 3 semaines à 3 minutes
            </div>
            <p className="mt-4 text-lg text-neutral-600">
              pour créer une formation complète à partir d&apos;un référentiel de
              certification.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Demander une démo pour votre OF"
        description="Découvrez comment Syllabis peut industrialiser la production de vos formations."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
      />
    </>
  );
}
