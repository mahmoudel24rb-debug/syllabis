/**
 * Client Twenty CRM (REST API).
 * Crée une Person + Company à partir des données d'un lead, avec dédup par domaine email.
 */

import { Pool } from 'pg'

const TWENTY_BASE = (process.env.TWENTY_API_URL || 'https://crm.syllabis.fr').replace(/\/+$/, '').replace(/\/graphql$/, '')
const TWENTY_REST = TWENTY_BASE.startsWith('http') ? `${TWENTY_BASE}/rest` : `https://crm.syllabis.fr/rest`

let twentyPool: Pool | null = null
function getTwentyPool(): Pool {
  if (twentyPool) return twentyPool
  const url = process.env.TWENTY_DB_URL
  if (!url) throw new Error('TWENTY_DB_URL missing')
  twentyPool = new Pool({ connectionString: url, max: 3 })
  return twentyPool
}

function authHeaders() {
  const key = process.env.TWENTY_API_KEY
  if (!key) throw new Error('TWENTY_API_KEY missing')
  return {
    Authorization: `Bearer ${key}`,
    'Content-Type': 'application/json',
  }
}

async function twentyFetch<T = unknown>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${TWENTY_REST}${path}`, { ...init, headers: { ...authHeaders(), ...(init?.headers || {}) } })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Twenty ${init?.method || 'GET'} ${path} → ${res.status}: ${text.slice(0, 300)}`)
  }
  return (await res.json()) as T
}

/** PATCH d'un workspaceMember (objet User natif). Conserve pour compatibilite. */
export async function updateWorkspaceMember(id: string, patch: Record<string, unknown>): Promise<void> {
  const path = `/workspaceMembers/${encodeURIComponent(id)}`
  await twentyFetch(path, {
    method: 'PATCH',
    body: JSON.stringify(patch),
  })
}

/** PATCH d'une disponibilite (objet custom). Met a jour les fields de sync
 *  apres un push vers Cal. */
export async function updateDisponibilite(id: string, patch: Record<string, unknown>): Promise<void> {
  const path = `/disponibilites/${encodeURIComponent(id)}`
  await twentyFetch(path, {
    method: 'PATCH',
    body: JSON.stringify(patch),
  })
}

/** Crée le favori "Mes dispos" dans la sidebar Twenty pour un workspaceMember
 *  donné, pointant vers sa propre fiche. Idempotent (skip si déjà présent).
 *  Le favori est stocké en `core.navigationMenuItem` avec type=RECORD. */
