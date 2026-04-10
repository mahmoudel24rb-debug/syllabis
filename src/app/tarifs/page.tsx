"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import Link from "next/link";
import { Check, Minus } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import CTABanner from "../components/CTABanner";

function SectionHeader({ children }: { children: ReactNode }) {
  return (
    <tr className="border-b border-neutral-200">
      <td colSpan={5} className="pt-8 pb-3 text-sm font-semibold text-neutral-900">{children}</td>
    </tr>
  );
}

function Row({ label, values }: { label: string; values: (boolean | string)[] }) {
  return (
    <tr className="border-b border-neutral-100">
      <td className="py-3.5 pr-4 text-sm text-neutral-700">{label}</td>
      {values.map((v, i) => (
        <td key={i} className="py-3.5 px-4 text-center">
          {v === true ? (
            <Check className="size-5 text-emerald-500 mx-auto" />
          ) : v === false ? (
            <Minus className="size-5 text-neutral-300 mx-auto" />
          ) : (
            <span className="text-sm text-neutral-700">{v}</span>
          )}
        </td>
      ))}
    </tr>
  );
}

const plans = [
  {
    name: "Découverte",
    audience: "Pour évaluer Syllabis",
    price: "0 €",
    period: "14 jours gratuits",
    annualPrice: null,
    includes: null,
    features: [
      "500 crédits IA/mois",
      "43 blocs éditeur",
      "1 utilisateur",
      "Export SCORM (partiel)",
      "Export Excel",
      "Support communauté",
    ],
    cta: "Commencer gratuitement",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Pro",
    audience: "Indépendant / Petit OF",
    price: "149 €",
    period: "/mois",
    annualPrice: "1 430 €/an",
    annualMonthly: "119 €",
    includes: "Tout Découverte, plus :",
    features: [
      "1 000 crédits IA/mois",
      "1 utilisateur",
      "Génération niveau par niveau",
      "Export SCORM complet",
      "5 thèmes SCORM",
      "Support email 48h",
    ],
    cta: "Commencer l'essai",
    href: "/contact",
    highlighted: false,
  },
  {
    name: "Business",
    audience: "OF moyen / Équipe de conception",
    price: "449 €",
    period: "/mois",
    annualPrice: "4 310 €/an",
    annualMonthly: "359 €",
    badge: "Populaire",
    includes: "Tout Pro, plus :",
    features: [
      "5 000 crédits IA/mois",
      "3 utilisateurs inclus (+25 €/siège)",
      "Génération en cascade complète",
      "Intégration NotebookLM",
      "Marque blanche SCORM",
      "Planification automatique",
      "Support prioritaire 24h",
    ],
    cta: "Nous contacter",
    href: "/contact",
    highlighted: true,
  },
  {
    name: "Enterprise",
    audience: "Grand groupe / Université",
    price: "Sur mesure",
    period: "",
    annualPrice: "7 670 €/an",
    annualMonthly: "639 €",
    annualPriceOriginal: "12 500 €/an",
    badge: "Offre premiers clients",
    includes: "Tout Business, plus :",
    features: [
      "Formations et utilisateurs illimités",
      "Multi-organisations cloisonnées",
      "Personnalisation complète à votre marque",
      "API et intégrations sur mesure",
      "Interlocuteur dédié",
      "Support garanti sous 4h",
    ],
    cta: "Nous contacter",
    href: "/contact",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Comment choisir l'offre adaptée à mon organisme ?",
    answer:
      "Le choix dépend de la taille de votre équipe et de votre volume de production. Contactez-nous pour un échange de 15 minutes, nous vous conseillerons l'offre la plus adaptée à votre situation.",
  },
  {
    question: "Y a-t-il un essai gratuit ?",
    answer:
      "Oui. Le plan Découverte vous permet de tester Syllabis gratuitement pendant 14 jours, sans carte bancaire, sur un vrai projet.",
  },
  {
    question: "Comment obtenir un devis ?",
    answer:
      "Contactez-nous via la page contact ou réservez une démo. Nous vous enverrons un devis personnalisé sous 24h, adapté à la taille et aux besoins de votre organisme.",
  },
];

