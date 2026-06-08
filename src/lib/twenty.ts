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

/** Crée le favori "Dispos" dans la sidebar Twenty pour un workspaceMember
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

    // 4. Cree le RECORD "Dispos" dans ce folder
    await client.query(
      `INSERT INTO core."navigationMenuItem"
         (id, "workspaceId", "universalIdentifier", "applicationId",
          "userWorkspaceId", "targetRecordId", "targetObjectMetadataId",
          "folderId", type, name, icon, position)
       VALUES (gen_random_uuid(), $1::uuid, gen_random_uuid(), $2::uuid,
               $3::uuid, $4::uuid, $5::uuid, $6::uuid,
               'RECORD'::core."navigationMenuItem_type_enum",
               'Dispos', 'IconCalendar', 0)`,
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
  source: 'contact' | 'demo' | 'demo_signup'
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
}

const SIZE_MAP: Record<string, string> = {
  '1-5': 'S_1_5',
  '6-15': 'S_6_15',
  '16-50': 'S_16_50',
  '50+': 'S_50_PLUS',
}

const SIZE_TO_EMPLOYEES: Record<string, number> = {
  '1-5': 5,
  '6-15': 15,
  '16-50': 50,
  '50+': 100,
}

function emailDomain(email: string): string | null {
  const parts = email.toLowerCase().trim().split('@')
  if (parts.length !== 2 || !parts[1]) return null
  const generic = new Set(['gmail.com', 'yahoo.com', 'yahoo.fr', 'outlook.com', 'outlook.fr', 'hotmail.com', 'hotmail.fr', 'wanadoo.fr', 'orange.fr', 'free.fr', 'icloud.com', 'me.com', 'proton.me', 'protonmail.com', 'laposte.net'])
  return generic.has(parts[1]) ? null : parts[1]
}

async function findCompanyByDomain(domain: string): Promise<{ id: string; name: string } | null> {
  const url = `/companies?filter=domainName.primaryLinkUrl[eq]:${encodeURIComponent(domain)}&limit=1`
  try {
    const res = await twentyFetch<{ data: { companies: Array<{ id: string; name: string }> } }>(url)
    return res.data.companies?.[0] ?? null
  } catch {
    return null
  }
}

/** Crée une Note attachée à une Company (visible sur la fiche Company).
 *  Idempotence non garantie : caller doit éviter les doublons via le titre. */
async function createCompanyNote(companyId: string, title: string, markdown: string): Promise<void> {
  try {
    const noteRes = await twentyFetch<{ data: { createNote: { id: string } } }>('/notes', {
      method: 'POST',
      body: JSON.stringify({
        title: title.slice(0, 200),
        bodyV2: { markdown: markdown.slice(0, 4000), blocknote: '' },
        createdBy: { source: 'API' },
      }),
    })
    const noteId = noteRes.data.createNote.id
    // noteTarget utilise MORPH_RELATION → le champ Twenty est targetCompanyId
    // (pas companyId comme pour taskTarget qui est RELATION classique).
    await twentyFetch('/noteTargets', {
      method: 'POST',
      body: JSON.stringify({ noteId, targetCompanyId: companyId }),
    })
  } catch (e) {
    console.warn('[twenty/createCompanyNote]', e instanceof Error ? e.message : e)
  }
}

async function findPersonByEmail(email: string): Promise<{ id: string } | null> {
  const url = `/people?filter=emails.primaryEmail[eq]:${encodeURIComponent(email)}&limit=1`
  try {
    const res = await twentyFetch<{ data: { people: Array<{ id: string }> } }>(url)
    return res.data.people?.[0] ?? null
  } catch {
    return null
  }
}

async function createCompany(name: string, domain: string | null, employees?: number): Promise<{ id: string }> {
  const body: Record<string, unknown> = { name, createdBy: { source: 'API' } }
  if (domain) body.domainName = { primaryLinkLabel: domain, primaryLinkUrl: domain }
  if (typeof employees === 'number' && Number.isFinite(employees) && employees > 0) {
    body.employees = employees
  }
  const res = await twentyFetch<{ data: { createCompany: { id: string } } }>('/companies', {
    method: 'POST',
    body: JSON.stringify(body),
  })
  return res.data.createCompany
}