export async function ensureSelfDispoFavorite(workspaceMemberId: string): Promise<{ created: boolean }> {
  const workspaceId = process.env.TWENTY_WORKSPACE_ID
  const appId = process.env.TWENTY_STANDARD_APP_ID
  const objectId = process.env.TWENTY_WORKSPACE_MEMBER_OBJECT_ID
  const schema = process.env.TWENTY_WORKSPACE_SCHEMA
  if (!workspaceId || !appId || !objectId || !schema) {
    throw new Error('TWENTY_WORKSPACE_ID/TWENTY_STANDARD_APP_ID/TWENTY_WORKSPACE_MEMBER_OBJECT_ID/TWENTY_WORKSPACE_SCHEMA missing')
  }

  // L'identifier de table inclut le nom de schema dynamique : on doit l'injecter
  // par interpolation contrôlée (filtré char-set), pas en parametre prepared.
  if (!/^workspace_[a-z0-9_]+$/.test(schema)) {
    throw new Error(`Invalid TWENTY_WORKSPACE_SCHEMA: ${schema}`)
  }

  const client = await getTwentyPool().connect()
  try {
    await client.query('BEGIN')
    // 1. Resolve userWorkspaceId from the workspaceMember.id
    const target = await client.query<{ user_workspace_id: string; workspace_member_id: string }>(
      `SELECT uw.id AS user_workspace_id, wm.id AS workspace_member_id
         FROM core."userWorkspace" uw
         JOIN "${schema}"."workspaceMember" wm ON wm."userId" = uw."userId"
        WHERE uw."workspaceId" = $1 AND wm.id = $2
        LIMIT 1`,
      [workspaceId, workspaceMemberId],
    )
    if (target.rowCount === 0) {
      await client.query('ROLLBACK')
      return { created: false }
    }
    const { user_workspace_id, workspace_member_id } = target.rows[0]

    // 2. Skip si ce user a deja un RECORD pointant vers sa fiche
    const existing = await client.query(
      `SELECT 1 FROM core."navigationMenuItem"
        WHERE "userWorkspaceId" = $1 AND "targetRecordId" = $2
          AND type = 'RECORD'::core."navigationMenuItem_type_enum"
        LIMIT 1`,
      [user_workspace_id, workspace_member_id],
    )
    if ((existing.rowCount ?? 0) > 0) {
      await client.query('ROLLBACK')
      return { created: false }
    }

    // 3. Trouve ou cree un FOLDER "Favoris" pour ce user (Twenty 2.x n'affiche
    //    pas les RECORD orphelins, ils doivent etre dans un folder).
    const folderRes = await client.query<{ id: string }>(
      `SELECT id FROM core."navigationMenuItem"
        WHERE "userWorkspaceId" = $1
          AND type = 'FOLDER'::core."navigationMenuItem_type_enum"
          AND name = 'Favoris'
        LIMIT 1`,
      [user_workspace_id],
    )
    let folderId: string
    if ((folderRes.rowCount ?? 0) > 0) {
      folderId = folderRes.rows[0].id
    } else {
      const ins = await client.query<{ id: string }>(
        `INSERT INTO core."navigationMenuItem"
           (id, "workspaceId", "universalIdentifier", "applicationId",
            "userWorkspaceId", type, name, icon, position)
         VALUES (gen_random_uuid(), $1::uuid, gen_random_uuid(), $2::uuid,
                 $3::uuid,
                 'FOLDER'::core."navigationMenuItem_type_enum",
                 'Favoris', 'IconStar', -1)
         RETURNING id`,
        [workspaceId, appId, user_workspace_id],
      )
      folderId = ins.rows[0].id
    }

    // 4. Cree le RECORD "Mes dispos" dans ce folder
    await client.query(
      `INSERT INTO core."navigationMenuItem"
         (id, "workspaceId", "universalIdentifier", "applicationId",
          "userWorkspaceId", "targetRecordId", "targetObjectMetadataId",
          "folderId", type, name, icon, position)
       VALUES (gen_random_uuid(), $1::uuid, gen_random_uuid(), $2::uuid,
               $3::uuid, $4::uuid, $5::uuid, $6::uuid,
               'RECORD'::core."navigationMenuItem_type_enum",
               'Mes dispos', 'IconCalendar', 0)`,
      [workspaceId, appId, user_workspace_id, workspace_member_id, objectId, folderId],
    )

    await client.query('COMMIT')
    return { created: true }
  } catch (e) {
    await client.query('ROLLBACK').catch(() => {})
    throw e
  } finally {
    client.release()
  }
}

export type LeadPayload = {
  source: 'contact' | 'demo'
  prenom?: string
  nom: string
  email: string
  telephone?: string
  indicatif?: string
  organisme?: string
  message?: string
  titreReferentiel?: string
  tailleEtablissement?: string
  dateHeureDemoSouhaitee?: string
  nbApprenants?: number
  dateLancementSouhaitee?: string
  consentRgpd?: boolean
  tracking?: {
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
    utmTerm?: string
    utmContent?: string
    gclid?: string
    fbclid?: string
    referrer?: string
    sourcePage?: string
  }
  firstTouch?: {
    utmSource?: string
    utmMedium?: string
    utmCampaign?: string
    utmTerm?: string
    utmContent?: string
    gclid?: string
    fbclid?: string
    referrer?: string
    landing?: string
    at?: string
  }
}

const SIZE_MAP: Record<string, string> = {
  '1-5': 'S_1_5',
  '6-15': 'S_6_15',
  '16-50': 'S_16_50',
  '50+': 'S_50_PLUS',
}

function emailDomain(email: string): string | null {
  const parts = email.toLowerCase().trim().split('@')
  if (parts.length !== 2 || !parts[1]) return null
  const generic = new Set(['gmail.com', 'yahoo.com', 'yahoo.fr', 'outlook.com', 'outlook.fr', 'hotmail.com', 'hotmail.fr', 'wanadoo.fr', 'orange.fr', 'free.fr', 'icloud.com', 'me.com', 'proton.me', 'protonmail.com', 'laposte.net'])
  return generic.has(parts[1]) ? null : parts[1]
}

async function findCompanyByDomain(domain: string): Promise<{ id: string } | null> {
  const url = `/companies?filter=domainName.primaryLinkUrl[eq]:${encodeURIComponent(domain)}&limit=1`
  try {
    const res = await twentyFetch<{ data: { companies: Array<{ id: string }> } }>(url)
    return res.data.companies?.[0] ?? null
  } catch {
    return null
  }
}

type TwentyPerson = {
  id: string
  firstTouchUtmSource?: string | null
  firstTouchUtmMedium?: string | null
  firstTouchUtmCampaign?: string | null
  firstTouchUtmTerm?: string | null
  firstTouchUtmContent?: string | null
  firstTouchGclid?: string | null
  firstTouchFbclid?: string | null
  firstTouchReferrer?: string | null
  firstTouchLanding?: string | null
  firstTouchAt?: string | null
}

