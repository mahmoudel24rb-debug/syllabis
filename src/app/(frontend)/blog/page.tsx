import type { Metadata } from 'next'
import Link from 'next/link'
import { getPublishedPosts, getCategories, getGlobal } from '@/lib/payload'
import PostCard from '@/components/blog/PostCard'
import BlogJsonLd from '@/components/seo/BlogJsonLd'
import BreadcrumbJsonLd from '@/components/seo/BreadcrumbJsonLd'
import CTABanner from '../components/CTABanner'
import { buildPageMetadata } from '@/lib/seo/metadata'

const SITE_URL = 'https://syllabis.fr'

const DEFAULT_HERO = {
  eyebrow: 'Blog',
  title: "Guides et retours d'expérience pour organismes de formation",
  subtitle:
    "Création de formations RNCP, IA pédagogique, export SCORM, conformité Qualiopi. Tout ce que vous devez savoir pour produire mieux et plus vite.",
}
const DEFAULT_INDEX_CTA = {
  title: 'Vous voulez essayer Syllabis sur votre référentiel ?',
  description: '14 jours d\'essai gratuit, sans carte bancaire, ou démo personnalisée sur votre propre fiche RNCP.',
  primary: { label: 'Activer mon essai gratuit', url: '/essai-gratuit' },
  secondary: { label: 'Réserver ma démo', url: '/demo' },
}

export const metadata: Metadata = buildPageMetadata({
  title: 'Blog Syllabis · Guides pour organismes de formation',
  description:
    "Articles, guides pratiques et retours d'expérience sur la création de formations RNCP, l'IA pédagogique, l'export SCORM et la conformité Qualiopi.",
  path: '/blog',
  ogTitle: 'Blog Syllabis',
  ogDescription: "Guides et retours d'expérience pour organismes de formation",
})

export const revalidate = 60

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string; categorie?: string }> }) {
  const params = await searchParams
  const page = parseInt(params.page || '1', 10)
  const categorySlug = params.categorie

  const [postsRes, categories, blogIndex] = await Promise.all([
    getPublishedPosts({ limit: 12, page, categorySlug }),
    getCategories(),
    getGlobal<any>('blogIndex'),
  ])
  const posts = postsRes.docs as any[]
  const featured = posts[0]
  const rest = posts.slice(1)

  const hero = {
    eyebrow: blogIndex?.hero?.eyebrow || DEFAULT_HERO.eyebrow,
    title: blogIndex?.hero?.title || DEFAULT_HERO.title,
    subtitle: blogIndex?.hero?.subtitle || DEFAULT_HERO.subtitle,
  }
  const indexCta = {
    title: blogIndex?.indexCta?.title || DEFAULT_INDEX_CTA.title,
    description: blogIndex?.indexCta?.description || DEFAULT_INDEX_CTA.description,
    primaryLabel: blogIndex?.indexCta?.primary?.label || DEFAULT_INDEX_CTA.primary.label,
    primaryHref: blogIndex?.indexCta?.primary?.url || DEFAULT_INDEX_CTA.primary.url,
    secondaryLabel: blogIndex?.indexCta?.secondary?.label || DEFAULT_INDEX_CTA.secondary.label,
    secondaryHref: blogIndex?.indexCta?.secondary?.url || DEFAULT_INDEX_CTA.secondary.url,
  }

  const recentPosts = posts.slice(0, 5).map((p: any) => ({
    name: p.title,
    url: `/blog/${p.slug}`,
    datePublished: p.publishedAt,
  }))

  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: `${SITE_URL}/` },
          { name: 'Blog', url: `${SITE_URL}/blog` },
        ]}
      />
      <BlogJsonLd
        name="Blog Syllabis"
        description="Guides, retours d'expérience et analyses pour organismes de formation : création de formations RNCP, IA pédagogique, export SCORM, conformité Qualiopi."
        url="/blog"
        recentPosts={recentPosts}
      />
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-container px-4 sm:px-8 pt-16 sm:pt-24 pb-12">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-semibold text-brand-600 mb-3">{hero.eyebrow}</p>
            <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
              {hero.title}
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-neutral-600">
              {hero.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Filtres catégories */}
      {categories.length > 0 && (
        <section className="py-6 border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-container px-4 sm:px-8">
            <div className="flex items-center gap-2 overflow-x-auto">
              <Link
                href="/blog"
                className={`shrink-0 inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                  !categorySlug ? 'bg-brand-600 text-white' : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                }`}
              >
                Tous les articles
              </Link>
              {categories.map((c: any) => (
                <Link
                  key={c.id}
                  href={`/blog?categorie=${c.slug}`}
                  className={`shrink-0 inline-flex items-center rounded-full px-3.5 py-1.5 text-sm font-semibold transition-colors ${
                    categorySlug === c.slug
                      ? 'bg-brand-600 text-white'
                      : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                  }`}
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Featured + grid */}
      <section className="py-12 sm:py-16">
        <div className="mx-auto max-w-container px-4 sm:px-8">
          {posts.length === 0 && (
            <div className="text-center py-20">
              <p className="text-lg text-neutral-600">Aucun article publié pour le moment.</p>
              <p className="mt-2 text-sm text-neutral-500">Revenez bientôt, les premiers articles arrivent.</p>
            </div>
          )}

          {featured && (
            <div className="mb-16">
              <PostCard post={featured} variant="featured" />
            </div>
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((p) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          )}

          {/* Pagination */}
          {postsRes.totalPages > 1 && (
            <div className="mt-12 flex items-center justify-center gap-2">
              {Array.from({ length: postsRes.totalPages }).map((_, i) => {
                const n = i + 1
                const url = `/blog?${categorySlug ? `categorie=${categorySlug}&` : ''}page=${n}`
                return (
                  <Link
                    key={n}
                    href={url}
                    className={`size-10 inline-flex items-center justify-center rounded-lg text-sm font-semibold ${
                      n === page ? 'bg-brand-600 text-white' : 'border border-neutral-200 text-neutral-700 hover:bg-neutral-50'
                    }`}
                  >
                    {n}
                  </Link>
                )
              })}
            </div>
          )}
        </div>
      </section>

      <CTABanner
        title={indexCta.title}
        description={indexCta.description}
        primaryLabel={indexCta.primaryLabel}
        primaryHref={indexCta.primaryHref}
        secondaryLabel={indexCta.secondaryLabel}
        secondaryHref={indexCta.secondaryHref}
      />
    </>
  )
}
