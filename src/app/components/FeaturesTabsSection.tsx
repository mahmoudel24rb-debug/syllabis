"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, SearchSm, XClose } from "@untitledui/icons";
import { AnimatePresence, motion } from "motion/react";
import { Pointer } from "@/components/ui/pointer";

const features = [
  {
    tag: "Génération IA",
    title: "Uploadez un référentiel, récupérez une formation structurée",
    description:
      "Depuis une fiche RNCP ou tout autre document, Syllabis génère l\u2019arborescence complète en quelques minutes.",
    points: [
      "Génération en cascade : blocs, modules, séquences, séances, contenu",
      "Détection automatique du type de diplôme (TP, BTS, CAP, CQP, BPJEPS)",
      "Coût et temps estimés affichés avant de lancer la génération",
      "Feedback loop : rejetez avec un commentaire, l\u2019IA se corrige et régénère",
    ],
    image: "/screenshots/feat-generation.png",
    href: "/fonctionnalites/generation-ia",
  },
  {
    tag: "Éditeur & Médias IA",
    title: "Des formations que vos apprenants ont envie de suivre",
    description:
      "Plus de 40 blocs interactifs et une génération automatique de médias pédagogiques unique sur le marché.",
    points: [
      "Quiz QCM, Drag & Drop, Scénario branché, Hotspot, Timeline, Flashcards et plus",
      "Chaque bloc régénérable par l\u2019IA avec feedback loop intégré",
      "Vidéos pédagogiques, podcasts audio, mindmaps et infographies auto-générés depuis votre contenu",
      "10+ thèmes SCORM personnalisables à votre marque",
    ],
    image: "/screenshots/feat-editeur.png",
    href: "/fonctionnalites/editeur",
  },
  {
    tag: "Export SCORM",
    title: "Exportez en SCORM marque blanche, déployez partout",
    description:
      "Package SCORM 1.2 et 2004 entièrement à votre marque, compatible tous les LMS du marché.",
    points: [
      "Votre logo, vos couleurs, le nom de votre organisme. Zéro mention de Syllabis",
      "Chat IA embarqué : vos apprenants posent des questions directement dans le module",
      "Blocs interactifs fonctionnels dans le SCORM (Drag & Drop, Tri, Scénarios branchés)",
      "Compatible Moodle, 360Learning, Talentsoft, Canvas, Docebo et tout LMS SCORM",
    ],
    image: "/screenshots/feat-scorm.png",
    href: "/fonctionnalites/export-scorm",
  },
  {
    tag: "Pilotage & Équipes",
    title: "Gardez la main sur chaque formation et chaque collaborateur",
    description:
      "Dashboard de pilotage, gestion d\u2019équipe granulaire et consignes pédagogiques propagées automatiquement.",
    points: [
      "Dashboard par formation avec progression et volumes horaires calculés automatiquement",
      "5 niveaux de rôles : propriétaire, administrateur, concepteur, formateur, lecture seule",
      "Consignes pédagogiques définissables par niveau (organisation, formation, branche) avec propagation automatique",
      "Multi-organisations cloisonnées avec branding et équipes propres",
    ],
    image: "/screenshots/feat-pilotage.png",
    href: "/fonctionnalites/pilotage-planning",
  },
];

export default function FeaturesTabsSection() {
  const [lightbox, setLightbox] = useState<string | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3">
            Fonctionnalités
          </p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Tout le chemin, du référentiel au SCORM déployé
          </h2>
          <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
            Chaque étape de votre production pédagogique (génération, édition, export,
            pilotage) dans un seul outil.
          </p>
        </div>

        {/* Stacked feature rows */}
        <div className="space-y-20 md:space-y-28">
          {features.map((f, i) => (
            <div
              key={f.tag}
              className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
            >
              {/* Text */}
              <div>
                <p className="text-sm font-semibold text-brand-600 mb-3">
                  {f.tag}
                </p>
                <h3 className="text-display-xs sm:text-display-sm font-semibold text-neutral-900 mb-3">
                  {f.title}
                </h3>
                <p className="text-lg text-neutral-600 mb-6 max-w-lg">
                  {f.description}
                </p>
                <ul className="space-y-3 max-w-lg">
                  {f.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5">
                      <Check className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-md text-neutral-700">{p}</span>
                    </li>
                  ))}
                </ul>

              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-first" : ""}>
                <div className="rounded-[24px] bg-white p-[3px] shadow-2xl ring-[2px] ring-neutral-200 ring-inset md:rounded-[32px] md:p-1">
                  <div className="rounded-[21px] bg-white p-1 shadow-[inset_0_0_4px_1.5px_rgba(10,13,18,0.08),inset_0_0_3px_1.5px_rgba(10,13,18,0.03)] md:rounded-[28px] md:p-[5.4px]">
                    <div
                      onClick={() => setLightbox(f.image)}
                      className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-neutral-50 ring-[2px] ring-neutral-200 md:rounded-[24px] cursor-none"
                    >
                      <Image
                        src={f.image}
                        alt={f.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <Pointer>
                        <SearchSm className="size-6 text-brand-600 drop-shadow-md" />
                      </Pointer>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4 sm:p-8 cursor-pointer"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <XClose className="size-5 text-white" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-5xl aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={lightbox}
                alt="Aperçu fonctionnalité"
                fill
                sizes="100vw"
                className="object-contain bg-white"
                priority
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
