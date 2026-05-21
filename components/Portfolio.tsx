import Link from "next/link";

const projects = [
  {
    nombre: "Tarjeta Digital Pili",
    tipo: "Invitación Digital",
    año: 2025,
    url: "https://tarjeta-digital-pili.vercel.app/",
    emoji: "✦",
  },
  {
    nombre: "Cabalgatas GR Turismo",
    tipo: "Web Institucional",
    año: 2025,
    url: "https://cabalgatas.grturismoaventura.com/",
    emoji: "◈",
  },
  {
    nombre: "Lo Saludable",
    tipo: "Web Institucional",
    año: 2025,
    url: "https://losaludable.vercel.app/",
    emoji: "◆",
  },
];

export default function Portfolio() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="h-px w-8 flex-shrink-0"
              style={{ background: "var(--accent-orange)" }}
            />
            <span
              className="text-[11px] font-medium tracking-[0.18em] uppercase"
              style={{ color: "var(--accent-orange)" }}
            >
              CASOS DE ÉXITO
            </span>
            <span
              className="h-px w-8 flex-shrink-0"
              style={{ background: "var(--accent-orange)" }}
            />
          </div>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            Transformamos negocios
          </h2>
          <p
            className="text-lg mt-4 max-w-3xl mx-auto"
            style={{ color: "var(--text-gray)" }}
          >
            Diseños que no solo se ven bien:{" "}
            <span className="font-bold text-white">funcionan</span>. Aumentan
            ventas, mejoran el posicionamiento en Google y generan más contactos
            calificados.
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="dark-card group p-8 block transition-all duration-300 hover:scale-[1.02]"
            >
              {/* Visual placeholder */}
              <div
                className="aspect-square rounded-xl mb-6 flex items-center justify-center overflow-hidden group-hover:scale-105 transition-transform duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(120,60,255,0.15) 0%, rgba(232,71,10,0.1) 100%)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div className="text-center">
                  <div
                    className="text-6xl mb-3 font-display font-bold"
                    style={{ color: "var(--accent-orange)" }}
                  >
                    {project.emoji}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "var(--text-gray)" }}
                  >
                    {project.año}
                  </div>
                </div>
              </div>
              <h3
                className="text-xl font-display font-bold text-white mb-2 transition-colors group-hover:text-[#E8470A]"
              >
                {project.nombre}
              </h3>
              <span
                className="text-sm font-medium"
                style={{ color: "var(--accent-orange)" }}
              >
                {project.tipo}
              </span>
            </a>
          ))}
        </div>

        {/* Ver todos */}
        <div className="text-center mb-16">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-3 px-8 py-4 font-display font-bold text-sm tracking-wider text-white rounded-full border border-white/20 hover:border-white/60 transition-all duration-300 hover:scale-105"
          >
            Ver todos los proyectos →
          </Link>
        </div>

        {/* Testimonial */}
        <div
          className="max-w-4xl mx-auto p-10 rounded-3xl"
          style={{
            background: "var(--card-bg)",
            border: "1px solid var(--card-border)",
          }}
        >
          <div className="flex items-center gap-1 mb-6">
            {[...Array(5)].map((_, i) => (
              <span
                key={i}
                className="text-2xl"
                style={{ color: "var(--accent-orange)" }}
              >
                ★
              </span>
            ))}
          </div>
          <blockquote
            className="text-xl font-display font-semibold text-white mb-6 italic leading-relaxed"
          >
            &ldquo;Notamos un cambio real: Más consultas, más movimiento y sobretodo,
            más ventas&rdquo;
          </blockquote>
          <div className="flex items-center gap-4">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center text-white font-display font-bold text-xl flex-shrink-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(120,60,255,0.4) 0%, rgba(232,71,10,0.3) 100%)",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              P
            </div>
            <div>
              <div className="font-display font-bold text-white">Pablo García</div>
              <div className="text-sm" style={{ color: "var(--text-gray)" }}>
                Director Comercial
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