export default function TarifsPage() {
  const [annual, setAnnual] = useState(true);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Tarifs</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Une offre adaptée à chaque organisme
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Du formateur indépendant au grand groupe, choisissez l&apos;offre qui correspond à vos besoins. Sans engagement.
            </p>

            {/* Toggle mensuel / annuel */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-neutral-200 bg-white p-1 shadow-xs">
              <button
                onClick={() => setAnnual(false)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  !annual ? "bg-brand-600 text-white" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Mensuel
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  annual ? "bg-brand-600 text-white" : "text-neutral-600 hover:text-neutral-900"
                }`}
              >
                Annuel <span className="text-xs font-medium opacity-80">-20%</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-6 sm:p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-brand-300 bg-white shadow-xl ring-2 ring-brand-600 lg:-mt-4 lg:mb-4"
                    : "border-neutral-200 bg-white shadow-sm"
                }`}
              >
                {"badge" in plan && plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-600 px-4 py-1 text-xs font-semibold text-white whitespace-nowrap">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900">{plan.name}</h3>
                  <p className="text-sm text-neutral-500 mt-1">{plan.audience}</p>
                </div>

                <div className="mb-6">
                  {plan.price === "0 €" ? (
                    <>
                      <span className="text-display-xs font-semibold text-neutral-900">0 €</span>
                      <span className="text-sm text-neutral-500 ml-1">{plan.period}</span>
                    </>
                  ) : annual && "annualMonthly" in plan ? (
                    <>
                      <span className="text-display-xs font-semibold text-neutral-900">{plan.annualMonthly}</span>
                      <span className="text-sm text-neutral-500">/mois</span>
                      {"annualPriceOriginal" in plan && plan.annualPriceOriginal ? (
                        <>
                          <p className="text-sm text-neutral-400 line-through mt-1">{plan.annualPriceOriginal}</p>
                          <p className="text-xs text-emerald-600 font-medium">Facturé {plan.annualPrice}</p>
                        </>
                      ) : (
                        <p className="text-xs text-neutral-500 mt-1">Facturé {plan.annualPrice}</p>
                      )}
                    </>
                  ) : plan.price === "Sur mesure" ? (
                    <span className="text-display-xs font-semibold text-neutral-900">Sur mesure</span>
                  ) : (
                    <>
                      <span className="text-display-xs font-semibold text-neutral-900">{plan.price}</span>
                      <span className="text-sm text-neutral-500">{plan.period}</span>
                    </>
                  )}
                </div>

                {plan.includes && (
                  <p className="text-sm font-medium text-neutral-900 mb-3">{plan.includes}</p>
                )}

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-neutral-700">
                      <Check className="size-5 text-emerald-500 shrink-0 mt-0.5" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  color={plan.highlighted ? "primary" : "secondary"}
                  size="lg"
                  href={plan.href}
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">Comparaison</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Comparez les offres en détail
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px]">
              <thead>
                <tr className="border-b border-neutral-200">
                  <th className="text-left py-4 pr-4 text-sm font-semibold text-neutral-900 w-[280px]"></th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-neutral-900">Découverte</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-neutral-900">Pro</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-brand-600">Business</th>
                  <th className="py-4 px-4 text-center text-sm font-semibold text-neutral-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <SectionHeader>Volumes</SectionHeader>
                <Row label="Crédits IA inclus/mois" values={["500", "1 000", "5 000", "Illimité"]} />
                <Row label="Utilisateurs inclus" values={["1", "1", "3", "Illimité"]} />
                <Row label="Sièges supplémentaires" values={["—", "—", "25 €/mois/siège", "Négocié"]} />
                <Row label="Historique des générations" values={["30 jours", "90 jours", "Illimité", "Illimité"]} />

                <SectionHeader>Génération IA</SectionHeader>
                <Row label="Analyse de référentiel PDF" values={[true, true, true, true]} />
                <Row label="Génération en cascade complète" values={[false, false, true, true]} />

                <SectionHeader>Éditeur et blocs</SectionHeader>
                <Row label="43 blocs éditeur" values={[true, true, true, true]} />
                <Row label="Quiz et flashcards IA" values={[true, true, true, true]} />
                <Row label="Intégration NotebookLM" values={[false, false, true, true]} />

                <SectionHeader>Exports et intégrations</SectionHeader>
                <Row label="Export SCORM 1.2 et 2004" values={["Partiel", true, true, true]} />
                <Row label="Export Excel (structure)" values={[true, true, true, true]} />
                <Row label="Thèmes SCORM prédéfinis" values={[false, true, true, true]} />
                <Row label="Thèmes SCORM personnalisés" values={[false, "Add-on", true, true]} />
                <Row label="Planification automatique" values={[false, "Add-on", true, true]} />
                <Row label="Chat apprenants dans le SCORM" values={[false, "Add-on", "Add-on", true]} />
                <Row label="API et webhooks" values={[false, "Add-on", "Add-on", true]} />
                <Row label="Intégrations tierces" values={["—", "—", "3 max", "Illimité"]} />
                <Row label="Personnalisation complète à votre marque" values={[false, false, false, true]} />
                <Row label="Multi-organisations" values={[false, false, false, true]} />

                <SectionHeader>Support</SectionHeader>
                <Row label="Support inclus" values={["Communauté", "Email 48h", "Prioritaire 24h", "Dédié sous 4h"]} />
                <Row label="Interlocuteur dédié" values={[false, false, "Add-on", true]} />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Tarifs */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">FAQ</p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Questions sur les tarifs
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-neutral-200">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <h3 className="text-lg font-semibold text-neutral-900 pr-4">{faq.question}</h3>
                  <span className="shrink-0 size-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-open:text-brand-600 group-open:border-brand-200 transition-colors">
                    <svg className="size-5 transition-transform group-open:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-md text-neutral-600 leading-relaxed pr-14">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABanner
        title="Besoin d'un devis personnalisé ?"
        description="Contactez-nous et recevez une proposition adaptée à votre organisme sous 24h."
        primaryLabel="Nous contacter"
        primaryHref="/contact"
        secondaryLabel="Réserver une démo"
        secondaryHref="/demo"
      />
    </>
  );
}
