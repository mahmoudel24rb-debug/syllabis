const stats = [
  { value: "2 000+", label: "Formateurs actifs" },
  { value: "15 000+", label: "Cours générés" },
  { value: "89%", label: "Taux de complétion" },
  { value: "4.8/5", label: "Satisfaction" },
];

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: "Génération instantanée",
    desc: "Décrivez votre sujet et l'IA génère un cours structuré avec chapitres, contenus et évaluations en quelques minutes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
    title: "Multi-format",
    desc: "Exportez vos cours en PDF, modules e-learning interactifs, présentations vidéo ou quiz auto-corrigés.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
      </svg>
    ),
    title: "Pédagogie intelligente",
    desc: "L'IA structure vos contenus selon les meilleures pratiques pédagogiques : objectifs, progression, évaluation.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-neutral-50">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3">
            Comment ça marche
          </p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            De l&apos;idée au cours publié en 3 étapes
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Syllabis utilise l&apos;intelligence artificielle pour transformer
            n&apos;importe quel sujet en formation professionnelle complète.
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
