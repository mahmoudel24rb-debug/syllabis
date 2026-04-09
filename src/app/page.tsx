import Image from "next/image";
import Link from "next/link";
import { Check, X, ArrowRight, Stars01, Edit04, VideoRecorder, Share07, Calendar, Users01 } from "@untitledui/icons";
import type { ComponentType } from "react";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "./components/CTABanner";

/* ─── DATA ─── */

const metrics = [
  { value: "÷7", label: "Temps de création", desc: "d\u2019un titre professionnel complet" },
  { value: "×3", label: "Appels d\u2019offres traités", desc: "avec un taux de conversion de 20-30%" },
  { value: "+20%", label: "de FOAD", desc: "en moyenne dans nos formations" },
  { value: "100%", label: "Maîtrise du contenu", desc: "dispensé aux apprenants" },
];

const featureBlocks: {
  icon: ComponentType<{ className?: string }>;
  title: string;
  description: string;
  bullets: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
}[] = [
  {
    icon: Stars01,
    title: "Génération IA one-click",
    description: "Uploadez une fiche RNCP et obtenez une formation complète en quelques minutes.",
    bullets: [
      "Génération en cascade : blocs → modules → séquences → séances → contenu",
      "Détection automatique du type de diplôme (TP, BTS, CAP, CQP, BPJEPS)",
      "Visualisation du coût et du temps estimés avant de lancer",
      "Feedback loop : rejetez une génération avec un commentaire, l\u2019IA se corrige",
    ],
    image: "/screenshots/creer-formation.png",
    imageAlt: "Création de formation par IA",
  },
  {
    icon: Edit04,
    title: "Éditeur 39+ blocs interactifs",
    description: "Un éditeur style Notion pensé pour la pédagogie, avec 39 types de blocs.",
    bullets: [
      "Quiz QCM, Drag & Drop, Scénario branché, Hotspot, Timeline, Flashcards, Code…",
      "Chaque bloc peut être régénéré individuellement par l\u2019IA",
      "Système de feedback loop : rejetez avec un commentaire, l\u2019IA se corrige",
      "10+ thèmes personnalisables pour vos formations",
    ],
    image: "/screenshots/editor.png",
    imageAlt: "Éditeur de contenu pédagogique",
    reversed: true,
  },
  {
    icon: VideoRecorder,
    title: "NotebookLM — Médias IA automatiques",
    description: "Fonctionnalité unique : générez 7 types de médias depuis votre contenu existant.",
    bullets: [
      "Vidéos pédagogiques auto-générées à partir du texte de la formation",
      "Podcasts audio (Deep Dive / Briefing) pour l\u2019apprentissage mobile",
      "Quiz IA, flashcards, mindmaps et infographies — sans production supplémentaire",
      "Pipeline asynchrone avec suivi de progression en temps réel",
    ],
    image: "/screenshots/mindmap.jpg",
    imageAlt: "Génération de médias IA",
  },
  {
    icon: Share07,
    title: "Export SCORM marque blanche + chat IA",
    description: "Déployez sur n\u2019importe quel LMS avec votre marque, sans mention de Syllabis.",
    bullets: [
      "Chat IA embarqué : les apprenants posent des questions dans le module",
      "Blocs interactifs fonctionnels dans le SCORM (Drag & Drop, Tri, Scénarios)",
      "Compatible Moodle, 360Learning, Talentsoft, Canvas, Docebo…",
      "Package à votre marque : logo, couleurs, nom — zéro mention Syllabis",
    ],
    image: "/screenshots/formation-creation.png",
    imageAlt: "Export SCORM marque blanche",
    reversed: true,
  },
  {
    icon: Calendar,
    title: "Pilotage et planification",
    description: "Suivez chaque formation de bout en bout avec des outils de pilotage intégrés.",
    bullets: [
      "Dashboard par formation avec progression et volumes horaires automatiques",
      "Tableau de pilotage sur toute la hiérarchie pédagogique",
      "Vue calendrier des séances planifiées avec drag & drop",
      "Mindmap arborescente interactive pour visualiser la structure complète",
    ],
    image: "/screenshots/formation-dashboard.png",
    imageAlt: "Dashboard de pilotage",
  },
  {
    icon: Users01,
    title: "Gestion d\u2019équipe et organisations",
    description: "Chaque organisme dispose de son propre espace avec des rôles granulaires.",
    bullets: [
      "5 niveaux de rôles : propriétaire, administrateur, concepteur, formateur, lecture seule",
      "Les formateurs n\u2019accèdent qu\u2019aux blocs et modules qui leur sont assignés",
      "Invitation par email, suivi de la consommation IA par utilisateur",
      "Multi-organisations indépendantes avec branding et équipes propres",
    ],
    image: "/screenshots/global-dashboard.png",
    imageAlt: "Gestion d\u2019équipe multi-organisations",
    reversed: true,
  },
];

