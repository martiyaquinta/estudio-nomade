"use client";

export default function AboutUs() {
  return (
    <section
      id="sobre-nosotros"
      className="py-28"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <div className="mb-20">
            <p className="section-label mb-5">EL EQUIPO</p>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8">
              <h2
                className="font-display font-bold text-white"
                style={{
                  fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Las personas<br />detrás de Grovia
              </h2>
              <p
                className="text-base leading-relaxed sm:max-w-xs sm:text-right"
                style={{ color: "var(--text-gray)" }}
              >
                Somos dos especialistas con habilidades complementarias, bajo una sola marca con un solo objetivo: hacer crecer tu negocio.
              </p>
            </div>
          </div>

          {/* Cards del equipo */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">

            {/* Valentín — Marketing */}
            <div
              className="p-8 rounded-2xl transition-all duration-300 relative overflow-hidden group"
              style={{
                background: "rgba(11, 31, 82, 0.25)",
                border: "1px solid rgba(232, 71, 10, 0.18)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 100% 0%, rgba(232, 71, 10, 0.08) 0%, transparent 70%)",
                }}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(232, 71, 10, 0.12)",
                    border: "1px solid rgba(232, 71, 10, 0.25)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <path d="M3 17C3 17 5 13 9 13C13 13 13 17 17 17C21 17 22 14 22 14" stroke="#E8470A" strokeWidth="1.5" strokeLinecap="round"/>
                    <path d="M11 3C8.24 3 6 5.24 6 8C6 10.76 8.24 13 11 13C13.76 13 16 10.76 16 8C16 5.24 13.76 3 11 3Z" stroke="#E8470A" strokeWidth="1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">Valentín</h3>
                  <p className="text-xs font-bold tracking-wider mt-0.5" style={{ color: "var(--accent-orange)" }}>
                    MARKETING ESTRATÉGICO
                  </p>
                </div>
              </div>

              <div className="geo-line mb-6" />

              <div className="text-sm leading-[1.85] space-y-4" style={{ color: "var(--text-gray)" }}>
                <p>
                  Técnico en marketing y estudiante de la Licenciatura en Marketing. Me especializo en estrategia digital con un enfoque claro: que cada acción tenga un propósito y genere resultados medibles.
                </p>
                <p>
                  Creo que en un mundo saturado de información, el valor real está en simplificar, enfocarse y ejecutar bien. Por eso en Grovia trabajamos con estrategia, no con intuición.
                </p>
              </div>

              {/* Especialidades */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Estrategia digital", "Marketing de contenidos", "Gestión de redes", "Campañas"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded"
                    style={{
                      background: "rgba(232,71,10,0.08)",
                      border: "1px solid rgba(232,71,10,0.18)",
                      color: "var(--accent-orange)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Martina — Desarrollo Web */}
            <div
              className="p-8 rounded-2xl transition-all duration-300 relative overflow-hidden group"
              style={{
                background: "rgba(11, 31, 82, 0.25)",
                border: "1px solid rgba(18, 64, 170, 0.25)",
              }}
            >
              <div
                className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: "radial-gradient(circle at 100% 0%, rgba(18, 64, 170, 0.10) 0%, transparent 70%)",
                }}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background: "rgba(18, 64, 170, 0.15)",
                    border: "1px solid rgba(18, 64, 170, 0.30)",
                  }}
                >
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
                    <polyline points="7 8 2 12 7 16" stroke="#6B9FE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <polyline points="15 8 20 12 15 16" stroke="#6B9FE4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <line x1="12" y1="5" x2="10" y2="19" stroke="#6B9FE4" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">Martina</h3>
                  <p className="text-xs font-bold tracking-wider mt-0.5" style={{ color: "#7EAADC" }}>
                    DESARROLLO WEB
                  </p>
                </div>
              </div>

              <div className="geo-line mb-6" />

              <div className="text-sm leading-[1.85] space-y-4" style={{ color: "var(--text-gray)" }}>
                <p>
                  Estudiante de Tecnicatura en Redes Informáticas y Telecomunicaciones, especializada en diseño y desarrollo web. Creo sitios que no solo se ven bien — funcionan, cargan rápido y convierten visitas en clientes.
                </p>
                <p>
                  Me gusta trabajar cerca del proyecto, entender cada negocio y traducir esa comprensión en código limpio y diseño claro.
                </p>
              </div>

              {/* Especialidades */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Next.js", "React", "UI/UX", "SEO técnico", "Landing pages"].map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold tracking-wider px-2.5 py-1 rounded"
                    style={{
                      background: "rgba(18,64,170,0.12)",
                      border: "1px solid rgba(18,64,170,0.25)",
                      color: "#7EAADC",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Banner Grovia */}
          <div
            className="p-10 md:p-14 rounded-2xl text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(18, 64, 170, 0.18) 0%, rgba(11, 31, 82, 0.35) 100%)",
              border: "1px solid rgba(18, 64, 170, 0.22)",
            }}
          >
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse, rgba(18, 64, 170, 0.25) 0%, transparent 70%)",
              }}
            />

            <div className="relative z-10">
              <p className="section-label justify-center mb-6">GROVIA</p>
              <h3
                className="font-display font-bold text-white mb-5"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                  lineHeight: 1.1,
                  letterSpacing: "-0.01em",
                }}
              >
                Marketing + desarrollo web,<br />todo en un solo lugar
              </h3>
              <p
                className="text-base max-w-3xl mx-auto leading-[1.85]"
                style={{ color: "var(--text-muted)" }}
              >
                No sos un cliente que va de agencia en agencia. Con Grovia tenés{" "}
                <span className="font-bold" style={{ color: "var(--accent-orange)" }}>
                  estrategia de marketing
                </span>{" "}
                y{" "}
                <span className="font-bold text-white">
                  desarrollo web profesional
                </span>{" "}
                en un mismo equipo, con comunicación directa y resultados reales.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
