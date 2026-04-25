import type { Metadata } from "next";
import { Button } from "@/components/base/buttons/button";

export const metadata: Metadata = {
  title: "Blog | Syllabis",
  description: "Le blog Syllabis arrive bientôt : retours d'expérience, guides et bonnes pratiques pour les organismes de formation.",
};

export default function BlogPage() {
  return (
    <section className="relative pt-32 md:pt-40 pb-24">
      <div className="absolute inset-0 hero-grid hero-grid-mask" />
      <div className="relative mx-auto max-w-container px-4 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-3 py-1 mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse" />
            <span className="text-xs font-semibold text-brand-800">Bientôt</span>
          </div>

          <h1 className="text-display-md sm:text-display-lg font-semibold text-neutral-900">
            À venir
          </h1>

          <p className="mt-6 text-lg text-neutral-600">
            Notre blog est en préparation. Retours d&apos;expérience, guides pratiques et
            décryptages sur la production pédagogique IA pour les organismes de formation.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button color="primary" size="xl" href="/contact">
              Être prévenu du lancement
            </Button>
            <Button color="secondary" size="xl" href="/">
              Retour à l&apos;accueil
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
