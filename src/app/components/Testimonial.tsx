export default function Testimonial() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Company logo placeholder */}
          <div className="inline-flex items-center gap-2 text-neutral-400 mb-8">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="4" />
              <path d="M9 12h6M12 9v6" strokeLinecap="round" />
            </svg>
            <span className="text-lg font-semibold">OpenClassrooms</span>
          </div>

          {/* Quote */}
          <blockquote className="text-display-xs sm:text-display-sm font-medium text-neutral-900 leading-snug">
            &ldquo;Syllabis a divisé par 10 le temps de création de nos
            formations. On génère un cours complet avec PDF, quiz et modules
            vidéo en une après-midi au lieu de plusieurs semaines.&rdquo;
          </blockquote>

          {/* Author */}
          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="w-14 h-14 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-semibold text-lg">
              CL
            </div>
            <div className="text-left">
              <p className="text-lg font-semibold text-neutral-900">
                Claire Lemoine
              </p>
              <p className="text-md text-neutral-600">
                Responsable Pédagogique, OpenClassrooms
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
