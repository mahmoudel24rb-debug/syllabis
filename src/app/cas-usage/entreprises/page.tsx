import Link from "next/link";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Entreprises | Syllabis — Digitalisez la formation interne",
  description: "Créez du contenu e-learning de qualité pour vos collaborateurs sans expertise pédagogique. Export SCORM vers votre LMS.",
};

const problems = [
  "Former les collaborateurs à distance est un défi",
  "Pas d\u2019expertise pédagogique en interne",
  "Budget formation limité, pas de prestataire dédié",
  "Contenu générique qui ne colle pas à vos métiers",
];

const features = [
  {
    title: "Éditeur visuel",
    description:
      "Interface style Notion avec 39+ blocs pédagogiques. Vos équipes RH créent du contenu sans formation technique.",
  },
  {
    title: "Médias IA",
    description:
      "Génération automatique de vidéos, podcasts, quiz et flashcards à partir du contenu textuel.",
  },
  {
    title: "Export SCORM",
    description:
      "Export SCORM 1.2 & 2004 pour déployer sur votre LMS interne ou plateforme RH.",
  },
  {
    title: "Analytics",
    description:
      "Suivi de la progression, taux de complétion, résultats aux quiz pour piloter la formation.",
  },
];

export default function EntreprisesPage() {
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
              Entreprises
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Digitalisez la formation interne de vos collaborateurs
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
              Former à distance sans expertise pédagogique
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
              Du contenu e-learning de qualité, sans expertise requise
            </h2>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
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
        title="Découvrir Syllabis pour votre entreprise"
        description="Voyez comment Syllabis peut digitaliser la formation de vos équipes en quelques minutes."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
      />
    </>
  );
}
