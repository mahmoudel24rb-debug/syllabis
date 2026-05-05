#!/usr/bin/env python3
"""Crée les rôles Commercial et Manager dans Twenty (idempotent).

Le rôle Admin est natif et non-éditable. Le rôle Member existe par défaut
(éditable). On ajoute deux rôles supplémentaires alignés sur le métier
Syllabis :
  - Commercial : CRUD complet sur les enregistrements, pas de purge
                 (Détruire), pas d'accès aux Settings.
  - Manager    : idem + Détruire + accès aux Settings (workflows, vues
                 partagées). Pas de gestion des rôles ni des API keys.

Usage : python scripts/twenty-bootstrap-roles.py
"""
import json
import sys
import urllib.request
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


ROLES_TARGET = [
    {
        "label": "Commercial",
        "description": "Accès quotidien aux prospects, entreprises, opportunités, tâches et notes. Pas de purge, pas d'accès aux paramètres.",
        "icon": "IconUsers",
        "flags": {
            "canReadAllObjectRecords": True,
            "canUpdateAllObjectRecords": True,
            "canSoftDeleteAllObjectRecords": True,
            "canDestroyAllObjectRecords": False,
            "canUpdateAllSettings": False,
            "canAccessAllTools": False,
            "canBeAssignedToUsers": True,
            "canBeAssignedToAgents": False,
            "canBeAssignedToApiKeys": False,
        },
    },
    {
        "label": "Manager",
        "description": "Tout ce qu'un Commercial peut faire, plus la purge des doublons, l'accès aux workflows et aux vues partagées. Pas d'accès aux rôles ni aux clés API.",
        "icon": "IconUserStar",
        "flags": {
            "canReadAllObjectRecords": True,
            "canUpdateAllObjectRecords": True,
            "canSoftDeleteAllObjectRecords": True,
            "canDestroyAllObjectRecords": True,
            "canUpdateAllSettings": True,
            "canAccessAllTools": True,
            "canBeAssignedToUsers": True,
            "canBeAssignedToAgents": False,
            "canBeAssignedToApiKeys": False,
        },
    },
]


def gql(query: str, variables: dict | None = None) -> dict:
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(API, data=body, headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode())


def get_roles_by_label() -> dict[str, dict]:
    res = gql(
        "{ getRoles{ id label description icon isEditable "
        "canReadAllObjectRecords canUpdateAllObjectRecords "
        "canSoftDeleteAllObjectRecords canDestroyAllObjectRecords "
        "canUpdateAllSettings canAccessAllTools "
        "canBeAssignedToUsers canBeAssignedToAgents canBeAssignedToApiKeys } }"
    )
    return {r["label"]: r for r in res["data"]["getRoles"]}


def create_role(target: dict) -> dict | None:
    payload = {"label": target["label"], "description": target["description"],
               "icon": target["icon"], **target["flags"]}
    res = gql(
        "mutation($i: CreateRoleInput!){ createOneRole(createRoleInput:$i){ id label } }",
        {"i": payload},
    )
    if "errors" in res:
        print(f"  ✗ create {target['label']} : {res['errors'][0].get('message','?')}")
        return None
    print(f"  + créé : {target['label']}")
    return res["data"]["createOneRole"]


def update_role(role_id: str, target: dict) -> bool:
    payload = {"description": target["description"], "icon": target["icon"], **target["flags"]}
    res = gql(
        "mutation($i: UpdateRoleInput!){ updateOneRole(updateRoleInput:$i){ id label } }",
        {"i": {"id": role_id, "update": payload}},
    )
    if "errors" in res:
        print(f"  ✗ update {target['label']} : {res['errors'][0].get('message','?')}")
        return False
    print(f"  ↻ mis à jour : {target['label']}")
    return True


def is_aligned(current: dict, target: dict) -> bool:
    for k, v in target["flags"].items():
        if current.get(k) != v:
            return False
    if (current.get("description") or "") != target["description"]:
        return False
    if (current.get("icon") or "") != target["icon"]:
        return False
    return True


def main() -> None:
    roles = get_roles_by_label()
    print(f"Rôles existants: {sorted(roles)}")
    for target in ROLES_TARGET:
        existing = roles.get(target["label"])
        if not existing:
            create_role(target)
            continue
        if is_aligned(existing, target):
            print(f"  ✓ {target['label']} (déjà aligné)")
            continue
        if not existing.get("isEditable", True):
            print(f"  ⚠ {target['label']} : non-éditable, skip")
            continue
        update_role(existing["id"], target)
    print("\nDone.")


if __name__ == "__main__":
    main()
