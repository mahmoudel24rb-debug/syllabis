import { Button } from "@/components/base/buttons/button";

interface CTABannerProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
}

export default function CTABanner({
  title,
  description,
  primaryLabel = "Demander une démo",
  primaryHref = "/demo",
  secondaryLabel,
  secondaryHref,
}: CTABannerProps) {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        <div className="rounded-2xl bg-[#0A1E3D] px-8 sm:px-16 py-14 sm:py-16 text-center">
          <h2 className="text-display-sm sm:text-display-md font-semibold text-white">
            {title}
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            {secondaryLabel && secondaryHref && (
              <Button
                color="secondary"
                size="xl"
                href={secondaryHref}
                className="w-full sm:w-auto border-white/20 bg-[#1A365D] text-white hover:bg-[#1A365D]/80 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_1px_2px_0_rgba(0,0,0,0.3)]"
              >
                {secondaryLabel}
              </Button>
            )}
            <Button color="primary" size="xl" href={primaryHref} className="w-full sm:w-auto">
              {primaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
