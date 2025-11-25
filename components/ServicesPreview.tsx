import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function ServicesPreview() {
  const services = [
    {
      title: "Landing Page Express",
      description: "Landing profesional lista en 48-72 horas",
      price: "Desde $300",
      features: ["Diseño personalizado", "Responsive", "SEO básico", "Formulario de contacto"]
    },
    {
      title: "Landing Page Premium",
      description: "Experiencia web completa y optimizada",
      price: "Desde $600",
      features: ["Diseño avanzado", "Animaciones", "SEO optimizado", "Integraciones"]
    },
    {
      title: "Invitaciones Digitales",
      description: "Invitaciones únicas para tus eventos",
      price: "Desde $150",
      features: ["Diseño personalizado", "RSVP integrado", "Galería de fotos", "Descarga PDF"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-oscuro mb-6">
            Servicios
          </h2>
          <p className="text-lg text-oscuro/70">
            Soluciones digitales adaptadas a tus necesidades
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border border-violeta/20 rounded-2xl hover:border-violeta hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-semibold text-oscuro mb-3">
                  {service.title}
                </h3>
                <p className="text-oscuro/70 mb-4">
                  {service.description}
                </p>
                <p className="text-3xl font-bold text-violeta">
                  {service.price}
                </p>
              </div>
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-oscuro/80">
                    <svg className="w-5 h-5 text-lavanda flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
