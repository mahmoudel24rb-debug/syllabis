import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-[88px] overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 hero-grid hero-grid-mask" />

      <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-0">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300 bg-amber-50 pl-1 pr-3 py-1 mb-4">
            <span className="flex items-center gap-1.5 rounded-full bg-white border border-amber-300 px-2.5 py-0.5 text-xs font-semibold text-amber-800">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              Nouveau
            </span>
            <span className="text-sm font-medium text-amber-800 flex items-center gap-1">
              Génération de cours vidéo par IA
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M3.33 8h9.34M8.67 4l4 4-4 4" />
              </svg>
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-display-lg sm:text-display-xl font-semibold text-neutral-900">
            Créez des cours en ligne en quelques clics
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Notre IA génère des formations complètes — modules e-learning, PDF,
            vidéos et quiz — à partir d&apos;un simple sujet. Passe de l&apos;idée au
            cours publié en quelques minutes.
          </p>

          {/* CTAs */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-300 bg-white px-5 py-3 text-md font-semibold text-neutral-700 shadow-xs hover:bg-neutral-50 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-neutral-500"
              >
                <circle cx="12" cy="12" r="10" />
                <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" stroke="none" />
              </svg>
              Voir la démo
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-brand-600 bg-brand-600 px-5 py-3 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors"
            >
              Commencer gratuitement
            </a>
          </div>
        </div>

        {/* App mockup — course creation UI */}
        <div className="mt-16 relative mx-auto max-w-[1100px]">
          <div className="rounded-t-2xl border border-b-0 border-neutral-200 bg-white shadow-3xl overflow-hidden">
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-[240px] border-r border-neutral-200 bg-white shrink-0">
                {/* Sidebar header */}
                <div className="px-5 py-5 border-b border-neutral-100">
                  <div className="flex items-center gap-1.5">
                    <Image src="/sylbi.png" alt="Sylbi" width={28} height={28} className="size-7 rounded-md" />
                    <span className="text-md font-bold text-[#0A1E3D]">
                      Syllabis
                    </span>
                  </div>
                </div>
                {/* Search */}
                <div className="px-4 py-3">
                  <div className="flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-400">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    Rechercher
                    <span className="ml-auto text-xs text-neutral-300 border border-neutral-200 rounded px-1.5 py-0.5 bg-white">&#8984;K</span>
                  </div>
                </div>
                {/* Nav items */}
                <div className="px-3 py-2 space-y-0.5">
                  {[
                    { icon: "home", label: "Accueil", active: false },
                    { icon: "dashboard", label: "Mes cours", active: true },
                    { icon: "folder", label: "Bibliothèque", active: false },
                    { icon: "tasks", label: "Quiz & Exercices", badge: "3", active: false },
                    { icon: "chart", label: "Analytics", active: false },
                    { icon: "users", label: "Apprenants", active: false },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className={`flex items-center gap-3 px-3 py-2 rounded-md text-sm ${
                        item.active
                          ? "bg-neutral-50 text-neutral-900 font-medium"
                          : "text-neutral-500"
                      }`}
                    >
                      <SidebarIcon name={item.icon} />
                      <span>{item.label}</span>
                      {item.badge && (
                        <span className="ml-auto text-xs bg-neutral-100 text-neutral-600 rounded-full px-2 py-0.5">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Main content */}
              <div className="flex-1 min-w-0">
                {/* Top bar */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-100">
                  <h2 className="text-lg font-semibold text-neutral-900">
                    Mes cours
                  </h2>
                  <div className="hidden sm:flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 text-xs font-medium text-neutral-600 bg-white hover:bg-neutral-50">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      Importer
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-brand-600 bg-brand-600 text-xs font-medium text-white hover:bg-brand-700">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <line x1="12" y1="5" x2="12" y2="19" />
                        <line x1="5" y1="12" x2="19" y2="12" />
                      </svg>
                      Nouveau cours IA
                    </button>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="px-6 py-5">
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    {[
                      { icon: "revenue", label: "Cours publiés", value: "47", change: "+5 ce mois" },
                      { icon: "views", label: "Apprenants actifs", value: "1 284", change: "+12.3%" },
                      { icon: "active", label: "Taux de complétion", value: "89%", change: "+3.2%" },
                    ].map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-neutral-200 bg-white p-4"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-8 h-8 rounded-full border border-neutral-200 bg-white flex items-center justify-center">
                            <StatIcon name={stat.icon} />
                          </div>
                          <span className="text-xs text-neutral-500">
                            {stat.label}
                          </span>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-semibold text-neutral-900">
                            {stat.value}
                          </span>
                          <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {stat.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Recent courses list */}
                  <div className="rounded-xl border border-neutral-200 bg-white p-5">
                    <div className="flex items-center justify-between mb-4">
                      <p className="text-sm font-semibold text-neutral-900">Cours récents</p>
                      <div className="hidden sm:flex items-center gap-1">
                        {["Tous", "Publiés", "Brouillons"].map(
                          (tab, i) => (
                            <button
                              key={tab}
                              className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                                i === 0
                                  ? "bg-neutral-100 text-neutral-900"
                                  : "text-neutral-500 hover:bg-neutral-50"
                              }`}
                            >
                              {tab}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                    {/* Course rows */}
                    <div className="space-y-3">
                      {[
                        { title: "Introduction au Machine Learning", format: "E-learning + PDF", modules: "12 modules", status: "Publié", statusColor: "bg-green-50 text-green-700" },
                        { title: "Les bases du marketing digital", format: "Vidéo + Quiz", modules: "8 modules", status: "Publié", statusColor: "bg-green-50 text-green-700" },
                        { title: "Gestion de projet Agile", format: "PDF + Quiz", modules: "6 modules", status: "Brouillon", statusColor: "bg-neutral-100 text-neutral-600" },
                      ].map((course) => (
                        <div key={course.title} className="flex items-center justify-between py-2.5 border-b border-neutral-100 last:border-0">
                          <div className="flex items-center gap-3 min-w-0">
                            <div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center shrink-0">
                              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(10 30 61)" strokeWidth="2" strokeLinecap="round">
                                <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
                                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
                              </svg>
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-neutral-900 truncate">{course.title}</p>
                              <p className="text-xs text-neutral-500">{course.format} &middot; {course.modules}</p>
                            </div>
                          </div>
                          <span className={`shrink-0 ml-3 px-2 py-0.5 rounded-full text-xs font-medium ${course.statusColor}`}>
                            {course.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Small icon components for the sidebar */
function SidebarIcon({ name }: { name: string }) {
  const cls = "w-5 h-5 text-neutral-400";
  switch (name) {
    case "home":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      );
    case "dashboard":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      );
    case "folder":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z" />
        </svg>
      );
    case "tasks":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 11l3 3L22 4" />
          <path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11" />
        </svg>
      );
    case "chart":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "users":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    default:
      return null;
  }
}

function StatIcon({ name }: { name: string }) {
  const cls = "w-4 h-4 text-neutral-500";
  switch (name) {
    case "revenue":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M4 19.5A2.5 2.5 0 016.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z" />
        </svg>
      );
    case "views":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
        </svg>
      );
    case "active":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      );
    default:
      return null;
  }
}
