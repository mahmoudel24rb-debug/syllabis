import Image from "next/image";
import { Check, X, ArrowRight, Share07, Edit04, FileDownload01, Stars01, TrendDown01, Shield01, Monitor01, Users01 } from "@untitledui/icons";
import type { ComponentType } from "react";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "./components/CTABanner";
import BrowserMockup from "./components/BrowserMockup";

const problems: { icon: ComponentType<{ className?: string }>; title: string; desc: string }[] = [
  {
    icon: TrendDown01,
    title: "Réduction des NPEC",
    desc: "Baisse des niveaux de prise en charge, compression des marges.",
  },
  {
    icon: Shield01,
    title: "Exigences certificateurs",
    desc: "Les certificateurs demandent toujours plus de preuves de conformité.",
  },
  {
    icon: Monitor01,
    title: "Développement de la FOAD",
    desc: "Obligation de digitaliser les formations ouvertes à distance.",
  },
  {
    icon: Users01,
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

const features: { icon: ComponentType<{ className?: string }>; title: string; description: string }[] = [
  {
    icon: Share07,
    title: "Arborescence pédagogique",
    description: "À partir d\u2019une fiche RNCP, Syllabis vous permet de créer vos blocs, modules, séquences et séances pédagogiques.",
  },
  {
    icon: Edit04,
    title: "Création de contenu",
    description: "Création du contenu des formations pour les séances en FOAD et en présentiel. Génération d\u2019images, vidéos, quiz...",
  },
  {
    icon: FileDownload01,
    title: "Export SCORM",
    description: "Export en format SCORM 1.2 & 2004 pour utilisation dans n\u2019importe quel LMS : Moodle, Canvas, Docebo, TalentLMS...",
  },
  {
    icon: Stars01,
    title: "Génération IA",
    description: "4 modèles IA entraînés pour analyser vos référentiels et générer du contenu pédagogique de qualité professionnelle.",
  },
];

export default function Home() {
  return (
    <>
      {/* ══════════════════════════════════════════════
          1. HERO — cadre landing-page-01
          ══════════════════════════════════════════════ */}
      <section className="relative pt-16 md:pt-24">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />

        <div className="relative mx-auto max-w-container px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300 bg-amber-50 pl-1 pr-3.5 py-1 mb-6">
              <span className="flex items-center gap-1.5 rounded-full bg-white border border-amber-300 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                Nouveau
              </span>
              <span className="text-sm font-medium text-amber-800">
                Créé par un OF, pour les OF
              </span>
            </div>

            <h1 className="text-display-md sm:text-display-lg md:text-display-xl font-semibold text-neutral-900">
              Le copilote IA des organismes de formation
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Pour une conformité absolue et une productivité décuplée. Créé par
              un organisme de formation, pour les organismes de formation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button color="secondary" size="xl" href="#decouvrir" iconTrailing={<ArrowRight data-icon />}>
                Découvrir Syllabis
              </Button>
              <Button color="primary" size="xl" href="/demo">
                Demander une démo
              </Button>
            </div>
          </div>
        </div>

        {/* Mockup — cadre 3D avec fond gradient pour contraste */}
        <div className="relative mt-16">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-neutral-100" />
          <div className="relative mx-auto h-[360px] w-full max-w-container overflow-hidden px-4 md:h-[496px] md:px-8">
            <div className="mx-auto w-full max-w-[280px] md:max-w-none">
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

      {/* ══════════════════════════════════════════════
          2. QUI SOMMES-NOUS — style landing-page-06
          ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-xl mb-12 md:mb-16">
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

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-16 items-start">
            <div>
              <div className="space-y-8 mb-12">
                {problems.map((p) => (
                  <div key={p.title} className="flex gap-4">
                    <div className="shrink-0 flex items-center justify-center size-12 rounded-xl bg-amber-50 border border-amber-200">
                      <p.icon className="size-6 text-amber-600" />
                    </div>
                    <div>
                      <h3 className="text-md font-semibold text-neutral-900">{p.title}</h3>
                      <p className="mt-1 text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl bg-[#0A1E3D] p-6 sm:p-8 mb-12">
                <p className="text-md text-white/85 leading-relaxed">
                  Ces bouleversements ont un impact direct sur nos marges et la rentabilité de nos structures.
                </p>
                <p className="text-lg font-semibold text-white mt-3">
                  Ainsi nous avons lancé la création de Syllabis en 2025.
                </p>
              </div>

              <h3 className="text-lg font-semibold text-neutral-900 mb-6">Un outil permettant de :</h3>
              <div className="space-y-6">
                {solutions.map((s, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="shrink-0 flex items-center justify-center size-12 rounded-xl bg-[#0A1E3D]/5 border border-[#0A1E3D]/10">
                      <span className="text-md font-bold text-[#0A1E3D]">{i + 1}</span>
                    </div>
                    <p className="text-md text-neutral-600 leading-relaxed pt-2">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-28">
              <div className="rounded-2xl border border-neutral-200 bg-white shadow-lg overflow-hidden">
                <div className="px-6 py-5 border-b border-neutral-100">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900">Résultats concrets</h3>
                      <p className="text-sm text-neutral-500 mt-0.5">Nos chiffres après Syllabis</p>
                    </div>
                    <span className="rounded-full bg-amber-50 border border-amber-200 px-2.5 py-0.5 text-xs font-medium text-amber-800">2025</span>
                  </div>
                </div>
                <div className="px-6 py-6 space-y-5">
                  {results.map((r) => (
                    <div key={r.value} className="flex items-start gap-3">
                      <Check className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-lg font-bold text-[#0A1E3D]">{r.value}</span>
                        <span className="text-md text-neutral-700 ml-1.5">{r.title}</span>
                        <p className="text-sm text-neutral-500 mt-0.5">{r.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="px-6 pb-6">
                  <Button color="primary" size="xl" href="/demo" className="w-full">
                    Demander une démo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          3. CTA ESSAI GRATUIT — style landing-page-09
          ══════════════════════════════════════════════ */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="flex flex-col gap-x-8 gap-y-6 rounded-2xl bg-neutral-50 px-6 py-10 lg:flex-row lg:items-center lg:p-16">
            <div className="flex max-w-3xl flex-1 flex-col">
              <h2 className="text-display-sm font-semibold text-neutral-900">
                Essayez Syllabis pendant 14 jours
              </h2>
              <p className="mt-4 text-lg text-neutral-600">
                Rejoignez les organismes de formation qui ont déjà transformé leur productivité avec Syllabis.
              </p>
            </div>
            <div className="flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-start shrink-0">
              <Button color="secondary" size="xl" href="/fonctionnalites">
                En savoir plus
              </Button>
              <Button color="primary" size="xl" href="/demo">
                Commencer l&apos;essai gratuit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          4. CE QUE FAIT SYLLABIS
          ══════════════════════════════════════════════ */}
      <section id="decouvrir" className="relative overflow-hidden pt-16 pb-16 md:pt-24 md:pb-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-lg">
              <p className="text-sm font-semibold text-brand-600 mb-3">Ce que fait Syllabis</p>
              <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
                De la fiche RNCP à la formation complète
              </h2>
              <p className="mt-5 text-lg text-neutral-600 leading-relaxed">
                Syllabis vous assiste dans la création de vos formations, de
                l&apos;arborescence pédagogique jusqu&apos;à la création de contenu, et vous assure une{" "}
                <strong className="text-neutral-900">conformité absolue</strong>{" "}
                entre les attentes des certificateurs et la validation des compétences des apprenants.
              </p>
              <div className="mt-8">
                <Button color="primary" size="lg" href="/fonctionnalites" iconTrailing={<ArrowRight data-icon />}>
                  Découvrir les fonctionnalités
                </Button>
              </div>
            </div>

            {/* Mockup — cadre 3D template (pas coupé) */}
            <div className="relative lg:-mr-[10%]">
              <div className="rounded-[23.89px] bg-primary p-[3px] shadow-lg ring-[1.5px] ring-utility-neutral-300 ring-inset md:rounded-[32px] md:p-1 md:ring-[2px]">
                <div className="rounded-[20.91px] bg-primary p-1 shadow-modern-mockup-inner-sm md:rounded-[28px] md:p-[5.4px] md:shadow-modern-mockup-inner-lg">
                  <div className="relative overflow-hidden rounded-[17.92px] bg-utility-neutral-50 ring-[1.5px] ring-utility-neutral-200 md:rounded-[24px] md:ring-[2px]">
                    <Image
                      src="/screenshots/mindmap.jpg"
                      alt="Arborescence pédagogique — Mind Map Syllabis"
                      width={1280}
                      height={800}
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          5. AVANT / APRÈS — refonte
          ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          {/* Header */}
          <div className="max-w-xl mb-12 md:mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">Avant / Après</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Divisez par 7 le temps de création
            </h2>
            <p className="mt-5 text-lg text-neutral-600">
              Exemple avec le titre : <strong>Formateur pour adultes</strong>
            </p>
          </div>

          {/* 2 colonnes : tableau gauche + KPIs droite */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-start">
            {/* Tableau gauche */}
            <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
              <div className="grid grid-cols-3 bg-[#0A1E3D] px-4 sm:px-6 py-3">
                <span className="text-sm font-semibold text-white">Étape</span>
                <span className="text-sm font-semibold text-red-300 text-center">Sans Syllabis</span>
                <span className="text-sm font-semibold text-emerald-300 text-center">Avec Syllabis</span>
              </div>
              <div className="divide-y divide-neutral-100">
                {comparison.map((row) => {
                  const isTotal = row.label === "TOTAL";
                  return (
                    <div key={row.label} className={`grid grid-cols-3 px-4 sm:px-6 py-4 items-center ${isTotal ? "bg-neutral-50" : ""}`}>
                      <span className={`text-sm text-neutral-900 ${isTotal ? "font-bold" : "font-medium"}`}>{row.label}</span>
                      <div className="flex items-center justify-center">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ${isTotal ? "bg-red-100 text-red-700 font-bold" : "bg-red-50 text-red-600"}`}>
                          <X className="size-3.5" />
                          {row.before}
                        </span>
                      </div>
                      <div className="flex items-center justify-center">
                        <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ${isTotal ? "bg-emerald-100 text-emerald-700 font-bold" : "bg-emerald-50 text-emerald-600"}`}>
                          <Check className="size-3.5" />
                          {row.after}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* KPIs droite — grille 2x2 */}
            <div className="grid grid-cols-2 gap-4">
              {results.map((r) => (
                <div key={r.value} className="rounded-2xl border border-neutral-200 bg-white p-6">
                  <div className="text-display-xs sm:text-display-sm font-bold text-[#0A1E3D]">{r.value}</div>
                  <p className="mt-2 text-md font-semibold text-neutral-900">{r.title}</p>
                  <p className="mt-1 text-sm text-neutral-500 leading-snug">{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          6. FONCTIONNALITÉS — 4 blocs + mockup
          ══════════════════════════════════════════════ */}
      <section id="fonctionnalites" className="overflow-hidden bg-white pt-16 lg:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="text-sm font-semibold text-brand-600 mb-3">Fonctionnalités</p>
              <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
                Principales fonctionnalités
              </h2>
              <p className="mt-5 text-lg text-neutral-600 max-w-lg">
                Tout ce dont vous avez besoin pour créer, structurer et déployer vos formations e-learning.
              </p>

              <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
                {features.map((f) => (
                  <div key={f.title}>
                    <div className="flex items-center justify-center size-12 rounded-xl bg-[#0A1E3D]/5 border border-[#0A1E3D]/10 mb-4">
                      <f.icon className="size-6 text-[#0A1E3D]" />
                    </div>
                    <h3 className="text-md font-semibold text-neutral-900 mb-1">{f.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Mockup — navigateur Safari */}
            <div className="relative lg:-mr-[15%] xl:-mr-[20%]">
              <BrowserMockup
                src="/screenshots/editor.png"
                alt="Éditeur de contenu Syllabis"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════
          7. FAQ
          ══════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">FAQ</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Questions fréquentes
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
              Tout ce que vous devez savoir sur Syllabis.
            </p>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {[
              { q: "À quels types de certifications Syllabis est-il adapté ?", a: "Syllabis supporte les titres professionnels (TP), BTS, CAP, CQP, BPJEPS et les certifications personnalisées. L\u2019IA analyse la fiche RNCP et détecte automatiquement la structure." },
              { q: "Combien de temps faut-il pour créer une formation complète ?", a: "En moyenne, l\u2019arborescence pédagogique est générée en quelques minutes. La création du contenu complet prend entre 1h et 8h selon la complexité du titre, contre plusieurs centaines d\u2019heures manuellement." },
              { q: "Est-ce que je garde le contrôle sur le contenu généré ?", a: "Absolument. L\u2019IA génère une première version que vous pouvez modifier, réorganiser et enrichir librement. Vous restez maître de votre contenu pédagogique à 100%." },
              { q: "Comment fonctionne l\u2019export SCORM ?", a: "Syllabis exporte en SCORM 1.2 et 2004, compatibles avec tous les LMS du marché : Moodle, Canvas, Docebo, TalentLMS, etc. Le tracking (score, complétion, temps) est inclus." },
              { q: "Syllabis est-il adapté aux organismes multi-sites ?", a: "Oui. Notre offre Enterprise inclut la gestion multi-organisations avec branding personnalisé, 5 niveaux de rôles et un suivi des coûts IA par entité." },
              { q: "Peut-on tester Syllabis avant de s\u2019engager ?", a: "Oui, nous proposons une démo personnalisée de 30 minutes où nous générons une formation à partir de votre propre référentiel. Sans engagement." },
            ].map((faq) => (
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

      {/* ══════════════════════════════════════════════
          8. CTA FINAL
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
