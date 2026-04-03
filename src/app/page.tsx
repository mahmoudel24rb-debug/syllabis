import Link from "next/link";
import { client } from "@/sanity/client";
import { SERVICES_QUERY } from "@/sanity/queries";
import Services from "./components/Services";
import CTABanner from "./components/CTABanner";
import BrowserMockup from "./components/BrowserMockup";
import { Upload01, Zap, CpuChip01, Edit04, Download01, Check, X } from "@untitledui/icons";

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

const options = { next: { revalidate: 30 } };

const steps = [
  {
    number: "01",
    time: "3 secondes",
    title: "Uploadez votre référentiel",
    desc: "Importez un PDF de certification (RNCP, BTS, CAP, CQP, BPJEPS) ou décrivez votre formation en texte libre.",
    icon: Upload01,
  },
  {
    number: "02",
    time: "Instantané",
    title: "L'IA analyse et structure",
    desc: "Détection automatique du type de certification, blocs de compétences, modules, heures et prérequis.",
    icon: Zap,
  },
  {
    number: "03",
    time: "2-5 minutes",
    title: "Génération du contenu complet",
    desc: "Séances, quiz, exercices, architectures pédagogiques — tout est généré automatiquement.",
    icon: CpuChip01,
  },
  {
    number: "04",
    time: "Personnalisation",
    title: "Éditez avec 39+ blocs",
    desc: "Quiz interactifs, vidéos, podcasts, mind maps, flashcards — personnalisez chaque élément.",
    icon: Edit04,
  },
  {
    number: "05",
    time: "Déploiement",
    title: "Exportez et déployez",
    desc: "Export SCORM 1.2 & 2004 vers n'importe quel LMS, ou planning formateurs avec calendrier.",
    icon: Download01,
  },
];

const metrics = [
  { value: "39+", label: "Blocs interactifs" },
  { value: "6", label: "Certifications supportées" },
  { value: "5", label: "Rôles utilisateur" },
  { value: "4", label: "Modèles IA" },
  { value: "7", label: "Types de médias" },
  { value: "2", label: "Formats SCORM" },
];

const comparison = [
  { label: "Analyser un référentiel", before: "2-3 jours", after: "3 secondes" },
  { label: "Structurer la formation", before: "1 semaine", after: "Instantané" },
  { label: "Rédiger le contenu", before: "2-3 semaines", after: "2-5 minutes" },
  { label: "Créer les quiz", before: "2-3 jours", after: "Inclus" },
  { label: "Exporter en SCORM", before: "Outil externe", after: "1 clic" },
];

export default async function Home() {
  const services = await client.fetch<Service[]>(SERVICES_QUERY, {}, options);

  return (
    <>
      {/* ── Hero ── */}
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
                <span className="text-sm font-medium text-amber-800 flex items-center gap-1">
                  Génération vidéo & podcast par IA
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3.33 8h9.34M8.67 4l4 4-4 4" />
                  </svg>
                </span>
              </div>

              <h1 className="text-display-lg sm:text-display-xl font-semibold text-neutral-900">
                Du référentiel à la formation e-learning.{" "}
                <span className="text-brand-600">En quelques minutes.</span>
              </h1>

              <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl">
                Syllabis transforme un PDF de certification (RNCP, BTS, CAP, CQP,
                BPJEPS) en formation complète — structure, contenu interactif,
                quiz, vidéos — grâce à l&apos;IA.
              </p>

              <div className="mt-12 flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-3">
                <Link
                  href="#comment-ca-marche"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-md font-semibold text-neutral-700 shadow-xs hover:bg-neutral-50 transition-colors order-2 sm:order-1"
                >
                  Voir comment ça marche
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
              <BrowserMockup src="/screenshots/creer-formation.png" alt="Créer une formation avec Syllabis" priority />
            </div>
          </div>
        </div>
      </section>

      {/* ── Social proof band ── */}
      <section className="py-8 sm:py-12 border-y border-neutral-200 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium text-neutral-600">
            {[
              "39+ blocs interactifs",
              "6 certifications supportées",
              "4 modèles IA disponibles",
              "Export SCORM 1.2 & 2004",
            ].map((text) => (
              <span key={text} className="flex items-center gap-2">
                <Check className="size-4 text-brand-600" />
                {text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comment ça marche (5 étapes) ── */}
      <section id="comment-ca-marche" className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Comment ça marche
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              De l&apos;upload au déploiement en 5 étapes
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Passez du référentiel PDF à une formation e-learning complète,
              prête à déployer sur n&apos;importe quel LMS.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="flex gap-5 sm:gap-8 items-start"
              >
                {/* Number + line */}
                <div className="flex flex-col items-center shrink-0">
                  <div className="w-10 h-10 rounded-full bg-brand-600 text-white flex items-center justify-center">
                    <step.icon className="size-5" />
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px h-12 bg-neutral-200 mt-2" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-6">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {step.title}
                  </h3>
                  <span className="inline-block rounded-full bg-amber-50 border border-amber-300 px-2.5 py-0.5 text-xs font-medium text-amber-800 whitespace-nowrap mt-1 mb-2">
                    {step.time}
                  </span>
                  <p className="text-md text-neutral-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6 Piliers (dynamic Sanity) ── */}
      <Services services={services} />

      {/* ── Avant / Apres ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Avant / Après
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              De 3 semaines à 3 minutes
            </h2>
            <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Comparez le temps de création d&apos;une formation avec et sans Syllabis.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Table header */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 px-4">
              <span className="text-xs sm:text-sm font-semibold text-neutral-500">Étape</span>
              <span className="text-xs sm:text-sm font-semibold text-red-600 text-center">Manuellement</span>
              <span className="text-xs sm:text-sm font-semibold text-emerald-600 text-center">Avec Syllabis</span>
            </div>
            {/* Rows */}
            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden divide-y divide-neutral-100">
              {comparison.map((row) => (
                <div key={row.label} className="grid grid-cols-3 gap-2 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 items-center">
                  <span className="text-xs sm:text-sm font-medium text-neutral-900">{row.label}</span>
                  <span className="text-xs sm:text-sm text-red-600 text-center flex items-center justify-center gap-0.5 sm:gap-1"><X className="size-3 sm:size-4 text-red-400 shrink-0" />{row.before}</span>
                  <span className="text-xs sm:text-sm text-emerald-600 font-semibold text-center flex items-center justify-center gap-0.5 sm:gap-1"><Check className="size-3 sm:size-4 text-emerald-500 shrink-0" />{row.after}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Chiffres clés ── */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-12">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
              {metrics.map((m) => (
                <div key={m.label} className="text-center lg:border-r border-gray-200 lg:last:border-0">
                  <div className="text-4xl font-bold text-[#0A1E3D]">
                    {m.value}
                  </div>
                  <div className="text-sm text-neutral-600 mt-1">{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA final ── */}
      <CTABanner
        title="Prêt à transformer vos référentiels en formations ?"
        description="Demandez une démo gratuite et découvrez comment Syllabis génère une formation complète en quelques minutes."
        primaryLabel="Demander une démo gratuite"
        primaryHref="/demo"
        secondaryLabel="Voir les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
