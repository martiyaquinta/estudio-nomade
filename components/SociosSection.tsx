import Image from "next/image";

export default function SociosSection() {
  return (
    <section
      className="py-0 relative overflow-hidden"
      style={{ borderTop: "1px solid var(--line)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-20 items-center">

          {/* Imagen */}
          <div className="relative order-2 lg:order-1">
            {/* Glow detrás */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-10%",
                background: "radial-gradient(ellipse, rgba(18,64,170,0.25) 0%, transparent 65%)",
                filter: "blur(30px)",
                zIndex: 0,
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(18,64,170,0.25)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.45)",
                zIndex: 1,
              }}
            >
              <Image
                src="/socios.jpg"
                alt="Valentín y Martina, equipo de Grovia"
                width={820}
                height={1024}
                className="w-full h-auto object-cover"
                style={{ maxHeight: "520px", objectPosition: "center 20%" }}
                priority
              />
              {/* Overlay sutil en la parte inferior */}
              <div
                className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(5,10,30,0.70) 0%, transparent 100%)",
                }}
              />
              {/* Badge sobre la imagen */}
              <div
                className="absolute bottom-5 left-5 flex items-center gap-3 px-4 py-2.5 rounded-xl"
                style={{
                  background: "rgba(5,10,30,0.80)",
                  border: "1px solid rgba(18,64,170,0.35)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <Image
                  src="/LOGO GROVIA SIN FONDO.png"
                  alt="Grovia"
                  width={28}
                  height={28}
                  className="w-7 h-7 object-contain"
                  style={{ filter: "brightness(0) invert(1)", opacity: 0.85 }}
                />
                <div>
                  <p className="text-white font-bold text-xs tracking-wider font-display">
                    GROVIA
                  </p>
                  <p className="text-[10px] tracking-wide" style={{ color: "var(--text-gray)" }}>
                    Valentín · Martina · Beatriz
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Texto */}
          <div className="order-1 lg:order-2 flex flex-col gap-7">
            <p className="section-label">EL EQUIPO</p>

            <h2
              className="font-display font-bold text-white"
              style={{
                fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
              }}
            >
              Tres especialistas,<br />un solo objetivo
            </h2>

            <p
              className="text-base leading-[1.85]"
              style={{ color: "var(--text-muted)", maxWidth: "30rem" }}
            >
              Somos Valentín, Martina y Beatriz. Combinamos marketing estratégico,
              desarrollo web y automatizaciones bajo una sola marca: Grovia. Trabajamos codo a codo
              para que cada proyecto tenga la estrategia, la ejecución técnica y los flujos automáticos
              que necesita para dar resultados reales.
            </p>

            {/* Avatares del equipo */}
            <div className="flex items-center gap-4 flex-wrap">

              {/* Valentín */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
                  style={{
                    background: "rgba(232,71,10,0.15)",
                    border: "1px solid rgba(232,71,10,0.35)",
                    color: "var(--accent-orange)",
                  }}
                >
                  V
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Valentín</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--text-gray)" }}>Marketing</p>
                </div>
              </div>

              <div className="w-px h-8" style={{ background: "var(--line)" }} />

              {/* Martina */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 font-bold text-sm"
                  style={{
                    background: "rgba(18,64,170,0.18)",
                    border: "1px solid rgba(18,64,170,0.40)",
                    color: "#7EAADC",
                  }}
                >
                  M
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Martina</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "var(--text-gray)" }}>Desarrollo Web</p>
                </div>
              </div>

              <div className="w-px h-8" style={{ background: "var(--line)" }} />

              {/* Beatriz */}
              <div className="flex items-center gap-3">
                <div
                  className="w-11 h-11 rounded-full overflow-hidden shrink-0"
                  style={{ border: "1px solid rgba(52,211,153,0.40)" }}
                >
                  <Image
                    src="/beatriz.jpeg"
                    alt="Beatriz"
                    width={44}
                    height={44}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div>
                  <p className="text-white text-sm font-semibold leading-none">Beatriz</p>
                  <p className="text-[11px] mt-0.5" style={{ color: "#34D399" }}>Automatizaciones</p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
