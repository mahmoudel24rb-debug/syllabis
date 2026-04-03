import CTABanner from "../../components/CTABanner";
import BrowserMockup from "../../components/BrowserMockup";
import { Check } from "@untitledui/icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Multi-tenant | Syllabis — Organisations, rôles et analytics",
  description: "Gérez plusieurs organisations avec branding custom, 5 rôles, branch access, cost tracking IA et analytics avancés.",
};

const features = [
  {
    title: "Organisations branding custom",
    description:
      "Chaque organisation dispose de son propre espace avec logo, couleurs et domaine personnalisés.",
  },
  {
    title: "5 roles utilisateurs",
    description:
      "Owner, Admin, Concepteur, Formateur, Lecture seule — chaque rôle avec des permissions granulaires.",
  },
  {
    title: "Branch access",
    description:
      "Accès par branche organisationnelle : chaque site, agence ou filiale accède uniquement à ses formations.",
  },
  {
    title: "Cost tracking IA",
    description:
      "Suivi des coûts de génération IA par organisation, par utilisateur, par formation. Budget et alertes.",
  },
  {
    title: "Analytics dashboard",
    description:
      "Tableau de bord analytique : formations créées, médias générés, utilisateurs actifs, tendances.",
  },
  {
    title: "Emails transactionnels",
    description:
      "Invitations, notifications, alertes — emails automatiques personnalisés pour chaque événement.",
  },
];

const roles = [
  {
    name: "Owner",
    description: "Accès complet, gestion de la facturation et des organisations.",
  },
  {
    name: "Admin",
    description: "Gestion des utilisateurs, paramètres, accès à toutes les formations.",
  },
  {
    name: "Concepteur",
    description: "Création et édition de formations, génération IA, export SCORM.",
  },
  {
    name: "Formateur",
    description: "Accès aux formations assignées, planning, suivi des apprenants.",
  },
  {
    name: "Lecture seule",
    description: "Consultation des formations et des rapports, sans droit de modification.",
  },
];

export default function MultiTenantPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 mb-4">
              <span className="text-sm font-medium text-amber-800">
                Multi-tenant & Enterprise
              </span>
            </div>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Multi-tenant &{" "}
              <span className="text-brand-600">Enterprise</span>
            </h1>
            <p className="mt-4 text-xl sm:text-2xl font-medium text-neutral-700">
              Idéal pour réseaux d&apos;OF, groupes de formation, franchises
            </p>
            <p className="mt-6 text-lg text-neutral-600 max-w-2xl mx-auto">
              Gérez plusieurs organisations depuis une seule plateforme.
              Branding personnalisé, rôles granulaires, suivi des coûts et
              analytics pour chaque entité.
            </p>
          </div>
        </div>
      </section>

      {/* ── Features grid ── */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Fonctionnalités Enterprise
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              Tout pour gérer un réseau de formation
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8"
              >
                <div className="w-10 h-10 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center mb-4">
                  <Check className="size-5 text-[#0A1E3D]" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-md text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="mt-12 mb-16 max-w-4xl mx-auto px-4 sm:px-8">
        <BrowserMockup src="/screenshots/global-dashboard.png" alt="Dashboard multi-utilisateurs Syllabis" />
      </div>

      {/* ── 5 Roles ── */}
      <section className="py-16 sm:py-24 bg-neutral-50">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-brand-600 mb-3">
              Gestion des rôles
            </p>
            <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
              5 rôles avec permissions granulaires
            </h2>
          </div>
          <div className="max-w-2xl mx-auto rounded-2xl border border-neutral-200 bg-white overflow-hidden divide-y divide-neutral-100">
            {roles.map((role, i) => (
              <div key={role.name} className="flex items-center gap-4 px-6 py-5">
                <div className="w-8 h-8 rounded-full bg-brand-600 text-white flex items-center justify-center text-sm font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <span className="text-md font-semibold text-neutral-900">
                    {role.name}
                  </span>
                  <p className="text-sm text-neutral-500">{role.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <CTABanner
        title="Déploiement Enterprise sur mesure"
        description="Contactez-nous pour configurer Syllabis pour votre réseau de formation, avec branding, rôles et analytics."
        primaryLabel="Contacter l'équipe"
        primaryHref="/demo"
        secondaryLabel="Toutes les fonctionnalités"
        secondaryHref="/fonctionnalites"
      />
    </>
  );
}
