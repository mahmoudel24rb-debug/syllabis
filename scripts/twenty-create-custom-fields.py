#!/usr/bin/env python3
"""Crée les custom fields sur les objets Person, Company, Opportunity de Twenty (idempotent)."""
import json
import os
import sys
import urllib.request
import uuid
from pathlib import Path

ENV_FILE = Path(__file__).resolve().parent.parent / ".env"
env = {}
for line in ENV_FILE.read_text().splitlines():
    if "=" in line and not line.lstrip().startswith("#"):
        k, _, v = line.partition("=")
        env[k.strip()] = v.strip()

API = "https://crm.syllabis.fr/metadata"
HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {env['TWENTY_API_KEY']}",
}


def gql(query: str, variables: dict | None = None) -> dict:
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(API, data=body, headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode())


def get_object_ids() -> dict[str, str]:
    res = gql(
        "query { objects(paging:{first:200}){ edges{ node{ id nameSingular } } } }"
    )
    out: dict[str, str] = {}
    for e in res["data"]["objects"]["edges"]:
        n = e["node"]
        if n["nameSingular"] in ("person", "company", "opportunity"):
            out[n["nameSingular"]] = n["id"]
    for required in ("person", "company", "opportunity"):
        if required not in out:
            sys.exit(f"object '{required}' not found in Twenty workspace")
    return out


def get_person_id() -> str:
    return get_object_ids()["person"]


def get_existing_fields(object_id: str) -> set[str]:
    res = gql(
        "query($id:UUID!) { object(id:$id){ fields(paging:{first:300}){ edges{ node{ name } } } } }",
        {"id": object_id},
    )
    return {e["node"]["name"] for e in res["data"]["object"]["fields"]["edges"]}


_ALLOWED_COLORS = {"blue", "green", "orange", "red", "gray", "pink", "purple", "yellow", "turquoise"}


def _normalize_options(options: list) -> list:
    """Twenty exige des id UUID v4 et un set de couleurs précis. Idempotent par valeur."""
    out = []
    for i, o in enumerate(options):
        color = o.get("color", "gray")
        if color not in _ALLOWED_COLORS:
            color = "gray"
        out.append({
            "id": str(uuid.uuid4()),
            "label": o["label"],
            "value": o["value"],
            "position": o.get("position", i),
            "color": color,
        })
    return out


def create_field(object_id: str, name: str, label: str, ftype: str, options: list | None = None) -> bool:
    field_input = {
        "name": name,
        "label": label,
        "type": ftype,
        "objectMetadataId": object_id,
    }
    if options is not None:
        field_input["options"] = _normalize_options(options)
    mutation = (
        "mutation($i: CreateOneFieldMetadataInput!) { "
        "createOneField(input:$i){ id name } }"
    )
    res = gql(mutation, {"i": {"field": field_input}})
    if "errors" in res:
        err = res["errors"][0]
        msg = err.get("message", "?")
        ext = err.get("extensions", {})
        details = ext.get("response", {}).get("message") or ext.get("userFriendlyMessage") or ""
        print(f"  ✗ {name} : {msg} | {details}")
        return False
    print(f"  + {name}")
    return True


FieldDef = tuple[str, str, str, "list | None"]


TAILLE_OPTIONS = [
    {"label": "1 à 5", "value": "S_1_5", "position": 0, "color": "gray"},
    {"label": "6 à 15", "value": "S_6_15", "position": 1, "color": "blue"},
    {"label": "16 à 50", "value": "S_16_50", "position": 2, "color": "purple"},
    {"label": "50+", "value": "S_50_PLUS", "position": 3, "color": "red"},
]

SECTEUR_OPTIONS = [
    {"id": "1", "label": "Public", "value": "PUBLIC", "position": 0, "color": "blue"},
    {"id": "2", "label": "Privé", "value": "PRIVE", "position": 1, "color": "green"},
    {"id": "3", "label": "CFA", "value": "CFA", "position": 2, "color": "purple"},
    {"id": "4", "label": "Organisme de formation", "value": "OF", "position": 3, "color": "orange"},
    {"id": "5", "label": "Autre", "value": "AUTRE", "position": 4, "color": "gray"},
]

STATUT_COMMERCIAL_OPTIONS = [
    {"id": "1", "label": "Prospect froid", "value": "PROSPECT_FROID", "position": 0, "color": "gray"},
    {"id": "2", "label": "Prospect qualifié", "value": "PROSPECT_QUALIFIE", "position": 1, "color": "blue"},
    {"id": "3", "label": "Client actif", "value": "CLIENT_ACTIF", "position": 2, "color": "green"},
    {"id": "4", "label": "Client inactif", "value": "CLIENT_INACTIF", "position": 3, "color": "orange"},
    {"id": "5", "label": "Perdu", "value": "PERDU", "position": 4, "color": "red"},
]

SOURCE_CANAL_OPTIONS = [
    {"id": "1", "label": "Recherche organique", "value": "ORGANIC", "position": 0, "color": "green"},
    {"id": "2", "label": "Google Ads", "value": "GOOGLE_ADS", "position": 1, "color": "blue"},
    {"id": "3", "label": "Meta Ads", "value": "META_ADS", "position": 2, "color": "purple"},
    {"id": "4", "label": "LinkedIn", "value": "LINKEDIN", "position": 3, "color": "blue"},
    {"id": "5", "label": "Référencement direct", "value": "DIRECT", "position": 4, "color": "gray"},
    {"id": "6", "label": "Bouche-à-oreille", "value": "REFERRAL", "position": 5, "color": "orange"},
    {"id": "7", "label": "Salon / Événement", "value": "EVENT", "position": 6, "color": "red"},
    {"id": "8", "label": "Autre", "value": "AUTRE", "position": 7, "color": "gray"},
]


