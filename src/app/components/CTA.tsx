export default function CTA() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        <div className="rounded-2xl bg-neutral-900 px-8 sm:px-16 py-14 sm:py-16 text-center">
          <h2 className="text-display-sm sm:text-display-md font-semibold text-white">
            Prêt à créer votre premier cours ?
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-300 max-w-2xl mx-auto">
            Rejoignez plus de 2 000 formateurs qui utilisent Syllabis.
            Commencez gratuitement, sans carte bancaire.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-neutral-600 bg-neutral-800 px-[18px] py-3 text-md font-semibold text-white shadow-xs hover:bg-neutral-700 transition-colors"
            >
              Voir la démo
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-brand-500 bg-brand-600 px-[18px] py-3 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors"
            >
              Commencer gratuitement
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
