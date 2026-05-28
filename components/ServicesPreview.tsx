import Link from "next/link";

const services = [
  {
    number: "01",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="2" y="4" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M9 24H19M14 20V24" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M7 10L10 13L15 8L21 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Desarrollo Web",
    subtitle: "A medida",
    description:
      "Landing enfocada en conversión + estrategia clara. Brief, copy y diseño.",
    tag: "WEB",
  },
  {
    number: "02",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <circle cx="14" cy="14" r="11" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 3C14 3 18 8 18 14C18 20 14 25 14 25" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M14 3C14 3 10 8 10 14C10 20 14 25 14 25" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M3 14H25" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M4.5 9H23.5M4.5 19H23.5" stroke="currentColor" strokeWidth="1.4"/>
      </svg>
    ),
    title: "Marketing Digital",
    subtitle: "Estratégico",
    description:
      "Ecommerce + marketing para salir al mercado. Diagnóstico, marca y ventas.",
    tag: "MKT",
  },
  {
    number: "03",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <rect x="3" y="5" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <rect x="9" y="2" width="16" height="20" rx="2" stroke="currentColor" strokeWidth="1.6"/>
        <path d="M13 9H21M13 13H21M13 17H18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
      </svg>
    ),
    title: "Diseño UI/UX",
    subtitle: "Experiencias que convierten",
    description:
      "Presencia digital profesional. Web 3-5 secciones, SEO básico y formularios.",
    tag: "UI/UX",
  },
  {
    number: "04",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
        <path d="M5 14C5 9.03 9.03 5 14 5C18.97 5 23 9.03 23 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
        <path d="M23 14C23 18.97 18.97 23 14 23C9.03 23 5 18.97 5 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeDasharray="3 2"/>
        <path d="M14 10V14L17 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Automatizaciones",
    subtitle: "Flujos que trabajan solos",
    description:
      "Conectamos tus herramientas y eliminamos tareas repetitivas con Make, Zapier y CRM.",
    tag: "AUTO",
  },
];

export default function ServicesPreview() {
  return (
    <section
      className="py-28"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="section-label justify-center mb-5">SERVICIOS</p>
          <h2
            className="font-display font-bold text-white mb-5"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Lo que hacemos para tu negocio
          </h2>
          <Link
            href="/servicios"
            className="group inline-flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors"
            style={{ color: "var(--text-gray)" }}
          >
            <span className="group-hover:text-white transition-colors">Ver todos los servicios</span>
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Grid de cards — estilo premium */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {services.map((service) => (
            <div
              key={service.number}
              className="group relative flex flex-col gap-0 overflow-hidden rounded-2xl transition-all duration-350"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid var(--card-border)",
              }}
            >
              {/* Hover background fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(18,64,170,0.10) 0%, rgba(11,31,82,0.18) 100%)",
                }}
              />

              {/* Borde naranja superior al hover */}
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-350"
                style={{ background: "var(--accent-orange)" }}
              />

              {/* Contenido */}
              <div className="relative z-10 flex flex-col h-full p-7 gap-6">

                {/* Cabecera: número + tag */}
                <div className="flex items-center justify-between">
                  <span
                    className="text-[10px] font-bold tracking-[0.22em] font-display"
                    style={{ color: "rgba(255,255,255,0.18)" }}
                  >
                    {service.number}
                  </span>
                  <span
                    className="text-[9px] font-bold tracking-[0.18em] px-2 py-1 rounded"
                    style={{
                      color: "var(--accent-orange)",
                      background: "rgba(232,71,10,0.10)",
                      border: "1px solid rgba(232,71,10,0.18)",
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                {/* Ícono */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-350 group-hover:scale-105"
                  style={{
                    background: "rgba(232,71,10,0.08)",
                    border: "1px solid rgba(232,71,10,0.18)",
                    color: "var(--accent-orange)",
                  }}
                >
                  {service.icon}
                </div>

                {/* Texto */}
                <div className="flex flex-col gap-1.5 flex-1">
                  <h3 className="font-display font-bold text-white text-lg leading-tight">
                    {service.title}
                  </h3>
                  <p
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: "var(--accent-orange)" }}
                  >
                    {service.subtitle}
                  </p>
                  <p
                    className="text-sm leading-[1.7] mt-2"
                    style={{ color: "var(--text-gray)" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* CTA inline — estilo tandilsolution */}
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.12em] uppercase transition-all duration-200 group-hover:gap-3 mt-auto"
                  style={{ color: "var(--text-gray)" }}
                >
                  <span className="group-hover:text-white transition-colors">Ver más</span>
                  <svg
                    width="14" height="14" viewBox="0 0 14 14" fill="none"
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  >
                    <path d="M2 7H12M12 7L8 3M12 7L8 11" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Nota consultoría */}
        <div className="text-center mt-10">
          <span
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider"
            style={{ color: "var(--text-gray)" }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{ background: "var(--accent-orange)" }}
            />
            Consultoría gratuita incluida en todos los proyectos
          </span>
        </div>

      </div>
    </section>
  );
}
