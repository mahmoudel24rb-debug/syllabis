import Link from "next/link";
import CTABanner from "../components/CTABanner";
import { Check } from "@untitledui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs | Syllabis — Plans Starter, Pro et Enterprise",
  description: "Des tarifs simples et transparents. Starter à 29\u20AC/mois, Pro à 99\u20AC/mois, Enterprise sur mesure. Essai gratuit 14 jours.",
};

const plans = [
  {
    name: "Starter",
    audience: "Formateur indépendant",
    price: "À partir de 29\u20AC/mois",
    badge: null,
    features: [
      "5 formations/mois",
      "1 utilisateur",
      "Blocs éditeur de base",
      "Export SCORM 1.2",
      "Support email",
    ],
    cta: "Commencer l\u2019essai gratuit",
    href: "/demo",
    highlighted: false,
  },
  {
    name: "Pro",
    audience: "Organisme de formation",
    price: "À partir de 99\u20AC/mois",
    badge: "Populaire",
    features: [
      "Formations illimitées",
      "Jusqu\u2019à 10 utilisateurs",
      "Tous les 39+ blocs éditeur",
      "Export SCORM 1.2 & 2004",
      "Médias IA (vidéos, podcasts)",
      "Planning & pilotage",
      "Support prioritaire",
    ],
    cta: "Commencer l\u2019essai gratuit",
    href: "/demo",
    highlighted: true,
  },
  {
    name: "Enterprise",
    audience: "Multi-tenant",
    price: "Sur mesure",
    badge: null,
    features: [
      "Tout Pro +",
      "Multi-organisations",
      "Branding custom",
      "Branch access",
      "Cost tracking & analytics avancés",
      "SSO / API (227+ routes)",
      "Account manager dédié",
    ],
    cta: "Contacter l\u2019équipe commerciale",
    href: "/demo",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Y a-t-il un essai gratuit ?",
    answer:
      "Oui, 14 jours gratuits sans carte bancaire sur les plans Starter et Pro.",
  },
  {
    question: "Puis-je changer de plan ?",
    answer:
      "Oui, vous pouvez upgrader ou downgrader à tout moment.",
  },
  {
    question: "Comment fonctionne la facturation IA ?",
    answer:
      "Les crédits IA sont inclus dans chaque plan. Au-delà, facturation à l\u2019usage transparente.",
  },
  {
    question: "Y a-t-il un engagement minimum ?",
    answer:
      "Non, tous les plans sont sans engagement. Annulation en 1 clic.",
  },
];

export default function TarifsPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Tarifs</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Des tarifs simples et transparents
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              Choisissez le plan adapté à vos besoins. Sans engagement.
            </p>
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl border p-8 flex flex-col ${
                  plan.highlighted
                    ? "border-brand-300 bg-white shadow-xl ring-2 ring-[#0A1E3D] relative -mt-4 mb-4 lg:-mt-8 lg:mb-8"
                    : "border-neutral-200 bg-white shadow-sm"
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-400 px-3 py-1 text-xs font-semibold text-amber-900">
                    {plan.badge}
                  </span>
                )}

                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900">
                    {plan.name}
                  </h3>
                  <p className="text-sm text-neutral-500 mt-1">
                    {plan.audience}
                  </p>
                </div>

                <div className="mb-8">
                  <span className="text-display-sm font-semibold text-neutral-900">
                    {plan.price}
                  </span>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-neutral-700"
                    >
                      <Check className="size-5 text-emerald-500 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  href={plan.href}
                  className={`w-full inline-flex items-center justify-center rounded-lg px-[18px] py-3 text-md font-semibold shadow-xs transition-colors ${
                    plan.highlighted
                      ? "border border-[#0A1E3D] bg-[#0A1E3D] text-white hover:bg-[#0A1E3D]/90"
                      : "border border-neutral-300 bg-white text-neutral-700 hover:bg-neutral-50"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ Tarifs ── */}
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
                  <h3 className="text-lg font-semibold text-neutral-900 pr-4">
                    {faq.question}
                  </h3>
                  <span className="shrink-0 w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 group-open:text-brand-600 group-open:border-brand-200 transition-colors">
                    <svg
                      className="w-5 h-5 transition-transform group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 4.5v15m7.5-7.5h-15"
                      />
                    </svg>
                  </span>
                </summary>
                <p className="mt-2 text-md text-neutral-600 leading-relaxed pr-14">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Prêt à créer vos formations ?"
        description="Commencez gratuitement pendant 14 jours, sans carte bancaire."
        primaryLabel="Commencer l'essai gratuit"
        primaryHref="/demo"
      />
    </>
  );
}
