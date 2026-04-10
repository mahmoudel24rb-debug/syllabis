"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight } from "@untitledui/icons";

const features = [
  {
    tab: "Génération IA",
    title: "Génération IA one-click",
    description:
      "Uploadez une fiche RNCP et obtenez une formation complète en quelques minutes.",
    points: [
      "Génération en cascade : blocs → modules → séquences → séances → contenu",
      "Détection automatique du type de diplôme (TP, BTS, CAP, CQP, BPJEPS)",
      "Visualisation du coût et du temps estimés avant de lancer",
      "Feedback loop : rejetez une génération avec un commentaire, l\u2019IA se corrige",
    ],
    image: "/screenshots/creer-formation.png",
    href: "/fonctionnalites/generation-ia",
  },
  {
    tab: "Éditeur 39+",
    title: "Éditeur 39+ blocs interactifs",
    description:
      "Un éditeur style Notion pensé pour la pédagogie, avec 39 types de blocs.",
    points: [
      "Quiz QCM, Drag & Drop, Scénario branché, Hotspot, Timeline, Flashcards, Code…",
      "Chaque bloc peut être régénéré individuellement par l\u2019IA",
      "Système de feedback loop : rejetez avec un commentaire, l\u2019IA se corrige",
      "10+ thèmes personnalisables pour vos formations",
    ],
    image: "/screenshots/formation-creation.png",
    href: "/fonctionnalites/editeur",
  },
  {
    tab: "Médias IA",
    title: "NotebookLM : Médias IA automatiques",
    description:
      "Fonctionnalité unique : générez 7 types de médias depuis votre contenu existant.",
    points: [
      "Vidéos pédagogiques auto-générées à partir du texte de la formation",
      "Podcasts audio (Deep Dive / Briefing) pour l\u2019apprentissage mobile",
      "Quiz IA, flashcards, mindmaps et infographies, sans production supplémentaire",
      "Pipeline asynchrone avec suivi de progression en temps réel",
    ],
    image: "/screenshots/global-dashboard.png",
    href: "/fonctionnalites/medias-ia",
  },
  {
    tab: "Export SCORM",
    title: "Export SCORM marque blanche + chat IA",
    description:
      "Déployez sur n\u2019importe quel LMS avec votre marque, sans mention de Syllabis.",
    points: [
      "Chat IA embarqué : les apprenants posent des questions dans le module",
      "Blocs interactifs fonctionnels dans le SCORM (Drag & Drop, Tri, Scénarios)",
      "Compatible Moodle, 360Learning, Talentsoft, Canvas, Docebo…",
      "Package à votre marque : logo, couleurs, nom. Zéro mention Syllabis",
    ],
    image: "/screenshots/global-dashboard.png",
    href: "/fonctionnalites/export-scorm",
  },
  {
    tab: "Pilotage",
    title: "Pilotage et planification",
    description:
      "Suivez chaque formation de bout en bout avec des outils de pilotage intégrés.",
    points: [
      "Dashboard par formation avec progression et volumes horaires automatiques",
      "Tableau de pilotage sur toute la hiérarchie pédagogique",
      "Vue calendrier des séances planifiées avec drag & drop",
      "Mindmap arborescente interactive pour visualiser la structure complète",
    ],
    image: "/screenshots/formation-dashboard.png",
    href: "/fonctionnalites/pilotage-planning",
  },
  {
    tab: "Équipes",
    title: "Gestion d\u2019équipe et organisations",
    description:
      "Chaque organisme dispose de son propre espace avec des rôles granulaires.",
    points: [
      "5 niveaux de rôles : propriétaire, administrateur, concepteur, formateur, lecture seule",
      "Les formateurs n\u2019accèdent qu\u2019aux blocs et modules qui leur sont assignés",
      "Invitation par email, suivi de la consommation IA par utilisateur",
      "Multi-organisations indépendantes avec branding et équipes propres",
    ],
    image: "/screenshots/global-dashboard.png",
    href: "/fonctionnalites/multi-tenant",
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
            Principales fonctionnalités
          </h2>
          <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
            Tout ce dont vous avez besoin pour créer, structurer et déployer vos
            formations e-learning.
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
                    ? "text-[#0A1E3D] border-[#0A1E3D]"
                    : "text-neutral-500 border-transparent hover:text-neutral-900"
                }`}
              >
                {f.tab}
              </button>
            ))}
          </div>
        </div>

        {/* Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Text */}
          <div className="text-center lg:text-left">
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
                <div className="relative overflow-hidden rounded-[18px] bg-neutral-50 ring-[2px] ring-neutral-200 md:rounded-[24px]">
                  <Image
                    key={current.image}
                    src={current.image}
                    alt={current.title}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