const comparison = [
  { label: "Création de l\u2019arborescence pédagogique", before: 80, after: 8 },
  { label: "Création du contenu + validation des compétences", before: 1600, after: 80 },
  { label: "Contrôle qualité", before: 40, after: 40 },
];
const totalBefore = comparison.reduce((s, r) => s + r.before, 0);
const totalAfter = comparison.reduce((s, r) => s + r.after, 0);

const faqs = [
  { q: "À quels types de certifications Syllabis est-il adapté ?", a: "Titres professionnels (TP), BTS, CAP, CQP, BPJEPS et certifications personnalisées. L\u2019IA analyse la fiche RNCP et détecte automatiquement la structure." },
  { q: "Combien de temps faut-il pour créer une formation complète ?", a: "L\u2019arborescence est générée en quelques minutes. Le contenu complet prend entre 1h et 8h selon la complexité, contre plusieurs centaines d\u2019heures manuellement." },
  { q: "Est-ce que je garde le contrôle sur le contenu généré ?", a: "Oui. L\u2019IA génère une première version que vous pouvez modifier, réorganiser et enrichir librement. Vous restez maître à 100%." },
  { q: "Comment fonctionne l\u2019export SCORM ?", a: "Export SCORM 1.2 et 2004, compatible tous LMS. Le package est à votre marque (logo, couleurs) avec chat IA embarqué pour les apprenants." },
  { q: "Syllabis est-il adapté aux organismes multi-sites ?", a: "Oui. Gestion multi-organisations avec 5 niveaux de rôles, branding par entité et suivi des coûts IA par utilisateur." },
  { q: "Peut-on tester Syllabis avant de s\u2019engager ?", a: "Oui, essai gratuit 14 jours. Nous proposons aussi une démo personnalisée de 30 minutes sur votre propre référentiel." },
  { q: "Syllabis aide-t-il à la conformité Qualiopi ?", a: "Oui. L\u2019alignement entre objectifs pédagogiques, contenus et évaluations est traçable et exportable en un clic, ce qui facilite les audits Qualiopi." },
  { q: "Le SCORM exporté est-il à ma marque ?", a: "Entièrement. Logo, couleurs, nom de votre organisme — aucune mention de Syllabis n\u2019apparaît dans le package déployé auprès des apprenants." },
];

/* ─── PAGE ─── */

