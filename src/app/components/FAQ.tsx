const faqs = [
  {
    question: "Comment l'IA genere-t-elle un cours ?",
    answer:
      "Vous entrez un sujet ou une description, et notre IA analyse le domaine pour generer automatiquement un plan de cours structure, le contenu de chaque module, des quiz d'evaluation et des supports PDF ou video. Vous pouvez ensuite editer et personnaliser chaque element.",
  },
  {
    question: "Quels formats de cours sont disponibles ?",
    answer:
      "Syllabis genere des cours en plusieurs formats : modules e-learning interactifs (SCORM), documents PDF structures, presentations video avec voix off IA, et quiz auto-corriges. Vous pouvez combiner ces formats dans un meme cours.",
  },
  {
    question: "Est-ce que je peux modifier le contenu genere ?",
    answer:
      "Absolument. L'IA genere une premiere version complete que vous pouvez editer librement : modifier les textes, reorganiser les modules, ajouter vos propres ressources, ajuster les quiz. Vous gardez un controle total sur le contenu final.",
  },
  {
    question: "Y a-t-il un essai gratuit ?",
    answer:
      "Oui, vous pouvez creer votre premier cours gratuitement sans carte bancaire. L'essai gratuit inclut la generation de 3 cours complets avec export PDF et quiz. Pour les formats video et e-learning, un abonnement est necessaire.",
  },
  {
    question: "Syllabis est-il adapte aux organismes de formation ?",
    answer:
      "Oui, nous proposons des offres dediees aux organismes de formation avec gestion multi-utilisateurs, export SCORM pour vos LMS, personnalisation avec votre charte graphique et suivi des apprenants integre.",
  },
  {
    question: "Mes contenus sont-ils proteges ?",
    answer:
      "Vos cours vous appartiennent a 100%. Nous ne reutilisons jamais vos contenus pour entrainer nos modeles. Vos donnees sont hebergees en Europe et chiffrees. Vous pouvez exporter ou supprimer vos cours a tout moment.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3">FAQ</p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Questions frequentes
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Tout ce que vous devez savoir sur Syllabis et la creation de cours
            par IA.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
          {faqs.map((faq) => (
            <details key={faq.question} className="group py-6">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                  {faq.question}
                </h3>
                <span className="shrink-0 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-open:text-brand-600 group-open:border-brand-200 transition-colors">
                  <svg
                    className="w-5 h-5 transition-transform group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </summary>
              <p className="mt-2 text-md text-neutral-600 leading-relaxed pr-14">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-16 rounded-2xl bg-neutral-50 p-8 sm:p-12 text-center max-w-3xl mx-auto">
          <div className="flex justify-center -space-x-2 mb-5">
            {["CL", "MT", "AB"].map((initials, i) => (
              <div
                key={i}
                className="w-12 h-12 rounded-full border-2 border-white bg-brand-100 flex items-center justify-center text-brand-600 font-semibold text-sm"
              >
                {initials}
              </div>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-neutral-900 mb-2">
            Encore des questions ?
          </h3>
          <p className="text-md text-neutral-600 mb-6">
            Notre equipe est disponible pour vous accompagner dans la prise en
            main de Syllabis.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-lg border border-brand-600 bg-brand-600 px-[18px] py-2.5 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors"
          >
            Nous contacter
          </a>
        </div>
      </div>
    </section>
  );
}
