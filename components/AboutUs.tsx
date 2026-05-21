"use client";

export default function AboutUs() {
  return (
    <section
      id="sobre-nosotros"
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">

          {/* Encabezado */}
          <div className="text-center mb-16">
            <p className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 flex-shrink-0" style={{ background: "var(--accent-orange)" }} />
              <span
                className="text-[11px] font-medium tracking-[0.18em] uppercase"
                style={{ color: "var(--accent-orange)" }}
              >
                LOS EQUIPOS
              </span>
              <span className="h-px w-8 flex-shrink-0" style={{ background: "var(--accent-orange)" }} />
            </p>
            <h2
              className="font-display font-bold text-white"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
            >
              Sobre nosotros
            </h2>
            <p className="text-lg mt-4" style={{ color: "var(--text-gray)" }}>
              Dos equipos especializados trabajando juntos para tu éxito digital
            </p>
          </div>

          {/* Grid de equipos */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Grovia */}
            <div
              className="p-8 rounded-3xl transition-all duration-300"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(232,71,10,0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "rgba(232,71,10,0.15)", border: "1px solid rgba(232,71,10,0.3)" }}
                >
                  📢
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">Grovia Marketing</h3>
                  <p className="text-sm font-medium" style={{ color: "var(--accent-orange)" }}>
                    Técnico en Marketing
                  </p>
                </div>
              </div>
              <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--text-gray)" }}>
                <p>
                  Soy Valentín, técnico en marketing y actualmente estudiante de la Licenciatura en Marketing. Me formé en marketing digital con el objetivo de potenciar mi carrera y brindar un servicio profesional y responsable a mis clientes.
                </p>
                <p>
                  En un mundo lleno de información y estímulos, creo que el verdadero valor está en simplificar y enfocarse en lo que realmente importa.
                </p>
                <p>
                  Desde esa mirada nace mi alianza con Estudio Nómade, con quien trabajamos para ofrecer un servicio integral. La idea es simple: crear recorridos claros y coherentes, y lograr que la experiencia de los usuarios sea diferente al resto.
                </p>
              </div>
            </div>

            {/* Estudio Nómade */}
            <div
              className="p-8 rounded-3xl transition-all duration-300"
              style={{
                background: "var(--card-bg)",
                border: "1px solid rgba(120,60,255,0.2)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: "rgba(120,60,255,0.15)", border: "1px solid rgba(120,60,255,0.3)" }}
                >
                  💻
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-xl">Estudio Nómade</h3>
                  <p className="text-sm font-medium" style={{ color: "#AEB2E4" }}>
                    Desarrollo Web y Sistemas
                  </p>
                </div>
              </div>
              <div className="text-sm leading-relaxed space-y-3" style={{ color: "var(--text-gray)" }}>
                <p>
                  Soy Martina, creadora de Estudio Nómade. Actualmente estudio la Tecnicatura en Redes Informáticas y Telecomunicaciones y me dedico al diseño y desarrollo web.
                </p>
                <p>
                  Creo sitios web para personas y marcas que quieren una presencia online clara, prolija y que funcione. Me gusta trabajar de forma cercana, entender cada proyecto y transformar ideas en páginas simples, lindas y útiles.
                </p>
                <p>
                  Creo en el trabajo bien hecho, en los detalles y en crear soluciones digitales que realmente ayuden.
                </p>
              </div>
            </div>
          </div>

          {/* Sección conjunta */}
          <div
            className="mt-10 p-10 rounded-3xl text-center relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(45,27,105,0.5) 0%, rgba(13,15,31,0.8) 100%)",
              border: "1px solid rgba(120,60,255,0.25)",
            }}
          >
            {/* Glow decorativo */}
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
              style={{
                background: "var(--glow-purple)",
                filter: "blur(60px)",
                opacity: 0.4,
              }}
            />
            <div className="relative z-10">
              <h3 className="font-display font-bold text-white text-2xl sm:text-3xl mb-4">
                ✨ Juntos, somos tu equipo digital completo
              </h3>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: "var(--text-gray)" }}>
                La combinación perfecta entre{" "}
                <span className="font-bold text-white" style={{ color: "var(--accent-orange)" }}>
                  estrategia de marketing
                </span>{" "}
                y{" "}
                <span className="font-bold" style={{ color: "#AEB2E4" }}>
                  desarrollo técnico
                </span>
                . No solo creamos presencia digital, construimos sistemas que venden, conectan y
                crecen con tu negocio.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
