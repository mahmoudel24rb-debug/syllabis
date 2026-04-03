export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-neutral-50">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-sm font-semibold text-brand-600 mb-3">Contact</p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Parlons de votre projet
          </h2>
          <p className="mt-5 text-lg text-neutral-600">
            Une question sur Syllabis ? Besoin d&apos;une offre sur mesure pour
            votre organisme ? Écrivez-nous.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-lg">
          <div className="grid grid-cols-1 gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Prénom
                </label>
                <input
                  type="text"
                  placeholder="Votre prénom"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  Nom
                </label>
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Email
              </label>
              <input
                type="email"
                placeholder="vous@exemple.com"
                className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Décrivez votre besoin en formation..."
                className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none resize-none transition-colors"
              />
            </div>
            <button className="w-full rounded-lg border border-brand-600 bg-brand-600 px-[18px] py-2.5 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
              Envoyer le message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
