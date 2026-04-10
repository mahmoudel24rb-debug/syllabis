"use client";

import { useState } from "react";

const diplomaData = [
  {
    name: "TP Formateur pour adultes",
    ratio: "÷13",
    rows: [
      { label: "Création de l\u2019arborescence pédagogique", sans: "80h", avec: "8h" },
      { label: "Création du contenu + validation des compétences", sans: "1 600h", avec: "80h" },
      { label: "Contrôle qualité", sans: "40h", avec: "40h" },
    ],
    totalSans: "1 720h",
    totalAvec: "128h",
    saved: "1 592h",
  },
  {
    name: "BTS Commerce International",
    ratio: "÷11",
    rows: [
      { label: "Création de l\u2019arborescence pédagogique", sans: "40h", avec: "5h" },
      { label: "Création du contenu + validation des compétences", sans: "800h", avec: "50h" },
      { label: "Contrôle qualité", sans: "20h", avec: "20h" },
    ],
    totalSans: "860h",
    totalAvec: "75h",
    saved: "785h",
  },
  {
    name: "CQP Agent de prévention",
    ratio: "÷10",
    rows: [
      { label: "Création de l\u2019arborescence pédagogique", sans: "20h", avec: "3h" },
      { label: "Création du contenu + validation des compétences", sans: "400h", avec: "22h" },
      { label: "Contrôle qualité", sans: "10h", avec: "20h" },
    ],
    totalSans: "430h",
    totalAvec: "45h",
    saved: "385h",
  },
];

export default function ComparisonSection() {
  const [active, setActive] = useState(0);
  const data = diplomaData[active];

  return (
    <section className="py-16 sm:py-24 bg-neutral-50">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Un gain de temps sans précédent
          </h2>
        </div>

        <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr]">
            {/* Panneau navy */}
            <div className="bg-[#0A1E3D] p-8 lg:p-10 flex flex-col justify-center">
              <h3 className="text-lg lg:text-xl font-semibold text-white mb-2">
                Divisez par {data.ratio.replace("÷", "")} le temps de création
              </h3>
              <p className="text-sm text-white/60 mb-8 leading-relaxed">
                Comparez le temps de production d&apos;un titre professionnel
                complet, avec et sans Syllabis.
              </p>

              <div className="text-5xl lg:text-6xl font-semibold text-emerald-400 mb-1 tabular-nums">
                {data.ratio}
              </div>
              <p className="text-sm text-white/40 mb-8">plus rapide en moyenne</p>

              <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible scrollbar-hide -mx-1 px-1 lg:mx-0 lg:px-0">
                {diplomaData.map((d, i) => (
                  <button
                    key={d.name}
                    onClick={() => setActive(i)}
                    className={`shrink-0 lg:w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all border ${
                      i === active
                        ? "bg-white/15 border-white/30 text-white"
                        : "bg-white/5 border-white/15 text-white/70 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {d.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Tableau */}
            <div className="p-6 lg:p-8 bg-white">
              {/* Header */}
              <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] gap-2 pb-3 border-b border-neutral-200">
                <span className="text-xs uppercase text-neutral-400 font-medium tracking-wide">
                  Étape
                </span>
                <span className="text-xs uppercase text-neutral-400 font-medium tracking-wide text-center">
                  Sans
                </span>
                <span className="text-xs uppercase text-neutral-400 font-medium tracking-wide text-center">
                  Avec
                </span>
              </div>

              {/* Rows */}
              <div>
                {data.rows.map((row) => (
                  <div
                    key={row.label}
                    className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] gap-2 py-3.5 border-b border-neutral-100 items-center"
                  >
                    <span className="text-xs sm:text-sm text-neutral-700">
                      {row.label}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-red-500 text-center tabular-nums">
                      {row.sans}
                    </span>
                    <span className="text-xs sm:text-sm font-medium text-emerald-500 text-center tabular-nums">
                      {row.avec}
                    </span>
                  </div>
                ))}
              </div>

              {/* Total */}
              <div className="grid grid-cols-[1fr_80px_80px] sm:grid-cols-[1fr_100px_100px] gap-2 py-4 mt-1 border-t-2 border-neutral-200 items-center">
                <span className="text-sm font-bold text-neutral-900 uppercase tracking-wide">
                  Total
                </span>
                <span className="text-md font-bold text-red-600 text-center tabular-nums">
                  {data.totalSans}
                </span>
                <span className="text-md font-bold text-emerald-600 text-center tabular-nums">
                  {data.totalAvec}
                </span>
              </div>

              {/* Saved */}
              <div className="mt-4 p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl flex justify-between items-center">
                <span className="text-sm font-semibold text-emerald-800">
                  Temps économisé
                </span>
                <span className="text-lg font-bold text-emerald-600 tabular-nums">
                  {data.saved}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
