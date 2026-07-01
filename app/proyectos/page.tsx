import Header from "@/components/Header";
import Footer from "@/components/Footer";

const proyectos = [
  {
    id: 1,
    nombre: "Tarjeta Digital Pili",
    tipo: "invitación",
    año: 2025,
    url: "https://tarjeta-digital-pili.vercel.app/",
    descripcion: "Tarjeta de cumpleaños digital personalizada",
  },
  {
    id: 2,
    nombre: "Cabalgatas GR Turismo",
    tipo: "web",
    año: 2025,
    url: "https://cabalgatas.grturismoaventura.com/",
    descripcion: "Web institucional para GR Turismo Aventura, cabalgatas en Mendoza.",
  },
  {
    id: 3,
    nombre: "Lo Saludable",
    tipo: "web",
    año: 2025,
    url: "https://losaludable.vercel.app/",
    descripcion: "Web institucional con múltiples secciones para servicio de comida saludable",
  },
  {
    id: 4,
    nombre: "Kumelen Running",
    tipo: "landing page",
    año: 2026,
    url: "https://kumelen.vercel.app/",
    descripcion: "Landing page para gimnasio enfocado en running.",
  },
  {
    id: 5,
    nombre: "FE Lashh & Pilar Shine",
    tipo: "web",
    año: 2026,
    url: "https://fe-lassh-pilar-shine.vercel.app/",
    descripcion: "Web de reserva de turnos para estudio de belleza especializado en lash y brow.",
  },
  {
    id: 6,
    nombre: "Anastasia",
    tipo: "e-commerce",
    año: 2026,
    url: "https://www.anastasiatiendaerotica.com/",
    descripcion: "E-commerce de tienda erótica con diseño moderno y experiencia de compra optimizada para mobile.",
  },
];

export default function ProyectosPage() {
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
              <span
                className="text-[11px] font-medium tracking-[0.18em] uppercase"
                style={{ color: "var(--accent-orange)" }}
              >
                CASOS DE ÉXITO
              </span>
              <span className="h-px w-8 flex-shrink-0" style={{ background: "var(--accent-orange)" }} />
            </p>
            <h1
              className="font-display font-bold text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Proyectos
            </h1>
            <p className="text-lg" style={{ color: "var(--text-gray)" }}>
              Trabajos reales de Grovia — diseño, desarrollo y estrategia
              para negocios que querían crecer online.
            </p>
          </div>
        </div>
      </section>

      {/* ── Grilla de proyectos ── */}
      <section className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {proyectos.map((proyecto) => (
              <div key={proyecto.id} className="group flex flex-col items-center">

                {/* Mockup de celular */}
                <div className="relative w-full max-w-[260px] mx-auto">
                  <div
                    className="relative rounded-[3rem] p-3 shadow-2xl"
                    style={{
                      background: "linear-gradient(135deg, #1a1a2e 0%, #0d0f1f 100%)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    {/* Notch */}
                    <div
                      className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 rounded-b-2xl z-10"
                      style={{ background: "#0d0f1f" }}
                    />

                    {/* Pantalla */}
                    <div className="relative rounded-[2.5rem] overflow-hidden aspect-[9/19.5] shadow-inner">
                      {/* Header de la app */}
                      <div
                        className="h-10 flex items-center justify-center"
                        style={{
                          background: "linear-gradient(90deg, rgba(120,60,255,0.5) 0%, rgba(232,71,10,0.3) 100%)",
                        }}
                      >
                        <div className="w-16 h-1 bg-white/20 rounded-full" />
                      </div>

                      {/* iFrame preview */}
                      <div
                        className="h-full"
                        style={{ background: "#06080f" }}
                      >
                        <div className="w-full h-full overflow-hidden">
                          <iframe
                            src={proyecto.url}
                            className="w-full h-full border-0 origin-top-left"
                            style={{ transform: "scale(0.40)", width: "250%", height: "250%" }}
                            title={proyecto.nombre}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Botón lateral */}
                    <div
                      className="absolute right-0 top-24 w-1 h-10 rounded-l"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    />
                  </div>

                  {/* Glow bajo el celular */}
                  <div
                    className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-3/4 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: "var(--accent-orange)",
                      filter: "blur(20px)",
                      opacity: 0,
                    }}
                  />
                </div>

                {/* Info */}
                <div className="mt-8 text-center max-w-[260px] w-full">
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span
                      className="px-3 py-1 text-xs font-medium rounded-full"
                      style={{
                        background: "rgba(232,71,10,0.1)",
                        border: "1px solid rgba(232,71,10,0.25)",
                        color: "var(--accent-orange)",
                      }}
                    >
                      {proyecto.tipo}
                    </span>
                    <span className="text-sm" style={{ color: "var(--text-gray)" }}>
                      {proyecto.año}
                    </span>
                  </div>
                  <h3
                    className="text-lg font-display font-bold text-white mb-2 group-hover:text-[#E8470A] transition-colors"
                  >
                    {proyecto.nombre}
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                    {proyecto.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
