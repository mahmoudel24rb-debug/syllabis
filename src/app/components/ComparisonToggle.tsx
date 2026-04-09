"use client";

import { useState } from "react";
import { Check, X } from "@untitledui/icons";

const diplomes = [
  {
    label: "TP Formateur pour adultes",
    data: [
      { label: "Création de l\u2019arborescence pédagogique", before: 80, after: 8 },
      { label: "Création du contenu + validation des compétences", before: 1600, after: 80 },
      { label: "Contrôle qualité", before: 40, after: 40 },
    ],
  },
  {
    label: "BTS Commerce International",
    data: [
      { label: "Création de l\u2019arborescence pédagogique", before: 60, after: 6 },
      { label: "Création du contenu + validation des compétences", before: 1200, after: 60 },
      { label: "Contrôle qualité", before: 30, after: 30 },
    ],
  },
  {
    label: "CQP Agent de prévention",
    data: [
      { label: "Création de l\u2019arborescence pédagogique", before: 40, after: 5 },
      { label: "Création du contenu + validation des compétences", before: 800, after: 50 },
      { label: "Contrôle qualité", before: 20, after: 20 },
    ],
  },
];

export default function ComparisonToggle() {
  const [active, setActive] = useState(0);
  const current = diplomes[active];
  const totalBefore = current.data.reduce((s, r) => s + r.before, 0);
  const totalAfter = current.data.reduce((s, r) => s + r.after, 0);

  return (
    <div>
      {/* Toggle */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {diplomes.map((d, i) => (
          <button
            key={d.label}
            onClick={() => setActive(i)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              i === active
                ? "bg-[#0A1E3D] text-white"
                : "bg-white text-neutral-600 border border-neutral-200 hover:bg-neutral-50"
            }`}
          >
            {d.label}
          </button>
        ))}
      </div>

      {/* Barres visuelles */}
      <div className="space-y-4 mb-10">
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-red-600 flex items-center gap-1">
              <X className="size-4" /> Sans Syllabis
            </span>
            <span className="text-sm font-bold text-red-700">{totalBefore.toLocaleString("fr")}h</span>
          </div>
          <div className="h-10 bg-red-100 rounded-xl w-full flex items-center px-4">
            <div className="h-6 bg-red-500 rounded-lg w-full" />
          </div>
        </div>
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-emerald-600 flex items-center gap-1">
              <Check className="size-4" /> Avec Syllabis
            </span>
            <span className="text-sm font-bold text-emerald-700">{totalAfter}h</span>
          </div>
          <div className="h-10 bg-emerald-100 rounded-xl w-full flex items-center px-4">
            <div
              className="h-6 bg-emerald-500 rounded-lg transition-all duration-500"
              style={{ width: `${(totalAfter / totalBefore) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Tableau détail */}
      <div className="rounded-2xl border border-neutral-200 bg-white overflow-hidden">
        <div className="grid grid-cols-3 bg-[#0A1E3D] px-4 sm:px-6 py-3">
          <span className="text-sm font-semibold text-white">Étape</span>
          <span className="text-sm font-semibold text-red-300 text-center">Sans Syllabis</span>
          <span className="text-sm font-semibold text-emerald-300 text-center">Avec Syllabis</span>
        </div>
        <div className="divide-y divide-neutral-100">
          {[...current.data, { label: "TOTAL", before: totalBefore, after: totalAfter }].map((row) => {
            const isTotal = row.label === "TOTAL";
            return (
              <div key={row.label} className={`grid grid-cols-3 px-4 sm:px-6 py-4 items-center ${isTotal ? "bg-neutral-50" : ""}`}>
                <span className={`text-xs sm:text-sm text-neutral-900 ${isTotal ? "font-bold" : "font-medium"}`}>{row.label}</span>
                <div className="flex justify-center">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ${isTotal ? "bg-red-100 text-red-700 font-bold" : "bg-red-50 text-red-600"}`}>
                    <X className="size-3.5" />{row.before.toLocaleString("fr")}h
                  </span>
                </div>
                <div className="flex justify-center">
                  <span className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-sm ${isTotal ? "bg-emerald-100 text-emerald-700 font-bold" : "bg-emerald-50 text-emerald-600"}`}>
                    <Check className="size-3.5" />{row.after}h
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
