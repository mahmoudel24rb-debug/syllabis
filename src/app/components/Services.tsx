import Link from "next/link";
import { ArrowRight } from "@untitledui/icons";
import {
  MagicWand02,
  File06,
  VideoRecorder,
  CheckSquare,
  GraduationHat02,
  BarChart01,
  Lightbulb02,
  BookOpen01,
  Stars02,
  CpuChip02,
  Edit05,
  Certificate01,
  Zap,
  Edit04,
  Download01,
  Calendar,
  Building07,
} from "@untitledui/icons";
import type { ComponentType } from "react";

interface Service {
  _id: string;
  title: string;
  description: string;
  icon: string;
  order: number;
}

const iconMap: Record<string, ComponentType<{ size?: number; color?: string; className?: string }>> = {
  MagicWand02,
  File06,
  VideoRecorder,
  CheckSquare,
  GraduationHat02,
  BarChart01,
  Lightbulb02,
  BookOpen01,
  Stars02,
  CpuChip02,
  Edit05,
  Certificate01,
  Zap,
  Edit04,
  Download01,
  Calendar,
  Building07,
};

const featureLinkMap: Record<string, string> = {
  "Génération IA complète": "/fonctionnalites/generation-ia",
  "Éditeur 39+ blocs interactifs": "/fonctionnalites/editeur",
  "Médias IA (NotebookLM)": "/fonctionnalites/medias-ia",
  "Export SCORM universel": "/fonctionnalites/export-scorm",
  "Pilotage & Planning": "/fonctionnalites/pilotage-planning",
  "Multi-tenant & Enterprise": "/fonctionnalites/multi-tenant",
};

function ServiceIcon({ name }: { name: string }) {
  const Icon = iconMap[name];
  if (Icon) {
    return <Icon size={24} color="currentColor" />;
  }
  // Fallback: if the value is an emoji or unknown name, render as text
  return <span className="text-2xl">{name}</span>;
}

export default function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="mx-auto max-w-container px-4 sm:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-brand-600 mb-3">
            Les 6 piliers
          </p>
          <h2 className="text-display-sm sm:text-display-md font-semibold text-neutral-900">
            Tout ce dont vous avez besoin pour créer des formations e-learning
          </h2>
          <p className="mt-5 text-lg sm:text-xl text-neutral-600 max-w-2xl mx-auto">
            6 modules intégrés, de l&apos;analyse du référentiel au déploiement
            sur votre LMS.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10 sm:gap-y-16">
          {services.map((service) => (
            <div key={service._id} className="text-center">
              <div className="mx-auto mb-5 flex items-center justify-center w-12 h-12 rounded-xl bg-[#0A1E3D]/5 border border-[#0A1E3D]/10 text-[#0A1E3D]">
                <ServiceIcon name={service.icon} />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {service.title}
              </h3>
              <p className="text-md text-neutral-600 leading-relaxed">
                {service.description}
              </p>
              {featureLinkMap[service.title] && (
                <Link
                  href={featureLinkMap[service.title]}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700 mt-3"
                >
                  En savoir plus
                  <ArrowRight className="size-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
