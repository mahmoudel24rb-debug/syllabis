"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "@untitledui/icons";

const features = [
  {
    tab: "Génération IA",
    title: "Uploadez un référentiel, récupérez une formation structurée",
    description:
      "Depuis une fiche RNCP ou tout autre document, Syllabis génère l\u2019arborescence complète en quelques minutes.",
    points: [
      "Génération en cascade : blocs → modules → séquences → séances → contenu",
      "Détection automatique du type de diplôme (TP, BTS, CAP, CQP, BPJEPS)",
      "Coût et temps estimés affichés avant de lancer la génération",
      "Feedback loop : rejetez avec un commentaire, l\u2019IA se corrige et régénère",
    ],
    image: "/screenshots/creer-formation.png",
    href: "/fonctionnalites/generation-ia",
  },
  {
    tab: "Éditeur & Médias IA",
    title: "Des formations que vos apprenants ont envie de suivre",
    description:
      "Plus de 40 blocs interactifs et une génération automatique de médias pédagogiques unique sur le marché.",
    points: [
      "Quiz QCM, Drag & Drop, Scénario branché, Hotspot, Timeline, Flashcards et plus",
      "Chaque bloc régénérable par l\u2019IA — feedback loop intégré",
      "Vidéos pédagogiques, podcasts audio, mindmaps et infographies auto-générés depuis votre contenu",
      "10+ thèmes SCORM personnalisables à votre marque",
    ],
    image: "/screenshots/formation-creation.png",
    href: "/fonctionnalites/editeur",
  },
  {
    tab: "Export SCORM",
    title: "Exportez en SCORM marque blanche, déployez partout",
    description:
      "Package SCORM 1.2 et 2004 entièrement à votre marque, compatible tous les LMS du marché.",
    points: [
      "Votre logo, vos couleurs, le nom de votre organisme — zéro mention de Syllabis",
      "Chat IA embarqué : vos apprenants posent des questions directement dans le module",
      "Blocs interactifs fonctionnels dans le SCORM (Drag & Drop, Tri, Scénarios branchés)",
      "Compatible Moodle, 360Learning, Talentsoft, Canvas, Docebo et tout LMS SCORM",
    ],
    image: "/screenshots/global-dashboard.png",
    href: "/fonctionnalites/export-scorm",
  },
  {
    tab: "Pilotage & Équipes",
    title: "Gardez la main sur chaque formation et chaque collaborateur",
    description:
      "Dashboard de pilotage, gestion d\u2019équipe granulaire et consignes pédagogiques propagées automatiquement.",
    points: [
      "Dashboard par formation avec progression et volumes horaires calculés automatiquement",
      "5 niveaux de rôles : propriétaire, administrateur, concepteur, formateur, lecture seule",
      "Consignes pédagogiques définissables par niveau (organisation, formation, branche) — propagation automatique",
      "Multi-organisations cloisonnées avec branding et équipes propres",
    ],
    image: "/screenshots/formation-dashboard.png",
    href: "/fonctionnalites/pilotage-planning",
  },
];

export default function FeaturesTabsSection() {
  const [active, setActive] = useState(0);
  const current = features[active];

  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-brand-600 mb-3">
            Fonctionnalités
          </p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Tout le chemin, du référentiel au SCORM déployé
          </h2>
          <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
            Chaque étape de votre production pédagogique — génération, édition, export,
            pilotage — dans un seul outil.
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-neutral-200 mb-10 overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-start lg:justify-center gap-1 min-w-max">
            {features.map((f, i) => (
              <button
                key={f.tab}
                onClick={() => setActive(i)}
                className={`px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
                  i === active
                    ? "text-[#002A5A] border-[#002A5A]"
                    : "text-neutral-500 border-transparent hover:text-neutral-900"
                }`}
              >
                {f.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Text */}
          <div className="text-center lg:text-left lg:min-h-[420px]">
            <h3 className="text-display-xs sm:text-display-sm font-semibold text-neutral-900 mb-3">
              {current.title}
            </h3>
            <p className="text-lg text-neutral-600 mb-6 max-w-lg mx-auto lg:mx-0">
              {current.description}
            </p>
            <ul className="space-y-3 text-left max-w-lg mx-auto lg:mx-0">
              {current.points.map((p) => (
                <li key={p} className="flex items-start gap-2.5">
                  <Check className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-md text-neutral-700">{p}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex justify-center lg:justify-start">
              <Link
                href={current.href}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
              >
                En savoir plus
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="w-full">
            <div className="rounded-[24px] bg-white p-[3px] shadow-2xl ring-[2px] ring-neutral-200 ring-inset md:rounded-[32px] md:p-1">
              <div className="rounded-[21px] bg-white p-1 shadow-[inset_0_0_4px_1.5px_rgba(10,13,18,0.08),inset_0_0_3px_1.5px_rgba(10,13,18,0.03)] md:rounded-[28px] md:p-[5.4px]">
                <div className="relative aspect-[19/9] overflow-hidden rounded-[18px] bg-neutral-50 ring-[2px] ring-neutral-200 md:rounded-[24px]">
                  {features.map((f, i) => (
                    <Image
                      key={f.tab}
                      src={f.image}
                      alt={f.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className={`object-contain transition-opacity duration-300 ${
                        i === active ? "opacity-100" : "opacity-0"
                      }`}
                      priority={i === 0}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
