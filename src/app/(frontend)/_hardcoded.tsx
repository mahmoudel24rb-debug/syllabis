import Image from "next/image";
import { Share07, Edit04, Download01, Calendar, TrendDown01, CheckCircle, Globe01, Users01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "./components/CTABanner";
import ComparisonSection from "./components/ComparisonSection";
import ArcadeEmbed from "./components/ArcadeEmbed";
import HeroSlider from "./components/HeroSlider";

/* ─── DATA ─── */

const whatWeDoFeatures = [
  {
    Icon: Share07,
    title: "Arborescence pédagogique",
    desc: "À partir d'une fiche RNCP, créez vos blocs, modules, séquences et séances.",
  },
  {
    Icon: Edit04,
    title: "Création de contenu",
    desc: "Contenu pour séances FOAD et présentiel : images, vidéos, quiz, scénarios branchés...",
  },
  {
    Icon: Download01,
    title: "Export SCORM",
    desc: "Export SCORM 1.2 & 2004 compatible Moodle, Canvas, Docebo, 360Learning...",
  },
  {
    Icon: Calendar,
    title: "Pilotage opérationnel",
    desc: "Planifiez vos séances, assignez vos formateurs et suivez vos heures et votre charge de production en temps réel.",
  },
];

const enjeux = [
  { Icon: TrendDown01, label: "Réduction des niveaux de prise en charge (NPEC)" },
  { Icon: CheckCircle, label: "Exigences des certificateurs de plus en plus fortes" },
  { Icon: Globe01, label: "Développement des formations ouvertes à distance (FOAD)" },
  { Icon: Users01, label: "Dépendance aux formateurs externes" },
];

const kpis = [
  { value: "5 à 15%+", label: "de FOAD dans nos formations" },
  { value: "100%", label: "maîtrise du contenu dispensé" },
  { value: "×3", label: "appels d'offres traités" },
  { value: "÷7", label: "temps de création d'un titre pro" },
];

/* ─── PAGE ─── */

export default function HardcodedHome() {
  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative pt-16 md:pt-24">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 pl-1 pr-3.5 py-1 mb-6">
              <span className="flex items-center gap-1.5 rounded-full bg-white border border-brand-200 px-2.5 py-0.5 text-xs font-semibold text-brand-800">
                <span className="w-2 h-2 rounded-full bg-brand-400" />
                OF
              </span>
              <span className="text-sm font-medium text-brand-800">
                Créé par un OF, pour les OF
              </span>
            </div>

            <h1 className="text-display-md sm:text-display-lg md:text-display-xl font-semibold text-neutral-900">
              Le copilote IA des{" "}
              <span className="text-brand-600">organismes de formation</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Pour une conformité absolue et une productivité décuplée.
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button color="primary" size="xl" href="/essai-gratuit">
                Essai gratuit 14 jours
              </Button>
              <Button color="secondary" size="xl" href="/demo">
                Demander une démo
              </Button>
              <ArcadeEmbed />
            </div>

            {/* Réassurance */}
            <p className="mt-4 text-xs text-neutral-400">
              Sans carte bancaire · Sans engagement · Création de compte en 30 secondes
            </p>
          </div>
        </div>

        {/* Hero mockup */}
        <div className="relative mt-10 md:mt-16 -mb-20 md:-mb-32">
          <div className="relative mx-auto w-full max-w-container px-4 md:px-8">
            <div className="rounded-[24px] bg-white p-[3px] shadow-[0_12px_24px_-4px_rgba(0,0,0,0.1),0_4px_8px_-2px_rgba(0,0,0,0.06)] border-[2px] border-neutral-200 md:rounded-[32px] md:p-1">
              <div className="rounded-[21px] bg-white p-1 shadow-[inset_0_0_4px_1.5px_rgba(10,13,18,0.08),inset_0_0_3px_1.5px_rgba(10,13,18,0.03)] md:rounded-[28px] md:p-[5.4px]">
                <div className="relative rounded-[18px] bg-neutral-50 md:rounded-[24px] overflow-hidden">
                  {/* Mobile : image statique. Preload injecté côté page
                      (`(frontend)/page.tsx`) avec `media="(max-width: 767px)"`.
                      Pas de `loading="eager"` ni `fetchPriority="high"` ici :
                      Next émet alors un 2e preload sans media, desktop
                      télécharge l'image mobile inutilement. Le preload manuel
                      page-side fait le boulot pour le LCP mobile. */}
                  <div className="md:hidden">
                    <Image
                      src="/screenshots/hero-apres2.png"
                      alt="Formation complète générée par Syllabis"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      sizes="100vw"
                    />
                  </div>
                  {/* Desktop : slider before/after — aspect-ratio fixé pour
                      éviter le CLS pendant l'hydration de react-compare-slider
                      (qui est dynamic+ssr:false, donc 0 height au SSR). */}
                  <div className="hidden md:block aspect-[1824/891] relative">
                    <HeroSlider />
                    <div className="pointer-events-none absolute top-4 left-4 z-20 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-neutral-700 shadow-sm backdrop-blur-sm">
                      Avant
                    </div>
                    <div className="pointer-events-none absolute top-4 right-4 z-20 rounded-full bg-brand-600 px-3 py-1 text-xs font-semibold text-white shadow-sm">
                      Après
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. CE QUE FAIT SYLLABIS (4 cards) ═══ */}
      <section className="relative z-10 py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Ce que fait Syllabis</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              De la fiche RNCP à la formation complète
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-3xl mx-auto">
              Syllabis vous assiste dans la création de vos formations, de l&apos;arborescence
              pédagogique jusqu&apos;à la création de contenu, et vous assure une conformité
              absolue entre les attentes des certificateurs et la validation des compétences
              des apprenants.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whatWeDoFeatures.map((f) => (
              <div key={f.title} className="rounded-2xl border border-neutral-200 bg-white p-6 text-center">
                <div className="mx-auto mb-4 flex items-center justify-center size-12 rounded-xl bg-brand-50 border border-brand-100">
                  <f.Icon className="size-6 text-brand-600" />
                </div>
                <h3 className="text-md font-semibold text-neutral-900 mb-2">{f.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button color="secondary" size="lg" href="/fonctionnalites">
              Découvrez toutes nos fonctionnalités
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 3. QUI SOMMES-NOUS ═══ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Qui sommes-nous</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Organisme de formation depuis 25 ans
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
              Nous assistons aux premières loges à la mutation de notre secteur.
              Ces bouleversements ont un impact direct sur nos marges et la
              rentabilité de nos structures.
            </p>
          </div>

          {/* 4 enjeux */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto mb-12">
            {enjeux.map((e) => (
              <div key={e.label} className="flex items-center gap-3 border border-neutral-200 rounded-xl p-5">
                <div className="shrink-0 size-10 rounded-lg bg-brand-50 flex items-center justify-center">
                  <e.Icon className="size-5 text-brand-600" />
                </div>
                <span className="text-sm text-neutral-700">{e.label}</span>
              </div>
            ))}
          </div>

          {/* Citation */}
          <div className="max-w-3xl mx-auto mb-12">
            <blockquote className="text-lg text-neutral-700 leading-relaxed font-medium italic text-center border-l-0 border-t-2 border-b-2 border-brand-600 py-6">
              &ldquo;Ainsi nous avons lancé la création de Syllabis en 2025, pour
              reprendre le contrôle de notre production pédagogique.&rdquo;
            </blockquote>
          </div>

          {/* 4 KPIs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10">
            {kpis.map((k) => (
              <div key={k.value} className="border border-neutral-200 rounded-xl bg-neutral-50 p-5 text-center">
                <div className="text-display-xs font-bold text-brand-600">{k.value}</div>
                <p className="text-xs text-neutral-500 mt-1">{k.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button color="primary" size="xl" href="/essai-gratuit">
              Essai gratuit 14 jours
            </Button>
            <Button color="secondary" size="xl" href="/demo">
              Demander une démo
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 5. AVANT / APRÈS ═══ */}
      <ComparisonSection />

      {/* ═══ 6. TÉMOIGNAGES ═══ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Témoignages</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Ils gagnent des heures chaque semaine avec Syllabis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* TODO: faire valider les témoignages reformulés par les intéressés */}

            {/* Emmanuelle */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col">
              <blockquote className="text-md text-neutral-700 leading-relaxed flex-1">
                &ldquo;Avant Syllabis, structurer un titre professionnel nous prenait 4 à 5 mois.
                Aujourd&apos;hui, l&apos;arborescence est générée en une journée et le contenu en
                moins d&apos;un mois. On a pu répondre à trois appels d&apos;offres qu&apos;on aurait dû
                refuser l&apos;année dernière.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-neutral-100">
                <Image src="/temoins/emmanuelle.webp" alt="Emmanuelle Buard" width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Emmanuelle Buard</p>
                  <p className="text-xs text-neutral-500">Directrice Pédagogique, CFA Pikango</p>
                </div>
              </div>
            </div>

            {/* Jérémy */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col">
              <blockquote className="text-md text-neutral-700 leading-relaxed flex-1">
                &ldquo;Ce qui nous a convaincus, c&apos;est que Syllabis a été construit par des gens
                qui connaissent la réalité des OF. Les blocs SCORM fonctionnent vraiment, les exports
                sont à notre marque, et l&apos;IA comprend la logique RNCP. Ce n&apos;est pas un outil
                généraliste qu&apos;on tord pour faire de la formation.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-neutral-100">
                <Image src="/temoins/jeremy.jpg" alt="Jérémy Wild" width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Jérémy Wild</p>
                  <p className="text-xs text-neutral-500">Co-fondateur, MadSkills - Experts en Digital Learning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 7. FAQ ═══ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">FAQ</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Questions fréquentes
            </h2>
          </div>
          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {[
              { q: "À quels types de formations Syllabis est-il adapté ?", a: "Syllabis couvre les certifications enregistrées au RNCP (Titres Professionnels, BTS, CAP, CQP, BPJEPS) ainsi que les certifications personnalisées. Vous pouvez aussi créer des formations courtes ou des parcours complets sans référentiel certifiant, à partir d’un simple brief ou d’un document de votre choix." },
              { q: "Combien de temps faut-il pour créer une formation complète ?", a: "L’arborescence pédagogique est générée en une journée. Pour un titre professionnel complet, le contenu est prêt en moins de 3 semaines, contre jusqu’à 12 mois en production classique. Les formations courtes se bouclent en quelques jours." },
              { q: "Est-ce que je garde le contrôle sur le contenu ?", a: "Intégralement. L’IA génère une première version que vous pouvez modifier mot par mot, réorganiser, enrichir ou supprimer. Si un résultat ne convient pas, rejetez-le avec un commentaire et l’IA régénère en tenant compte de votre retour." },
              { q: "Y a-t-il une offre adaptée à ma structure ?", a: "Oui. Syllabis propose une offre gratuite pour évaluer l’outil, une offre pour les indépendants et petits organismes, une offre pour les équipes de conception, et une offre sur mesure pour les grands groupes et universités. Chaque offre est sans engagement." },
              { q: "Le SCORM exporté est-il vraiment à ma marque ?", a: "Entièrement. Logo, couleurs, nom de votre organisme dans tout le package. Aucune mention de Syllabis n’apparaît dans le contenu déployé auprès de vos apprenants. Les blocs interactifs (drag & drop, scénarios branchés, quiz) restent pleinement fonctionnels." },
              { q: "Est-ce compatible avec mon LMS ?", a: "Syllabis exporte en SCORM 1.2 et SCORM 2004, supportés par tous les LMS du marché : Moodle, 360Learning, Talentsoft, Docebo, Canvas et les autres. Si votre LMS supporte SCORM, il supporte Syllabis." },
              { q: "Syllabis facilite-t-il la conformité Qualiopi ?", a: "Oui. L’alignement entre objectifs pédagogiques, contenus et évaluations est traçable à chaque niveau de l’arborescence. Un export Excel permet de fournir cette traçabilité complète en un clic pour vos audits Qualiopi." },
              { q: "Comment tester Syllabis ?", a: "Le plan Découverte est gratuit, sans carte bancaire. Il vous permet de créer une formation complète pour évaluer l’outil sur un vrai projet. Nous proposons aussi une démo personnalisée de 30 minutes sur votre propre référentiel." },
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

      {/* ═══ 8. CTA FINAL ═══ */}
      <CTABanner
        title="Prêt à transformer votre production pédagogique ?"
        description="Activez votre essai gratuit en 30 secondes ou réservez une démo personnalisée sur votre référentiel."
        primaryLabel="Activer mon essai gratuit"
        primaryHref="/essai-gratuit"
        secondaryLabel="Demander une démo"
        secondaryHref="/demo"
      />
    </>
  );
}
