import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, Calendar, Clock, ArrowRight } from '@untitledui/icons'
import { getPostBySlug, getPublishedPosts, getRelatedPosts, getGlobal, payload as payloadFn } from '@/lib/payload'

const DEFAULT_POST_CTA = {
  title: 'Prêt à transformer votre production pédagogique ?',
  description:
    'Activez votre essai gratuit en 30 secondes ou réservez une démo personnalisée sur votre référentiel.',
  primary: { label: 'Activer mon essai gratuit', url: '/essai-gratuit' },
  secondary: { label: 'Demander une démo', url: '/demo' },
}
import PostBody from '@/components/blog/PostBody'
import PostCard, { CategoryBadge, formatDate } from '@/components/blog/PostCard'
import ArticleJsonLd, { BreadcrumbJsonLd } from '@/components/blog/ArticleJsonLd'
import ExtraJsonLd from '@/components/blog/ExtraJsonLd'
import CTABanner from '../../components/CTABanner'
import { buildPageMetadata } from '@/lib/seo/metadata'

type RouteParams = { slug: string }

export async function generateStaticParams() {
  const res = await getPublishedPosts({ limit: 100 })
  return (res.docs as any[]).map((p) => ({ slug: p.slug }))
}

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> }
): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)
  if (!post) return { title: 'Article non trouvé, Syllabis' }

  const path = `/blog/${post.slug}`
  const ogImage = (post as any).coverImage?.url
  const rawDescription = (post as any).excerpt || (post as any).title || ''
  // Tronque à 155c max (limite SEO Google) en coupant proprement sur un espace
  // pour éviter de couper un mot en plein milieu.
  const description = rawDescription.length > 155
    ? rawDescription.slice(0, 152).replace(/\s+\S*$/, '') + '…'
    : rawDescription
  const publishedTime = (post as any).publishedAt
  const author = Array.isArray((post as any).authors) ? (post as any).authors[0] : (post as any).authors

  return buildPageMetadata({
    title: (post as any).title,
    description,
    path,
    type: 'article',
    image: ogImage
      ? { url: ogImage, alt: (post as any).title, width: 1200, height: 630 }
      : undefined,
    article: {
      publishedTime,
      modifiedTime: (post as any).updatedAt,
      authors: author?.name ? [author.name] : ['Syllabis'],
      tags: ((post as any).tags || []).map((t: any) => t.tag),
      section: 'Blog',
    },
  })
}

export const revalidate = 60

export default async function BlogPostPage({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params
  const post: any = await getPostBySlug(slug)
  if (!post) notFound()

  const url = `https://syllabis.fr/blog/${post.slug}`
  const author = Array.isArray(post.authors) ? post.authors[0] : post.authors
  const [related, blogIndex] = await Promise.all([
    getRelatedPosts(post),
    getGlobal<any>('blogIndex'),
  ])
  const postCta = {
    title: blogIndex?.postCta?.title || DEFAULT_POST_CTA.title,
    description: blogIndex?.postCta?.description || DEFAULT_POST_CTA.description,
    primaryLabel: blogIndex?.postCta?.primary?.label || DEFAULT_POST_CTA.primary.label,
    primaryHref: blogIndex?.postCta?.primary?.url || DEFAULT_POST_CTA.primary.url,
    secondaryLabel: blogIndex?.postCta?.secondary?.label || DEFAULT_POST_CTA.secondary.label,
    secondaryHref: blogIndex?.postCta?.secondary?.url || DEFAULT_POST_CTA.secondary.url,
  }

  return (
    <article>
      <ArticleJsonLd post={post} url={url} />
      <ExtraJsonLd slug={post.slug} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Accueil', url: 'https://syllabis.fr/' },
          { name: 'Blog', url: 'https://syllabis.fr/blog' },
          { name: post.title, url },
        ]}
      />

      {/* Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 hero-grid hero-grid-mask" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-8 pt-12 sm:pt-16 pb-8 sm:pb-12">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 mb-6">
            <ChevronLeft className="size-4" />
            Retour au blog
          </Link>

          <div className="mb-4">
            <CategoryBadge category={post.category} />
          </div>

          <h1 className="text-display-sm sm:text-display-md lg:text-display-lg font-semibold text-neutral-900 leading-tight">
            {post.title}
          </h1>

          {post.excerpt && (
            <p className="mt-6 text-lg sm:text-xl text-neutral-600 leading-relaxed">{post.excerpt}</p>
          )}

          {/* Meta : auteur + date + temps lecture */}
          <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-neutral-600">
            {author?.avatar?.url && (
              <Image
                src={author.avatar.url}
                alt={author.name}
                width={40}
                height={40}
                className="size-10 rounded-full object-cover"
              />
            )}
            <div>
              <p className="font-semibold text-neutral-900">{author?.name}</p>
              {author?.role && <p className="text-xs text-neutral-500">{author.role}</p>}
            </div>
            <div className="ml-auto flex items-center gap-4 text-xs">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="size-4" />
                {formatDate(post.publishedAt)}
              </span>
              {post.readingTime && (
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="size-4" />
                  {post.readingTime} min de lecture
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Cover image */}
      {post.coverImage?.url && (
        <div className="mx-auto max-w-5xl px-4 sm:px-8 mb-12">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-100">
            <Image
              src={post.coverImage.url}
              alt={post.coverImage.alt || post.title}
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
              className="object-cover"
            />
          </div>
        </div>
      )}

      {/* Body */}
      <div className="mx-auto max-w-5xl px-4 sm:px-8 pb-16">
        <PostBody content={post.content} />

        {/* Tags */}
        {post.tags?.length > 0 && (
          <div className="mt-12 pt-8 border-t border-neutral-200">
            <p className="text-sm font-semibold text-neutral-700 mb-3">Mots-clés</p>
            <div className="flex flex-wrap gap-2">
              {post.tags.map((t: any, i: number) => (
                <span key={i} className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                  #{t.tag}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Author bio */}
        {author && (
          <div className="mt-12 p-8 rounded-2xl border border-neutral-200 bg-neutral-50">
            <div className="flex flex-col sm:flex-row gap-6">
              {author.avatar?.url && (
                <Image
                  src={author.avatar.url}
                  alt={author.name}
                  width={80}
                  height={80}
                  className="size-20 rounded-full object-cover shrink-0"
                />
              )}
              <div>
                <p className="text-lg font-semibold text-neutral-900">{author.name}</p>
                {author.role && <p className="text-sm text-brand-600 font-medium">{author.role}</p>}
                {author.bio && <p className="mt-2 text-md text-neutral-700">{author.bio}</p>}
                {(author.social?.linkedin || author.social?.twitter || author.social?.website) && (
                  <div className="mt-4 flex gap-3 text-sm">
                    {author.social.linkedin && (
                      <a href={author.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">LinkedIn</a>
                    )}
                    {author.social.twitter && (
                      <a href={author.social.twitter} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Twitter</a>
                    )}
                    {author.social.website && (
                      <a href={author.social.website} target="_blank" rel="noopener noreferrer" className="text-brand-600 hover:underline">Site web</a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Related posts */}
      {related.length > 0 && (
        <section className="py-16 bg-neutral-50">
          <div className="mx-auto max-w-container px-4 sm:px-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-8">Articles liés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((p: any) => (
                <PostCard key={p.id} post={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={postCta.title}
        description={postCta.description}
        primaryLabel={postCta.primaryLabel}
        primaryHref={postCta.primaryHref}
        secondaryLabel={postCta.secondaryLabel}
        secondaryHref={postCta.secondaryHref}
      />
    </article>
  )
}
