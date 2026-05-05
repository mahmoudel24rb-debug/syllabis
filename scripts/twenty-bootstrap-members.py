#!/usr/bin/env python3
"""Assigne les rôles Twenty aux membres existants et invite les nouveaux (idempotent).

Édite ASSIGNMENTS / INVITES en haut du fichier puis lance :
  python scripts/twenty-bootstrap-members.py

ASSIGNMENTS : email → rôle (rôle parmi : Admin, Manager, Commercial, Member).
INVITES     : liste d'emails à inviter avec un rôle ; chaque email reçoit un
              email d'invitation Twenty ; idempotent (si l'invitation existe
              déjà ou le membre est déjà présent, on skip).
"""
import json
import sys
import urllib.request
from pathlib import Path


# === À ÉDITER ============================================================
ASSIGNMENTS: dict[str, str] = {
    "victor@syllabis.fr": "Manager",
    "florent.leterme@ipms.fr": "Manager",
}

INVITES: list[tuple[str, str]] = [
    # ("nouveau-commercial@syllabis.fr", "Commercial"),
]
# =========================================================================


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
REST = "https://crm.syllabis.fr/rest"


def gql(query: str, variables: dict | None = None) -> dict:
    body = json.dumps({"query": query, "variables": variables or {}}).encode()
    req = urllib.request.Request(API, data=body, headers=HEADERS, method="POST")
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode())


def rest_get(path: str) -> dict:
    req = urllib.request.Request(f"{REST}{path}", headers=HEADERS)
    with urllib.request.urlopen(req, timeout=15) as r:
        return json.loads(r.read().decode())


def get_roles_by_label() -> dict[str, str]:
    res = gql("{ getRoles{ id label } }")
    return {r["label"]: r["id"] for r in res["data"]["getRoles"]}


def get_members_by_email() -> dict[str, dict]:
    d = rest_get("/workspaceMembers?limit=200")
    out: dict[str, dict] = {}
    for m in d.get("data", {}).get("workspaceMembers", []) or []:
        email = (m.get("userEmail") or "").lower()
        if email:
            out[email] = m
    return out


def assign_member(member_id: str, role_id: str, email: str, label: str) -> bool:
    res = gql(
        "mutation($w:UUID!,$r:UUID!){ updateWorkspaceMemberRole(workspaceMemberId:$w, roleId:$r){ id } }",
        {"w": member_id, "r": role_id},
    )
    if "errors" in res:
        print(f"  ✗ assign {email} -> {label} : {res['errors'][0].get('message','?')}")
        return False
    print(f"  ✓ {email} -> {label}")
    return True


def send_invitation(email: str, role_id: str, label: str) -> bool:
    res = gql(
        "mutation($e:[String!]!,$r:UUID){ sendInvitations(emails:$e, roleId:$r){ success errors{ message } } }",
        {"e": [email], "r": role_id},
    )
    if "errors" in res:
        print(f"  ✗ invite {email} ({label}) : {res['errors'][0].get('message','?')}")
        return False
    payload = res["data"]["sendInvitations"]
    if payload.get("errors"):
        msgs = ", ".join(e.get("message", "?") for e in payload["errors"])
        print(f"  ⚠ invite {email} ({label}) : {msgs}")
        return False
    print(f"  ✉ invité : {email} ({label})")
    return True


def main() -> None:
    roles = get_roles_by_label()
    print(f"Rôles disponibles : {sorted(roles)}")

    print("\n=== Assignations ===")
    members = get_members_by_email()
    for email, label in ASSIGNMENTS.items():
        m = members.get(email.lower())
        if not m:
            print(f"  ⚠ {email} introuvable parmi les workspaceMembers — skip")
            continue
        role_id = roles.get(label)
        if not role_id:
            print(f"  ✗ rôle '{label}' inconnu — skip {email}")
            continue
        if (m.get("roleId") or "") == role_id:
            print(f"  ✓ {email} déjà sur {label}")
            continue
        assign_member(m["id"], role_id, email, label)

    print("\n=== Invitations ===")
    if not INVITES:
        print("  (aucune invitation configurée)")
    else:
        existing_emails = {e.lower() for e in members}
        for email, label in INVITES:
            if email.lower() in existing_emails:
                print(f"  ✓ {email} déjà membre — skip")
                continue
            role_id = roles.get(label)
            if not role_id:
                print(f"  ✗ rôle '{label}' inconnu — skip {email}")
                continue
            send_invitation(email, role_id, label)

    print("\nDone.")


if __name__ == "__main__":
    main()
