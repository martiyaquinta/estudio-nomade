import Link from "next/link";

const projects = [
  {
    nombre: "Tarjeta Digital Pili",
    tipo: "Invitación Digital",
    año: "2025",
    url: "https://tarjeta-digital-pili.vercel.app/",
    index: "A",
  },
  {
    nombre: "Cabalgatas GR Turismo",
    tipo: "Web Institucional",
    año: "2025",
    url: "https://cabalgatas.grturismoaventura.com/",
    index: "B",
  },
  {
    nombre: "Lo Saludable",
    tipo: "Web Institucional",
    año: "2025",
    url: "https://losaludable.vercel.app/",
    index: "C",
  },
];

export default function Portfolio() {
  return (
    <section
      className="py-28"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <p className="section-label justify-center mb-5">CASOS DE ÉXITO</p>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Transformamos negocios
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ color: "var(--text-gray)" }}
          >
            Diseños que no solo se ven bien:{" "}
            <strong className="text-white font-semibold">funcionan</strong>.
            Aumentan ventas, mejoran posicionamiento y generan más contactos.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-5 max-w-6xl mx-auto mb-8">
          {projects.map((project) => (
            <a
              key={project.index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dark-card group block overflow-hidden"
            >
              {/* Thumbnail */}
              <div
                className="aspect-[4/3] flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, rgba(18, 64, 170, 0.15) 0%, rgba(11, 31, 82, 0.25) 100%)",
                  borderBottom: "1px solid var(--card-border)",
                }}
              >
                {/* Patrón geométrico de fondo */}
                <div
                  className="absolute inset-0 pointer-events-none opacity-30"
                  style={{
                    backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                {/* Letra índice */}
                <span
                  className="font-display font-bold relative z-10 transition-transform duration-500 group-hover:scale-110"
                  style={{
                    fontSize: "6rem",
                    lineHeight: 1,
                    color: "rgba(18, 64, 170, 0.40)",
                    letterSpacing: "-0.04em",
                  }}
                >
                  {project.index}
                </span>
                {/* Tag año */}
                <span
                  className="absolute bottom-4 right-4 text-[10px] font-bold tracking-[0.16em] font-display"
                  style={{ color: "var(--text-dim)" }}
                >
                  {project.año}
                </span>
              </div>

              {/* Info */}
              <div className="p-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-display font-bold text-white mb-1 group-hover:text-[#E8470A] transition-colors duration-300">
                    {project.nombre}
                  </h3>
                  <span
                    className="text-xs font-semibold tracking-wide"
                    style={{ color: "var(--accent-orange)" }}
                  >
                    {project.tipo}
                  </span>
                </div>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="shrink-0 mt-0.5 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "var(--text-gray)" }}
                  aria-hidden="true"
                >
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* Ver todos */}
        <div className="text-center mb-20">
          <Link
            href="/proyectos"
            className="btn-outline font-display text-[11px]"
          >
            Ver todos los proyectos
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
              <path d="M2 11L11 2M11 2H5M11 2V8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Testimonial */}
        <div
          className="max-w-4xl mx-auto p-10 md:p-14 rounded-2xl relative overflow-hidden"
          style={{
            background: "rgba(11, 31, 82, 0.30)",
            border: "1px solid rgba(18, 64, 170, 0.25)",
          }}
        >
          {/* Comilla decorativa */}
          <div
            className="absolute top-6 left-10 font-display font-bold pointer-events-none select-none"
            style={{ fontSize: "8rem", lineHeight: 1, color: "rgba(18, 64, 170, 0.15)" }}
            aria-hidden="true"
          >
            &ldquo;
          </div>

          <div className="relative z-10">
            {/* Estrellas */}
            <div className="flex items-center gap-1 mb-7">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path
                    d="M8 1L9.85 5.76L15 6.27L11.25 9.52L12.36 14.64L8 12L3.64 14.64L4.75 9.52L1 6.27L6.15 5.76L8 1Z"
                    fill="#E8470A"
                  />
                </svg>
              ))}
            </div>

            {/* Cita */}
            <blockquote
              className="font-display font-semibold text-white mb-8 italic leading-[1.5]"
              style={{ fontSize: "clamp(1.125rem, 2vw, 1.375rem)" }}
            >
              &ldquo;Notamos un cambio real: Más consultas, más movimiento y sobretodo,
              más ventas&rdquo;
            </blockquote>

            {/* Autor */}
            <div className="flex items-center gap-4">
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-white text-sm shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(18, 64, 170, 0.60) 0%, rgba(232, 71, 10, 0.40) 100%)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }}
              >
                P
              </div>
              <div>
                <div className="font-display font-bold text-white text-sm">Pablo García</div>
                <div className="text-xs mt-0.5" style={{ color: "var(--text-gray)" }}>
                  Director Comercial
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
