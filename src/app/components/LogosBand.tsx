const logos = [
  "Sorbonne",
  "OpenClassrooms",
  "Simplon",
  "ESSEC",
  "Docendi",
  "Skillup",
];

export default function LogosBand() {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        <p className="text-center text-md text-neutral-600 mb-8">
          Plus de 2 000 formateurs et organismes créent déjà avec Syllabis
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-x-8 gap-y-6 items-center justify-items-center">
          {logos.map((name) => (
            <div
              key={name}
              className="flex items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <rect x="3" y="3" width="18" height="18" rx="4" />
                <path d="M9 12h6M12 9v6" strokeLinecap="round" />
              </svg>
              <span className="text-lg font-semibold">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
