export default function Hero() {
  return (
    <section className="relative pt-[88px] overflow-hidden">
      {/* Grid pattern background */}
      <div className="absolute inset-0 hero-grid hero-grid-mask" />

      <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-0">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-brand-200 bg-brand-50 pl-1 pr-3 py-1 mb-4">
            <span className="flex items-center gap-1.5 rounded-full bg-white border border-brand-200 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
              <span className="w-2 h-2 rounded-full bg-brand-500" />
              Nouveau
            </span>
            <span className="text-sm font-medium text-brand-700 flex items-center gap-1">
              Decouvrez notre offre agence
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
            Des solutions digitales pour grandir plus vite
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Nous concevons des sites web performants, des strategies SEO sur
            mesure et des campagnes marketing qui convertissent vos visiteurs en
            clients. Plus de 150 entreprises nous font confiance.
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
              Demo
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center rounded-lg border border-brand-600 bg-brand-600 px-5 py-3 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>

        {/* Dashboard mockup — detailed app UI */}
        <div className="mt-16 relative mx-auto max-w-[1100px]">
          <div className="rounded-t-2xl border border-b-0 border-neutral-200 bg-white shadow-3xl overflow-hidden">
            <div className="flex">
              {/* Sidebar */}
              <div className="hidden sm:flex flex-col w-[240px] border-r border-neutral-200 bg-white shrink-0">
                {/* Sidebar header */}
                <div className="px-5 py-5 border-b border-neutral-100">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xs">S</span>
                    </div>
                    <span className="text-md font-semibold text-neutral-900">
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
                    { icon: "dashboard", label: "Dashboard", active: true },
                    { icon: "folder", label: "Projets", active: false },
                    { icon: "tasks", label: "Taches", badge: "8", active: false },
                    { icon: "chart", label: "Analytics", active: false },
                    { icon: "users", label: "Clients", active: false },
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
                    Mon dashboard
                  </h2>
                  <div className="hidden sm:flex items-center gap-2">
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 text-xs font-medium text-neutral-600 bg-white hover:bg-neutral-50">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 3v1m0 16v1m8.66-13.5l-.87.5M4.21 16l-.87.5M21 12h-1M4 12H3m16.66 4.5l-.87-.5M4.21 8l-.87-.5" strokeLinecap="round" />
                        <circle cx="12" cy="12" r="4" />
                      </svg>
                      Quoi de neuf ?
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 text-xs font-medium text-neutral-600 bg-white hover:bg-neutral-50">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                        <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
                      </svg>
                      Copier le lien
                    </button>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-neutral-200 text-xs font-medium text-neutral-600 bg-white hover:bg-neutral-50">
                      Voir le site
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                      </svg>
                    </button>
                  </div>
                </div>

                {/* Stat cards */}
                <div className="px-6 py-5">
                  <div className="grid grid-cols-3 gap-4 mb-5">
                    {[
                      { icon: "revenue", label: "Chiffre d'affaires", value: "8 746,22\u20ac", change: "+2.4%", up: true },
                      { icon: "views", label: "Pages vues", value: "12 440", change: "+6.2%", up: true },
                      { icon: "active", label: "Actifs maintenant", value: "96", change: "+0.8%", up: true },
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

                  {/* Chart section */}
                  <div className="rounded-xl border border-neutral-200 bg-white p-5">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-xs text-neutral-500">Revenus nets</p>
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-xl font-semibold text-neutral-900">
                            7 804,16&euro;
                          </span>
                          <span className="flex items-center gap-0.5 text-xs font-medium text-green-600">
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                              <path d="M6 9.5V2.5M6 2.5L2.5 6M6 2.5L9.5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            2.4%
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-1">
                        {["12 mois", "30 jours", "7 jours", "24h"].map(
                          (period, i) => (
                            <button
                              key={period}
                              className={`px-2.5 py-1 rounded-md text-xs font-medium ${
                                i === 0
                                  ? "bg-neutral-100 text-neutral-900"
                                  : "text-neutral-500 hover:bg-neutral-50"
                              }`}
                            >
                              {period}
                            </button>
                          )
                        )}
                        <button className="flex items-center gap-1 ml-1 px-2.5 py-1 rounded-md border border-neutral-200 text-xs font-medium text-neutral-600">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <line x1="4" y1="21" x2="4" y2="14" />
                            <line x1="4" y1="10" x2="4" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12" y2="3" />
                            <line x1="20" y1="21" x2="20" y2="16" />
                            <line x1="20" y1="12" x2="20" y2="3" />
                            <line x1="1" y1="14" x2="7" y2="14" />
                            <line x1="9" y1="8" x2="15" y2="8" />
                            <line x1="17" y1="16" x2="23" y2="16" />
                          </svg>
                          Filtres
                        </button>
                      </div>
                    </div>
                    {/* SVG Chart line */}
                    <div className="h-[100px] sm:h-[140px] relative">
                      <svg
                        viewBox="0 0 600 120"
                        className="w-full h-full"
                        preserveAspectRatio="none"
                      >
                        <defs>
                          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="rgb(127 86 217)" stopOpacity="0.12" />
                            <stop offset="100%" stopColor="rgb(127 86 217)" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        <path
                          d="M0,95 C30,90 60,85 90,80 C120,75 150,88 180,82 C210,76 240,60 270,55 C300,50 330,58 360,52 C390,46 420,35 450,40 C480,45 510,30 540,22 C570,14 585,10 600,8"
                          fill="none"
                          stroke="rgb(127 86 217)"
                          strokeWidth="2"
                        />
                        <path
                          d="M0,95 C30,90 60,85 90,80 C120,75 150,88 180,82 C210,76 240,60 270,55 C300,50 330,58 360,52 C390,46 420,35 450,40 C480,45 510,30 540,22 C570,14 585,10 600,8 L600,120 L0,120Z"
                          fill="url(#chartGrad)"
                        />
                        {/* Dashed line */}
                        <path
                          d="M0,98 C40,95 80,92 120,90 C160,88 200,95 240,90 C280,85 320,78 360,72 C400,66 440,62 480,55 C520,48 560,40 600,35"
                          fill="none"
                          stroke="rgb(180 180 200)"
                          strokeWidth="1.5"
                          strokeDasharray="6 4"
                        />
                      </svg>
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
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1" />
          <rect x="14" y="3" width="7" height="7" rx="1" />
          <rect x="3" y="14" width="7" height="7" rx="1" />
          <rect x="14" y="14" width="7" height="7" rx="1" />
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
          <circle cx="12" cy="12" r="10" />
          <path d="M16 8h-4a2 2 0 100 4h2a2 2 0 110 4H8M12 6v2m0 8v2" />
        </svg>
      );
    case "views":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    case "active":
      return (
        <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );
    default:
      return null;
  }
}
