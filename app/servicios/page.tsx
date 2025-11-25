import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckIcon, ClockIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";

export default function ServiciosPage() {
  const servicios = [
    {
      nombre: "Landing Page Express",
      descripcion: "Ideal para lanzamientos rápidos o promociones temporales",
      precio: "$300 - $500",
      tiempo: "48-72 horas",
      caracteristicas: [
        "Diseño personalizado minimalista",
        "100% responsive",
        "Formulario de contacto funcional",
        "SEO básico optimizado",
        "Hosting incluido (1 mes)",
        "1 ronda de revisiones"
      ],
      destacado: false
    },
    {
      nombre: "Landing Page Premium",
      descripcion: "Experiencia web completa con animaciones y funcionalidades avanzadas",
      precio: "$600 - $1,200",
      tiempo: "1-2 semanas",
      caracteristicas: [
        "Diseño avanzado con animaciones",
        "Optimización SEO completa",
        "Integraciones (analytics, CRM, etc.)",
        "Blog o sección de noticias",
        "Hosting incluido (3 meses)",
        "3 rondas de revisiones",
        "Soporte post-lanzamiento"
      ],
      destacado: true
    },
    {
      nombre: "Invitaciones Digitales",
      descripcion: "Invitaciones únicas para bodas, XV años, cumpleaños y eventos especiales",
      precio: "$150 - $400",
      tiempo: "3-5 días",
      caracteristicas: [
        "6 plantillas personalizables",
        "Formulario RSVP integrado",
        "Contador regresivo animado",
        "Galería de fotos con carrusel",
        "Mapa de ubicación interactivo",
        "Datos bancarios para regalos",
        "Descarga como PDF",
        "Animaciones y efectos visuales"
      ],
      destacado: false,
      link: "/admin"
    },
    {
      nombre: "Servicios Técnicos Estacionales",
      descripcion: "Soluciones IT para nómades digitales y espacios remotos",
      precio: "Consultar",
      tiempo: "Variable",
      caracteristicas: [
        "Instalación y configuración Starlink",
        "Setup de routers y redes mesh",
        "Optimización de conectividad",
        "Configuración de VPN",
        "Soluciones de respaldo energético",
        "Consultoría técnica remota"
      ],
      destacado: false
    }
  ];

  return (
    <main className="min-h-screen bg-humo">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-oscuro mb-6">
              Servicios
            </h1>
            <p className="text-xl text-oscuro/70">
              Soluciones digitales diseñadas para impulsar tu presencia online
            </p>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                  servicio.destacado
                    ? 'border-violeta shadow-xl scale-105'
                    : 'border-lavanda/20 hover:border-violeta/50 hover:shadow-lg'
                }`}
              >
                {servicio.destacado && (
                  <span className="inline-block px-4 py-1 bg-violeta text-white text-sm font-medium rounded-full mb-4">
                    Más popular
                  </span>
                )}
                
                <h2 className="text-3xl font-bold text-oscuro mb-3">
                  {servicio.nombre}
                </h2>
                
                <p className="text-oscuro/70 mb-6">
                  {servicio.descripcion}
                </p>

                <div className="flex items-center gap-6 mb-6 pb-6 border-b border-lavanda/20">
                  <div className="flex items-center gap-2">
                    <CurrencyDollarIcon className="w-5 h-5 text-lavanda" />
                    <span className="text-2xl font-bold text-violeta">
                      {servicio.precio}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-oscuro/70">
                    <ClockIcon className="w-5 h-5 text-lavanda" />
                    <span className="text-sm">
                      {servicio.tiempo}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {servicio.caracteristicas.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-lavanda flex-shrink-0 mt-0.5" />
                      <span className="text-oscuro/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {servicio.link ? (
                  <Link
                    href={servicio.link}
                    className="block w-full text-center px-6 py-3 bg-violeta text-white font-semibold rounded-full hover:bg-violeta/90 transition-all transform hover:scale-105"
                  >
                    Crear invitación
                  </Link>
                ) : (
                  <Link
                    href="/contacto"
                    className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all transform hover:scale-105 ${
                      servicio.destacado
                        ? 'bg-violeta text-white hover:bg-violeta/90'
                        : 'border-2 border-lavanda text-lavanda hover:bg-lavanda hover:text-white'
                    }`}
                  >
                    Solicitar presupuesto
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