async function findPersonByEmail(email: string): Promise<TwentyPerson | null> {
  const url = `/people?filter=emails.primaryEmail[eq]:${encodeURIComponent(email)}&limit=1`
  try {
    const res = await twentyFetch<{ data: { people: TwentyPerson[] } }>(url)
    return res.data.people?.[0] ?? null
  } catch {
    return null
  }
}

async function createCompany(name: string, domain: string | null): Promise<{ id: string }> {
  const body: Record<string, unknown> = { name }
  if (domain) body.domainName = { primaryLinkLabel: domain, primaryLinkUrl: domain }
  const res = await twentyFetch<{ data: { createCompany: { id: string } } }>('/companies', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return res.data.createCompany
}

function buildLastTouchFields(lead: LeadPayload): Record<string, unknown> {
  return {
    sourcePage: lead.tracking?.sourcePage || '',
    referrer: lead.tracking?.referrer || '',
    utmSource: lead.tracking?.utmSource || '',
    utmMedium: lead.tracking?.utmMedium || '',
    utmCampaign: lead.tracking?.utmCampaign || '',
    utmTerm: lead.tracking?.utmTerm || '',
    utmContent: lead.tracking?.utmContent || '',
    gclid: lead.tracking?.gclid || '',
    fbclid: lead.tracking?.fbclid || '',
  }
}

function buildFirstTouchFields(lead: LeadPayload): Record<string, unknown> {
  return {
    firstTouchUtmSource: lead.firstTouch?.utmSource || '',
    firstTouchUtmMedium: lead.firstTouch?.utmMedium || '',
    firstTouchUtmCampaign: lead.firstTouch?.utmCampaign || '',
    firstTouchUtmTerm: lead.firstTouch?.utmTerm || '',
    firstTouchUtmContent: lead.firstTouch?.utmContent || '',
    firstTouchGclid: lead.firstTouch?.gclid || '',
    firstTouchFbclid: lead.firstTouch?.fbclid || '',
    firstTouchReferrer: lead.firstTouch?.referrer || '',
    firstTouchLanding: lead.firstTouch?.landing || '',
    firstTouchAt: lead.firstTouch?.at || '',
  }
}

function hasExistingFirstTouch(p: TwentyPerson): boolean {
  return Boolean(
    p.firstTouchUtmSource || p.firstTouchUtmMedium || p.firstTouchUtmCampaign ||
    p.firstTouchGclid || p.firstTouchFbclid || p.firstTouchReferrer ||
    p.firstTouchLanding || p.firstTouchAt
  )
}

async function createPerson(input: {
  lead: LeadPayload
  companyId: string | null
}): Promise<{ id: string }> {
  const { lead, companyId } = input
  const body: Record<string, unknown> = {
    name: { firstName: lead.prenom || '', lastName: lead.nom },
    emails: { primaryEmail: lead.email },
    demandeType: lead.source === 'demo' ? 'DEMO' : 'CONTACT',
    leadMessage: lead.message || '',
    consentRgpd: Boolean(lead.consentRgpd),
    titreReferentiel: lead.titreReferentiel || '',
    ...buildLastTouchFields(lead),
    ...buildFirstTouchFields(lead),
  }
  const phoneNumber = lead.telephone?.trim()
  if (phoneNumber) {
    body.phones = {
      primaryPhoneNumber: phoneNumber,
      primaryPhoneCountryCode: lead.indicatif || 'FR',
    }
  }
  if (companyId) body.companyId = companyId
  if (lead.tailleEtablissement && SIZE_MAP[lead.tailleEtablissement]) {
    body.tailleEtablissement = SIZE_MAP[lead.tailleEtablissement]
  }
  if (lead.dateHeureDemoSouhaitee) {
    const d = new Date(lead.dateHeureDemoSouhaitee)
    if (!Number.isNaN(d.getTime())) body.dateHeureDemoSouhaitee = d.toISOString()
  }

  const res = await twentyFetch<{ data: { createPerson: { id: string } } }>('/people', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return res.data.createPerson
}

async function updatePerson(personId: string, patch: Record<string, unknown>): Promise<void> {
  await twentyFetch(`/people/${encodeURIComponent(personId)}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
  })
}

const SOURCE_CANAL_FROM_UTM: Record<string, string> = {
  google: 'GOOGLE_ADS',
  'google-ads': 'GOOGLE_ADS',
  googleads: 'GOOGLE_ADS',
  meta: 'META_ADS',
  facebook: 'META_ADS',
  instagram: 'META_ADS',
  linkedin: 'LINKEDIN',
  organic: 'ORGANIC',
  direct: 'DIRECT',
  referral: 'REFERRAL',
  event: 'EVENT',
}

function inferSourceCanal(lead: LeadPayload): string {
  const utmSrc = (lead.firstTouch?.utmSource || lead.tracking?.utmSource || '').toLowerCase()
  if (utmSrc && SOURCE_CANAL_FROM_UTM[utmSrc]) return SOURCE_CANAL_FROM_UTM[utmSrc]
  if (lead.firstTouch?.gclid || lead.tracking?.gclid) return 'GOOGLE_ADS'
  if (lead.firstTouch?.fbclid || lead.tracking?.fbclid) return 'META_ADS'
  const ref = (lead.firstTouch?.referrer || lead.tracking?.referrer || '').toLowerCase()
  if (ref.includes('linkedin')) return 'LINKEDIN'
  if (ref.includes('google') || ref.includes('bing') || ref.includes('duckduckgo')) return 'ORGANIC'
  if (ref) return 'REFERRAL'
  return 'DIRECT'
}

export type OpportunityInput = {
  lead: LeadPayload
  personId: string
  companyId: string | null
}

export async function createOpportunity(input: OpportunityInput): Promise<{ id: string }> {
  const { lead, personId, companyId } = input
  const personLabel = `${lead.prenom || ''} ${lead.nom}`.trim() || lead.email
  const orgLabel = lead.organisme?.trim() || lead.titreReferentiel || 'Demande'
  const name = `${personLabel} – ${orgLabel}`.slice(0, 200)

  const body: Record<string, unknown> = {
    name,
    stage: lead.source === 'demo' ? 'MEETING' : 'NEW',
    pointOfContactId: personId,
    sourceCanal: inferSourceCanal(lead),
  }
  if (companyId) body.companyId = companyId
  if (lead.titreReferentiel) body.titreReferentiel = lead.titreReferentiel
  if (lead.dateHeureDemoSouhaitee) {
    const d = new Date(lead.dateHeureDemoSouhaitee)
    if (!Number.isNaN(d.getTime())) body.closeDate = d.toISOString()
  }
  if (typeof lead.nbApprenants === 'number' && Number.isFinite(lead.nbApprenants)) {
    body.nbApprenants = lead.nbApprenants
  }
  if (lead.dateLancementSouhaitee) {
    const d = new Date(lead.dateLancementSouhaitee)
    if (!Number.isNaN(d.getTime())) body.dateLancementSouhaitee = d.toISOString()
  }

  const res = await twentyFetch<{ data: { createOpportunity: { id: string } } }>('/opportunities', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return res.data.createOpportunity
}

export async function pushLeadToTwenty(lead: LeadPayload): Promise<{ personId: string; companyId: string | null; created: boolean }> {
  const domain = emailDomain(lead.email)
  let companyId: string | null = null

  if (lead.organisme && lead.organisme.trim()) {
    if (domain) {
      const existing = await findCompanyByDomain(domain)
      companyId = existing?.id ?? null
    }
    if (!companyId) {
      const created = await createCompany(lead.organisme.trim(), domain)
      companyId = created.id
    }
  }

  // Dédup par email : si la Person existe, on UPDATE (last-touch + champs lead)
  // sans toucher aux first-touch déjà renseignés (immutable). Sinon CREATE.
  const existing = await findPersonByEmail(lead.email)
  if (existing) {
    const patch: Record<string, unknown> = {
      demandeType: lead.source === 'demo' ? 'DEMO' : 'CONTACT',
      ...buildLastTouchFields(lead),
    }
    if (lead.message) patch.leadMessage = lead.message
    if (lead.titreReferentiel) patch.titreReferentiel = lead.titreReferentiel
    if (lead.consentRgpd) patch.consentRgpd = true
    if (companyId) patch.companyId = companyId
    if (lead.tailleEtablissement && SIZE_MAP[lead.tailleEtablissement]) {
      patch.tailleEtablissement = SIZE_MAP[lead.tailleEtablissement]
    }
    if (lead.dateHeureDemoSouhaitee) {
      const d = new Date(lead.dateHeureDemoSouhaitee)
      if (!Number.isNaN(d.getTime())) patch.dateHeureDemoSouhaitee = d.toISOString()
    }
    if (!hasExistingFirstTouch(existing)) {
      Object.assign(patch, buildFirstTouchFields(lead))
    }
    await updatePerson(existing.id, patch)
    return { personId: existing.id, companyId, created: false }
  }

  const person = await createPerson({ lead, companyId })
  return { personId: person.id, companyId, created: true }
}
