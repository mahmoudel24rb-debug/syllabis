import CTABanner from "../../components/CTABanner";
import BrowserMockup from "../../components/BrowserMockup";
import { Check } from "@untitledui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Génération IA | Syllabis — Du PDF au cours complet en 3 minutes",
  description: "Uploadez un référentiel RNCP et l'IA génère la formation complète : blocs, modules, séances, quiz. 6 certifications supportées.",
};

const certifications = [
  "TP (Titre Professionnel)",
  "BTS",
  "CAP",
  "CQP",
  "BPJEPS",
  "Custom (texte libre)",
];

const hierarchy = [
  "Formation",
  "Blocs de compétences",
  "Modules",
  "Séquences",
  "Séances",
  "Architecture pédagogique",
  "Contenu interactif",
];

const keyFeatures = [
  {
    title: "6 certifications supportées",
    description:
      "TP, BTS, CAP, CQP, BPJEPS et mode Custom pour vos formations sur mesure.",
  },
  {
    title: "Détection automatique de la structure",
    description:
      "L'IA identifie le type de certification, blocs de compétences, modules, heures et prérequis directement depuis le PDF.",
  },
  {
    title: "Preview avant validation",
    description:
      "Visualisez la structure générée et ajustez-la avant de lancer la génération de contenu. Feedback loop intégré.",
  },
  {
    title: "Mode 'from scratch'",
    description:
      "Pas de référentiel ? Décrivez votre formation en texte libre et l'IA génère la structure complète.",
  },
  {
    title: "4 modèles IA disponibles",
    description:
      "Choisissez le modèle adapté à votre besoin : rapidité, qualité ou équilibre.",
  },
  {
    title: "Régénération personnalisée",
    description:
      "Ajoutez des instructions spécifiques pour régénérer tout ou partie de la formation selon vos critères.",
  },
];

export default function GenerationIAPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                Génération IA
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Génération IA{" "}
              <span className="text-brand-600">complète</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700">
              Du PDF au cours en 3 clics
            </p>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Upload d&apos;un référentiel RNCP (TP, BTS, CAP, CQP, BPJEPS) en
              PDF. L&apos;IA analyse le document et détecte automatiquement type
              de certification, blocs de compétences, modules, heures, prérequis,
              RNCP ID. Génération de toute la hiérarchie pédagogique.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto px-4 sm:px-8">
            <BrowserMockup src="/screenshots/creer-formation.png" alt="Écran de création de formation Syllabis" />
          </div>
        </div>
      </section>

      {/* ── Hierarchy visualization ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Hiérarchie générée
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              De la Formation au Contenu
            </h2>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="space-y-3">
              {hierarchy.map((level, i) => (
                <div
                  key={level}
                  className="flex items-center gap-4"
                  style={{ paddingLeft: `${i * 24}px` }}
                >
                  <div className="w-8 h-8 rounded-lg bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1 rounded-xl border border-neutral-200 bg-white px-5 py-3">
                    <span className="text-md font-medium text-neutral-900">
                      {level}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Certifications ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Compatibilité
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              6 types de certifications supportés
            </h2>
          </div>
          <div className="max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="rounded-xl border border-neutral-200 bg-white px-5 py-4 text-center hover:border-brand-200 hover:shadow-sm transition-all"
              >
                <span className="text-md font-medium text-neutral-900">
                  {cert}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key features ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Fonctionnalités clés
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Tout est pensé pour vous faire gagner du temps
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyFeatures.map((feature) => (
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

      <div className="mt-12 mb-16 max-w-4xl mx-auto px-4 sm:px-8">
        <BrowserMockup src="/screenshots/formation-creation.png" alt="Blocs de compétences générés par Syllabis" />
      </div>

      {/* ── CTA ── */}
      <CTABanner
        title="Testez la génération IA"
        description="Uploadez un référentiel et voyez le résultat en quelques minutes."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
