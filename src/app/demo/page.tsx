"use client";

import { useState } from "react";
import { Check } from "@untitledui/icons";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { Select } from "@/components/base/select/select";
import { DateTimePicker } from "@/components/application/date-picker/date-time-picker";

const demoIncludes = [
  "Upload de votre propre référentiel",
  "Génération de l'arborescence en direct",
  "Tour complet de l'éditeur 40+ blocs",
  "Export SCORM marque blanche en live",
  "Questions/réponses avec l'équipe produit",
];

const sizeOptions = [
  { id: "1-5", label: "1 à 5 personnes" },
  { id: "6-15", label: "6 à 15 personnes" },
  { id: "16-50", label: "16 à 50 personnes" },
  { id: "50+", label: "50+ personnes" },
];

export default function DemoPage() {
  const [accepted, setAccepted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-16 sm:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">Démo</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              Réservez votre démo personnalisée
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
              30 minutes sur votre propre référentiel. Sans engagement, réponse sous 24h.
            </p>
          </div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                Réservez votre créneau
              </h2>
              <div className="grid grid-cols-1 gap-5">
                {/* Prénom + Nom */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputGroup label="Prénom" isRequired>
                    <InputBase type="text" placeholder="Votre prénom" />
                  </InputGroup>
                  <InputGroup label="Nom" isRequired>
                    <InputBase type="text" placeholder="Votre nom" />
                  </InputGroup>
                </div>

                {/* Email + Téléphone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <InputGroup label="Email professionnel" isRequired>
                    <InputBase type="email" placeholder="vous@organisme.fr" />
                  </InputGroup>
                  <InputGroup
                    label="Téléphone"
                    isRequired
                    leadingAddon={
                      <NativeSelect
                        aria-label="Indicatif pays"
                        options={[
                          { value: "FR", label: "FR" },
                          { value: "BE", label: "BE" },
                          { value: "CH", label: "CH" },
                          { value: "CA", label: "CA" },
                        ]}
                      />
                    }
                  >
                    <InputBase type="tel" placeholder="+33 6 12 34 56 78" />
                  </InputGroup>
                </div>

                {/* Organisme */}
                <InputGroup label="Organisme / Entreprise" isRequired>
                  <InputBase type="text" placeholder="Nom de votre organisme" />
                </InputGroup>

                {/* Taille + Date/Heure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Select
                    label="Taille de l'établissement"
                    placeholder="Sélectionnez"
                    isRequired
                    items={sizeOptions}
                    size="md"
                  >
                    {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                  </Select>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-primary">
                      Date et horaire <span className="text-red-500">*</span>
                    </label>
                    <DateTimePicker />
                  </div>
                </div>

                {/* Type de titre */}
                <InputGroup label="Type de titre sur lequel vous travaillez" hint="Optionnel">
                  <InputBase
                    type="text"
                    placeholder="ex : Titre Pro Négociateur Technico-Commercial, BTS Commerce..."
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
                <Button color="primary" size="xl" className="w-full">
                  Réserver ma démo
                </Button>

                {/* Réassurance */}
                <p className="text-center text-xs text-neutral-400">
                  Gratuit · Sans engagement · Démo sur votre propre référentiel
                </p>
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
                    <li key={item} className="flex items-start gap-3 text-sm text-neutral-700">
                      <Check className="size-5 text-brand-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-neutral-200">
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
      </section>
    </>
  );
}
