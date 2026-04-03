import Link from "next/link";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EdTech & Startups | Syllabis — Plateforme multi-tenant et API",
  description: "Intégrez Syllabis via 227+ endpoints API. Multi-tenant, branding custom, organisations multiples pour votre plateforme.",
};

const problems = [
  "Besoin d\u2019une architecture multi-tenant robuste",
  "White-label et branding custom pour chaque client",
  "API exhaustive pour intégrer dans votre stack",
  "Gestion de multiples organisations et utilisateurs",
];

const features = [
  {
    title: "Multi-tenant",
    description:
      "Architecture multi-tenant native avec isolation des données, gestion des quotas et cost tracking par organisation.",
  },
  {
    title: "API 227+ routes",
    description:
      "API REST complète avec 227+ endpoints documentés. Intégrez Syllabis dans votre produit existant.",
  },
  {
    title: "Branding custom",
    description:
      "Personnalisez les couleurs, logos et domaines pour chaque client. Expérience white-label complète.",
  },
  {
    title: "Organisations multiples",
    description:
      "Gérez plusieurs organisations avec 5 rôles, branch access et permissions granulaires.",
  },
];

export default function EdtechPage() {
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
              EdTech &amp; Startups
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Proposez du contenu e-learning à vos clients
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
              Construire une infra e-learning from scratch prend des mois
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
              Une plateforme multi-tenant prête à intégrer
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
        title="Discutons de votre intégration"
        description="Découvrez comment Syllabis peut s'intégrer dans votre produit via notre API."
        primaryLabel="Contacter l'équipe"
        primaryHref="/demo"
      />
    </>
  );
}
