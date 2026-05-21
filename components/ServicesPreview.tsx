import Link from "next/link";
import {
  ArrowRightIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  SparklesIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: RocketLaunchIcon,
    title: "Desarrollo Web",
    subtitle: "A medida",
    description:
      "Landing enfocada en conversión + estrategia clara. Brief, copy y diseño.",
  },
  {
    icon: MegaphoneIcon,
    title: "Marketing Digital",
    subtitle: "Estratégico",
    description:
      "Ecommerce + marketing para salir al mercado. Diagnóstico, marca y ventas.",
  },
  {
    icon: DevicePhoneMobileIcon,
    title: "Diseño UI/UX",
    subtitle: "Experiencias que convierten",
    description:
      "Presencia digital profesional. Web 3-5 secciones, SEO básico y formularios.",
  },
  {
    icon: SparklesIcon,
    title: "Gestión de Redes",
    subtitle: "y Contenido",
    description:
      "Diseño personalizado para eventos especiales. RSVP, QR y confirmaciones.",
  },
];

export default function ServicesPreview() {
  return (
    <section
      className="py-20"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label de sección */}
        <div className="flex items-center justify-center gap-3 mb-16">
          <span
            className="h-px w-8 flex-shrink-0"
            style={{ background: "var(--accent-orange)" }}
          />
          <span
            className="text-[11px] font-medium tracking-[0.18em] uppercase"
            style={{ color: "var(--accent-orange)" }}
          >
            SERVICIOS
          </span>
          <span
            className="h-px w-8 flex-shrink-0"
            style={{ background: "var(--accent-orange)" }}
          />
        </div>

        {/* 4 ítems horizontales separados por líneas */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            borderLeft: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group px-8 py-10 transition-all duration-300"
                style={{
                  borderRight: "1px solid rgba(255,255,255,0.08)",
                  borderBottom: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <Icon
                  className="w-8 h-8 mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: "var(--accent-orange)" }}
                />
                <h3
                  className="font-display font-bold text-white text-lg mb-1"
                >
                  {service.title}
                </h3>
                <p
                  className="text-xs font-medium mb-4 tracking-wide"
                  style={{ color: "var(--accent-orange)" }}
                >
                  {service.subtitle}
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--text-gray)" }}
                >
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Ver todos */}
        <div className="text-center mt-12">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wider group transition-colors duration-200 hover:text-white"
            style={{ color: "var(--text-gray)" }}
          >
            💬 Consultoría gratuita · Ver todos los servicios
            <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
