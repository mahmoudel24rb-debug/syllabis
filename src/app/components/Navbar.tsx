"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/base/buttons/button";

const navLinks = [
  { label: "Fonctionnalités", href: "/fonctionnalites" },
  { label: "Landing 1", href: "/" },
  { label: "Landing 2", href: "/landing-2" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 sm:px-5 pt-3">
      <nav className="mx-auto max-w-container bg-white rounded-xl border border-neutral-200 shadow-sm px-4 sm:px-5 flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <Image src="/sylbi.webp" alt="Sylbi" width={36} height={36} className="size-9 rounded-lg" />
          <span className="text-lg font-bold text-[#002A5A]">Syllabis</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 text-md font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right actions */}
        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-2">
            <Button color="secondary" size="md" href="/contact">
              Essai gratuit
            </Button>
            <Button color="primary" size="md" href="/demo">
              Demander une démo
            </Button>
          </div>
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-neutral-50 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              {mobileOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden mt-2 mx-auto max-w-container bg-white rounded-xl border border-neutral-200 shadow-lg p-4 space-y-1">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-3 py-2.5 text-md font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-neutral-100 space-y-2">
            <Button color="secondary" size="lg" href="/contact" className="w-full">
              Essai gratuit
            </Button>
            <Button color="primary" size="lg" href="/demo" className="w-full">
              Demander une démo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
