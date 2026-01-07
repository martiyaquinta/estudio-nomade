import Link from "next/link";
import { ArrowRightIcon, SparklesIcon, RocketLaunchIcon, DevicePhoneMobileIcon, MegaphoneIcon } from "@heroicons/react/24/outline";

export default function ServicesPreview() {
  const services = [
    {
      title: "Landing Page + Marketing",
      description: "Landing enfocada en conversión + estrategia clara",
      icon: RocketLaunchIcon,
      colors: "lavanda",
      features: ["Brief estratégico", "Copy estratégico", "Diseño y desarrollo", "Integración de formularios"]
    },
    {
      title: "Web Institucional",
      description: "Presencia digital profesional para emprendedores",
      icon: DevicePhoneMobileIcon,
      colors: "violeta",
      features: ["Web 3-5 secciones", "Diseño funcional", "SEO básico", "Formularios de contacto"]
    },
    {
      title: "Invitaciones Digitales",
      description: "Páginas únicas para eventos especiales",
      icon: SparklesIcon,
      colors: "lavanda",
      features: ["Diseño personalizado", "RSVP integrado", "Link + QR", "Confirmaciones"]
    },
    {
      title: "Pack Lanzamiento",
      description: "Web + marketing para salir al mercado",
      icon: MegaphoneIcon,
      colors: "orange",
      features: ["Diagnóstico profundo", "Estrategia de marca", "Web o landing", "Plan de lanzamiento"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-oscuro mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-oscuro/70 mb-4">
            Desarrollo web + Estrategia de marketing digital
          </p>
          <p className="text-sm text-orange font-semibold">
            💬 Consultoría gratuita · Presupuesto personalizado
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const borderColor = service.colors === "orange" ? "border-orange/30 hover:border-orange" : 
                               service.colors === "violeta" ? "border-violeta/30 hover:border-violeta" :
                               "border-lavanda/30 hover:border-lavanda";
            const iconBg = service.colors === "orange" ? "bg-orange/10" : 
                          service.colors === "violeta" ? "bg-violeta/10" :
                          "bg-lavanda/10";
            const iconColor = service.colors === "orange" ? "text-orange" : 
                             service.colors === "violeta" ? "text-violeta" :
                             "text-lavanda";
            
            return (
              <div
                key={index}
                className={`group p-6 border-2 rounded-2xl hover:shadow-xl transition-all duration-300 ${borderColor}`}
              >
                <div className="mb-4">
                  <div className={`w-12 h-12 ${iconBg} rounded-xl flex items-center justify-center mb-4`}>
                    <IconComponent className={`w-7 h-7 ${iconColor}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-oscuro mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-oscuro/70 mb-4">
                    {service.description}
                  </p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-oscuro/80">
                      <svg className={`w-4 h-4 ${iconColor} flex-shrink-0 mt-0.5`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-lavanda hover:text-violeta font-medium group"
          >
            Ver todos los servicios
            <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
