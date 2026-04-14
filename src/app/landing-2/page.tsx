import Image from "next/image";
import { Share07, Edit04, Download01, Stars01, TrendDown01, CheckCircle, Globe01, Users01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "../components/CTABanner";
import FeaturesTabsSection from "../components/FeaturesTabsSection";
import ComparisonSection from "../components/ComparisonSection";
import ArcadeEmbed from "../components/ArcadeEmbed";

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
    Icon: Stars01,
    title: "Génération IA",
    desc: "4 modèles IA entraînés pour analyser vos référentiels et générer du contenu pédagogique de qualité professionnelle.",
  },
];

const enjeux = [
  { Icon: TrendDown01, label: "Réduction des niveaux de prise en charge (NPEC)" },
  { Icon: CheckCircle, label: "Exigences des certificateurs de plus en plus fortes" },
  { Icon: Globe01, label: "Développement des formations ouvertes à distance (FOAD)" },
  { Icon: Users01, label: "Dépendance aux formateurs externes" },
];

const kpis = [
  { value: "+20%", label: "de FOAD dans nos formations" },
  { value: "100%", label: "maîtrise du contenu dispensé" },
  { value: "×3", label: "appels d'offres traités" },
  { value: "÷7", label: "temps de création d'un titre pro" },
];

/* ─── PAGE ─── */

export default function Landing2() {
  return (
    <>
      {/* ═══ 1. HERO ═══ */}
      <section className="relative pt-16 md:pt-24 pb-16 md:pb-24">
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
              <Button color="primary" size="xl" href="/demo">
                Demander une démo
              </Button>
              <div className="flex flex-col items-center gap-1">
                <ArcadeEmbed />
                <p className="text-xs font-medium text-red-500">Modifier vers titre FPA + Rendu Scorm</p>
              </div>
            </div>

            {/* Réassurance */}
            <p className="mt-4 text-xs text-neutral-400">
              Sans engagement · Démo sur votre propre référentiel · Réponse sous 24h
            </p>
          </div>
        </div>
      </section>

      {/* ═══ 2. CE QUE FAIT SYLLABIS (4 cards) ═══ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
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
          <div className="text-center">
            <Button color="primary" size="xl" href="/demo">
              Demander une démo
            </Button>
          </div>
        </div>
      </section>

      {/* ═══ 4. FONCTIONNALITÉS DÉTAILLÉES ═══ */}
      <FeaturesTabsSection />

      {/* CTA post-features */}
      <div className="text-center py-12 bg-neutral-50">
        <Button color="primary" size="xl" href="/contact">
          Créer ma première formation gratuitement
        </Button>
        <p className="mt-3 text-xs text-neutral-400">Gratuit, sans carte bancaire</p>
      </div>

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
              { q: "À quels types de formations Syllabis est-il adapté ?", a: "Syllabis couvre les certifications enregistrées au RNCP (Titres Professionnels, BTS, CAP, CQP, BPJEPS) ainsi que les certifications personnalisées. Vous pouvez aussi créer des formations courtes ou des parcours complets sans référentiel certifiant, à partir d\u2019un simple brief ou d\u2019un document de votre choix." },
              { q: "Combien de temps faut-il pour créer une formation complète ?", a: "L\u2019arborescence pédagogique est générée en une journée. Pour un titre professionnel complet, le contenu est prêt en moins de 3 semaines, contre jusqu\u2019à 12 mois en production classique. Les formations courtes se bouclent en quelques jours." },
              { q: "Est-ce que je garde le contrôle sur le contenu ?", a: "Intégralement. L\u2019IA génère une première version que vous pouvez modifier mot par mot, réorganiser, enrichir ou supprimer. Si un résultat ne convient pas, rejetez-le avec un commentaire et l\u2019IA régénère en tenant compte de votre retour." },
              { q: "Y a-t-il une offre adaptée à ma structure ?", a: "Oui. Syllabis propose une offre gratuite pour évaluer l\u2019outil, une offre pour les indépendants et petits organismes, une offre pour les équipes de conception, et une offre sur mesure pour les grands groupes et universités. Chaque offre est sans engagement." },
              { q: "Le SCORM exporté est-il vraiment à ma marque ?", a: "Entièrement. Logo, couleurs, nom de votre organisme dans tout le package. Aucune mention de Syllabis n\u2019apparaît dans le contenu déployé auprès de vos apprenants. Les blocs interactifs (drag & drop, scénarios branchés, quiz) restent pleinement fonctionnels." },
              { q: "Est-ce compatible avec mon LMS ?", a: "Syllabis exporte en SCORM 1.2 et SCORM 2004, supportés par tous les LMS du marché : Moodle, 360Learning, Talentsoft, Docebo, Canvas et les autres. Si votre LMS supporte SCORM, il supporte Syllabis." },
              { q: "Syllabis facilite-t-il la conformité Qualiopi ?", a: "Oui. L\u2019alignement entre objectifs pédagogiques, contenus et évaluations est traçable à chaque niveau de l\u2019arborescence. Un export Excel permet de fournir cette traçabilité complète en un clic pour vos audits Qualiopi." },
              { q: "Comment tester Syllabis ?", a: "Le plan Découverte est gratuit, sans carte bancaire. Il vous permet de créer une formation complète pour évaluer l\u2019outil sur un vrai projet. Nous proposons aussi une démo personnalisée de 30 minutes sur votre propre référentiel." },
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
        description="Demandez une démo et découvrez comment Syllabis accélère la création de vos formations."
        primaryLabel="Demander une démo"
        primaryHref="/demo"
        secondaryLabel="Nous contacter"
        secondaryHref="/contact"
      />
    </>
  );
}
