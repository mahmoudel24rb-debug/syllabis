const posts = [
  {
    category: "IA & Education",
    categoryColor: "text-brand-600 bg-brand-50",
    title: "Comment l'IA révolutionne la création de formations en ligne",
    excerpt:
      "Découvrez comment les outils d'intelligence artificielle permettent de créer des cours 10x plus vite sans sacrifier la qualité pédagogique.",
    author: "Marie Tran",
    initials: "MT",
    date: "28 mars 2026",
  },
  {
    category: "Tutoriel",
    categoryColor: "text-blue-600 bg-blue-50",
    title: "Créer un cours e-learning complet en 30 minutes",
    excerpt:
      "Guide pas à pas pour générer, personnaliser et publier votre premier cours avec Syllabis, de A à Z.",
    author: "Antoine Bernard",
    initials: "AB",
    date: "25 mars 2026",
  },
  {
    category: "Pedagogie",
    categoryColor: "text-pink-600 bg-pink-50",
    title: "Les 5 principes d'un quiz efficace pour vos formations",
    excerpt:
      "Concevez des évaluations qui mesurent vraiment l'apprentissage et motivent vos apprenants à progresser.",
    author: "Claire Lemoine",
    initials: "CL",
    date: "22 mars 2026",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <div>
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Notre blog
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Ressources & guides
            </h2>
            <p className="mt-5 text-lg text-neutral-600 max-w-xl">
              Conseils, tutoriels et bonnes pratiques pour créer des formations
              en ligne efficaces.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 bg-white px-[18px] py-2.5 text-md font-semibold text-neutral-700 shadow-xs hover:bg-neutral-50 transition-colors shrink-0"
          >
            Voir tous les articles
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.title} className="group">
              {/* Image placeholder */}
              <div className="aspect-[16/10] rounded-2xl bg-neutral-100 mb-6 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-neutral-50 to-neutral-200 group-hover:scale-105 transition-transform duration-300" />
              </div>

              <span
                className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${post.categoryColor} mb-3`}
              >
                {post.category}
              </span>

              <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-brand-600 transition-colors">
                <a href="#">{post.title}</a>
              </h3>

              <p className="text-md text-neutral-600 leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-neutral-200 flex items-center justify-center text-neutral-600 text-sm font-semibold">
                  {post.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-900">
                    {post.author}
                  </p>
                  <p className="text-sm text-neutral-600">{post.date}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