export default function Home() {
  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative pt-16 md:pt-24">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-display-md sm:text-display-lg md:text-display-xl font-semibold text-neutral-900">
              Créez une formation certifiante complète en{" "}
              <span className="text-brand-600">7× moins de temps</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Uploadez votre fiche RNCP, Syllabis génère l&apos;arborescence complète,
              le contenu, les médias et l&apos;export SCORM — en quelques heures au lieu de
              plusieurs semaines.
            </p>

            {/* Social proof line */}
            <p className="mt-4 text-sm text-neutral-500">
              Utilisé par des organismes de formation — TP, BTS, CAP, CQP, BPJEPS
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button color="secondary" size="xl" href="#demo-video" iconTrailing={<ArrowRight data-icon />}>
                Voir une démo (90 sec)
              </Button>
              <Button color="primary" size="xl" href="/demo">
                Demander une démo personnalisée
              </Button>
            </div>

            {/* Reassurance */}
            <p className="mt-4 text-xs text-neutral-400">
              Sans engagement · Démo sur votre propre référentiel · Réponse sous 24h
            </p>
          </div>
        </div>

        {/* Hero mockup */}
        <div className="relative mt-10 md:mt-16">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-neutral-100" />
          <div className="relative mx-auto h-[240px] sm:h-[360px] w-full max-w-container overflow-hidden px-4 md:h-[496px] md:px-8">
            <div className="mx-auto w-full">
              <div className="rounded-[24px] bg-white p-[3px] shadow-[0_12px_24px_-4px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.06)] ring-[2px] ring-neutral-200 ring-inset md:rounded-[32px] md:p-1">
                <div className="rounded-[21px] bg-white p-1 shadow-[inset_0_0_4px_1.5px_rgba(10,13,18,0.08),inset_0_0_3px_1.5px_rgba(10,13,18,0.03)] md:rounded-[28px] md:p-[5.4px]">
                  <div className="relative overflow-hidden rounded-[18px] bg-neutral-50 ring-[2px] ring-neutral-200 md:rounded-[24px]">
                    <Image
                      src="/screenshots/formation-creation.png"
                      alt="Arborescence pédagogique générée par Syllabis"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. MÉTRIQUES ═══ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 lg:divide-x lg:divide-neutral-200">
            {metrics.map((m) => (
              <div key={m.value} className="text-center px-4">
                <div className="text-display-sm sm:text-display-md font-bold text-[#0A1E3D]">{m.value}</div>
                <p className="mt-1 text-md font-semibold text-neutral-900">{m.label}</p>
                <p className="mt-0.5 text-sm text-neutral-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 3. DÉMO VIDÉO ═══ */}
      <section id="demo-video" className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Démo en 90 secondes</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Voyez Syllabis en action
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
              Upload d&apos;une fiche RNCP → détection du diplôme → génération de l&apos;arborescence →
              contenu dans l&apos;éditeur → export SCORM. Le tout en quelques minutes.
            </p>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden ring-1 ring-neutral-200 shadow-xl">
            <div style={{ position: "relative", paddingBottom: "calc(47.4479% + 41px)", height: 0, width: "100%" }}>
              <iframe
                src="https://demo.arcade.software/5A1mzdGUlRlcXFp6pRp0?embed&embed_mobile=inline&embed_desktop=inline&show_copy_link=true"
                title="Créer et structurer un parcours de formation à partir d'un référentiel PDF"
                frameBorder="0"
                loading="lazy"
                allowFullScreen
                allow="clipboard-write"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", colorScheme: "light" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 4. FONCTIONNALITÉS (6 blocs alternés) ═══ */}
      {featureBlocks.map((f, i) => (
        <section key={f.title} className={`py-16 sm:py-24 ${i % 2 === 1 ? "bg-neutral-50" : ""}`}>
          <div className="mx-auto max-w-container px-4 sm:px-8">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${f.reversed ? "lg:[direction:rtl] *:lg:[direction:ltr]" : ""}`}>
              {/* Text */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-4">
                  <div className="flex items-center justify-center size-10 rounded-lg bg-[#0A1E3D]/5 border border-[#0A1E3D]/10">
                    <f.icon className="size-5 text-[#0A1E3D]" />
                  </div>
                  <h2 className="text-display-xs sm:text-display-sm font-semibold text-neutral-900">
                    {f.title}
                  </h2>
                </div>
                <p className="text-lg text-neutral-600 mb-6 max-w-lg mx-auto lg:mx-0">{f.description}</p>
                <ul className="space-y-3 text-left max-w-lg mx-auto lg:mx-0">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5">
                      <Check className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-md text-neutral-700">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
              {/* Image */}
              <div>
                <div className="rounded-[24px] bg-white p-[3px] shadow-[0_12px_24px_-4px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.06)] ring-[2px] ring-neutral-200 ring-inset md:rounded-[32px] md:p-1">
                  <div className="rounded-[21px] bg-white p-1 shadow-[inset_0_0_4px_1.5px_rgba(10,13,18,0.08),inset_0_0_3px_1.5px_rgba(10,13,18,0.03)] md:rounded-[28px] md:p-[5.4px]">
                    <div className="relative overflow-hidden rounded-[18px] bg-neutral-50 ring-[2px] ring-neutral-200 md:rounded-[24px]">
                      <Image src={f.image} alt={f.imageAlt} width={1280} height={800} className="w-full h-auto" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ═══ 5. AVANT / APRÈS (barres visuelles) ═══ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Avant / Après</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Divisez par 7 le temps de création
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Exemple avec le titre : <strong>Formateur pour adultes</strong>
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Barre totale */}
            <div className="space-y-4">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-red-600 flex items-center gap-1">
                    <X className="size-4" /> Sans Syllabis
                  </span>
                  <span className="text-sm font-bold text-red-700">{totalBefore.toLocaleString("fr")}h</span>
                </div>
                <div className="h-10 bg-red-100 rounded-xl w-full flex items-center px-4">
                  <div className="h-6 bg-red-500 rounded-lg w-full" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-emerald-600 flex items-center gap-1">
                    <Check className="size-4" /> Avec Syllabis
                  </span>
                  <span className="text-sm font-bold text-emerald-700">{totalAfter}h</span>
                </div>
                <div className="h-10 bg-emerald-100 rounded-xl w-full flex items-center px-4">
                  <div className="h-6 bg-emerald-500 rounded-lg" style={{ width: `${(totalAfter / totalBefore) * 100}%` }} />
                </div>
              </div>
            </div>

            {/* Détail */}
            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0A1E3D] px-4 sm:px-6 py-3">
                <span className="text-sm font-semibold text-white">Étape</span>
                <span className="text-sm font-semibold text-red-300 text-center">Sans Syllabis</span>
                <span className="text-sm font-semibold text-emerald-300 text-center">Avec Syllabis</span>
              </div>
              <div className="divide-y divide-neutral-100">
                {[...comparison, { label: "TOTAL", before: totalBefore, after: totalAfter }].map((row) => {
                  const isTotal = row.label === "TOTAL";
                  return (
                    <div key={row.label} className={`grid grid-cols-3 px-4 sm:px-6 py-4 items-center ${isTotal ? "bg-neutral-50" : ""}`}>
                      <span className={`text-xs sm:text-sm text-neutral-900 ${isTotal ? "font-bold" : "font-medium"}`}>{row.label}</span>
                      <div className="flex justify-center">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ${isTotal ? "bg-red-100 text-red-700 font-bold" : "bg-red-50 text-red-600"}`}>
                          <X className="size-3.5" />{row.before.toLocaleString("fr")}h
                        </span>
                      </div>
                      <div className="flex justify-center">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ${isTotal ? "bg-emerald-100 text-emerald-700 font-bold" : "bg-emerald-50 text-emerald-600"}`}>
                          <Check className="size-3.5" />{row.after}h
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 6. NOTRE HISTOIRE (condensée) ═══ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Notre histoire</p>
            <h2 className="text-display-xs sm:text-display-sm font-semibold text-neutral-900">
              Né d&apos;un organisme de formation de 25 ans
            </h2>
            <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
              Syllabis est né d&apos;un OF confronté à la baisse des NPEC, aux exigences
              croissantes des certificateurs et à l&apos;obligation de digitaliser les formations.
              Après avoir divisé par 7 notre propre temps de création, nous avons décidé
              de rendre l&apos;outil accessible à tous les organismes de formation.
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 7. TÉMOIGNAGE ═══ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-6">Témoignage</p>
            <blockquote className="text-display-xs sm:text-display-sm font-medium text-neutral-900 leading-snug">
              &ldquo;Avec Syllabis, nous traitons 3× plus d&apos;appels d&apos;offres
              qu&apos;avant. La génération automatique de l&apos;arborescence et du contenu
              nous a fait gagner un temps considérable sur chaque titre
              professionnel.&rdquo;
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="size-14 rounded-full bg-[#0A1E3D] flex items-center justify-center text-white font-semibold text-lg">
                DP
              </div>
              <div className="text-left">
                <p className="text-lg font-semibold text-neutral-900">Directeur pédagogique</p>
                <p className="text-md text-neutral-600">Organisme de formation, 25+ ans d&apos;expérience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 8. FAQ ═══ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">FAQ</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-neutral-900 pr-4">{faq.q}</h3>
                  <span className="shrink-0 size-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-open:text-brand-600 group-open:border-brand-200 transition-colors">
                    <svg className="size-5 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-md text-neutral-600 leading-relaxed pr-14">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 9. CTA FINAL ═══ */}
      <CTABanner
        title="Prêt à décupler la productivité de votre organisme ?"
        description="Demandez une démo et découvrez comment Syllabis divise par 7 le temps de création de vos formations."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Découvrir les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />

      {/* Reassurance sous CTA */}
      <div className="text-center pb-8 -mt-12">
        <p className="text-xs text-neutral-400">
          Sans engagement · Essai gratuit 14 jours · Démo sur votre propre référentiel
        </p>
      </div>
    </>
  );
}
