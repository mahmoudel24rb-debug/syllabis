import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Produit",
    links: [
      { label: "Génération IA", href: "/fonctionnalites/generation-ia" },
      { label: "Éditeur 39+ blocs", href: "/fonctionnalites/editeur" },
      { label: "Médias IA", href: "/fonctionnalites/medias-ia" },
      { label: "Export SCORM", href: "/fonctionnalites/export-scorm" },
      { label: "Pilotage & Planning", href: "/fonctionnalites/pilotage-planning" },
      { label: "Multi-tenant", href: "/fonctionnalites/multi-tenant" },
    ],
  },
  {
    title: "Ressources",
    links: [
      { label: "Demander une démo", href: "/demo" },
      { label: "Contact", href: "/contact" },
      { label: "Tarifs", href: "/tarifs" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { label: "À propos", href: "/a-propos" },
      { label: "Cas d'usage", href: "/cas-usage" },
    ],
  },
  {
    title: "Légal",
    links: [
      { label: "Mentions légales", href: "/legal/mentions-legales" },
      { label: "CGU", href: "/legal/cgu" },
      { label: "Confidentialité", href: "/legal/politique-confidentialite" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1E3D] pt-16 sm:pt-24 pb-12">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Link columns */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 pb-12 border-b border-white/10">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-white/50 mb-4">{group.title}</h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-md text-white/70 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
          <div className="flex items-center gap-1.5">
            <Image src="/sylbi.png" alt="Sylbi" width={36} height={36} className="size-9" />
            <span className="text-lg font-bold text-white">Syllabis</span>
          </div>
          <p className="text-md text-white/40">&copy; 2025 Syllabis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
