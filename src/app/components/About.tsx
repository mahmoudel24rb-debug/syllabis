const stats = [
  { value: "150+", label: "Projets livres" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "10+", label: "Annees d'experience" },
  { value: "4.9/5", label: "Note moyenne" },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: "Approche sur mesure",
    desc: "Chaque projet est unique. Nous adaptons notre methode a vos objectifs specifiques et a votre marche.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Performance",
    desc: "Des solutions optimisees pour la vitesse, le SEO et la conversion. Chaque milliseconde compte.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: "Accompagnement",
    desc: "Un suivi personnalise et un support reactif a chaque etape, du brief a la mise en production.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-50">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3">
            A propos
          </p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Une equipe passionnee par le digital
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Avec plus de 10 ans d&apos;experience dans le web, nous
            accompagnons les entreprises dans leur transformation digitale.
          </p>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {values.map((item) => (
            <div key={item.title} className="text-center">
              <div className="mx-auto mb-5 flex items-center justify-center w-12 h-12 rounded-full border border-brand-200 bg-brand-50 text-brand-600">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {item.title}
              </h3>
              <p className="text-md text-neutral-600 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="rounded-2xl border border-neutral-200 bg-white p-8 sm:p-12">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-display-sm sm:text-display-md font-semibold text-brand-600">
                  {stat.value}
                </div>
                <div className="text-md text-neutral-600 mt-2">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
