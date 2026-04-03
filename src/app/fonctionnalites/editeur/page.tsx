import CTABanner from "../../components/CTABanner";
import BrowserMockup from "../../components/BrowserMockup";
import { Check } from "@untitledui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Éditeur 39+ blocs | Syllabis — Quiz, vidéos, mind maps et plus",
  description: "Éditeur style Notion avec 39+ blocs interactifs : quiz, médias riches, blocs pédagogiques, visualisation. Thèmes et autosave.",
};

const blockCategories = [
  {
    title: "Quiz interactifs",
    count: 7,
    color: "bg-blue-50 border-blue-100 text-blue-700",
    iconBg: "bg-blue-100",
    blocks: [
      "QCM",
      "Vrai/Faux",
      "Texte à trou",
      "Drag & Drop",
      "Tri",
      "Scenario branching",
      "Hotspot image",
    ],
  },
  {
    title: "Médias riches",
    count: 6,
    color: "bg-purple-50 border-purple-100 text-purple-700",
    iconBg: "bg-purple-100",
    blocks: ["Vidéo", "Audio", "Images IA", "Code", "Embed", "Podcast"],
  },
  {
    title: "Blocs pédagogiques",
    count: 9,
    color: "bg-green-50 border-green-100 text-green-700",
    iconBg: "bg-green-100",
    blocks: [
      "Objectifs",
      "Définitions",
      "Citations",
      "Callout",
      "Alertes",
      "Timeline",
      "Steps",
      "Accordion",
      "Tabs",
    ],
  },
  {
    title: "Visualisation",
    count: 5,
    color: "bg-orange-50 border-orange-100 text-orange-700",
    iconBg: "bg-orange-100",
    blocks: [
      "Mind Map",
      "Tableaux",
      "Diagrammes",
      "Infographies",
      "Comparaisons",
    ],
  },
];

const extras = [
  {
    title: "Système de thèmes",
    description: "10+ presets de thèmes pour personnaliser l'apparence de vos formations.",
  },
  {
    title: "Slash commands",
    description: "Tapez / pour insérer n'importe quel bloc instantanément, comme dans Notion.",
  },
  {
    title: "Autosave temps réel",
    description: "Chaque modification est sauvegardée automatiquement. Aucune perte de données.",
  },
  {
    title: "Mode preview instantané",
    description: "Visualisez le rendu final de votre formation en un clic, tel que l'apprenant le verra.",
  },
];

export default function EditeurPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                Éditeur
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Éditeur de contenu avec{" "}
              <span className="text-brand-600">39+ blocs interactifs</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700">
              Un éditeur style Notion pensé pour la pédagogie
            </p>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Créez du contenu pédagogique riche avec des quiz, des médias, des
              blocs structurels et des visualisations — le tout dans une
              interface fluide et intuitive.
            </p>
          </div>
        </div>
      </section>

      {/* ── Block categories ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              4 catégories de blocs
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              39+ blocs à votre disposition
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {blockCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {category.title}
                  </h3>
                  <span
                    className={`rounded-full border px-2.5 py-0.5 text-xs font-semibold ${category.color}`}
                  >
                    {category.count} blocs
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.blocks.map((block) => (
                    <span
                      key={block}
                      className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-sm font-medium text-neutral-700"
                    >
                      {block}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12 mb-16 max-w-4xl mx-auto px-4 sm:px-8">
        <BrowserMockup src="/screenshots/formation-creation.png" alt="Vue des blocs de compétences générés dans l'éditeur Syllabis" />
      </div>

      {/* ── Extras ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Et aussi
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Une expérience d&apos;édition optimale
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {extras.map((extra) => (
              <div
                key={extra.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                  <Check className="size-5 text-[#0A1E3D]" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {extra.title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {extra.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Découvrez l'éditeur en action"
        description="Demandez une démo pour voir comment créer du contenu pédagogique avec 39+ blocs interactifs."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
