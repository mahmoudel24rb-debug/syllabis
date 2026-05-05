"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Check } from "@untitledui/icons";
import { getLocalTimeZone, isWeekend, today, type DateValue } from "@internationalized/date";
import { Button } from "@/components/base/buttons/button";
import { Checkbox } from "@/components/base/checkbox/checkbox";
import { InputBase } from "@/components/base/input/input";
import { InputGroup } from "@/components/base/input/input-group";
import { NativeSelect } from "@/components/base/select/select-native";
import { Select } from "@/components/base/select/select";
import { DateTimePicker } from "@/components/application/date-picker/date-time-picker";
import { submitLead } from "@/lib/lead-tracking";
import { trackFormStartDemo, trackDemoRequest } from "@/lib/track";

// Cal.com : les vraies dispos sont calculées en live via /api/cal/days (jours)
// + /api/cal/slots (heures du jour sélectionné). On grise les weekends en garde-fou
// le temps que la liste arrive du serveur.
const TZ = "Europe/Paris";
const calMinDate = today(TZ);
const calFilterTimeSlots = (slot: { hour: number; minute: number }, selected: DateValue | null): boolean => {
  if (!selected) return true;
  // Si le créneau choisi est aujourd'hui, masquer les heures déjà passées (en Europe/Paris).
  const todayHere = today(TZ);
  const isToday = selected.year === todayHere.year && selected.month === todayHere.month && selected.day === todayHere.day;
  if (!isToday) return true;
  const now = new Date();
  const nowParts = new Intl.DateTimeFormat("fr-FR", { timeZone: TZ, hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(now);
  const h = Number(nowParts.find((p) => p.type === "hour")?.value || "0");
  const m = Number(nowParts.find((p) => p.type === "minute")?.value || "0");
  return slot.hour > h || (slot.hour === h && slot.minute > m);
};

const demoIncludes = [
  "Chargement de votre propre référentiel",
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

export default function HardcodedDemoPage() {
  const [accepted, setAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [taille, setTaille] = useState<string | null>(null);
  const [dateHeure, setDateHeure] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
  const [availableSlots, setAvailableSlots] = useState<{ hour: number; minute: number }[] | null | undefined>(undefined);
  const [availableDays, setAvailableDays] = useState<Set<string> | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const formStartedRef = useRef(false);

  // Pré-fetch des jours dispos sur les 60 prochains jours (multi-user union).
  // Tant que le set n'est pas reçu, on grise juste les weekends.
  useEffect(() => {
    const todayHere = today(TZ);
    const yyyy = String(todayHere.year).padStart(4, "0");
    const mm = String(todayHere.month).padStart(2, "0");
    const dd = String(todayHere.day).padStart(2, "0");
    const from = `${yyyy}-${mm}-${dd}`;
    const toJs = new Date(`${from}T00:00:00Z`);
    toJs.setUTCDate(toJs.getUTCDate() + 60);
    const to = `${toJs.getUTCFullYear()}-${String(toJs.getUTCMonth() + 1).padStart(2, "0")}-${String(toJs.getUTCDate()).padStart(2, "0")}`;
    const ctrl = new AbortController();
    fetch(`/api/cal/days?from=${from}&to=${to}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((j: { ok: boolean; availableDays?: string[] }) => {
        if (j.ok && Array.isArray(j.availableDays)) {
          setAvailableDays(new Set(j.availableDays));
        }
      })
      .catch(() => {
        // Sur erreur on laisse availableDays à null → comportement permissif (sam/dim seuls grisés).
      });
    return () => ctrl.abort();
  }, []);

  const calIsDateUnavailable = useCallback((d: DateValue) => {
    if (isWeekend(d, "fr-FR")) return true;
    if (!availableDays) return false;
    const key = `${String(d.year).padStart(4, "0")}-${String(d.month).padStart(2, "0")}-${String(d.day).padStart(2, "0")}`;
    return !availableDays.has(key);
  }, [availableDays]);

  useEffect(() => {
    if (!selectedDate) {
      setAvailableSlots(undefined);
      return;
    }
    const yyyy = String(selectedDate.year).padStart(4, "0");
    const mm = String(selectedDate.month).padStart(2, "0");
    const dd = String(selectedDate.day).padStart(2, "0");
    const date = `${yyyy}-${mm}-${dd}`;
    const ctrl = new AbortController();
    setAvailableSlots(null);
    fetch(`/api/cal/slots?date=${date}`, { signal: ctrl.signal })
      .then((r) => r.json())
      .then((j: { ok: boolean; slots?: { hour: number; minute: number }[] }) => {
        if (j.ok && Array.isArray(j.slots)) setAvailableSlots(j.slots);
        else setAvailableSlots([]);
      })
      .catch((e) => {
        if (e?.name === "AbortError") return;
        // En cas d'erreur réseau on retombe sur "aucun créneau" plutôt que sur les slots hardcodés —
        // ça pousse l'utilisateur à choisir une autre date au lieu de prendre un slot peut-être pris.
        setAvailableSlots([]);
      });
    return () => ctrl.abort();
  }, [selectedDate]);

  function handleFormStart() {
    if (formStartedRef.current) return;
    formStartedRef.current = true;
    trackFormStartDemo();
  }

  async function handleDemoSubmit(e: React.FormEvent<HTMLFormElement>) {
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
    const nbApprenantsRaw = (fd.get("nbApprenants") as string) || "";
    const nbApprenants = nbApprenantsRaw ? Number(nbApprenantsRaw) : undefined;
    const result = await submitLead({
      source: "demo",
      prenom: (fd.get("prenom") as string) || "",
      nom: (fd.get("nom") as string) || "",
      email: (fd.get("email") as string) || "",
      telephone: (fd.get("telephone") as string) || "",
      indicatif: (fd.get("indicatif") as string) || "",
      organisme: (fd.get("organisme") as string) || "",
      titreReferentiel: (fd.get("titre") as string) || "",
      tailleEtablissement: taille || "",
      dateHeureDemoSouhaitee: dateHeure,
      nbApprenants: nbApprenants && Number.isFinite(nbApprenants) ? nbApprenants : undefined,
      dateLancementSouhaitee: (fd.get("dateLancementSouhaitee") as string) || "",
      consentRgpd: accepted,
    });
    setSubmitting(false);
    if (result.ok) {
      setSubmitted(true);
      trackDemoRequest();
    } else if (result.reason === "slot_taken") {
      // Re-fetch des slots pour rafraîchir l'affichage avec la liste à jour.
      setSelectedDate((d) => (d ? { ...d } as DateValue : d));
      setError("Ce créneau vient d'être réservé. Choisissez-en un autre ci-dessus.");
    } else {
      setError("Une erreur est survenue. Réessayez ou écrivez-nous à contact@syllabis.fr.");
    }
  }

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
              {submitted ? (
                <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-8 text-center">
                  <div className="mx-auto mb-4 flex items-center justify-center size-12 rounded-full bg-emerald-100">
                    <Check className="size-6 text-emerald-600" />
                  </div>
                  <h2 className="text-xl font-semibold text-neutral-900 mb-2">Demande envoyée</h2>
                  <p className="text-md text-neutral-600">Nous vous recontactons sous 24h pour confirmer votre créneau.</p>
                </div>
              ) : (
              <>
              <h2 className="text-xl font-semibold text-neutral-900 mb-8">
                Réservez votre créneau
              </h2>
              <form ref={formRef} onSubmit={handleDemoSubmit} onFocus={handleFormStart} onChange={handleFormStart} className="grid grid-cols-1 gap-5">
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
                <InputGroup label="Organisme / Entreprise" isRequired>
                  <InputBase type="text" name="organisme" placeholder="Nom de votre organisme" />
                </InputGroup>

                {/* Taille + Date/Heure */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <Select
                    label="Taille de l'établissement"
                    placeholder="Sélectionnez"
                    isRequired
                    items={sizeOptions}
                    size="md"
                    onSelectionChange={(key) => setTaille(key as string)}
                  >
                    {(item) => <Select.Item id={item.id}>{item.label}</Select.Item>}
                  </Select>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-sm font-medium text-primary">
                      Date et horaire <span className="text-red-500">*</span>
                    </label>
                    <DateTimePicker
                      onValueChange={setDateHeure}
                      onDateChange={setSelectedDate}
                      minValue={calMinDate}
                      isDateUnavailable={calIsDateUnavailable}
                      filterTimeSlots={calFilterTimeSlots}
                      availableSlots={availableSlots}
                    />
                  </div>
                </div>

                {/* Type de titre */}
                <InputGroup label="Type de titre sur lequel vous travaillez" hint="Optionnel">
                  <InputBase
                    type="text"
                    name="titre"
                    placeholder="ex : Titre Pro Négociateur Technico-Commercial, BTS Commerce..."
                  />
                </InputGroup>

                {/* Nombre d'apprenants prévus */}
                <InputGroup label="Nombre d'apprenants prévus" hint="Optionnel">
                  <InputBase
                    type="number"
                    name="nbApprenants"
                    min={0}
                    placeholder="ex : 12"
                  />
                </InputGroup>

                {/* Date de lancement souhaitée */}
                <InputGroup label="Date de lancement souhaitée" hint="Optionnel">
                  <InputBase
                    type="date"
                    name="dateLancementSouhaitee"
                  />
                </InputGroup>

                {/* Checkbox */}
                <Checkbox
                  label="J'accepte la politique de confidentialité"
                  size="sm"
                  isSelected={accepted}
                  onChange={setAccepted}
                />

                {error && (
                  <p className="text-sm text-red-600">{error}</p>
                )}

                {/* Submit */}
                <Button color="primary" size="xl" className="w-full" type="submit" isDisabled={submitting}>
                  {submitting ? "Envoi…" : "Réserver ma démo"}
                </Button>

                {/* Réassurance */}
                <p className="text-center text-xs text-neutral-400">
                  Gratuit · Sans engagement · Démo sur votre propre référentiel
                </p>
              </form>
              </>
              )}
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
