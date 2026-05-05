# Bootstrap Twenty CRM — Syllabis

Tous les scripts de configuration de l'instance Twenty (crm.syllabis.fr) vivent ici. Ils sont **idempotents** : tu peux les relancer autant que tu veux, ils n'écraseront pas les données existantes.

## Pré-requis

Variables d'environnement présentes dans `syllabis-vitrine/.env` :
- `TWENTY_API_KEY` — clé d'API du workspace (admin)
- `TWENTY_API_URL` — base URL (défaut : `https://crm.syllabis.fr`)

## Ordre d'exécution recommandé

```bash
cd /opt/ia-peda2/syllabis-vitrine

# 1. Schéma : custom fields sur Person, Company, Opportunity
python3 scripts/twenty-create-custom-fields.py

# 2. Pipeline d'opportunités : 7 étapes Kanban en français
python3 scripts/twenty-bootstrap-pipeline.py

# 3. Rôles : Commercial + Manager (Admin et Member sont natifs)
python3 scripts/twenty-bootstrap-roles.py

# 4. Membres : assignation rôles existants + invitations
python3 scripts/twenty-bootstrap-members.py
```

Chaque script peut tourner indépendamment et plusieurs fois sans effet de bord.

## Convention

Toute modification du modèle de données se fait **d'abord dans l'UI Twenty** (Settings → Modèle de données), puis répliquée dans le script Python correspondant. Le script reste la source de vérité reproductible pour reconstruire un workspace from scratch (rebuild, instance dev, etc.).

## Détail des scripts

### `twenty-create-custom-fields.py`
Crée les custom fields sur trois objets :
- **Person** : tracking UTM (last-touch + first-touch immutable), champs lead (`leadMessage`, `titreReferentiel`, `dateHeureDemoSouhaitee`, `consentRgpd`), `demandeType`, `tailleEtablissement`, **`statutCommercial`** (Prospect/Client).
- **Company** : `tailleEtablissement`, `secteur`, `sirenSiret`, `numeroDeclarationActivite`, `qualiopi`, `consentRgpd`, et 10 champs `firstTouch*` mirrorés (attribution B2B).
- **Opportunity** : `titreReferentiel`, `nbApprenants`, `dateLancementSouhaitee`, `sourceCanal` (canal d'acquisition first-touch).

Ajout d'un nouveau champ : éditer `PERSON_FIELDS`, `COMPANY_FIELDS` ou `OPPORTUNITY_FIELDS` puis relancer.

### `twenty-bootstrap-pipeline.py`
Configure les 7 étapes du pipeline natif `Opportunity.stage` :

| Position | Value (API) | Label (UI) | Couleur |
|---|---|---|---|
| 0 | `NEW`         | Nouveau            | gray      |
| 1 | `SCREENING`   | Qualifié           | blue      |
| 2 | `MEETING`     | Démo planifiée     | purple    |
| 3 | `PROPOSAL`    | Proposition envoyée | yellow   |
| 4 | `NEGOCIATION` | Négociation        | orange    |
| 5 | `CUSTOMER`    | Gagné              | green     |
| 6 | `LOST`        | Perdu              | red       |

Les valeurs `NEW/SCREENING/MEETING/PROPOSAL/CUSTOMER` sont préservées (référencées par les Opportunities existantes). `NEGOCIATION` et `LOST` sont ajoutées.

### `twenty-bootstrap-roles.py`
Crée deux rôles éditables :
- **Commercial** : Read + Write + Soft delete sur tous les objets. Pas de Détruire. Pas d'accès aux Settings ni aux Tools.
- **Manager** : Commercial + Détruire + accès Settings + Tools. Pas de gestion des rôles ou des API keys.

Les rôles natifs `Admin` (full, non-éditable) et `Member` restent inchangés.

### `twenty-bootstrap-members.py`
- **ASSIGNMENTS** : map email → rôle pour les membres déjà présents dans le workspace.
- **INVITES** : liste `(email, rôle)` à inviter (envoie un mail via Twenty).

⚠ **Limitation API** : `updateWorkspaceMemberRole` retourne `Forbidden resource` quand on l'appelle avec une API key (sécurité Twenty). L'**assignation des rôles à des membres existants se fait manuellement** via [https://crm.syllabis.fr/settings/members](https://crm.syllabis.fr/settings/members) ou en cliquant sur les rôles dans [https://crm.syllabis.fr/settings/roles](https://crm.syllabis.fr/settings/roles).

Les invitations (`sendInvitations`) fonctionnent en revanche via API.

## Vérification end-to-end

```bash
# 1. Soumettre une démo en local avec UTM tracking
curl -X POST https://syllabis.fr/api/leads \
  -H "Content-Type: application/json" \
  -d '{"source":"demo","nom":"Test","email":"test@example.com","consentRgpd":true}'

# 2. Vérifier dans Twenty
open https://crm.syllabis.fr/objects/people
open https://crm.syllabis.fr/objects/companies
open https://crm.syllabis.fr/objects/opportunities  # vue Kanban "By Stage"
```

## Réindexation après ajout de fichiers

Aucune. Twenty applique les mutations metadata immédiatement. Refresh navigateur si l'UI ne reflète pas la modification.

## Liens UI utiles

- Modèle de données : [https://crm.syllabis.fr/settings/objects](https://crm.syllabis.fr/settings/objects)
- Rôles : [https://crm.syllabis.fr/settings/roles](https://crm.syllabis.fr/settings/roles)
- Membres : [https://crm.syllabis.fr/settings/members](https://crm.syllabis.fr/settings/members)
- API & Webhooks : [https://crm.syllabis.fr/settings/developers](https://crm.syllabis.fr/settings/developers)
- Pipeline Opportunities : [https://crm.syllabis.fr/objects/opportunities](https://crm.syllabis.fr/objects/opportunities)
