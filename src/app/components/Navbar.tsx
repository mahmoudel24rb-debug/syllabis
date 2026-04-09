"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/base/buttons/button";

const features = [
  { label: "Génération IA", href: "/fonctionnalites/generation-ia", desc: "Du PDF au cours en 3 clics" },
  { label: "Éditeur 39+ blocs", href: "/fonctionnalites/editeur", desc: "Quiz, vidéos, mind maps..." },
  { label: "Médias IA", href: "/fonctionnalites/medias-ia", desc: "Vidéos, podcasts, flashcards" },
  { label: "Export SCORM", href: "/fonctionnalites/export-scorm", desc: "Déploiement LMS universel" },
  { label: "Pilotage & Planning", href: "/fonctionnalites/pilotage-planning", desc: "Calendrier et suivi" },
  { label: "Multi-tenant", href: "/fonctionnalites/multi-tenant", desc: "Organisations & Enterprise" },
];

const navLinks = [
  { label: "Tarifs", href: "/tarifs" },
  { label: "Cas d'usage", href: "/cas-usage" },
  { label: "À propos", href: "/a-propos" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [featuresOpen, setFeaturesOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 px-4 sm:px-5 pt-3">
      <nav className="mx-auto max-w-container bg-white rounded-xl border border-neutral-200 shadow-sm px-4 sm:px-5 flex items-center justify-between h-[64px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5">
          <Image src="/sylbi.png" alt="Sylbi" width={36} height={36} className="size-9 rounded-lg" />
          <span className="text-lg font-bold text-[#0A1E3D]">Syllabis</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {/* Fonctionnalites dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setFeaturesOpen(true)}
            onMouseLeave={() => setFeaturesOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-md font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-50 rounded-md transition-colors">
              Fonctionnalités
              <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className={`text-neutral-400 transition-transform ${featuresOpen ? "rotate-180" : ""}`}>
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>

            {featuresOpen && (
              <div className="absolute top-full left-0 pt-2 w-[480px]">
                <div className="bg-white rounded-xl border border-neutral-200 shadow-lg p-3">
                  <div className="grid grid-cols-2 gap-1">
                    {features.map((f) => (
                      <Link
                        key={f.href}
                        href={f.href}
                        className="flex flex-col gap-0.5 rounded-lg px-3 py-2.5 hover:bg-neutral-50 transition-colors"
                      >
                        <span className="text-sm font-semibold text-neutral-900">{f.label}</span>
                        <span className="text-xs text-neutral-500">{f.desc}</span>
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-neutral-100 mt-2 pt-2">
                    <Link
                      href="/fonctionnalites"
                      className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-brand-600 hover:text-brand-700 rounded-lg hover:bg-brand-50 transition-colors"
                    >
                      Voir toutes les fonctionnalités
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M3.33 8h9.34M8.67 4l4 4-4 4" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

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
          <div className="hidden sm:block">
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
          <Link href="/fonctionnalites" className="block px-3 py-2.5 text-md font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50" onClick={() => setMobileOpen(false)}>
            Fonctionnalités
          </Link>
          {features.map((f) => (
            <Link key={f.href} href={f.href} className="block px-6 py-2 text-sm text-neutral-600 rounded-lg hover:bg-neutral-50" onClick={() => setMobileOpen(false)}>
              {f.label}
            </Link>
          ))}
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="block px-3 py-2.5 text-md font-semibold text-neutral-900 rounded-lg hover:bg-neutral-50" onClick={() => setMobileOpen(false)}>
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-neutral-100">
            <Button color="primary" size="lg" href="/demo" className="w-full">
              Demander une démo
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
