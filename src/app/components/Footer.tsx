const footerLinks = [
  {
    title: "Services",
    links: [
      "Creation de sites",
      "Referencement SEO",
      "Marketing digital",
      "Design UX/UI",
      "E-commerce",
      "Maintenance",
    ],
  },
  {
    title: "Entreprise",
    links: [
      "A propos",
      "Equipe",
      "Blog",
      "Carrieres",
      "Contact",
      "Presse",
    ],
  },
  {
    title: "Ressources",
    links: [
      "Guides gratuits",
      "Etudes de cas",
      "Newsletter",
      "Evenements",
      "Support",
      "FAQ",
    ],
  },
  {
    title: "Legal",
    links: [
      "Mentions legales",
      "Politique de confidentialite",
      "CGV",
      "Cookies",
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 pt-16 sm:pt-24 pb-12">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-12 border-b border-neutral-800">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-neutral-400 mb-4">
                {group.title}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-md text-neutral-300 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <span className="text-lg font-semibold text-white">Syllabis</span>
          </div>

          <p className="text-md text-neutral-500">
            &copy; 2026 Syllabis. Tous droits reserves.
          </p>
        </div>
      </div>
    </footer>
  );
}
