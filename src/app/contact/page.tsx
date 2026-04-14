"use client";

import { useRef, useState } from "react";
import { Check } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { TextArea } from "@/components/base/textarea/textarea";
import { sendToWebhook } from "@/utils/webhook";

export default function ContactPage() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  function handleContactSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    const fd = new FormData(form);
    sendToWebhook({
      source: "contact",
      timestamp: new Date().toISOString(),
      page: "/contact",
      data: {
        prenom: fd.get("prenom") as string,
        nom: fd.get("nom") as string,
        email: fd.get("email") as string,
        telephone: fd.get("telephone") as string,
        indicatif: fd.get("indicatif") as string,
        organisme: fd.get("organisme") as string,
        message: fd.get("message") as string,
        accepte_confidentialite: accepted,
      },
    });
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Contact</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Contactez-nous
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              On serait ravis d&apos;échanger. Question, devis, essai gratuit, notre équipe vous répond sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex items-center justify-center size-12 rounded-full bg-emerald-100">
                    <Check className="size-6 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-900 mb-2">Message envoyé</h2>
                  <p className="text-md text-neutral-600">Nous vous recontactons sous 24h.</p>
                </div>
              ) : (
              <>
              <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                Envoyez-nous un message
              </h2>
              <form ref={formRef} onSubmit={handleContactSubmit} className="grid grid-cols-1 gap-5">
                {/* Prénom + Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputGroup label="Prénom" isRequired>
                    <InputBase type="text" name="prenom" placeholder="Votre prénom" />
                  </InputGroup>
                  <InputGroup label="Nom" isRequired>
                    <InputBase type="text" name="nom" placeholder="Votre nom" />
                  </InputGroup>
                </div>

                {/* Email + Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputGroup label="Email professionnel" isRequired>
                    <InputBase type="email" name="email" placeholder="vous@organisme.fr" />
                  </InputGroup>
                  <InputGroup
                    label="Téléphone"
                    isRequired
                    leadingAddon={
                      <NativeSelect
                        aria-label="Indicatif pays"
                        name="indicatif"
                        options={[
                          { value: "FR", label: "FR" },
                          { value: "BE", label: "BE" },
                          { value: "CH", label: "CH" },
                          { value: "CA", label: "CA" },
                        ]}
                      />
                    }
                  >
                    <InputBase type="tel" name="telephone" placeholder="+33 6 12 34 56 78" />
                  </InputGroup>
                </div>

                {/* Organisme */}
                <InputGroup label="Organisme / Entreprise" hint="Optionnel">
                  <InputBase type="text" name="organisme" placeholder="Nom de votre organisme" />
                </InputGroup>

                {/* Message */}
                <InputGroup label="Message" isRequired>
                  <TextArea
                    name="message"
                    placeholder="Décrivez votre besoin, votre question ou ce que vous aimeriez tester..."
                    rows={5}
                  />
                </InputGroup>

                {/* Checkbox */}
                <Checkbox
                  label="J'accepte la politique de confidentialité"
                  size="sm"
                  isSelected={accepted}
                  onChange={setAccepted}
                />

                {/* Submit */}
                <Button color="primary" size="xl" className="w-full" type="submit">
                  Envoyer
                </Button>
              </form>
              </>
              )}
            </div>

            {/* Sidebar Info */}
            <div className="lg:col-span-2">
              <div className="rounded-2xl border border-neutral-200 bg-neutral-50 p-8 sticky top-28">
                <h3 className="text-lg font-semibold text-neutral-900 mb-6">
                  Nous contacter directement
                </h3>

                <div className="space-y-6">
                  <div>
                    <p className="text-sm font-medium text-neutral-500 mb-1">Email</p>
                    <a
                      href="mailto:contact@syllabis.fr"
                      className="text-md font-medium text-brand-600 hover:text-brand-700 transition-colors"
                    >
                      contact@syllabis.fr
                    </a>
                  </div>

                  <div className="pt-6 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600">
                      Nous répondons généralement sous{" "}
                      <span className="font-semibold text-neutral-900">24 heures</span>{" "}
                      les jours ouvrables.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
