import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Syllabis — Parlons de votre projet",
  description: "Contactez l'équipe Syllabis. Une question, un besoin spécifique, une offre sur mesure — nous répondons sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Contact
            </p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Contactez-nous
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Une question ? Un besoin spécifique ? Notre équipe vous répond.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Info ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                Envoyez-nous un message
              </h2>
              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
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
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Organisme{" "}
                    <span className="text-neutral-400 font-normal">
                      (optionnel)
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de votre organisme"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Rôle
                  </label>
                  <select className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors">
                    <option value="">Sélectionnez votre rôle</option>
                    <option value="of">Organisme de formation</option>
                    <option value="formateur">Formateur</option>
                    <option value="entreprise">Entreprise</option>
                    <option value="edtech">EdTech</option>
                    <option value="autre">Autre</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Décrivez votre besoin..."
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none resize-none transition-colors"
                  />
                </div>

                <button className="w-full rounded-lg border border-brand-600 bg-brand-600 px-[18px] py-3 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
                  Envoyer le message
                </button>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                  Autres moyens de contact
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div>
                    <p className="text-sm font-medium text-neutral-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:contact@syllabis.fr"
                      className="text-md font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      contact@syllabis.fr
                    </a>
                  </div>

                  {/* Social */}
                  <div>
                    <p className="text-sm font-medium text-neutral-500 mb-3">
                      Réseaux sociaux
                    </p>
                    <div className="flex gap-3">
                      {["LinkedIn", "Twitter"].map((network) => (
                        <span
                          key={network}
                          className="inline-flex items-center rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors cursor-pointer"
                        >
                          {network}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Response time */}
                  <div className="pt-6 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600">
                      Nous répondons généralement sous{" "}
                      <span className="font-semibold text-neutral-900">
                        24 heures
                      </span>{" "}
                      les jours ouvrables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