PERSON_FIELDS: list[FieldDef] = [
    # Last-touch (mis à jour à chaque visite avec UTMs)
    ("utmSource", "UTM Source", "TEXT", None),
    ("utmMedium", "UTM Medium", "TEXT", None),
    ("utmCampaign", "UTM Campaign", "TEXT", None),
    ("utmTerm", "UTM Term", "TEXT", None),
    ("utmContent", "UTM Content", "TEXT", None),
    ("gclid", "Google Click ID", "TEXT", None),
    ("fbclid", "Facebook Click ID", "TEXT", None),
    ("referrer", "Referrer", "TEXT", None),
    ("sourcePage", "Source Page", "TEXT", None),
    # First-touch (acquisition initiale, immutable 30j via cookie syl_first_touch)
    ("firstTouchUtmSource", "First-touch UTM Source", "TEXT", None),
    ("firstTouchUtmMedium", "First-touch UTM Medium", "TEXT", None),
    ("firstTouchUtmCampaign", "First-touch UTM Campaign", "TEXT", None),
    ("firstTouchUtmTerm", "First-touch UTM Term", "TEXT", None),
    ("firstTouchUtmContent", "First-touch UTM Content", "TEXT", None),
    ("firstTouchGclid", "First-touch Google Click ID", "TEXT", None),
    ("firstTouchFbclid", "First-touch Facebook Click ID", "TEXT", None),
    ("firstTouchReferrer", "First-touch Referrer", "TEXT", None),
    ("firstTouchLanding", "First-touch Landing page", "TEXT", None),
    ("firstTouchAt", "First-touch date", "DATE_TIME", None),
    ("leadMessage", "Message du lead", "TEXT", None),
    ("titreReferentiel", "Type de titre", "TEXT", None),
    ("dateHeureDemoSouhaitee", "Date/heure démo souhaitée", "DATE_TIME", None),
    ("consentRgpd", "Consentement RGPD", "BOOLEAN", None),
    (
        "demandeType",
        "Type de demande",
        "SELECT",
        [
            {"id": "1", "label": "Contact", "value": "CONTACT", "position": 0, "color": "blue"},
            {"id": "2", "label": "Démo", "value": "DEMO", "position": 1, "color": "green"},
        ],
    ),
    ("tailleEtablissement", "Taille établissement", "SELECT", TAILLE_OPTIONS),
    # Distinction Prospect / Client (étape 4 du plan CRM)
    ("statutCommercial", "Statut commercial", "SELECT", STATUT_COMMERCIAL_OPTIONS),
]


COMPANY_FIELDS: list[FieldDef] = [
    # Caractérisation organisme
    ("tailleEtablissement", "Taille établissement", "SELECT", TAILLE_OPTIONS),
    ("secteur", "Secteur", "SELECT", SECTEUR_OPTIONS),
    ("sirenSiret", "SIREN / SIRET", "TEXT", None),
    ("numeroDeclarationActivite", "N° déclaration d'activité", "TEXT", None),
    ("qualiopi", "Qualiopi", "BOOLEAN", None),
    ("consentRgpd", "Consentement RGPD", "BOOLEAN", None),
    # First-touch mirroré au niveau Company (attribution B2B)
    ("firstTouchUtmSource", "First-touch UTM Source", "TEXT", None),
    ("firstTouchUtmMedium", "First-touch UTM Medium", "TEXT", None),
    ("firstTouchUtmCampaign", "First-touch UTM Campaign", "TEXT", None),
    ("firstTouchUtmTerm", "First-touch UTM Term", "TEXT", None),
    ("firstTouchUtmContent", "First-touch UTM Content", "TEXT", None),
    ("firstTouchGclid", "First-touch Google Click ID", "TEXT", None),
    ("firstTouchFbclid", "First-touch Facebook Click ID", "TEXT", None),
    ("firstTouchReferrer", "First-touch Referrer", "TEXT", None),
    ("firstTouchLanding", "First-touch Landing page", "TEXT", None),
    ("firstTouchAt", "First-touch date", "DATE_TIME", None),
]


OPPORTUNITY_FIELDS: list[FieldDef] = [
    ("titreReferentiel", "Titre / référentiel visé", "TEXT", None),
    ("nbApprenants", "Nombre d'apprenants prévus", "NUMBER", None),
    ("dateLancementSouhaitee", "Date de lancement souhaitée", "DATE_TIME", None),
    ("sourceCanal", "Canal d'acquisition (first-touch)", "SELECT", SOURCE_CANAL_OPTIONS),
]


def apply_plan(label: str, object_id: str, plan: list[FieldDef]) -> None:
    print(f"\n=== {label} (id={object_id}) ===")
    existing = get_existing_fields(object_id)
    print(f"Champs existants: {len(existing)}")
    for name, lab, ftype, options in plan:
        if name in existing:
            print(f"  ✓ {name} (déjà présent)")
            continue
        create_field(object_id, name, lab, ftype, options)


def main() -> None:
    ids = get_object_ids()
    apply_plan("Person", ids["person"], PERSON_FIELDS)
    apply_plan("Company", ids["company"], COMPANY_FIELDS)
    apply_plan("Opportunity", ids["opportunity"], OPPORTUNITY_FIELDS)
    print("\nDone.")


if __name__ == "__main__":
    main()
