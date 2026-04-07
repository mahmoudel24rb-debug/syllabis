import Link from "next/link";
import { AlertTriangle, Check } from "@untitledui/icons";
import type { Metadata } from "next";
import CTABanner from "../components/CTABanner";

export const metadata: Metadata = {
  title: "À propos | Syllabis — Organisme de formation depuis 25 ans",
  description:
    "Créé par un organisme de formation, pour les organismes de formation. Découvrez pourquoi nous avons lancé Syllabis en 2025.",
};

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

const values = [
  {
    title: "Conformité",
    description:
      "Alignement parfait entre les attentes des certificateurs et la validation des compétences des apprenants. RNCP, Qualiopi, France Compétences.",
  },
  {
    title: "Productivité",
    description:
      "Division par 7 du temps de création d\u2019un titre professionnel. Plus d\u2019appels d\u2019offres traités, avec un meilleur taux de conversion.",
  },
  {
    title: "Autonomie",
    description:
      "Reprenez le contrôle sur vos contenus pédagogiques. Réduisez votre dépendance aux formateurs externes et maîtrisez ce qui est dispensé à vos élèves.",
  },
];

export default function AProposPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              À propos
            </p>
            <h1 className="text-display-sm sm:text-display-lg font-semibold text-neutral-900">
              Organisme de formation depuis 25 ans
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Créé par un organisme de formation, pour les organismes de
              formation.
            </p>
          </div>
        </div>
      </section>

      {/* ── Le constat ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-display-sm font-semibold text-neutral-900">
                Nous assistons aux premières loges à la mutation de notre secteur
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {problems.map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <AlertTriangle className="size-5 text-amber-500 shrink-0 mt-0.5" />
                  <span className="text-md text-neutral-800">{p}</span>
                </div>
              ))}
            </div>

            <div className="rounded-xl bg-[#0A1E3D] p-6 sm:p-8 text-center">
              <p className="text-md sm:text-lg text-white/90 leading-relaxed">
                Ces bouleversements ont un impact direct sur nos marges et la
                rentabilité de nos structures.{" "}
                <span className="font-semibold text-white">
                  Ainsi nous avons lancé la création de Syllabis en 2025.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Ce que permet Syllabis ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-display-xs sm:text-display-sm font-semibold text-neutral-900">
                Un outil permettant de :
              </h2>
            </div>
            <div className="space-y-4 mb-16">
              {solutions.map((s, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 rounded-xl border border-neutral-200 bg-white p-5"
                >
                  <div className="shrink-0 w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold">
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

      {/* ── Valeurs ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Nos valeurs
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Ce qui nous guide
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A1E3D]/5 border border-[#0A1E3D]/10 flex items-center justify-center text-[#0A1E3D] mb-5">
                  <Check className="size-6" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {v.title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Prêt à décupler la productivité de votre organisme ?"
        description="Demandez une démo et découvrez comment Syllabis divise par 7 le temps de création de vos formations."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
      />
    </>
  );
}
