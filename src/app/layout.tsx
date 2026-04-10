import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Syllabis | Créez vos formations RNCP avec l'IA — Export SCORM marque blanche",
  description:
    "Logiciel de création de formation pour organismes de formation. Générez l'arborescence et le contenu pédagogique depuis une fiche RNCP, exportez en SCORM marque blanche sur votre LMS. Compatible Qualiopi.",
  openGraph: {
    title: "Syllabis | Créez vos formations RNCP avec l'IA",
    description:
      "Générez l'arborescence et le contenu pédagogique depuis une fiche RNCP, exportez en SCORM marque blanche.",
    url: "https://syllabis.vercel.app",
    siteName: "Syllabis",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-neutral-900">
        <Navbar />
        <main className="flex-1 pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
