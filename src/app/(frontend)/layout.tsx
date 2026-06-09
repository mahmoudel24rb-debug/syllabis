import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {
  GoogleTagManagerScript,
  GoogleTagManagerNoScript,
} from "@/components/tracking/GoogleTagManager";
// Note (2026-06-08) : GoogleAnalyticsScript retiré du layout. GA4 est configuré
// directement dans le conteneur GTM (Tag #7 "GA4 - Configuration" avec
// measurementId G-N2ZTPZEC7W). L'injecter ici en plus produisait un
// double-load de gtag/js (~175 KiB x2) + double-comptage des events.
import SiteJsonLd from "@/components/seo/SiteJsonLd";
import { getGlobal } from "@/lib/payload";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
  weight: ["400", "500", "600", "700"],
});

const GTM_ID = process.env.NEXT_PUBLIC_GTM_CONTAINER_ID || "";
const SEARCH_CONSOLE = process.env.NEXT_PUBLIC_SEARCH_CONSOLE_VERIFICATION || "";

const SITE_TITLE = "Syllabis | Créez vos formations RNCP avec l'IA, Export SCORM marque blanche";
const SITE_DESCRIPTION =
  "Logiciel de création de formation pour organismes de formation. Générez l'arborescence et le contenu pédagogique depuis une fiche RNCP, exportez en SCORM marque blanche sur votre LMS. Compatible Qualiopi.";
const OG_IMAGE = "/og/syllabis-default.jpg";
const OG_TITLE_SHORT = "Syllabis | Créez vos formations RNCP avec l'IA";
const OG_DESCRIPTION_SHORT =
  "Générez l'arborescence et le contenu pédagogique depuis une fiche RNCP, exportez en SCORM marque blanche.";
const OG_IMAGE_ALT = "Syllabis — créez vos formations RNCP avec l'IA";

export async function generateMetadata(): Promise<Metadata> {
  const settings: any = await getGlobal("settings");

  const title = settings?.siteName || SITE_TITLE;
  const description = settings?.siteDescription || SITE_DESCRIPTION;
  // OG image : ratio 1.91:1 (1200×630). Le logo Payload est trop petit (144×144),
  // on force le fallback dédié sauf si settings.ogImage est explicitement set.
  const ogImageUrl: string = settings?.ogImage?.url || OG_IMAGE;
  const faviconUrl: string = settings?.favicon?.url || "/favicon.ico";
  const appleIconUrl: string = "/apple-touch-icon.png";

  return {
    metadataBase: new URL("https://syllabis.fr"),
    title,
    description,
    alternates: {
      canonical: "/",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      title: settings?.siteName || OG_TITLE_SHORT,
      description: settings?.siteDescription || OG_DESCRIPTION_SHORT,
      url: "/",
      siteName: settings?.siteName || "Syllabis",
      locale: "fr_FR",
      type: "website",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: OG_IMAGE_ALT,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: settings?.siteName || OG_TITLE_SHORT,
      description: settings?.siteDescription || OG_DESCRIPTION_SHORT,
      images: [ogImageUrl],
    },
    icons: {
      icon: faviconUrl,
      apple: appleIconUrl,
    },
    manifest: "/manifest.webmanifest",
    ...(SEARCH_CONSOLE && {
      verification: {
        google: SEARCH_CONSOLE,
      },
    }),
  };
}

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await getGlobal("settings");
  // ga4Id n'est plus utilisé ici (GA4 chargé via GTM Tag #7). Le global
  // settings.googleAnalyticsId reste configurable côté admin pour
  // documentation interne et peut être réintroduit ici si on déplace
  // GA4 hors-GTM dans le futur (ex: sGTM avec gtag direct).

  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <head>
        {/* Preconnect tiers pour économiser ~150-300ms de TLS handshake au LCP.
            GTM/GA4 chargent leurs scripts depuis googletagmanager. Quand GTM
            déclenche FB Pixel et Microsoft Clarity, leurs domaines sont déjà
            résolus + handshake établi. dns-prefetch en filet pour les autres. */}
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="" />
        <link rel="preconnect" href="https://connect.facebook.net" crossOrigin="" />
        <link rel="dns-prefetch" href="https://www.facebook.com" />
        <link rel="dns-prefetch" href="https://scripts.clarity.ms" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <GoogleTagManagerScript containerId={GTM_ID} />
        <SiteJsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <GoogleTagManagerNoScript containerId={GTM_ID} />
        <Navbar />
        <main className="flex-1 pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
