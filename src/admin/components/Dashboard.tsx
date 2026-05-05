import { Gutter } from '@payloadcms/ui'
import Link from 'next/link'
import type { AdminViewServerProps } from 'payload'
import React from 'react'
import GaMetricsSection from './GaMetricsSection'
import IntegrationsHealthSection from './IntegrationsHealthSection'

export const dynamic = 'force-dynamic'

const ROOT_CLASS = 'dashboard syllabis-dashboard'

function startOfWeekIso(): string {
  const d = new Date()
  d.setDate(d.getDate() - 7)
  d.setHours(0, 0, 0, 0)
  return d.toISOString()
}

function fmtDate(iso?: string | null): string {
  if (!iso) return ''
  try {
    return new Date(iso).toLocaleDateString('fr-FR', {
      day: '2-digit',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    })
  } catch {
    return ''
  }
}

export default async function SyllabisDashboard(props: AdminViewServerProps) {
  const { initPageResult } = props
  const payload = initPageResult?.req?.payload
  const user = initPageResult?.req?.user as
    | { name?: string; email?: string }
    | undefined

  const greetingName =
    (user?.name && user.name.trim().split(/\s+/)[0]) ||
    user?.email?.split('@')[0] ||
    'à toi'

  // KPIs : 4 compteurs en parallèle, en mode "draft=false" pour ne compter que publiés
  let publishedPosts = 0
  let draftPosts = 0
  let publishedPages = 0
  let leadsThisWeek = 0
  let recentPosts: Array<{ id: string; title?: string; slug?: string; updatedAt?: string }> = []
  let recentPages: Array<{ id: string; title?: string; slug?: string; updatedAt?: string }> = []

  if (payload) {
    try {
      const sinceIso = startOfWeekIso()
      const [postsPub, postsDraft, pagesPub, leads, lastPosts, lastPages] = await Promise.all([
        payload.count({
          collection: 'posts',
          where: { _status: { equals: 'published' } },
        }),
        payload.count({
          collection: 'posts',
          where: { _status: { equals: 'draft' } },
        }),
        payload.count({
          collection: 'pages',
          where: { _status: { equals: 'published' } },
        }),
        payload.count({
          collection: 'leads',
          where: { createdAt: { greater_than_equal: sinceIso } },
        }),
        payload.find({
          collection: 'posts',
          limit: 5,
          sort: '-updatedAt',
          depth: 0,
          select: { title: true, slug: true, updatedAt: true },
        }),
        payload.find({
          collection: 'pages',
          limit: 5,
          sort: '-updatedAt',
          depth: 0,
          select: { title: true, slug: true, updatedAt: true },
        }),
      ])
      publishedPosts = postsPub.totalDocs
      draftPosts = postsDraft.totalDocs
      publishedPages = pagesPub.totalDocs
      leadsThisWeek = leads.totalDocs
      recentPosts = (lastPosts.docs as any[]).map((d) => ({
        id: String(d.id),
        title: d.title,
        slug: d.slug,
        updatedAt: d.updatedAt,
      }))
      recentPages = (lastPages.docs as any[]).map((d) => ({
        id: String(d.id),
        title: d.title,
        slug: d.slug,
        updatedAt: d.updatedAt,
      }))
    } catch {
      /* En cas d'erreur de fetch (BDD non prête, etc.), on rend le dashboard
         avec des compteurs à 0 plutôt que de planter la page. */
    }
  }

  const recent = [
    ...recentPosts.map((p) => ({
      kind: 'post' as const,
      id: p.id,
      title: p.title || '(sans titre)',
      url: `/admin/collections/posts/${p.id}`,
      updatedAt: p.updatedAt,
    })),
    ...recentPages.map((p) => ({
      kind: 'page' as const,
      id: p.id,
      title: p.title || '(sans titre)',
      url: `/admin/collections/pages/${p.id}`,
      updatedAt: p.updatedAt,
    })),
  ]
    .sort((a, b) => (b.updatedAt || '').localeCompare(a.updatedAt || ''))
    .slice(0, 5)

  return (
    <Gutter className={ROOT_CLASS}>
      <header>
        <h1 className="syllabis-dashboard__hello">Bonjour {greetingName} 👋</h1>
        <p className="syllabis-dashboard__intro">
          Voici l&apos;état de syllabis.fr en un coup d&apos;œil.
        </p>
      </header>

      {/* KPIs */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Aperçu</h2>
        <div className="syllabis-kpis">
          <div className="syllabis-kpi">
            <p className="syllabis-kpi__label">Articles publiés</p>
            <div className="syllabis-kpi__value">{publishedPosts}</div>
            {draftPosts > 0 && (
              <p className="syllabis-kpi__hint">
                {draftPosts} brouillon{draftPosts > 1 ? 's' : ''} en cours
              </p>
            )}
          </div>
          <div className="syllabis-kpi">
            <p className="syllabis-kpi__label">Pages publiées</p>
            <div className="syllabis-kpi__value">{publishedPages}</div>
          </div>
          <div className="syllabis-kpi">
            <p className="syllabis-kpi__label">Leads (7 derniers jours)</p>
            <div className="syllabis-kpi__value">{leadsThisWeek}</div>
            {leadsThisWeek > 0 && (
              <p className="syllabis-kpi__hint">à traiter dans Twenty CRM</p>
            )}
          </div>
          <div className="syllabis-kpi">
            <p className="syllabis-kpi__label">Brouillons articles</p>
            <div className="syllabis-kpi__value">{draftPosts}</div>
          </div>
        </div>
      </section>

      {/* Santé des intégrations */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Santé des intégrations</h2>
        <IntegrationsHealthSection />
      </section>

      {/* Audience site (GA4) */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Audience site (30 derniers jours)</h2>
        <GaMetricsSection />
      </section>

      {/* Raccourcis : Contenus */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Contenus</h2>
        <div className="syllabis-shortcuts">
          <Link className="syllabis-shortcut" href="/admin/collections/posts/create">
            <span className="syllabis-shortcut__title">Nouvel article</span>
            <span className="syllabis-shortcut__sub">Rédiger un article de blog</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/collections/posts">
            <span className="syllabis-shortcut__title">Articles</span>
            <span className="syllabis-shortcut__sub">Liste & édition</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/collections/pages">
            <span className="syllabis-shortcut__title">Pages</span>
            <span className="syllabis-shortcut__sub">Home, fonctionnalités, etc.</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/collections/categories">
            <span className="syllabis-shortcut__title">Catégories</span>
            <span className="syllabis-shortcut__sub">Taxonomie blog</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/collections/authors">
            <span className="syllabis-shortcut__title">Auteurs</span>
            <span className="syllabis-shortcut__sub">Profils des contributeurs</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/collections/media">
            <span className="syllabis-shortcut__title">Médias</span>
            <span className="syllabis-shortcut__sub">Images & fichiers</span>
          </Link>
        </div>
      </section>

      {/* Raccourcis : Marketing */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Marketing</h2>
        <div className="syllabis-shortcuts">
          <Link className="syllabis-shortcut" href="/admin/collections/leads">
            <span className="syllabis-shortcut__title">Leads</span>
            <span className="syllabis-shortcut__sub">Demandes de démo & contacts</span>
          </Link>
        </div>
      </section>

      {/* Raccourcis : Configuration */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Configuration</h2>
        <div className="syllabis-shortcuts">
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/globals/settings">
            <span className="syllabis-shortcut__title">Paramètres généraux</span>
            <span className="syllabis-shortcut__sub">Nom, logo, favicon, SEO</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/globals/header">
            <span className="syllabis-shortcut__title">Header (menu)</span>
            <span className="syllabis-shortcut__sub">Navigation du site</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/globals/footer">
            <span className="syllabis-shortcut__title">Footer</span>
            <span className="syllabis-shortcut__sub">Pied de page</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/globals/blogIndex">
            <span className="syllabis-shortcut__title">Blog (hero & CTA)</span>
            <span className="syllabis-shortcut__sub">Page liste & articles</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/globals/cookieBanner">
            <span className="syllabis-shortcut__title">Bandeau cookies</span>
            <span className="syllabis-shortcut__sub">Texte & boutons</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/globals/llmsTxt">
            <span className="syllabis-shortcut__title">Fichier /llms.txt</span>
            <span className="syllabis-shortcut__sub">Pour les IA crawlers</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/collections/redirects">
            <span className="syllabis-shortcut__title">Redirections</span>
            <span className="syllabis-shortcut__sub">URLs anciennes → nouvelles</span>
          </Link>
          <Link className="syllabis-shortcut syllabis-shortcut--ghost" href="/admin/collections/users">
            <span className="syllabis-shortcut__title">Utilisateurs</span>
            <span className="syllabis-shortcut__sub">Comptes admin / éditeur</span>
          </Link>
        </div>
      </section>

      {/* Raccourcis : Liens externes */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Liens externes</h2>
        <div className="syllabis-shortcuts">
          <a
            className="syllabis-shortcut syllabis-shortcut--ghost"
            href="https://syllabis.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="syllabis-shortcut__title">Voir le site public ↗</span>
            <span className="syllabis-shortcut__sub">syllabis.fr</span>
          </a>
        </div>
      </section>

      {/* Activité récente */}
      <section>
        <h2 className="syllabis-dashboard__section-title">Activité récente</h2>
        <div className="syllabis-recent">
          {recent.length === 0 && (
            <div className="syllabis-recent__empty">Aucune modification récente.</div>
          )}
          {recent.map((r) => (
            <Link key={`${r.kind}-${r.id}`} className="syllabis-recent__row" href={r.url}>
              <span className="syllabis-recent__title">
                {r.kind === 'post' ? '📝' : '📄'} {r.title}
              </span>
              <span className="syllabis-recent__meta">{fmtDate(r.updatedAt)}</span>
            </Link>
          ))}
        </div>
      </section>
    </Gutter>
  )
}
