"use client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  DevicePhoneMobileIcon,
  SparklesIcon,
  MegaphoneIcon,
} from "@heroicons/react/24/outline";

const servicios = [
  {
    nombre: "Desarrollo Web",
    descripcion: "Creamos sitios web profesionales adaptados a cada objetivo de negocio. Desde una landing enfocada en conversión hasta una tienda online completa.",
    color: "#7EAADC",
    colorBg: "rgba(18,64,170,0.12)",
    colorBorder: "rgba(18,64,170,0.30)",
    icon: DevicePhoneMobileIcon,
    subservicios: [
      {
        nombre: "Landing Page",
        desc: "Página de una sección enfocada en convertir visitas en contactos o ventas.",
      },
      {
        nombre: "Web Institucional",
        desc: "Sitio principal de tu marca: presentación, servicios y contacto en 3-5 secciones.",
      },
      {
        nombre: "E-commerce",
        desc: "Tienda online integrada, lista para vender desde el día uno.",
      },
      {
        nombre: "Páginas Digitales",
        desc: "Piezas interactivas para eventos, lanzamientos o celebraciones.",
      },
    ],
  },
  {
    nombre: "Marketing",
    descripcion: "Consultoría de marca y Asesoría de contenido\nAnalizamos y ordenamos la base estratégica de tu marca. Sirve para negocios que necesitan claridad sobre cómo posicionarse, qué decir y cómo diferenciarse.",
    color: "var(--accent-orange)",
    colorBg: "rgba(232,71,10,0.10)",
    colorBorder: "rgba(232,71,10,0.28)",
    icon: MegaphoneIcon,
    subservicios: [
      {
        nombre: "Marketing aplicado a webs",
        desc: "Trabajamos el marketing dentro de la página web para que no sea solo una presentación, sino una herramienta comercial. Sirve para mejorar la claridad, la conversión y el recorrido del usuario dentro del sitio.",
      },
      {
        nombre: "Branding",
        desc: "Construimos o ajustamos la identidad de tu marca para que comunique de forma coherente, profesional y alineada a tu negocio.",
      },
      {
        nombre: "Posicionamiento en Google",
        desc: "Trabajamos la presencia de tu negocio en Google para que sea más fácil encontrarte, entender qué ofrecés y generar consultas.",
      },
    ],
  },
  {
    nombre: "Automatizaciones",
    descripcion: "Ahorrá tiempo y reducí costos automatizando tareas que hoy consumen horas de trabajo manual.",
    color: "#34D399",
    colorBg: "rgba(52,211,153,0.10)",
    colorBorder: "rgba(52,211,153,0.28)",
    icon: SparklesIcon,
    subservicios: [
      {
        nombre: "Procesos automáticos con n8n",
        desc: "Conectamos tus herramientas para eliminar tareas repetitivas y ahorrar tiempo operativo.",
      },
      {
        nombre: "Agentes de IA para atención y ventas",
        desc: "Automatizamos respuestas, seguimiento de leads y gestión de clientes 24/7.",
      },
      {
        nombre: "Integración total de sistemas",
        desc: "CRM, Google Sheets, formularios, WhatsApp y APIs conectados en un solo flujo eficiente.",
      },
      {
        nombre: "Más productividad, menos costos",
        desc: "Optimizamos procesos para que tu negocio pueda crecer sin aumentar carga operativa ni personal.",
      },
    ],
  },
];

export default function ServiciosPage() {

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />

      {/* ── Hero ── */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "var(--bg-hero-gradient)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 flex-shrink-0" style={{ background: "var(--accent-orange)" }} />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: "var(--accent-orange)" }}>
                GROVIA · MARKETING · DESARROLLO WEB · AUTOMATIZACIONES
              </span>
              <span className="h-px w-8 flex-shrink-0" style={{ background: "var(--accent-orange)" }} />
            </p>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Servicios
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-gray)" }}>
              Todo lo que tu negocio necesita para crecer online, en un solo equipo.
            </p>
            <span
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded-full"
              style={{
                background: "rgba(232,71,10,0.1)",
                border: "1px solid rgba(232,71,10,0.3)",
                color: "var(--accent-orange)",
              }}
            >
              💬 Consultoría gratuita · Presupuesto personalizado
            </span>
          </div>
        </div>
      </section>

      {/* ── Cards de servicios ── */}
      <section className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <div
                  key={index}
                  className="dark-card p-8 flex flex-col relative overflow-hidden group"
                  style={{ border: `1px solid ${servicio.colorBorder}` }}
                >
                  {/* Glow hover */}
                  <div
                    className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: `radial-gradient(circle at 100% 0%, ${servicio.colorBg} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Icon + título */}
                  <div className="flex items-center gap-4 mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: servicio.colorBg, border: `1px solid ${servicio.colorBorder}` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: servicio.color }} />
                    </div>
                    <h2 className="font-display font-bold text-white text-xl leading-tight">
                      {servicio.nombre}
                    </h2>
                  </div>

                  <div className="geo-line mb-5" />

                  {/* Descripción */}
                  <div className="mb-6">
                    {servicio.descripcion.includes("\n") ? (
                      <>
                        <p className="text-sm font-semibold text-white mb-1">
                          {servicio.descripcion.split("\n")[0]}
                        </p>
                        <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                          {servicio.descripcion.split("\n")[1]}
                        </p>
                      </>
                    ) : (
                      <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                        {servicio.descripcion}
                      </p>
                    )}
                  </div>

                  {/* Subservicios */}
                  <div className="flex-1 space-y-3 mb-8">
                    {servicio.subservicios.map((sub, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: servicio.color }} />
                        <div>
                          <p className="text-sm font-semibold text-white leading-tight">{sub.nombre}</p>
                          <p className="text-xs leading-relaxed mt-0.5" style={{ color: "var(--text-gray)" }}>{sub.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button
                    onClick={() => window.open("https://forms.gle/CNwLHM2Tj2PDSEWYA", "_blank")}
                    className="w-full px-6 py-3 font-display font-bold text-sm tracking-wider text-white rounded-full transition-all duration-250 hover:bg-white hover:text-[#06080f]"
                    style={{ border: "1px solid rgba(255,255,255,0.3)" }}
                  >
                    Consultar
                  </button>
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
