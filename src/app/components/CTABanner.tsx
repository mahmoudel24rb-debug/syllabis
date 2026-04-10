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
        <div className="rounded-2xl bg-[#002A5A] px-8 sm:px-16 py-14 sm:py-16 text-center">
          <h2 className="text-display-sm sm:text-display-md font-semibold text-white">
            {title}
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-white/70 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="mt-10 flex flex-col-reverse sm:flex-row items-center justify-center gap-3">
            {secondaryLabel && secondaryHref && (
              <Button
                color="secondary"
                size="xl"
                href={secondaryHref}
                className="w-full sm:w-auto"
              >
                {secondaryLabel}
              </Button>
            )}
            <Button
              size="xl"
              href={primaryHref}
              className="w-full sm:w-auto bg-white text-[#002A5A] hover:bg-neutral-100"
            >
              {primaryLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
