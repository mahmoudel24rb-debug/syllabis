import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos | Syllabis — Notre mission et notre vision",
  description:
    "Démocratiser la création de formations e-learning grâce à l'IA. Découvrez la vision, les valeurs et la stack technique de Syllabis.",
};

const values = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Innovation",
    description:
      "Repousser les limites de l'IA pour la pédagogie. Nous investissons dans la recherche pour offrir des outils toujours plus intelligents et pertinents.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
      </svg>
    ),
    title: "Qualité pédagogique",
    description:
      "Chaque formation générée respecte les standards RNCP et Qualiopi. La rigueur pédagogique n'est jamais sacrifiée au profit de la vitesse.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    title: "Accessibilité",
    description:
      "Rendre la création e-learning accessible à tous, pas seulement aux experts. Un formateur indépendant mérite les mêmes outils qu'un grand groupe.",
  },
];

const techStack = [
  { name: "React", label: "Frontend" },
  { name: "NestJS", label: "Backend" },
  { name: "PostgreSQL", label: "Base de données" },
  { name: "Gemini", label: "IA générative" },
];

export default function AProposPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              À propos
            </p>
            <h1 className="text-display-sm sm:text-display-lg font-semibold text-neutral-900">
              À propos de Syllabis
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Démocratiser la création de formations e-learning grâce à
              l&apos;IA.
            </p>
          </div>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Notre vision
            </p>
            <h2 className="text-display-sm font-semibold text-neutral-900 mb-6">
              Un constat simple
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Le marché de la formation professionnelle produit des milliers de
              référentiels chaque année. Pourtant, transformer ces documents en
              formations e-learning reste un processus manuel, long et coûteux.
              Syllabis est né de ce constat.
            </p>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Notre mission
            </p>
            <h2 className="text-display-sm font-semibold text-neutral-900 mb-6">
              La formation e-learning pour tous
            </h2>
            <p className="text-lg text-neutral-600 leading-relaxed">
              Permettre à n&apos;importe quel organisme de formation, formateur
              indépendant ou entreprise de créer des formations e-learning de
              qualité professionnelle en quelques minutes, pas en quelques
              semaines.
            </p>
          </div>
        </div>
      </section>

      {/* ── Valeurs ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Nos valeurs
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Ce qui nous guide au quotidien
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <div className="w-12 h-12 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 mb-5">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Stack technique ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Technologie
            </p>
            <h2 className="text-display-sm font-semibold text-neutral-900 mb-4">
              Une stack moderne et fiable
            </h2>
            <p className="text-md text-neutral-600 mb-12">
              Infrastructure moderne, hébergement européen, données chiffrées.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-5 text-center"
                >
                  <p className="text-md font-semibold text-neutral-900">
                    {tech.name}
                  </p>
                  <p className="text-sm text-neutral-500 mt-1">{tech.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="rounded-2xl border border-brand-200 bg-brand-50 p-8 sm:p-12 text-center">
            <h2 className="text-display-sm font-semibold text-neutral-900 mb-4">
              Rejoignez les 2000+ formateurs qui utilisent Syllabis
            </h2>
            <p className="text-lg text-neutral-600 max-w-xl mx-auto mb-8">
              Découvrez comment transformer vos référentiels en formations
              e-learning complètes en quelques minutes.
            </p>
            <Link
              href="/demo"
              className="inline-flex items-center justify-center rounded-lg border border-brand-600 bg-brand-600 px-5 py-3 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors"
            >
              Demander une démo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
