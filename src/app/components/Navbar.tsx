export default function Navbar() {
  const links = [
    { label: "Fonctionnalites", href: "#services", hasDropdown: true },
    { label: "Comment ca marche", href: "#about", hasDropdown: false },
    { label: "Tarifs", href: "#faq", hasDropdown: false },
    { label: "Blog", href: "#blog", hasDropdown: true },
    { label: "Contact", href: "#contact", hasDropdown: false },
  ];

  return (
    <header className="fixed top-0 w-full z-50 px-4 sm:px-5 pt-3">
      <nav className="mx-auto max-w-container bg-white rounded-xl border border-neutral-200 shadow-sm px-4 sm:px-5 flex items-center justify-between h-[64px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
            <span className="text-white font-bold text-sm">S</span>
          </div>
          <span className="text-lg font-semibold text-neutral-900">
            Syllabis
          </span>
        </a>

        {/* Nav links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="flex items-center gap-1 px-3 py-2 text-md font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors"
            >
              {link.label}
              {link.hasDropdown && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-neutral-400"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </a>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center px-4 py-2.5 text-md font-semibold text-neutral-600 hover:text-neutral-900 transition-colors"
          >
            Connexion
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center rounded-lg border border-brand-600 bg-brand-600 px-4 py-2.5 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors"
          >
            Essai gratuit
          </a>
          <button className="lg:hidden p-2 rounded-lg hover:bg-neutral-50 transition-colors">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
