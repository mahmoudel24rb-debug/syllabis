import { VideoRecorder, Headphones01, HelpCircle, BookOpen01, PuzzlePiece01, BarChart01, Table } from "@untitledui/icons";
import CTABanner from "../../components/CTABanner";
import type { Metadata } from "next";
import type { ComponentType } from "react";

export const metadata: Metadata = {
  title: "Médias IA | Syllabis — Vidéos, podcasts et quiz générés automatiquement",
  description: "Générez 7 types de médias depuis votre contenu : vidéos, podcasts, quiz, flashcards, mind maps, infographies, tableaux.",
};

const mediaIconMap: Record<string, ComponentType<{ className?: string }>> = {
  "Vidéos explicatives": VideoRecorder,
  "Podcasts audio": Headphones01,
  "Quiz IA": HelpCircle,
  "Flashcards": BookOpen01,
  "Mind Maps visuelles": PuzzlePiece01,
  "Infographies": BarChart01,
  "Tableaux de données": Table,
};

const mediaTypes = [
  {
    title: "Vidéos explicatives",
    formats: "Explainer / Tutorial",
    description:
      "Génération automatique de vidéos pédagogiques à partir du contenu textuel. Deux formats disponibles : explainer (concepts) et tutorial (pas à pas).",
  },
  {
    title: "Podcasts audio",
    formats: "Deep Dive / Briefing",
    description:
      "Transformez vos cours en podcasts audio. Mode Deep Dive pour des explications approfondies, Briefing pour des résumés concis.",
  },
  {
    title: "Quiz IA",
    formats: "Niveaux de difficulté",
    description:
      "Génération de quiz adaptatifs avec niveaux de difficulté progressifs, directement à partir du contenu pédagogique.",
  },
  {
    title: "Flashcards",
    formats: "Révision espacée",
    description:
      "Flashcards générées automatiquement avec système de révision espacée pour optimiser la mémorisation.",
  },
  {
    title: "Mind Maps visuelles",
    formats: "Cartographie",
    description:
      "Visualisation des concepts et de leurs relations sous forme de mind maps interactives.",
  },
  {
    title: "Infographies",
    formats: "Synthèse visuelle",
    description:
      "Création d'infographies de synthèse pour présenter les informations clés de manière visuelle.",
  },
  {
    title: "Tableaux de données",
    formats: "Structuration",
    description:
      "Organisation automatique des données en tableaux structurés pour une lecture rapide et claire.",
  },
];

export default function MediasIAPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                Médias IA
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Médias IA —{" "}
              <span className="text-brand-600">
                Génération multimédia automatique
              </span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              À partir du contenu pédagogique, générez automatiquement 7 types
              de médias. Pipeline asynchrone avec suivi de progression en temps
              réel.
            </p>
          </div>
        </div>
      </section>

      {/* ── 7 media types ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              7 types de médias
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Du texte au multimédia en un clic
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {mediaTypes.map((media) => (
              <div
                key={media.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 hover:border-brand-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center size-12 rounded-xl bg-[#0A1E3D]/5 border border-[#0A1E3D]/10 mb-5">
                  {(() => {
                    const Icon = mediaIconMap[media.title];
                    return Icon ? <Icon className="size-6 text-[#0A1E3D]" /> : null;
                  })()}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {media.title}
                  </h3>
                </div>
                <span className="inline-block rounded-full border border-neutral-200 bg-neutral-50 px-2.5 py-0.5 text-xs font-medium text-neutral-600 mb-3">
                  {media.formats}
                </span>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {media.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pipeline ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Pipeline asynchrone
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Génération en arrière-plan
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
              Lancez la génération et continuez à travailler. Suivi de
              progression en temps réel, notifications à la fin.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8">
              {[
                { step: "1", label: "Sélection des médias à générer", status: "Choix" },
                { step: "2", label: "Envoi en pipeline asynchrone", status: "Automatique" },
                { step: "3", label: "Suivi de progression en temps réel", status: "Live" },
                { step: "4", label: "Intégration automatique dans le cours", status: "Fait" },
              ].map((item, i) => (
                <div
                  key={item.step}
                  className={`flex items-center gap-4 py-4 ${i < 3 ? "border-b border-neutral-100" : ""}`}
                >
                  <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {item.step}
                  </div>
                  <span className="flex-1 text-md font-medium text-neutral-900">
                    {item.label}
                  </span>
                  <span className="rounded-full bg-amber-50 border border-amber-300 px-2.5 py-0.5 text-xs font-medium text-amber-800">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Générez vos médias automatiquement"
        description="Découvrez comment Syllabis transforme votre contenu textuel en vidéos, podcasts et plus encore."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
