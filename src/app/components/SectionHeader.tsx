interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  badge,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  return (
    <div className={`mb-16 ${centered ? "text-center" : ""}`}>
      {badge && (
        <p className="text-sm font-semibold text-brand-600 mb-3">{badge}</p>
      )}
      <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-5 text-lg sm:text-xl text-neutral-600 ${
            centered ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
