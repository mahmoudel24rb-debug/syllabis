import CTABanner from "../../components/CTABanner";
import { Check } from "@untitledui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Export SCORM | Syllabis — Compatible tous LMS, SCORM 1.2 & 2004",
  description: "Exportez vos formations en SCORM 1.2 et 2004. Compatible Moodle, Canvas, Docebo. Player React moderne avec tracking complet.",
};

const scormFeatures = [
  {
    title: "SCORM 1.2 & 2004",
    description:
      "Deux formats d'export pour une compatibilité maximale avec tous les LMS du marché.",
  },
  {
    title: "Player React moderne",
    description:
      "Player SCORM développé en React avec interface moderne, responsive et performante.",
  },
  {
    title: "Tracking complet",
    description:
      "Suivi détaillé : score, taux de complétion, temps passé, réponses aux quiz.",
  },
  {
    title: "Navigation par chapitres",
    description:
      "Table des matières interactive avec navigation par chapitres et progression visuelle.",
  },
  {
    title: "Tokens SCORM avec expiration",
    description:
      "Système de tokens sécurisés avec date d'expiration pour contrôler l'accès aux contenus.",
  },
  {
    title: "Export en un clic",
    description:
      "Générez votre package SCORM complet et téléchargez-le en un seul clic.",
  },
];

const lmsList = [
  "Moodle",
  "Blackboard",
  "Canvas",
  "Docebo",
  "TalentLMS",
  "iSpring",
  "360Learning",
  "Cornerstone",
];

export default function ExportScormPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                Export SCORM
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Export SCORM —{" "}
              <span className="text-brand-600">
                Déploiement LMS universel
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Exportez vos formations en packages SCORM 1.2 et 2004 compatibles
              avec tous les LMS. Player React moderne, tracking complet,
              déploiement instantané.
            </p>
          </div>
        </div>
      </section>

      {/* ── Key features ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Fonctionnalités
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Un export SCORM professionnel
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {scormFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                  <Check className="size-5 text-[#0A1E3D]" />
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

      {/* ── LMS compatibility ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Compatibilité
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Compatible avec tous les LMS majeurs
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
              Votre package SCORM fonctionne directement sur les plateformes LMS
              les plus utilisées.
            </p>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4">
            {lmsList.map((lms) => (
              <div
                key={lms}
                className="rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center hover:border-brand-200 hover:shadow-sm transition-all"
              >
                <span className="text-md font-medium text-neutral-900">
                  {lms}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tracking details ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Tracking
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Suivi détaillé de la progression
            </h2>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-white overflow-hidden divide-y divide-neutral-100">
            {[
              { label: "Score", detail: "Note obtenue aux quiz et évaluations" },
              { label: "Complétion", detail: "Pourcentage de progression dans le cours" },
              { label: "Temps passé", detail: "Durée totale et par chapitre" },
              { label: "Réponses", detail: "Détail des réponses aux quiz avec corrections" },
              { label: "Tentatives", detail: "Nombre de tentatives par activité" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-4 px-6 py-4"
              >
                <div className="w-8 h-8 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center shrink-0">
                  <Check className="size-4 text-[#0A1E3D]" />
                </div>
                <div>
                  <span className="text-md font-semibold text-neutral-900">
                    {item.label}
                  </span>
                  <p className="text-sm text-neutral-500">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Déployez sur votre LMS en un clic"
        description="Exportez en SCORM 1.2 ou 2004 et intégrez directement dans Moodle, Canvas, Docebo ou tout autre LMS."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
