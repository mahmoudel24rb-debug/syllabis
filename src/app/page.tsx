import Image from "next/image";
import { ArrowRight, Stars01, Share07, TrendDown01, CheckCircle, Globe01, Users01 } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "./components/CTABanner";
import FeaturesTabsSection from "./components/FeaturesTabsSection";
import ComparisonSection from "./components/ComparisonSection";

/* ─── DATA ─── */

const metrics = [
  { value: "÷7", label: "Temps de création", desc: "d\u2019un titre professionnel complet" },
  { value: "×3", label: "Appels d\u2019offres traités", desc: "avec un taux de conversion de 20-30%" },
  { value: "+20%", label: "de FOAD", desc: "en moyenne dans nos formations" },
  { value: "100%", label: "Maîtrise du contenu", desc: "dispensé aux apprenants" },
];

const faqs = [
  { q: "À quels types de certifications Syllabis est-il adapté ?", a: "Titres professionnels (TP), BTS, CAP, CQP, BPJEPS et certifications personnalisées. L\u2019IA analyse la fiche RNCP et détecte automatiquement la structure." },
  { q: "Combien de temps faut-il pour créer une formation complète ?", a: "L\u2019arborescence est générée en quelques minutes. Le contenu complet prend entre 1h et 8h selon la complexité, contre plusieurs centaines d\u2019heures manuellement." },
  { q: "Est-ce que je garde le contrôle sur le contenu généré ?", a: "Oui. L\u2019IA génère une première version que vous pouvez modifier, réorganiser et enrichir librement. Vous restez maître à 100%." },
  { q: "Comment fonctionne l\u2019export SCORM ?", a: "Export SCORM 1.2 et 2004, compatible tous LMS. Le package est à votre marque (logo, couleurs) avec chat IA embarqué pour les apprenants." },
  { q: "Syllabis est-il adapté aux organismes multi-sites ?", a: "Oui. Gestion multi-organisations avec 5 niveaux de rôles, branding par entité et suivi des coûts IA par utilisateur." },
  { q: "Peut-on tester Syllabis avant de s\u2019engager ?", a: "Oui, essai gratuit 14 jours. Nous proposons aussi une démo personnalisée de 30 minutes sur votre propre référentiel." },
  { q: "Syllabis aide-t-il à la conformité Qualiopi ?", a: "Oui. L\u2019alignement entre objectifs pédagogiques, contenus et évaluations est traçable et exportable en un clic, ce qui facilite les audits Qualiopi." },
  { q: "Le SCORM exporté est-il à ma marque ?", a: "Entièrement. Logo, couleurs, nom de votre organisme. Aucune mention de Syllabis n\u2019apparaît dans le package déployé auprès des apprenants." },
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
              Créez une formation certifiante complète en{" "}
              <span className="text-brand-600">7× moins de temps</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Uploadez votre fiche RNCP, Syllabis génère l&apos;arborescence complète,
              le contenu, les médias et l&apos;export SCORM, en quelques heures au lieu de
              plusieurs semaines.
            </p>

            {/* Social proof line */}
            <p className="mt-4 text-sm text-neutral-500">
              Utilisé par des organismes de formation : TP, BTS, CAP, CQP, BPJEPS
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
                      src="/screenshots/hero.png"
                      alt="Architecture pédagogique générée par Syllabis"
                      width={1920}
                      height={1080}
                      className="w-full h-auto"
                      priority
                    />
                    {/* Callouts annotations - desktop only */}
                    <div className="hidden md:block">
                      <div className="absolute top-[8%] left-[2%] flex items-center gap-2 rounded-full bg-[#0A1E3D] px-3 py-1.5 text-xs font-medium text-white shadow-lg">
                        <Share07 className="size-3.5" />
                        Arborescence pédagogique
                      </div>
                      <div className="absolute top-[18%] left-[35%] flex items-center gap-2 rounded-full bg-[#0A1E3D] px-3 py-1.5 text-xs font-medium text-white shadow-lg animate-pulse">
                        <Stars01 className="size-3.5" />
                        Contenu généré par l&apos;IA
                      </div>
                      <div className="absolute top-[4%] right-[2%] flex items-center gap-2 rounded-full bg-[#0A1E3D] px-3 py-1.5 text-xs font-medium text-white shadow-lg animate-pulse">
                        <ArrowRight className="size-3.5" />
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

      {/* ═══ 4. FONCTIONNALITÉS (onglets) ═══ */}
      <FeaturesTabsSection />

      {/* ═══ 5. AVANT / APRÈS (panneau navy + tableau) ═══ */}
      <ComparisonSection />

      {/* ═══ 6. NOTRE HISTOIRE (2 colonnes) ═══ */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Notre histoire</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Gauche : titre + paragraphe + 4 problèmes */}
            <div>
              <h2 className="text-xl lg:text-2xl font-semibold text-neutral-900 mb-4">
                Né d&apos;un organisme de formation de 25 ans
              </h2>
              <p className="text-md text-neutral-600 leading-relaxed mb-8">
                Nous assistons aux premières loges à la mutation du secteur de la
                formation professionnelle. Ces bouleversements ont un impact direct
                sur les marges et la rentabilité de nos structures.
              </p>

              <div className="space-y-3">
                {[
                  { Icon: TrendDown01, label: "Réduction des niveaux de prise en charge (NPEC)", bg: "bg-red-50", text: "text-red-800" },
                  { Icon: CheckCircle, label: "Exigences des certificateurs de plus en plus fortes", bg: "bg-orange-50", text: "text-orange-800" },
                  { Icon: Globe01, label: "Développement des formations ouvertes à distance (FOAD)", bg: "bg-blue-50", text: "text-blue-800" },
                  { Icon: Users01, label: "Dépendance aux formateurs externes", bg: "bg-purple-50", text: "text-purple-800" },
                ].map((p) => (
                  <div key={p.label} className="flex items-center gap-3 border border-neutral-200 rounded-lg px-4 py-3">
                    <div className={`shrink-0 size-8 rounded-lg ${p.bg} flex items-center justify-center`}>
                      <p.Icon className={`size-4 ${p.text}`} />
                    </div>
                    <span className="text-sm text-neutral-700">{p.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Droite : card solution */}
            <div className="bg-neutral-50 rounded-2xl p-8">
              <p className="text-sm font-semibold text-neutral-900 mb-6">
                Ainsi nous avons créé Syllabis en 2025, un outil permettant :
              </p>
              <ul className="space-y-5">
                {[
                  "Créer des programmes pédagogiques complets, assistés par l\u2019IA, pour répondre plus rapidement aux appels d\u2019offres",
                  "Générer l\u2019ensemble des contenus, pour permettre aux formateurs de se concentrer sur l\u2019animation des formations",
                  "Prouver en un export l\u2019alignement parfait entre les validations des compétences et les objectifs pédagogiques",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="shrink-0 mt-1.5 size-3 rounded-full border-2 border-emerald-500" />
                    <span className="text-md text-neutral-700 leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Chiffres clés */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-10 max-w-6xl mx-auto">
            {[
              { value: "+20%", color: "text-emerald-500", label: "de FOAD dans nos formations" },
              { value: "100%", color: "text-[#0A1E3D]", label: "maîtrise du contenu dispensé" },
              { value: "×3", color: "text-blue-500", label: "appels d\u2019offres traités" },
              { value: "÷7", color: "text-purple-500", label: "temps de création d\u2019un titre pro" },
            ].map((k) => (
              <div key={k.value} className="border border-neutral-200 rounded-xl p-5 text-center">
                <div className={`text-3xl font-semibold ${k.color}`}>{k.value}</div>
                <p className="text-xs text-neutral-500 mt-1">{k.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 7. TÉMOIGNAGES ═══ */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Témoignages</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Ils utilisent Syllabis
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Samuel */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col">
              <blockquote className="text-md text-neutral-700 leading-relaxed flex-1">
                &ldquo;Syllabis nous a permis de traiter 3× plus d&apos;appels d&apos;offres.
                La génération automatique de l&apos;arborescence et du contenu nous fait
                gagner un temps considérable sur chaque titre professionnel.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-neutral-100">
                <Image src="/temoins/Samuel.webp" alt="Samuel Guerreiro" width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Samuel Guerreiro</p>
                  <p className="text-xs text-neutral-500">Directeur général, IPMS</p>
                </div>
              </div>
            </div>

            {/* Jérémy */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col">
              <blockquote className="text-md text-neutral-700 leading-relaxed flex-1">
                &ldquo;Nous utilisons Syllabis pour créer les formations MadSkills.
                L&apos;éditeur 39+ blocs et la génération IA nous permettent de produire
                du contenu pédagogique de qualité en une fraction du temps habituel.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-neutral-100">
                <Image src="/temoins/jeremy.jpg" alt="Jérémy Wild" width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Jérémy Wild</p>
                  <p className="text-xs text-neutral-500">Co-fondateur, MadSkills</p>
                </div>
              </div>
            </div>

            {/* Emmanuelle */}
            <div className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 flex flex-col">
              <blockquote className="text-md text-neutral-700 leading-relaxed flex-1">
                &ldquo;Syllabis a été un vrai accélérateur pour nos formations NTC chez Pikango.
                La conformité entre les référentiels et le contenu pédagogique est
                assurée automatiquement, c&apos;est un gain de temps énorme.&rdquo;
              </blockquote>
              <div className="mt-6 flex items-center gap-3 pt-6 border-t border-neutral-100">
                <Image src="/temoins/emmanuelle.webp" alt="Emmanuelle Buard" width={48} height={48} className="size-12 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-neutral-900">Emmanuelle Buard</p>
                  <p className="text-xs text-neutral-500">Directrice Pédagogique, CFA Pikango</p>
                </div>
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
