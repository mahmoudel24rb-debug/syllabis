import Link from "next/link";
import { GraduationHat02, User01, Building07, Rocket02, Check } from "@untitledui/icons";
import CTABanner from "../components/CTABanner";
import type { Metadata, } from "next";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Cas d'usage | Syllabis — OF, formateurs, entreprises, EdTech",
  description: "Découvrez comment Syllabis s'adapte aux organismes de formation, formateurs indépendants, entreprises et startups EdTech.",
};

const iconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Organismes de formation": GraduationHat02,
  "Formateurs independants": User01,
  "Entreprises": Building07,
  "EdTech & Startups": Rocket02,
};

const useCases = [
  {
    title: "Organismes de formation",
    href: "/cas-usage/organismes-formation",
    description:
      "Industrialisez la production de 50-200 formations/an avec l\u2019IA. Conformité RNCP, export SCORM, planning formateurs.",
    features: [
      "Génération IA depuis référentiels",
      "Export SCORM 1.2 & 2004",
      "Planning & pilotage",
      "Multi-tenant",
    ],
  },
  {
    title: "Formateurs independants",
    href: "/cas-usage/formateurs-independants",
    description:
      "Créez des formations certifiantes sans équipe technique. Upload, génération, publication en quelques minutes.",
    features: [
      "Génération IA complète",
      "Éditeur 39+ blocs",
      "Export SCORM",
      "Interface intuitive",
    ],
  },
  {
    title: "Entreprises",
    href: "/cas-usage/entreprises",
    description:
      "Digitalisez la formation interne de vos collaborateurs. Contenu e-learning de qualité sans expertise pédagogique.",
    features: [
      "Éditeur visuel",
      "Médias IA",
      "Export SCORM",
      "Analytics intégrés",
    ],
  },
  {
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
              Syllabis s&apos;adapte à votre réalité
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Découvrez comment nos utilisateurs transforment leurs référentiels
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
                {(() => {
                  const Icon = iconMap[uc.title];
                  return (
                    <div className="flex items-center justify-center size-12 rounded-xl bg-[#0A1E3D]/5 border border-[#0A1E3D]/10">
                      {Icon ? <Icon className="size-6 text-[#0A1E3D]" /> : null}
                    </div>
                  );
                })()}
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
        title="Prêt à découvrir Syllabis ?"
        description="Demandez une démo personnalisée selon votre cas d'usage."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
      />
    </>
  );
}
