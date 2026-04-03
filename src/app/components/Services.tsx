interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3">
            Nos services
          </p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Des solutions pour chaque besoin
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            Des solutions completes pour developper votre activite en ligne et
            atteindre vos objectifs de croissance.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-16">
          {services.map((service) => (
            <div key={service._id} className="text-center">
              <div className="mx-auto mb-5 flex items-center justify-center w-12 h-12 rounded-lg border border-neutral-200 bg-white shadow-xs text-2xl">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-md text-neutral-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
