"use client";

import { useRef, useState } from "react";
import { Check } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { trackFormStartDemoSignup, trackDemoSignupSuccess } from "@/lib/track";

/**
 * Page essai gratuit self-service — single-step form.
 *
 * Spec produit (Victor) :
 *  - Events GTM uniquement : form_start_demo_signup (premier champ touché)
 *    + demo_signup_success (compte créé + Twenty OK). Pas de form_view,
 *    pas de form_submit pour éviter le bruit dans GA4/Ads.
 *  - 1 step, fields : prénom, nom, email pro, organisme, mot de passe, RGPD.
 *  - Submit -> POST /api/demo-signup (SSR : app /enterprise/public-signup
 *    via shared secret + Twenty Person/Company/Opportunity/Task assigné
 *    Anthony) -> redirect window.location vers data.auto_login_url
 *    (app.syllabis.fr/auto-login?t=<session_token>).
 */

const inclusions = [
  "14 jours d'accès complet, aucune carte bancaire",
  "1 formation pédagogique à générer avec l'IA",
  "Éditeur 40+ blocs pédagogiques",
  "Export SCORM marque blanche (LMS compatible)",
  "Support par email sous 24h ouvrées",
];

type SignupResponse = {
  ok: boolean
  session_token?: string
  auto_login_url?: string
  org_id?: number
  user_id?: number
  demo_expires_at?: string
  error?: string
  detail?: unknown
}

function errorLabel(code: string | undefined): string {
  switch (code) {
    case "invalid_email": return "Email invalide.";
    case "missing_name": return "Indiquez votre prénom et votre nom.";
    case "missing_phone": return "Indiquez votre numéro de téléphone.";
    case "missing_organisme": return "Indiquez votre organisme.";
    case "invalid_password": return "Le mot de passe doit faire au moins 8 caractères.";
    case "missing_consent": return "Merci d'accepter la politique de confidentialité.";
    case "email_already_used": return "Un compte existe déjà avec cet email — connectez-vous directement.";
    case "app_signup_failed":
    case "app_unreachable":
    case "server_misconfig":
      return "Service temporairement indisponible. Réessayez dans un instant ou écrivez-nous à contact@syllabis.fr.";
    default:
      return "Une erreur est survenue. Réessayez ou écrivez-nous à contact@syllabis.fr.";
  }
}

export default function HardcodedEssaiGratuitPage() {
  const [accepted, setAccepted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const formStartedRef = useRef(false);

  function handleFormStart() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackFormStartDemoSignup();
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!accepted) {
      setError("Merci d'accepter la politique de confidentialité.");
      return;
    }
    setError(null);
    setSubmitting(true);
    const fd = new FormData(form);
    const payload = {
      source: "demo_signup" as const,
      prenom: (fd.get("prenom") as string)?.trim() || "",
      nom: (fd.get("nom") as string)?.trim() || "",
      email: ((fd.get("email") as string) || "").trim().toLowerCase(),
      telephone: (fd.get("telephone") as string)?.trim() || "",
      indicatif: (fd.get("indicatif") as string)?.trim() || "",
      organisme: (fd.get("organisme") as string)?.trim() || "",
      password: (fd.get("password") as string) || "",
      consentRgpd: accepted,
      tracking: {
        sourcePage: typeof window !== "undefined" ? window.location.pathname + window.location.search : "",
        referrer: typeof document !== "undefined" ? document.referrer : "",
      },
    };

    try {
      const r = await fetch("/api/demo-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await r.json().catch(() => ({}))) as SignupResponse;
      if (!r.ok || !data.ok) {
        setSubmitting(false);
        setError(errorLabel(data.error));
        return;
      }
      // Succès : event GTM + redirect vers app /auto-login.
      // submitting reste à true pour bloquer le bouton pendant le redirect.
      trackDemoSignupSuccess({ org_id: data.org_id, user_id: data.user_id });
      if (data.auto_login_url) {
        window.location.href = data.auto_login_url;
        return;
      }
      // Fallback si pas d'auto_login_url (ne devrait pas arriver)
      window.location.href = "https://app.syllabis.fr/";
    } catch {
      setSubmitting(false);
      setError(errorLabel(undefined));
    }
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-12 sm:pb-16">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Essai gratuit</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Activez votre compte en 30 secondes
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              14 jours d'accès complet à Syllabis, sans carte bancaire. Générez votre première formation
              pédagogique dès la fin de l'inscription.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="pb-16 sm:pb-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                Créez votre compte
              </h2>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                onFocus={handleFormStart}
                onChange={handleFormStart}
                className="grid grid-cols-1 gap-5"
                noValidate
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputGroup label="Prénom" isRequired>
                    <InputBase type="text" name="prenom" placeholder="Votre prénom" autoComplete="given-name" />
                  </InputGroup>
                  <InputGroup label="Nom" isRequired>
                    <InputBase type="text" name="nom" placeholder="Votre nom" autoComplete="family-name" />
                  </InputGroup>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputGroup label="Email professionnel" isRequired>
                    <InputBase type="email" name="email" placeholder="vous@organisme.fr" autoComplete="email" />
                  </InputGroup>
                  <InputGroup
                    label="Téléphone"
                    isRequired
                    leadingAddon={
                      <NativeSelect
                        aria-label="Indicatif pays"
                        name="indicatif"
                        defaultValue="FR"
                        options={[
                          { value: "FR", label: "FR" },
                          { value: "BE", label: "BE" },
                          { value: "CH", label: "CH" },
                          { value: "CA", label: "CA" },
                        ]}
                      />
                    }
                  >
                    <InputBase type="tel" name="telephone" placeholder="+33 6 12 34 56 78" autoComplete="tel" />
                  </InputGroup>
                </div>

                <InputGroup label="Organisme / Entreprise" isRequired>
                  <InputBase type="text" name="organisme" placeholder="Nom de votre organisme" autoComplete="organization" />
                </InputGroup>

                <InputGroup label="Mot de passe (8 caractères min.)" isRequired>
                  <InputBase type="password" name="password" placeholder="••••••••" autoComplete="new-password" />
                </InputGroup>

                <Checkbox
                  label="J'accepte la politique de confidentialité"
                  size="sm"
                  isSelected={accepted}
                  onChange={setAccepted}
                />

                {error && (
                  <p className="text-sm text-red-600" role="alert">{error}</p>
                )}

                <Button color="primary" size="xl" className="w-full" type="submit" isDisabled={submitting}>
                  {submitting ? "Création de votre compte…" : "Activer mon essai gratuit"}
                </Button>

                <p className="text-center text-xs text-neutral-400">
                  Gratuit pendant 14 jours · Sans carte bancaire · Sans engagement
                </p>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                  Ce qui est inclus
                </h3>
                <ul className="space-y-4">
                  {inclusions.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                      <Check className="size-5 text-brand-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-200">
                  <p className="text-sm text-neutral-600">
                    Une question avant de démarrer ? Écrivez-nous à{" "}
                    <a href="mailto:contact@syllabis.fr" className="font-semibold text-brand-600 hover:underline">
                      contact@syllabis.fr
                    </a>
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
