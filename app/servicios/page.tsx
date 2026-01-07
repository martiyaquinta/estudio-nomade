import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckIcon, RocketLaunchIcon, DevicePhoneMobileIcon, SparklesIcon, MegaphoneIcon } from "@heroicons/react/24/outline";

export default function ServiciosPage() {
  const servicios = [
    {
      nombre: "Landing Page + Estrategia de Marketing",
      descripcion: "Crear una landing page enfocada en convertir visitantes en leads o ventas, acompañada de una estrategia clara de marketing.",
      caracteristicas: [
        "Brief estratégico",
        "Definición de objetivo (venta / lead / agenda)",
        "Copy estratégico",
        "Diseño y desarrollo de landing",
        "CTA claro",
        "Integración de formularios o WhatsApp",
        "Revisión y ajustes"
      ],
      destacado: true,
      icon: RocketLaunchIcon,
      colores: "violeta"
    },
    {
      nombre: "Web Institucional para Emprendedores",
      descripcion: "Dar presencia digital profesional y generar confianza con una web completa de 3 a 5 secciones.",
      caracteristicas: [
        "Web de 3 a 5 secciones",
        "Copy estratégico",
        "Diseño funcional",
        "Desarrollo web responsive",
        "SEO básico",
        "Formularios de contacto",
        "Optimización mobile"
      ],
      destacado: false,
      icon: DevicePhoneMobileIcon,
      colores: "navy"
    },
    {
      nombre: "Invitaciones Digitales / Páginas de Eventos",
      descripcion: "Crear una página simple, clara y visual para eventos o celebraciones.",
      caracteristicas: [
        "Página única personalizada",
        "Información del evento",
        "Diseño personalizado",
        "RSVP o confirmación",
        "Link compartible / QR",
        "Integración con WhatsApp",
        "Estilo visual único"
      ],
      destacado: false,
      icon: SparklesIcon,
      colores: "lavanda",
      link: "/admin"
    },
    {
      nombre: "Pack Lanzamiento",
      descripcion: "Ayudar a un negocio a salir al mercado con claridad, combinando web + marketing. Nuestro servicio estrella.",
      caracteristicas: [
        "Diagnóstico profundo",
        "Estrategia de marca",
        "Web o landing profesional",
        "CTA claro y efectivo",
        "Recomendaciones de lanzamiento",
        "Documento de próximos pasos",
        "Propuesta de mantenimiento o ads"
      ],
      destacado: false,
      icon: MegaphoneIcon,
      colores: "orange"
    }
  ];

  return (
    <main className="min-h-screen bg-humo">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0b1226] via-navy to-[#0b1226]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
              Servicios
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Desarrollo web + Estrategia de marketing digital
            </p>
            <div className="inline-block px-6 py-3 bg-orange/20 border border-orange/50 rounded-full">
              <p className="text-orange font-semibold">
                💬 Consultoría gratuita · Presupuesto personalizado
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-lavanda text-sm">Estudio Nómade</span>
              <span className="text-white/50">·</span>
              <span className="text-orange text-sm">Grovia Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => {
              const IconComponent = servicio.icon;
              const borderColor = servicio.colores === "orange" ? "border-orange" :
                                 servicio.colores === "navy" ? "border-navy" :
                                 servicio.colores === "lavanda" ? "border-lavanda" :
                                 "border-violeta";
              const bgColor = servicio.colores === "orange" ? "bg-orange/10" :
                             servicio.colores === "navy" ? "bg-navy/10" :
                             servicio.colores === "lavanda" ? "bg-lavanda/10" :
                             "bg-violeta/10";
              const iconColor = servicio.colores === "orange" ? "text-orange" :
                               servicio.colores === "navy" ? "text-navy" :
                               servicio.colores === "lavanda" ? "text-lavanda" :
                               "text-violeta";
              const buttonStyles = servicio.destacado
                ? "bg-violeta text-white hover:bg-violeta/90"
                : servicio.colores === "orange"
                  ? "border-2 border-orange text-orange hover:bg-orange hover:text-white"
                  : servicio.colores === "navy"
                    ? "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    : servicio.colores === "lavanda"
                      ? "border-2 border-lavanda text-lavanda hover:bg-lavanda hover:text-white"
                      : "border-2 border-violeta text-violeta hover:bg-violeta hover:text-white";
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                    servicio.destacado
                      ? `${borderColor} shadow-xl scale-105`
                      : `${borderColor}/20 hover:${borderColor} hover:shadow-lg`
                  }`}
                >
                  {servicio.destacado && (
                    <span className="inline-block px-4 py-1 bg-violeta text-white text-sm font-medium rounded-full mb-4">
                      Recomendado
                    </span>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-oscuro">
                      {servicio.nombre}
                    </h2>
                  </div>
                  
                  <p className="text-oscuro/70 mb-6">
                    {servicio.descripcion}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {servicio.caracteristicas.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckIcon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
                        <span className="text-oscuro/80 text-sm">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {servicio.link ? (
                    <Link
                      href={servicio.link}
                      className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all transform hover:scale-105 ${buttonStyles}`}
                    >
                      Crear invitación
                    </Link>
                  ) : (
                    <Link
                      href="/contacto"
                      className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all transform hover:scale-105 ${buttonStyles}`}
                    >
                      Solicitar consultoría gratuita
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