async function updateCompany(id: string, patch: Record<string, unknown>): Promise<void> {
  try {
    await twentyFetch(`/companies/${encodeURIComponent(id)}`, {
      method: 'PATCH',
      body: JSON.stringify(patch),
    })
  } catch (e) {
    console.warn('[twenty/updateCompany]', e instanceof Error ? e.message : e)
  }
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

async function createPerson(input: {
  lead: LeadPayload
  companyId: string | null
}): Promise<{ id: string }> {
  const { lead, companyId } = input
  const nowIso = new Date().toISOString()
  const body: Record<string, unknown> = {
    name: { firstName: lead.prenom || '', lastName: lead.nom },
    emails: { primaryEmail: lead.email },
    demandeType: lead.source === 'demo' ? 'DEMO' : 'CONTACT',
    statutCommercial: 'PROSPECT',
    sourceCanal: inferSourceCanal(lead),
    leadMessage: lead.message || '',
    consentRgpd: Boolean(lead.consentRgpd),
    titreReferentiel: lead.titreReferentiel || '',
    lastActivityAt: nowIso,
    createdBy: { source: 'API' },
    ...buildLastTouchFields(lead),
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
  email: 'EMAIL',
  newsletter: 'EMAIL',
  organic: 'ORGANIC',
  direct: 'DIRECT',
  referral: 'REFERRAL',
  event: 'EVENT',
}

function inferSourceCanal(lead: LeadPayload): string {
  const utmSrc = (lead.tracking?.utmSource || '').toLowerCase()
  // Substring match prioritaire : couvre 'email', 'email-blast', 'monthly-email',
  // 'newsletter-mai26', etc. — toute variante contenant 'email' ou 'newsletter'.
  if (utmSrc.includes('email') || utmSrc.includes('newsletter')) return 'EMAIL'
  if (utmSrc && SOURCE_CANAL_FROM_UTM[utmSrc]) return SOURCE_CANAL_FROM_UTM[utmSrc]
  if (lead.tracking?.gclid) return 'GOOGLE_ADS'
  if (lead.tracking?.fbclid) return 'META_ADS'
  const ref = (lead.tracking?.referrer || '').toLowerCase()
  if (ref.includes('linkedin')) return 'LINKEDIN'
  if (ref.includes('google') || ref.includes('bing') || ref.includes('duckduckgo')) return 'ORGANIC'
  if (ref) return 'REFERRAL'
  // Fallback : pas d'UTM, pas de referrer → ORGANIC (cf. demande Victor :
  // un visiteur sans signal est plus probablement organic/SEO que direct typé).
  return 'ORGANIC'
}

export type OpportunityInput = {
  lead: LeadPayload
  personId: string
  companyId: string | null
}

// Rang d'avancement par stage — sert à décider si un re-submit upgrade ou pas.
// Plus le rang est élevé, plus l'opp est avancée dans le pipeline.
const STAGE_RANK: Record<string, number> = {
  LOST: -1,        // terminal négatif (jamais upgradé)
  NEW: 1,
  SCREENING: 2,
  MEETING: 3,
  MEETING_DONE: 4,
  PROPOSAL: 5,
  NEGOCIATION: 6,
  CUSTOMER: 99,    // terminal positif (jamais upgradé non plus)
}

/** Détermine le stage initial pour une nouvelle Opp issue d'un lead.
 *  - source='demo' + date démo future            → MEETING (50%)   — RDV planifié
 *  - source='demo' + sourcePage 'arcade-gate'    → SCREENING (35%) — démo Arcade vue
 *  - source='contact' + sourcePage avec cta=trial → SCREENING (35%) — Essai gratuit (lead qualifié)
 *  - source='demo' sinon (form /demo no date)    → NEW (20%)       — lead brut
 */
function computeInitialStage(lead: LeadPayload): 'NEW' | 'SCREENING' | 'MEETING' {
  if (lead.source === 'demo' && lead.dateHeureDemoSouhaitee) {
    const d = new Date(lead.dateHeureDemoSouhaitee)
    if (!Number.isNaN(d.getTime()) && d.getTime() > Date.now()) return 'MEETING'
  }
  // Inscription self-service essai gratuit : lead s'est inscrit et a un compte
  // actif → SCREENING (équivalent intent à arcade-gate + cta=trial).
  if (lead.source === 'demo_signup') return 'SCREENING'
  const sp = (lead.tracking?.sourcePage || '').toLowerCase()
  if (sp.startsWith('arcade-gate')) return 'SCREENING'
  if (sp.indexOf('cta=trial') >= 0) return 'SCREENING'
  return 'NEW'
}

/** Cherche l'Opportunity active la plus récente pour une Person (= non
 *  terminale : pas CUSTOMER, pas LOST). Sert au pattern upsert : on upgrade
 *  une Opp existante au lieu d'en créer une 2e quand le même lead revient
 *  (ex : Arcade gate puis réservation /demo). */
async function findActiveOpportunityForPerson(personId: string): Promise<{ id: string; stage: string } | null> {
  const filter = encodeURIComponent(`pointOfContactId[eq]:${personId}`)
  const url = `/opportunities?filter=${filter}&order_by=createdAt[DescNullsLast]&limit=20`
  try {
    const res = await twentyFetch<{ data: { opportunities: Array<{ id: string; stage: string }> } }>(url)
    const opps = res.data.opportunities || []
    const active = opps.find((o) => o.stage !== 'CUSTOMER' && o.stage !== 'LOST')
    return active ?? null
  } catch {
    return null
  }
}

async function updateOpportunity(id: string, patch: Record<string, unknown>): Promise<void> {
  await twentyFetch(`/opportunities/${encodeURIComponent(id)}`, {
    method: 'PATCH',
    body: JSON.stringify(patch),
  })
}

export async function createOpportunity(input: OpportunityInput): Promise<{ id: string; upgraded?: boolean }> {
  const { lead, personId, companyId } = input
  const personLabel = `${lead.prenom || ''} ${lead.nom}`.trim() || lead.email
  const orgLabel = lead.organisme?.trim() || lead.titreReferentiel || 'Demande'
  const name = `${personLabel} – ${orgLabel}`.slice(0, 200)

  const initialStage = computeInitialStage(lead)

  // Upsert : si une Opp active existe déjà pour cette Person, on upgrade son
  // stage (jamais downgrade) au lieu de créer un doublon.
  const existing = await findActiveOpportunityForPerson(personId)
  if (existing) {
    const currentRank = STAGE_RANK[existing.stage] ?? 0
    const targetRank = STAGE_RANK[initialStage] ?? 0
    if (targetRank > currentRank) {
      await updateOpportunity(existing.id, { stage: initialStage })
      return { id: existing.id, upgraded: true }
    }
    return { id: existing.id }
  }
  // Note : Twenty force probability=5 sur les POST /rest/opportunities (default
  // server-side, ignore la valeur du payload). On laisse le webhook
  // opportunity.created (events/route.ts) la corriger juste après création
  // selon le mapping STAGE_PROBABILITY.
  const body: Record<string, unknown> = {
    name,
    stage: initialStage,
    pointOfContactId: personId,
    sourceCanal: inferSourceCanal(lead),
    createdBy: { source: 'API' },
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

// ─────────────────────────────────────────────────────────────────────
// Tasks — mirror des bookings Cal.com vers une vue agenda dans Twenty
// ─────────────────────────────────────────────────────────────────────

export type CreateTaskForBookingInput = {
  title: string
  /** ISO datetime (booking start). Twenty utilise dueAt comme date du RDV. */
  dueAt: string
  /** Markdown — résumé du RDV (lien Cal Video, notes attendee, etc.). */
  bodyMarkdown?: string
  /** UUID workspaceMember Twenty à qui assigner la tâche (commercial qui prend le RDV). */
  assigneeWorkspaceMemberId?: string | null
  /** Liens polymorphiques vers Person/Company/Opportunity. */
  personId?: string | null
  companyId?: string | null
  opportunityId?: string | null
}

/** Cherche le workspaceMember dont l'userEmail correspond à l'email donné. */
export async function findWorkspaceMemberIdByEmail(email: string): Promise<string | null> {
  if (!email) return null
  const filter = encodeURIComponent(`userEmail[eq]:${email.toLowerCase()}`)
  try {
    const res = await twentyFetch<{ data: { workspaceMembers: Array<{ id: string }> } }>(
      `/workspaceMembers?filter=${filter}&limit=1`,
    )
    return res.data.workspaceMembers[0]?.id ?? null
  } catch {
    return null
  }
}

/**
 * Crée une Task Twenty + ses taskTargets vers Person/Company/Opportunity.
 * Idempotent : non. Le caller doit éviter les doublons (par exemple en
 * vérifiant un identifiant Cal.com booking avant d'appeler).
 */
export async function createTaskForBooking(input: CreateTaskForBookingInput): Promise<{ id: string }> {
  const taskBody: Record<string, unknown> = {
    title: input.title.slice(0, 200),
    status: 'TODO',
    createdBy: { source: 'API' },
  }
  if (input.dueAt) {
    const d = new Date(input.dueAt)
    if (!Number.isNaN(d.getTime())) taskBody.dueAt = d.toISOString()
  }
  if (input.bodyMarkdown) {
    taskBody.bodyV2 = { markdown: input.bodyMarkdown.slice(0, 8000), blocknote: '' }
  }
  if (input.assigneeWorkspaceMemberId) {
    taskBody.assigneeId = input.assigneeWorkspaceMemberId
  }

  const res = await twentyFetch<{ data: { createTask: { id: string } } }>('/tasks', {
    method: 'POST',
    body: JSON.stringify(taskBody),
  })
  const taskId = res.data.createTask.id

  // Liens polymorphiques via taskTarget. Twenty 2.1 expose /taskTargets pour
  // créer ces rows : un row par cible. On ignore les erreurs unitaires pour
  // ne pas perdre le task complet à cause d'un seul lien KO.
  // Twenty stocke les liens via les champs polymorphiques préfixés `target*`
  // (cf. introspection schema TaskTarget : `targetPersonId`, `targetCompanyId`,
  // `targetOpportunityId`). Les noms sans préfixe sont rejetés en HTTP 400.
  const linkAttempts: Array<{ key: string; value: string | null | undefined }> = [
    { key: 'targetPersonId', value: input.personId },
    { key: 'targetCompanyId', value: input.companyId },
    { key: 'targetOpportunityId', value: input.opportunityId },
  ]
  for (const { key, value } of linkAttempts) {
    if (!value) continue
    try {
      await twentyFetch('/taskTargets', {
        method: 'POST',
        body: JSON.stringify({ taskId, [key]: value }),
      })
    } catch (e) {
      console.warn(
        `[twenty/createTaskForBooking] link ${key} failed for task ${taskId}:`,
        e instanceof Error ? e.message : e,
      )
    }
  }

  return { id: taskId }
}

export async function pushLeadToTwenty(lead: LeadPayload): Promise<{ personId: string; companyId: string | null; created: boolean }> {
  const domain = emailDomain(lead.email)
  let companyId: string | null = null

  const employeesNum = lead.tailleEtablissement ? SIZE_TO_EMPLOYEES[lead.tailleEtablissement] : undefined

  // Note attendue si le nom saisi diffère du nom Company existante (dédup
  // par domaine email). On la pose après la création/maj de la Person pour
  // que `createdAt` reflète bien le moment du submit du formulaire.
  let declaredNameMismatch: { companyId: string; declared: string; existing: string } | null = null

  if (lead.organisme && lead.organisme.trim()) {
    const declared = lead.organisme.trim()
    if (domain) {
      const existing = await findCompanyByDomain(domain)
      if (existing) {
        companyId = existing.id
        // Trace si le user a déclaré un nom différent de la Company dédupliquée
        // (norme casse + espaces). On préserve l'info via une Note plutôt que
        // d'écraser le nom canonique de la Company.
        const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ')
        if (normalize(existing.name) !== normalize(declared)) {
          declaredNameMismatch = { companyId: existing.id, declared, existing: existing.name }
        }
      }
    }
    if (companyId && typeof employeesNum === 'number') {
      await updateCompany(companyId, { employees: employeesNum })
    }
    if (!companyId) {
      const created = await createCompany(declared, domain, employeesNum)
      companyId = created.id
    }
  }

  // Dédup par email : si la Person existe, on UPDATE (last-touch + champs lead).
  // Sinon CREATE.
  const nowIso = new Date().toISOString()
  const existing = await findPersonByEmail(lead.email)
  let personId: string
  let created: boolean
  if (existing) {
    const patch: Record<string, unknown> = {
      demandeType: lead.source === 'demo' ? 'DEMO' : 'CONTACT',
      lastActivityAt: nowIso,
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
    await updatePerson(existing.id, patch)
    personId = existing.id
    created = false
  } else {
    const p = await createPerson({ lead, companyId })
    personId = p.id
    created = true

    // Trace le nom déclaré sur la Company dédupliquée (non-bloquant)
    if (declaredNameMismatch) {
      const { companyId: cid, declared, existing: existingName } = declaredNameMismatch
      await createCompanyNote(
        cid,
        `Nom déclaré : ${declared}`,
        `Le lead **${lead.prenom || ''} ${lead.nom}** (${lead.email}) a déclaré l'organisme « **${declared}** ».\n\n` +
          `La fiche Company canonique est « ${existingName} » (dédup par domaine ${domain || 'email'}). ` +
          `À fusionner ou renommer si besoin.`,
      )
    }
  }

  // Bump lastActivityAt sur Company + Person à chaque soumission. Twenty force
  // lastActivityAt=null à la création REST (comportement parasite identique à
  // probability) → on patch explicitement après pour que la valeur stick.
  if (companyId) {
    await updateCompany(companyId, { lastActivityAt: nowIso })
  }
  try {
    await updatePerson(personId, { lastActivityAt: nowIso })
  } catch (e) {
    console.warn('[twenty/bumpPersonActivity]', e instanceof Error ? e.message : e)
  }

  return { personId, companyId, created }
}
