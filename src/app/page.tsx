import Link from "next/link";
import { Check, X } from "@untitledui/icons";
import { LayersThree01, Edit04, Download01 } from "@untitledui/icons";
import CTABanner from "./components/CTABanner";
import BrowserMockup from "./components/BrowserMockup";

const problems = [
  "Réduction des niveaux de prise en charge (NPEC)",
  "Exigences des certificateurs de plus en plus fortes",
  "Développement des formations ouvertes à distance (FOAD)",
  "Dépendance aux formateurs externes",
];

const solutions = [
  "Créer des programmes pédagogiques complets, assistés par l\u2019IA, pour répondre plus rapidement aux appels d\u2019offres.",
  "Générer l\u2019ensemble de nos contenus, pour permettre aux formateurs indépendants de se concentrer sur l\u2019animation des formations.",
  "Prouver en un export l\u2019alignement parfait entre les validations des compétences et les objectifs pédagogiques, pour réduire la lourdeur administrative.",
];

const results = [
  { value: "+20%", label: "de FOAD en moyenne dans nos formations" },
  { value: "100%", label: "de maîtrise du contenu dispensé aux élèves" },
  { value: "×3", label: "appels d\u2019offres traités, avec 20 à 30% de conversion" },
  { value: "÷7", label: "le temps de création d\u2019un titre professionnel" },
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
      {/* ── 1. Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300 bg-amber-50 pl-1 pr-3 py-1 mb-4">
                <span className="flex items-center gap-1.5 rounded-full bg-white border border-amber-300 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                  <span className="w-2 h-2 rounded-full bg-amber-400" />
                  Nouveau
                </span>
                <span className="text-sm font-medium text-amber-800">
                  Créé par un OF, pour les OF
                </span>
              </div>

              <h1 className="text-display-lg sm:text-display-xl font-semibold text-neutral-900">
                Le copilote IA des{" "}
                <span className="text-brand-600">organismes de formation</span>
              </h1>

              <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700">
                Pour une conformité absolue et une productivité décuplée.
              </p>

              <p className="mt-3 text-md text-neutral-500 italic">
                Créé par un organisme de formation, pour les organismes de formation.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                <Link
                  href="#decouvrir"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-md font-semibold text-neutral-700 shadow-xs hover:bg-neutral-50 transition-colors order-2 sm:order-1"
                >
                  Découvrir Syllabis
                </Link>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-brand-600 bg-brand-600 px-5 py-3 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors order-1 sm:order-2"
                >
                  Demander une démo
                </Link>
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <BrowserMockup
                src="/screenshots/formation-creation.png"
                alt="Arborescence pédagogique générée par Syllabis"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Ce que fait Syllabis ── */}
      <section id="decouvrir" className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Ce que fait Syllabis
            </p>
            <p className="text-display-xs sm:text-display-sm font-medium text-neutral-900 leading-snug">
              À partir d&apos;une fiche RNCP, Syllabis vous assiste dans la
              création de vos formations — de l&apos;arborescence pédagogique
              jusqu&apos;à la création de contenu — et vous assure une{" "}
              <span className="text-brand-600">conformité absolue</span> entre
              les attentes des certificateurs et la validation des compétences
              des apprenants.
            </p>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <BrowserMockup
              src="/screenshots/creer-formation.png"
              alt="Création de formation avec Syllabis"
            />
          </div>
        </div>
      </section>

      {/* ── 3. Qui sommes-nous — Le constat ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            {/* Constat */}
            <div className="text-center mb-12">
              <p className="text-sm font-semibold text-brand-600 mb-3">
                Qui sommes-nous
              </p>
              <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
                Organisme de formation depuis 25 ans
              </h2>
              <p className="mt-5 text-lg text-neutral-600">
                Nous assistons aux premières loges à la mutation de notre secteur.
              </p>
            </div>

            {/* 4 problèmes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {problems.map((p) => (
                <div
                  key={p}
                  className="flex items-center gap-3 rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <span className="shrink-0 w-2 h-2 rounded-full bg-amber-400" />
                  <span className="text-md text-neutral-800">{p}</span>
                </div>
              ))}
            </div>

            {/* Transition */}
            <div className="rounded-xl bg-[#0A1E3D] p-6 sm:p-8 text-center mb-16">
              <p className="text-md sm:text-lg text-white/90 leading-relaxed">
                Ces bouleversements ont un impact direct sur nos marges et la
                rentabilité de nos structures.{" "}
                <span className="font-semibold text-white">
                  Ainsi nous avons lancé la création de Syllabis en 2025.
                </span>
              </p>
            </div>

            {/* 3 solutions */}
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-neutral-900">
                Un outil permettant de :
              </h3>
            </div>
            <div className="space-y-4 mb-16">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold leading-none">
                    {i + 1}
                  </div>
                  <p className="text-md text-neutral-700 leading-relaxed">
                    {s}
                  </p>
                </div>
              ))}
            </div>

            {/* Résultats */}
            <div className="text-center mb-8">
              <p className="text-sm font-semibold text-brand-600 mb-3">
                Résultats
              </p>
              <h3 className="text-display-xs sm:text-display-sm font-semibold text-neutral-900">
                Des résultats concrets
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {results.map((r) => (
                <div
                  key={r.value}
                  className="rounded-xl border border-neutral-200 bg-white p-6 text-center"
                >
                  <div className="text-3xl sm:text-4xl font-bold text-[#0A1E3D]">
                    {r.value}
                  </div>
                  <p className="text-sm text-neutral-600 mt-2">{r.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── 4. Tableau comparatif réel ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
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
                      isTotal ? "bg-neutral-50 font-bold" : ""
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
                      {row.before}
                    </span>
                    <span className="text-xs sm:text-sm text-emerald-600 font-semibold text-center flex items-center justify-center gap-0.5 sm:gap-1">
                      <Check className="size-3 sm:size-4 text-emerald-500 shrink-0" />
                      {row.after}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Chiffres clés (bandeau) ── */}
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

      {/* ── 6. Fonctionnalités (3 blocs) ── */}
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

      {/* ── 7. CTA final ── */}
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
