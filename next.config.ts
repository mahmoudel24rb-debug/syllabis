import type { NextConfig } from "next";
import { withPayload } from "@payloadcms/next/withPayload";

const SECURITY_HEADERS = [
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    // `interest-cohort=()` retiré : la directive a été dépréciée avec FLoC,
    // Chrome la signale "Unrecognized feature" dans la console — pénalité
    // Best Practices Lighthouse + bruit dev.
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  devIndicators: false,
  allowedDevOrigins: ["syllabis.fr", "*.syllabis.fr"],
  productionBrowserSourceMaps: true,
  experimental: {
    optimizePackageImports: ["@untitledui/icons", "motion", "react-aria-components"],
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [70, 75],
    // deviceSizes — restreint aux tailles utiles. Le default Next inclut 2048
    // et 3840 mais nos hero/screenshots UI sont 1920x1080 max → générer du
    // 3840 c'est du gaspi (Lighthouse mobile servait la variante 4K même en
    // 1193px de viewport, +~80 KiB). Cap à 1920 = tous nos use cases.
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      { protocol: "https", hostname: "syllabis.fr" },
      { protocol: "http", hostname: "localhost" },
      { protocol: "http", hostname: "127.0.0.1" },
    ],
  },
  async redirects() {
    return [
      // Liens internes legacy dans certains articles blog qui pointent vers
      // /tarifs (page jamais créée). Redirection 308 permanente vers /demo
      // (CTA principal de conversion) pour ne pas casser le SEO/UX.
      { source: "/tarifs", destination: "/demo", permanent: true },
      { source: "/tarifs/", destination: "/demo", permanent: true },
      // Canonicalisation : www.syllabis.fr → syllabis.fr (apex)
      // Évite le contenu dupliqué et signale au SEO une seule URL canonique.
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.syllabis.fr" }],
        destination: "https://syllabis.fr/:path*",
        permanent: true,
      },
    ]
  },
  async headers() {
    return [
      // E1 — Security headers globaux
      { source: "/:path*", headers: SECURITY_HEADERS },
      // E2 — X-Robots-Tag noindex sur API + admin
      {
        source: "/api/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      {
        source: "/admin/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
      // E3 — Cache long pour sitemap + robots
      {
        source: "/sitemap.xml",
        headers: [
          { key: "Cache-Control", value: "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400" },
        ],
      },
      {
        source: "/robots.txt",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, s-maxage=86400" },
        ],
      },
      // Assets statiques Next : cache long immutable
      {
        source: "/_next/static/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
};

export default withPayload(nextConfig, { devBundleServerPackages: false });
