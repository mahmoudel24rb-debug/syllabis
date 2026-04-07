import Image from "next/image";
import { Check, X, ArrowRight, LayersThree01, Edit04, Download01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "./components/CTABanner";
import BrowserMockup from "./components/BrowserMockup";

const problems = [
  {
    title: "Réduction des NPEC",
    desc: "Baisse des niveaux de prise en charge, compression des marges.",
  },
  {
    title: "Exigences certificateurs",
    desc: "Les certificateurs demandent toujours plus de preuves de conformité.",
  },
  {
    title: "Développement de la FOAD",
    desc: "Obligation de digitaliser les formations ouvertes à distance.",
  },
  {
    title: "Dépendance formateurs",
    desc: "Dépendance coûteuse aux formateurs externes pour la création de contenu.",
  },
];

const solutions = [
  "Créer des programmes pédagogiques complets, assistés par l\u2019IA, pour répondre plus rapidement aux appels d\u2019offres.",
  "Générer l\u2019ensemble de nos contenus, pour permettre aux formateurs indépendants de se concentrer sur l\u2019animation des formations.",
  "Prouver en un export l\u2019alignement parfait entre les validations des compétences et les objectifs pédagogiques, pour réduire la lourdeur administrative.",
];

const results = [
  { value: "+20%", title: "de FOAD", desc: "En moyenne dans nos formations, grâce à la digitalisation du contenu." },
  { value: "100%", title: "Maîtrise du contenu", desc: "Le contenu dispensé aux élèves est entièrement créé et contrôlé en interne." },
  { value: "×3", title: "Appels d\u2019offres traités", desc: "Avec un taux de conversion équivalent de 20 à 30%." },
  { value: "÷7", title: "Temps de création", desc: "Pour créer un titre professionnel complet, de l\u2019arborescence au contenu." },
];

const comparison = [
  { label: "Création de l\u2019arborescence pédagogique, du bloc à la séance", before: "80h", after: "8h" },
  { label: "Création du contenu + validation des compétences", before: "1 600h", after: "80h" },
  { label: "Contrôle qualité", before: "40h", after: "40h" },
  { label: "TOTAL", before: "1 720h", after: "128h" },
];

const features = [
  {
    icon: LayersThree01,
    title: "Arborescence pédagogique",
    description:
      "À partir d\u2019une fiche RNCP, Syllabis vous permet de créer vos blocs, modules, séquences et séances pédagogiques.",
  },
  {
    icon: Edit04,
    title: "Création de contenu",
    description:
      "Création du contenu des formations pour les séances en FOAD et en présentiel. Génération d\u2019images, vidéos, quiz...",
  },
  {
    icon: Download01,
    title: "Export SCORM",
    description:
      "Export en format SCORM pour utilisation dans un LMS tiers. Déployez vos formations sur n\u2019importe quelle plateforme.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          1. HERO — style landing-page-01
          ══════════════════════════════════════════════ */}
      <section className="relative pt-16 md:pt-24">
        {/* Grid dot background */}
        <div className="absolute inset-0 hero-grid hero-grid-mask" />

        <div className="relative mx-auto max-w-container px-4 sm:px-8">
          {/* Text content — centered */}
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300 bg-amber-50 pl-1 pr-3.5 py-1 mb-6">
              <span className="flex items-center gap-1.5 rounded-full bg-white border border-amber-300 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Nouveau
              </span>
              <span className="text-sm font-medium text-amber-800">
                Créé par un OF, pour les OF
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-display-md sm:text-display-lg md:text-display-xl font-semibold text-neutral-900">
              Le copilote IA des organismes de formation
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Pour une conformité absolue et une productivité décuplée. Créé par
              un organisme de formation, pour les organismes de formation.
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button color="secondary" size="xl" href="#decouvrir" iconTrailing={<ArrowRight data-icon />}>
                Découvrir Syllabis
              </Button>
              <Button color="primary" size="xl" href="/demo">
                Demander une démo
              </Button>
            </div>
          </div>

          {/* Hero mockup — single screen below text */}
          <div className="mt-16 md:mt-20 mx-auto max-w-5xl">
            <div className="rounded-[8px] bg-[#0A1E3D] p-0.5 shadow-[0_32px_64px_-12px_rgba(10,30,61,0.25),0_0_0_1px_rgba(10,30,61,0.08)] md:rounded-[24px] md:p-1">
              <Image
                src="/screenshots/creer-formation.png"
                alt="Dashboard Syllabis — Création de formation"
                width={1280}
                height={800}
                className="w-full h-auto rounded-[6px] md:rounded-[20px]"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          2. CE QUE FAIT SYLLABIS — style landing-page-12
          ══════════════════════════════════════════════ */}
      <section id="decouvrir" className="relative overflow-hidden pt-16 md:pt-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Text */}
            <div className="max-w-lg">
              <p className="text-sm font-semibold text-brand-600 mb-3">
                Ce que fait Syllabis
              </p>
              <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
                De la fiche RNCP à la formation complète
              </h2>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Syllabis vous assiste dans la création de vos formations — de
                l&apos;arborescence pédagogique jusqu&apos;à la création de
                contenu — et vous assure une{" "}
                <strong className="text-neutral-900">conformité absolue</strong>{" "}
                entre les attentes des certificateurs et la validation des
                compétences des apprenants.
              </p>
              <div className="mt-8">
                <Button color="primary" size="lg" href="/fonctionnalites" iconTrailing={<ArrowRight data-icon />}>
                  Découvrir les fonctionnalités
                </Button>
              </div>
            </div>

            {/* Right — Mockup desktop, débordant à droite */}
            <div className="relative lg:-mr-[15%] xl:-mr-[20%]">
              <div className="rounded-[8px] bg-[#0A1E3D] p-0.5 shadow-[0_32px_64px_-12px_rgba(10,30,61,0.25),0_0_0_1px_rgba(10,30,61,0.08)] md:rounded-[24px] md:p-1">
                <Image
                  src="/screenshots/mindmap.jpg"
                  alt="Arborescence pédagogique — Mind Map Syllabis"
                  width={1280}
                  height={800}
                  className="w-full h-auto rounded-[6px] md:rounded-[20px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. QUI SOMMES-NOUS
          ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Qui sommes-nous
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Organisme de formation depuis 25 ans
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
              Nous assistons aux premières loges à la mutation de notre secteur.
            </p>
          </div>

          {/* 4 problèmes — cards avec icônes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto mb-12">
            {problems.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-4 flex items-center justify-center size-10 rounded-full bg-amber-50 border border-amber-200">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                </div>
                <h3 className="text-md font-semibold text-neutral-900 mb-1">
                  {p.title}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Transition — encart navy */}
          <div className="rounded-2xl bg-[#0A1E3D] p-8 sm:p-10 max-w-3xl mx-auto mb-16">
            <p className="text-center text-md sm:text-lg text-white/85 leading-relaxed">
              Ces bouleversements ont un impact direct sur nos marges et la
              rentabilité de nos structures.
            </p>
            <p className="text-center text-lg sm:text-xl font-semibold text-white mt-3">
              Ainsi nous avons lancé la création de Syllabis en 2025.
            </p>
          </div>

          {/* 3 solutions */}
          <div className="max-w-3xl mx-auto">
            <h3 className="text-center text-xl font-semibold text-neutral-900 mb-8">
              Un outil permettant de :
            </h3>
            <div className="space-y-4 mb-16">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className="flex gap-4 rounded-2xl border border-neutral-200 bg-white p-5 sm:p-6"
                >
                  <div className="shrink-0 size-10 rounded-xl bg-brand-600 text-white flex items-center justify-center text-md font-bold">
                    {i + 1}
                  </div>
                  <p className="text-md text-neutral-700 leading-relaxed pt-1.5">
                    {s}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── Résultats — style landing-page-14 ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          {/* Header */}
          <div className="max-w-xl mb-12 md:mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Résultats
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Des résultats concrets
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Les chiffres parlent d&apos;eux-mêmes. Voici ce que Syllabis a changé
              pour notre organisme de formation.
            </p>
          </div>

          {/* 2-col: stats grid left, image right */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Stats 2x2 */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10">
              {results.map((r) => (
                <div key={r.value}>
                  <div className="text-display-md sm:text-display-lg font-semibold text-brand-600">
                    {r.value}
                  </div>
                  <p className="mt-2 text-md font-semibold text-neutral-900">
                    {r.title}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Image — browser mockup Safari style */}
            <BrowserMockup
              src="/screenshots/global-dashboard.png"
              alt="Dashboard Syllabis — résultats concrets"
            />
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. TABLEAU COMPARATIF
          ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Avant / Après
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Divisé par 7 le temps de création
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Exemple avec le titre : <strong>Formateur pour adultes</strong>
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 px-4">
              <span className="text-xs sm:text-sm font-semibold text-neutral-500">
                Étape
              </span>
              <span className="text-xs sm:text-sm font-semibold text-red-600 text-center">
                Sans Syllabis
              </span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 text-center">
                Avec Syllabis
              </span>
            </div>

            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden divide-y divide-neutral-100">
              {comparison.map((row) => {
                const isTotal = row.label === "TOTAL";
                return (
                  <div
                    key={row.label}
                    className={`grid grid-cols-3 gap-2 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 items-center ${
                      isTotal ? "bg-neutral-50" : ""
                    }`}
                  >
                    <span
                      className={`text-xs sm:text-sm text-neutral-900 ${
                        isTotal ? "font-bold" : "font-medium"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span className="text-xs sm:text-sm text-red-600 text-center flex items-center justify-center gap-0.5 sm:gap-1">
                      <X className="size-3 sm:size-4 text-red-400 shrink-0" />
                      <span className={isTotal ? "font-bold" : ""}>{row.before}</span>
                    </span>
                    <span className="text-xs sm:text-sm text-emerald-600 font-semibold text-center flex items-center justify-center gap-0.5 sm:gap-1">
                      <Check className="size-3 sm:size-4 text-emerald-500 shrink-0" />
                      <span className={isTotal ? "font-bold" : ""}>{row.after}</span>
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. BANDEAU CHIFFRES
          ══════════════════════════════════════════════ */}
      <section className="py-8 sm:py-12 border-y border-neutral-200 bg-white">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm font-medium text-neutral-700">
            {[
              "+20% de FOAD",
              "×3 appels d\u2019offres",
              "÷7 temps de création",
              "100% maîtrise du contenu",
            ].map((text) => (
              <span key={text} className="flex items-center gap-2">
                <Check className="size-4 text-brand-600" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. FONCTIONNALITÉS (3 blocs)
          ══════════════════════════════════════════════ */}
      <section id="fonctionnalites" className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Fonctionnalités
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Principales fonctionnalités
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 hover:shadow-lg hover:border-brand-200 transition-all"
              >
                <div className="flex items-center justify-center size-12 rounded-xl bg-[#0A1E3D]/5 border border-[#0A1E3D]/10 mb-5">
                  <f.icon className="size-6 text-[#0A1E3D]" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {f.title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. CTA FINAL
          ══════════════════════════════════════════════ */}
      <CTABanner
        title="Prêt à décupler la productivité de votre organisme ?"
        description="Demandez une démo et découvrez comment Syllabis divise par 7 le temps de création de vos formations."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Découvrir les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
