#!/usr/bin/env python3
"""Configure le champ natif `stage` de l'objet Opportunity (étapes du Kanban).

Idempotent : on aligne les options sur la liste cible. On préserve les valeurs
existantes (NEW, SCREENING, MEETING, PROPOSAL, CUSTOMER) pour ne pas casser
les Opportunities déjà saisies, on traduit leurs labels en français et on
ajoute NEGOCIATION et LOST.
"""
import json
import sys
import urllib.request
import uuid
from pathlib import Path

ENV_FILE = Path(__file__).resolve().parent.parent / ".env"
env: dict[str, str] = {}
for line in ENV_FILE.read_text().splitlines():
    if "=" in line and not line.lstrip().startswith("#"):
        k, _, v = line.partition("=")
        env[k.strip()] = v.strip()

API = "https://crm.syllabis.fr/metadata"
HEADERS = {
    "Content-Type": "application/json",
    "Authorization": f"Bearer {env['TWENTY_API_KEY']}",
}


# Étapes cibles. La clé `value` doit rester stable sur la durée (référencée par
# les Opportunities). Les valeurs existantes Twenty (NEW, SCREENING, MEETING,
# PROPOSAL, CUSTOMER) sont conservées et juste relabellisées en français.
TARGET_STAGES = [
    {"value": "NEW",          "label": "Nouveau",            "color": "gray",      "position": 0},
    {"value": "SCREENING",    "label": "Qualifié",           "color": "blue",      "position": 1},
    {"value": "MEETING",      "label": "Démo planifiée",     "color": "purple",    "position": 2},
    {"value": "PROPOSAL",     "label": "Proposition envoyée", "color": "yellow",   "position": 3},
    {"value": "NEGOCIATION",  "label": "Négociation",        "color": "orange",    "position": 4},
    {"value": "CUSTOMER",     "label": "Gagné",              "color": "green",     "position": 5},
    {"value": "LOST",         "label": "Perdu",              "color": "red",       "position": 6},
]


def gql(query: str, variables: dict | None = None) -> dict:
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(API, data=body, headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode())


def get_opportunity_object_id() -> str:
    res = gql(
        "query { objects(paging:{first:200}){ edges{ node{ id nameSingular } } } }"
    )
    for e in res["data"]["objects"]["edges"]:
        if e["node"]["nameSingular"] == "opportunity":
            return e["node"]["id"]
    sys.exit("opportunity object not found")


def get_stage_field(object_id: str) -> dict:
    res = gql(
        "query($id:UUID!){ object(id:$id){ fields(paging:{first:300}){ edges{ node{ id name type options } } } } }",
        {"id": object_id},
    )
    for e in res["data"]["object"]["fields"]["edges"]:
        if e["node"]["name"] == "stage":
            return e["node"]
    sys.exit("'stage' field not found on opportunity")


def options_match(current: list, target: list) -> bool:
    """Compare ce qui compte fonctionnellement : value, label, position, color."""
    cur_by_value = {o["value"]: o for o in current}
    if set(cur_by_value) != {o["value"] for o in target}:
        return False
    for t in target:
        c = cur_by_value.get(t["value"])
        if not c:
            return False
        for k in ("label", "position", "color"):
            if c.get(k) != t[k]:
                return False
    return True


def build_new_options(current: list, target: list) -> list:
    """Réutilise les UUID existants pour les valeurs déjà présentes (préserve
    les FK des Opportunities), génère un UUID pour les nouvelles."""
    cur_by_value = {o["value"]: o for o in current}
    out = []
    for t in target:
        c = cur_by_value.get(t["value"])
        out.append({
            "id": c["id"] if c else str(uuid.uuid4()),
            "value": t["value"],
            "label": t["label"],
            "position": t["position"],
            "color": t["color"],
        })
    return out


def main() -> None:
    obj_id = get_opportunity_object_id()
    print(f"Opportunity object id: {obj_id}")
    field = get_stage_field(obj_id)
    print(f"Stage field id: {field['id']}")
    current = field.get("options") or []
    print(f"Current options: {len(current)} → {[o['value'] for o in current]}")

    if options_match(current, TARGET_STAGES):
        print("✓ Pipeline déjà aligné sur la cible. Rien à faire.")
        return

    new_options = build_new_options(current, TARGET_STAGES)
    print(f"Target options:  {len(new_options)} → {[o['value'] for o in new_options]}")

    res = gql(
        "mutation($i: UpdateOneFieldMetadataInput!){ updateOneField(input:$i){ id name } }",
        {"i": {"id": field["id"], "update": {"options": new_options}}},
    )
    if "errors" in res:
        err = res["errors"][0]
        print(f"✗ updateOneField : {err.get('message','?')}")
        ext = err.get("extensions", {})
        details = ext.get("response", {}).get("message") or ext.get("userFriendlyMessage")
        if details:
            print(f"  details: {details}")
        sys.exit(1)
    print("+ Pipeline stages mis à jour.")


if __name__ == "__main__":
    main()
