import Image from "next/image";
import { Check, Clock } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "../components/CTABanner";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités | Syllabis — Créez vos formations RNCP avec l'IA",
  description:
    "Génération IA, éditeur 40+ blocs interactifs, export SCORM marque blanche, pilotage et gestion d'équipe. Tout ce dont votre organisme a besoin.",
};

const features = [
  {
    tag: "Génération IA",
    title: "Chargez un référentiel, récupérez une formation structurée",
    description:
      "Depuis une fiche RNCP ou tout autre document de référence, Syllabis analyse la structure du diplôme et génère l'arborescence pédagogique complète en quelques minutes. Vous gardez la main sur chaque étape grâce au feedback loop intégré.",
    points: [
      { text: "Génération en cascade : blocs de compétences, modules, séquences, séances, contenu" },
      { text: "Détection automatique du type de diplôme (TP, BTS, CAP, CQP, BPJEPS)" },
      { text: "Coût et temps estimés affichés avant de lancer la génération" },
      { text: "Feedback loop : rejetez avec un commentaire, l'IA se corrige et régénère" },
      { text: "Presets de génération sauvegardables pour relancer rapidement sur d'autres titres" },
      { text: "Création from scratch possible, sans référentiel certifiant" },
      { text: "Génération one-click : produisez votre formation entière en un seul clic", soon: true },
    ],
    image: "/screenshots/feat-generation.png",
  },
  {
    tag: "Éditeur 40+ blocs interactifs",
    title: "Des formations que vos apprenants ont envie de suivre",
    description:
      "Un éditeur pensé pour la pédagogie avec plus de 40 types de blocs interactifs. Chaque bloc est régénérable par l'IA. Générez automatiquement des vidéos pédagogiques, podcasts audio, mindmaps et infographies depuis votre contenu existant.",
    points: [
      { text: "Quiz QCM, Drag & Drop, Scénario branché, Hotspot, Timeline, Flashcards et plus" },
      { text: "Chaque bloc régénérable par l'IA avec feedback loop intégré" },
      { text: "Vidéos pédagogiques et podcasts audio auto-générés depuis votre contenu" },
      { text: "Mindmaps et infographies générés automatiquement" },
      { text: "Interface intuitive style Notion, prise en main immédiate" },
      { text: "Quiz adaptatif et évolutif au niveau de chaque apprenant", soon: true },
    ],
    image: "/screenshots/feat-editeur.png",
  },
  {
    tag: "Export SCORM marque blanche",
    title: "Exportez en SCORM, déployez partout sous votre marque",
    description:
      "Package SCORM 1.2 et 2004 entièrement à votre marque. Votre logo, vos couleurs, le nom de votre organisme. Aucune mention de Syllabis dans le contenu déployé auprès de vos apprenants.",
    points: [
      { text: "SCORM 1.2 et 2004 compatible tous les LMS du marché" },
      { text: "Votre logo, vos couleurs, le nom de votre organisme. Zéro mention de Syllabis" },
      { text: "Blocs interactifs fonctionnels dans le SCORM (Drag & Drop, Tri, Scénarios branchés)" },
      { text: "Compatible Moodle, 360Learning, Talentsoft, Canvas, Docebo" },
      { text: "Chat IA embarqué : vos apprenants posent des questions directement dans le module", soon: true },
    ],
    image: "/screenshots/feat-scorm.png",
  },
  {
    tag: "Pilotage & Équipes",
    title: "Gardez la main sur chaque formation et chaque collaborateur",
    description:
      "Dashboard de pilotage complet, gestion d'équipe granulaire avec 5 niveaux de rôles, et consignes pédagogiques propagées automatiquement à chaque niveau de l'arborescence.",
    points: [
      { text: "Dashboard par formation avec progression et volumes horaires calculés automatiquement" },
      { text: "5 niveaux de rôles : propriétaire, administrateur, concepteur, formateur, lecture seule" },
      { text: "Consignes pédagogiques définissables par niveau avec propagation automatique" },
      { text: "Suivi des crédits IA par utilisateur et par formation" },
      { text: "Multi-organisations cloisonnées avec branding et équipes propres" },
      { text: "Vue calendrier des séances planifiées avec drag & drop", soon: true },
    ],
    image: "/screenshots/feat-pilotage.png",
  },
];

export default function FonctionnalitesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Fonctionnalités</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Tout ce dont vous avez besoin pour créer, structurer et déployer vos formations
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Du chargement de votre référentiel à l&apos;export SCORM marque blanche,
              chaque étape de votre production pédagogique dans un seul outil.
            </p>
          </div>
        </div>
      </section>

      {/* Features empilées */}
      {features.map((f, i) => (
        <section key={f.tag} className={`py-16 sm:py-24 ${i % 2 === 0 ? "bg-neutral-50" : ""}`}>
          <div className="mx-auto max-w-container px-4 sm:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Text */}
              <div>
                <p className="text-sm font-semibold text-brand-600 mb-3">{f.tag}</p>
                <h2 className="text-display-xs sm:text-display-sm font-semibold text-neutral-900 mb-3">
                  {f.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-6 max-w-lg">{f.description}</p>
                <ul className="space-y-3 max-w-lg">
                  {f.points.map((p) => (
                    <li key={p.text} className="flex items-start gap-2.5">
                      {p.soon ? (
                        <Clock className="size-5 text-amber-500 shrink-0 mt-0.5" />
                      ) : (
                        <Check className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                      )}
                      <span className="text-md text-neutral-700">
                        {p.text}
                        {p.soon && (
                          <span className="ml-2 inline-flex items-center rounded-full bg-amber-50 border border-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-700 align-middle">
                            À venir
                          </span>
                        )}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  {/* TODO: remplacer par /register quand la route existe */}
                  <Button color="primary" size="lg" href="/contact">
                    Créer ma première formation gratuitement
                  </Button>
                </div>
              </div>

              {/* Image */}
              <div className={i % 2 === 1 ? "lg:order-first" : ""}>
                <div className="rounded-[24px] bg-white p-[3px] shadow-2xl ring-[2px] ring-neutral-200 ring-inset md:rounded-[32px] md:p-1">
                  <div className="rounded-[21px] bg-white p-1 shadow-[inset_0_0_4px_1.5px_rgba(10,13,18,0.08),inset_0_0_3px_1.5px_rgba(10,13,18,0.03)] md:rounded-[28px] md:p-[5.4px]">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-neutral-50 ring-[2px] ring-neutral-200 md:rounded-[24px]">
                      <Image src={f.image} alt={f.title} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA final */}
      <CTABanner
        title="Votre prochain titre professionnel est prêt en moins de 3 semaines"
        description="Créez votre compte gratuitement et lancez votre première génération, ou réservez une démo sur votre propre référentiel."
        primaryLabel="Commencer gratuitement"
        primaryHref="/contact"
        secondaryLabel="Réserver ma démo"
        secondaryHref="/demo"
      />
    </>
  );
}
