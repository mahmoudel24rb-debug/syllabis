import Image from "next/image";
import { ArrowRight, TrendDown01, CheckCircle, Globe01, Users01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "./components/CTABanner";
import FeaturesTabsSection from "./components/FeaturesTabsSection";
import ComparisonSection from "./components/ComparisonSection";

/* ─── DATA ─── */

const metrics = [
  { value: "÷10", label: "Temps de création", desc: "Un titre professionnel complet en 2-3 jours au lieu de 3-6 mois" },
  { value: "×3", label: "Appels d\u2019offres traités", desc: "Même équipe, même taux de réussite — 3× plus de réponses déposées" },
  { value: "+20%", label: "de FOAD", desc: "Part de formation à distance dans les parcours — levier direct sur les marges" },
];

const faqs = [
  { q: "À quels types de formations Syllabis est-il adapté ?", a: "Syllabis couvre les certifications enregistrées au RNCP — Titres Professionnels, BTS, CAP, CQP, BPJEPS — ainsi que les certifications personnalisées. Vous pouvez aussi créer des formations courtes ou des parcours complets sans référentiel certifiant, à partir d\u2019un simple brief ou d\u2019un document de votre choix." },
  { q: "Combien de temps faut-il pour créer une formation complète ?", a: "L\u2019arborescence pédagogique est générée en quelques minutes. Pour un titre professionnel complet, le contenu est prêt en 2 à 3 jours de travail, contre 3 à 6 mois en production classique. Les formations courtes se bouclent en quelques heures." },
  { q: "Est-ce que je garde le contrôle sur le contenu ?", a: "Intégralement. L\u2019IA génère une première version que vous pouvez modifier mot par mot, réorganiser, enrichir ou supprimer. Si un résultat ne convient pas, rejetez-le avec un commentaire et l\u2019IA régénère en tenant compte de votre retour. Rien n\u2019est publié sans votre validation." },
  { q: "Quel est le prix ? Est-ce adapté à un petit OF ?", a: "Le plan Découverte est gratuit — 1 formation active, 500 crédits IA/mois, idéal pour évaluer l\u2019outil sur un vrai projet. Le plan Pro à 149 €/mois convient aux indépendants et petites structures. Le plan Business à 449 €/mois est conçu pour les équipes. Chaque plan est sans engagement." },
  { q: "Le SCORM exporté est-il vraiment à ma marque ?", a: "Entièrement. Logo, couleurs, nom de votre organisme dans tout le package. Aucune mention de Syllabis n\u2019apparaît dans le contenu déployé auprès de vos apprenants. Les blocs interactifs — drag & drop, scénarios branchés, quiz — restent pleinement fonctionnels." },
  { q: "Est-ce compatible avec mon LMS ?", a: "Syllabis exporte en SCORM 1.2 et SCORM 2004, supportés par tous les LMS du marché : Moodle, 360Learning, Talentsoft, Docebo, Canvas et les autres. Si votre LMS supporte SCORM, il supporte Syllabis." },
  { q: "Syllabis facilite-t-il la conformité Qualiopi ?", a: "Oui. L\u2019alignement entre objectifs pédagogiques, contenus et évaluations est traçable à chaque niveau de l\u2019arborescence. Vous pouvez exporter cette traçabilité en un clic pour vos audits Qualiopi." },
  { q: "Syllabis est-il adapté aux organismes multi-sites ?", a: "Oui. Gestion multi-organisations avec espaces cloisonnés, 5 niveaux de rôles, branding par entité et suivi des crédits IA par utilisateur et par formation." },
  { q: "Comment tester Syllabis ?", a: "Le plan Découverte est gratuit, sans carte bancaire. Il vous permet de créer une formation complète pour évaluer l\u2019outil sur un vrai projet. Nous proposons aussi une démo personnalisée de 30 minutes sur votre propre référentiel." },
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
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 pl-1 pr-3.5 py-1 mb-6">
              <span className="flex items-center gap-1.5 rounded-full bg-white border border-brand-200 px-2.5 py-0.5 text-xs font-semibold text-brand-800">
                <span className="w-2 h-2 rounded-full bg-brand-400" />
                OF
              </span>
              <span className="text-sm font-medium text-brand-800">
                Créé par un organisme de formation depuis 25 ans
              </span>
            </div>

            <h1 className="text-display-md sm:text-display-lg md:text-display-xl font-semibold text-neutral-900">
              Transformez une fiche RNCP en formation e-learning complète —{" "}
              <span className="text-brand-600">prête à déployer sur votre LMS</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Vos marges baissent, les exigences des certificateurs augmentent, et chaque
              appel d&apos;offres non traité part chez un concurrent. Syllabis génère
              l&apos;arborescence, le contenu et l&apos;export SCORM depuis votre référentiel
              — vous reprenez le contrôle de votre production pédagogique.
            </p>

            {/* Certifications supportées */}
            <p className="mt-4 text-sm text-neutral-500">
              TP · BTS · CAP · CQP · BPJEPS · Certifications personnalisées · Formations libres
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              {/* TODO: remplacer par /register quand la route existe */}
              <Button color="primary" size="xl" href="/demo">
                Créer ma première formation gratuitement
              </Button>
              <Button color="secondary" size="xl" href="/demo" iconTrailing={<ArrowRight data-icon />}>
                Réserver une démo personnalisée
              </Button>
            </div>

            {/* Réassurance */}
            <p className="mt-4 text-xs text-neutral-400">
              Gratuit, sans carte bancaire · Démo sur votre propre référentiel · Réponse sous 24h
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
                      src="/screenshots/hero.png"
                      alt="Architecture pédagogique générée par Syllabis depuis une fiche RNCP"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority
                    />
                    {/* Callouts annotations - desktop only */}
                    <div className="hidden md:block">
                      <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        viewBox="0 0 1000 600"
                        preserveAspectRatio="none"
                        fill="none"
                      >
                        <path d="M 165 95 Q 175 130 175 165" stroke="#002A5A" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                        <path d="M 480 130 Q 480 180 500 220" stroke="#002A5A" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                        <path d="M 880 60 Q 920 75 920 95" stroke="#002A5A" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" />
                      </svg>

                      <div className="absolute top-[8%] left-[8%] flex items-center gap-2 rounded-full bg-[#002A5A] px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                        Arborescence pédagogique
                      </div>
                      <div className="absolute top-[14%] left-[40%] flex items-center gap-2 rounded-full bg-[#002A5A] px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                        Contenu généré par l&apos;IA
                      </div>
                      <div className="absolute top-[5%] right-[12%] flex items-center gap-2 rounded-full bg-[#002A5A] px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                        Export SCORM
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 2. BARRE DE PREUVE SOCIALE ═══ */}
      <section className="py-8 bg-neutral-50 border-y border-neutral-200">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="flex items-center justify-center gap-8 sm:gap-12">
            <span className="text-sm text-neutral-400 whitespace-nowrap">Déjà adopté par</span>
            {/* TODO: ajouter les logos clients quand disponibles */}
            <div className="flex items-center gap-8 sm:gap-12">
              <span className="text-sm font-semibold text-neutral-300">Logo 1</span>
              <span className="text-sm font-semibold text-neutral-300">Logo 2</span>
              <span className="text-sm font-semibold text-neutral-300">Logo 3</span>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 3. SECTION PROBLÈME (douleurs ICP) ═══ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Le constat</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900 max-w-3xl mx-auto">
              Les marges fondent, les exigences explosent — et vous devez produire plus avec moins
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {[
              {
                Icon: TrendDown01,
                title: "Les NPEC baissent chaque année",
                desc: "Vos niveaux de prise en charge se réduisent, mais le niveau d\u2019exigence des certificateurs ne baisse pas. Chaque titre professionnel rapporte moins qu\u2019avant.",
                bg: "bg-red-50", text: "text-red-800",
              },
              {
                Icon: CheckCircle,
                title: "Créer une formation prend des mois",
                desc: "Un titre professionnel complet, c\u2019est 1 500 à 2 000 heures de conception. Chaque appel d\u2019offres non traité part chez un concurrent plus rapide.",
                bg: "bg-orange-50", text: "text-orange-800",
              },
              {
                Icon: Globe01,
                title: "La FOAD est une obligation, pas une option",
                desc: "Les financeurs poussent la digitalisation. Sans contenu e-learning structuré, vous êtes hors jeu sur les appels d\u2019offres mixtes.",
                bg: "bg-blue-50", text: "text-blue-800",
              },
              {
                Icon: Users01,
                title: "Vos formateurs créent le contenu — et le gardent",
                desc: "Quand un formateur part, son contenu part avec lui. Pas de capitalisation, pas de continuité pédagogique.",
                bg: "bg-purple-50", text: "text-purple-800",
              },
            ].map((p) => (
              <div key={p.title} className="border border-neutral-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`shrink-0 size-10 rounded-lg ${p.bg} flex items-center justify-center`}>
                    <p.Icon className={`size-5 ${p.text}`} />
                  </div>
                  <h3 className="text-md font-semibold text-neutral-900">{p.title}</h3>
                </div>
                <p className="text-sm text-neutral-600 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 4. MÉTRIQUES ROI ═══ */}
      <section className="py-12 sm:py-16 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-0 sm:divide-x sm:divide-neutral-200">
            {metrics.map((m) => (
              <div key={m.value} className="text-center px-4">
                <div className="text-display-sm sm:text-display-md font-bold text-brand-600">{m.value}</div>
                <p className="mt-1 text-md font-semibold text-neutral-900">{m.label}</p>
                <p className="mt-0.5 text-sm text-neutral-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 5. DÉMO VIDÉO ═══ */}
      <section id="demo-video" className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Démo en 90 secondes</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Voyez le résultat en 90 secondes
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-2xl mx-auto">
              De l&apos;upload de votre référentiel à l&apos;export SCORM marque blanche
              — sans formateur externe, sans outil tiers.
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

          {/* CTA post-vidéo */}
          <div className="text-center mt-10">
            {/* TODO: remplacer par /register quand la route existe */}
            <Button color="primary" size="xl" href="/demo">
              Créer ma première formation gratuitement
            </Button>
            <p className="mt-3 text-xs text-neutral-400">Gratuit, sans carte bancaire</p>
          </div>
        </div>
      </section>

      {/* ═══ 6. FONCTIONNALITÉS (onglets) ═══ */}
      <FeaturesTabsSection />

      {/* ═══ 7. AVANT / APRÈS (panneau navy + tableau) ═══ */}
      <ComparisonSection />

      {/* ═══ 8. TÉMOIGNAGES ═══ */}
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
                Aujourd&apos;hui, l&apos;arborescence est générée en une matinée et le contenu en
                quelques jours. On a pu répondre à trois appels d&apos;offres qu&apos;on aurait dû
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
                  <p className="text-xs text-neutral-500">Co-fondateur, MadSkills</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ 9. COMMENT ÇA MARCHE ═══ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Comment ça marche</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Trois étapes pour passer du référentiel à la formation déployée
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Uploadez votre référentiel",
                desc: "Fiche RNCP, programme existant ou simple brief — Syllabis détecte la structure et génère l\u2019arborescence complète en quelques minutes.",
              },
              {
                step: "2",
                title: "Affinez et enrichissez",
                desc: "Modifiez le contenu généré, ajoutez vos blocs interactifs, générez vidéos et podcasts. Vous gardez le contrôle total.",
              },
              {
                step: "3",
                title: "Exportez et déployez",
                desc: "Un clic pour exporter en SCORM marque blanche, compatible avec votre LMS. Vos apprenants accèdent à la formation sous votre marque.",
              },
            ].map((s) => (
              <div key={s.step} className="text-center">
                <div className="mx-auto mb-4 flex items-center justify-center size-12 rounded-full bg-brand-600 text-white text-lg font-bold">
                  {s.step}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">{s.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 10. FAQ ═══ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
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

      {/* ═══ 11. CTA FINAL ═══ */}
      <CTABanner
        title="Votre prochain titre professionnel est prêt dans 3 jours"
        description="Créez votre compte gratuitement et lancez votre première génération — ou réservez une démo sur votre propre référentiel."
        primaryLabel="Commencer gratuitement"
        primaryHref="/demo"
        secondaryLabel="Réserver ma démo"
        secondaryHref="/demo"
      />

      {/* Réassurance sous CTA */}
      <div className="text-center pb-8 -mt-12">
        <p className="text-xs text-neutral-400">
          Gratuit, sans carte bancaire · Démo sur votre propre référentiel · Réponse sous 24h
        </p>
      </div>
    </>
  );
}
