import Link from "next/link";
import CTABanner from "../components/CTABanner";
import BrowserMockup from "../components/BrowserMockup";
import { Zap, Edit04, VideoRecorder, Download01, Calendar, Building07, ArrowRight } from "@untitledui/icons";
import type { ComponentType } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités | Syllabis — 6 modules pour créer des formations e-learning",
  description: "Découvrez les 6 piliers de Syllabis : génération IA, éditeur 39+ blocs, médias IA, export SCORM, pilotage et multi-tenant.",
};

const featureIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Génération IA": Zap,
  "Éditeur 39+ blocs": Edit04,
  "Médias IA": VideoRecorder,
  "Export SCORM": Download01,
  "Pilotage & Planning": Calendar,
  "Multi-tenant": Building07,
};

const features = [
  {
    title: "Génération IA",
    href: "/fonctionnalites/generation-ia",
    description:
      "Upload d'un référentiel RNCP en PDF, l'IA analyse et génère toute la hiérarchie pédagogique en quelques minutes.",
  },
  {
    title: "Éditeur 39+ blocs",
    href: "/fonctionnalites/editeur",
    description:
      "Éditeur style Notion avec quiz interactifs, médias riches, blocs pédagogiques et visualisation.",
  },
  {
    title: "Médias IA",
    href: "/fonctionnalites/medias-ia",
    description:
      "Génération automatique de vidéos, podcasts, quiz, flashcards, mind maps à partir du contenu.",
  },
  {
    title: "Export SCORM",
    href: "/fonctionnalites/export-scorm",
    description:
      "Export SCORM 1.2 & 2004 compatible avec tous les LMS, player React moderne.",
  },
  {
    title: "Pilotage & Planning",
    href: "/fonctionnalites/pilotage-planning",
    description:
      "Vue calendrier, tableau, assignment formateurs, export Excel 7 onglets.",
  },
  {
    title: "Multi-tenant",
    href: "/fonctionnalites/multi-tenant",
    description:
      "Organisations, 5 roles, branch access, cost tracking, analytics.",
  },
];

const stats = [
  { value: "39+", label: "blocs" },
  { value: "7", label: "types de médias" },
  { value: "4", label: "modèles IA" },
  { value: "5", label: "rôles" },
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
                6 modules intégrés
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Tout ce dont vous avez besoin pour créer des formations{" "}
              <span className="text-brand-600">e-learning</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              6 modules intégrés, de l&apos;analyse du référentiel au
              déploiement sur votre LMS.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <BrowserMockup src="/screenshots/global-dashboard.png" alt="Dashboard global Syllabis" />
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
                {(() => {
                  const Icon = featureIconMap[feature.title];
                  return (
                    <div className="flex items-center justify-center size-12 rounded-xl bg-[#0A1E3D]/5 border border-[#0A1E3D]/10 mb-5">
                      {Icon && <Icon className="size-6 text-[#0A1E3D]" />}
                    </div>
                  );
                })()}
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
                  Découvrir
                  <ArrowRight className="size-4" />
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
        title="Prêt à découvrir Syllabis ?"
        description="Demandez une démo et voyez comment l'IA transforme vos référentiels en formations."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Voir les tarifs"
        secondaryHref="/tarifs"
      />
    </>
  );
}
