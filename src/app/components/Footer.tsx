import Link from "next/link";
import Image from "next/image";

const links = [
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
  { label: "Démo", href: "/demo" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-600 pt-10 pb-8">
      <div className="mx-auto max-w-container px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Logo */}
          <div className="flex items-center gap-1.5">
            <Image src="/sylbi.webp" alt="Sylbi" width={36} height={36} className="size-9 rounded-lg" />
            <span className="text-lg font-bold text-white">Syllabis</span>
          </div>

          {/* Links */}
          <nav className="flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Email */}
          <a
            href="mailto:contact@syllabis.fr"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            contact@syllabis.fr
          </a>
        </div>

        {/* Bottom */}
        <div className="pt-6 text-center">
          <p className="text-sm text-white/40">&copy; 2026 Syllabis. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
