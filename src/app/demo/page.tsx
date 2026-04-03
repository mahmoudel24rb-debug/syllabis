import CTABanner from "../components/CTABanner";
import { Check } from "@untitledui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander une démo | Syllabis — Voyez l'IA générer une formation en direct",
  description: "Réservez 30 minutes de démo. Upload d'un vrai référentiel, génération en direct, tour de l'éditeur et export SCORM.",
};

const demoIncludes = [
  "Upload d\u2019un vrai référentiel",
  "Génération en direct par l\u2019IA",
  "Tour de l\u2019éditeur 39+ blocs",
  "Export SCORM en live",
];

export default function DemoPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Démo</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Voyez Syllabis en action
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              30 minutes pour découvrir comment l&apos;IA transforme vos
              référentiels en formations complètes.
            </p>
          </div>
        </div>
      </section>

      {/* ── Form + Sidebar ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                Réservez votre créneau
              </h2>
              <div className="grid grid-cols-1 gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Nom
                    </label>
                    <input
                      type="text"
                      placeholder="Votre nom"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="vous@exemple.com"
                      className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Organisme
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de votre organisme"
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Nombre de formations/an
                  </label>
                  <select className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors">
                    <option value="">Sélectionnez</option>
                    <option value="1-10">1-10</option>
                    <option value="10-50">10-50</option>
                    <option value="50-200">50-200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Certifications concernées
                  </label>
                  <input
                    type="text"
                    placeholder="RNCP, BTS, CAP, CQP..."
                    className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 placeholder:text-neutral-500 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    Créneau préféré
                  </label>
                  <select className="w-full rounded-lg border border-neutral-300 bg-white px-3.5 py-2.5 text-md text-neutral-900 shadow-xs focus:border-brand-300 focus:ring-4 focus:ring-brand-100 outline-none transition-colors">
                    <option value="">Sélectionnez</option>
                    <option value="matin">Matin</option>
                    <option value="apres-midi">Après-midi</option>
                    <option value="flexible">Flexible</option>
                  </select>
                </div>

                <button className="w-full rounded-lg border border-brand-600 bg-brand-600 px-[18px] py-3 text-md font-semibold text-white shadow-xs hover:bg-brand-700 transition-colors">
                  Réserver ma démo
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                  Ce que la démo inclut
                </h3>
                <ul className="space-y-4">
                  {demoIncludes.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <Check className="size-5 text-[#0A1E3D] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-6 text-center">
                  <div className="text-display-sm font-semibold text-[#0A1E3D]">
                    De 3 semaines à 3 minutes
                  </div>
                  <p className="mt-2 text-sm text-neutral-600">
                    pour créer une formation complète
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
