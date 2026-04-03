const faqs = [
  {
    question: "Combien coute un site web ?",
    answer:
      "Le prix depend de la complexite du projet. Un site vitrine demarre a partir de 2 000\u20ac, un site e-commerce a partir de 5 000\u20ac. Nous etablissons un devis personnalise apres avoir compris vos besoins.",
  },
  {
    question: "Quels sont les delais de realisation ?",
    answer:
      "Un site vitrine est generalement livre en 4 a 6 semaines. Un projet plus complexe (e-commerce, application web) peut prendre 8 a 12 semaines. Nous definissons ensemble un planning precis des le debut.",
  },
  {
    question: "Est-ce que je peux modifier mon site moi-meme ?",
    answer:
      "Oui, tous nos sites sont livres avec un systeme de gestion de contenu (CMS) intuitif. Nous vous formons a son utilisation pour que vous puissiez mettre a jour vos contenus en toute autonomie.",
  },
  {
    question: "Proposez-vous un service de maintenance ?",
    answer:
      "Oui, nous proposons des forfaits de maintenance mensuelle incluant les mises a jour de securite, les sauvegardes, le monitoring et le support technique.",
  },
  {
    question: "Comment se deroule un projet type ?",
    answer:
      "Notre processus suit 4 etapes : decouverte et brief, conception et maquettes, developpement et integration, puis tests et mise en ligne. Vous etes implique a chaque etape.",
  },
  {
    question: "Travaillez-vous uniquement avec des entreprises locales ?",
    answer:
      "Non, nous travaillons avec des clients partout en France et a l'international. Basee a Nancy, notre equipe collabore aussi bien en presentiel qu'a distance.",
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
            Tout ce que vous devez savoir sur nos services et notre
            fonctionnement.
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
            {["AL", "PB", "LS"].map((initials, i) => (
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
            Notre equipe est la pour vous aider. Contactez-nous et nous vous
            repondrons dans les plus brefs delais.
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
