import type { CSSProperties } from "react";

/* ── Datos de la constelación de valores ──────────────────────────
   cx/cy en espacio 600×520 → posición CSS = (cx/600*100%, cy/520*100%)
   Cada tarjeta flota con duración y delay únicos para movimiento orgánico.
──────────────────────────────────────────────────────────────── */
const VALUES = [
  { label: "Innovación",     cx: 300, cy:  40, main: false, delay: "cc-d0", fd: "4.2s", fdelay: "0s"   },
  { label: "Creatividad",    cx:  90, cy: 155, main: false, delay: "cc-d1", fd: "5.1s", fdelay: "0.8s" },
  { label: "Estrategia",     cx: 490, cy: 155, main: false, delay: "cc-d2", fd: "3.7s", fdelay: "1.4s" },
  { label: "Confianza",      cx: 300, cy: 268, main: true,  delay: "cc-d3", fd: "6.0s", fdelay: "0.4s" },
  { label: "Marketing",      cx: 100, cy: 370, main: false, delay: "cc-d4", fd: "4.5s", fdelay: "2.0s" },
  { label: "Resultados",     cx: 490, cy: 370, main: false, delay: "cc-d5", fd: "3.9s", fdelay: "0.6s" },
  { label: "Profesionalismo",cx: 185, cy: 470, main: false, delay: "cc-d6", fd: "5.4s", fdelay: "1.2s" },
  { label: "Calidad",        cx: 400, cy: 470, main: false, delay: "cc-d7", fd: "4.8s", fdelay: "2.4s" },
];

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Gradiente de fondo (centrado en columna derecha) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--bg-hero-gradient)" }}
      />

      {/* Contenido */}
      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* ══ COLUMNA IZQUIERDA ══════════════════════════════ */}
          <div className="flex flex-col gap-7">

            {/* Label naranja */}
            <p className="hero-label flex items-center gap-3">
              <span
                className="flex-shrink-0 h-px w-8"
                style={{ background: "var(--accent-orange)" }}
              />
              <span
                className="text-[11px] font-medium tracking-[0.18em] uppercase"
                style={{ color: "var(--accent-orange)" }}
              >
                DESARROLLO WEB & MARKETING ESTRATÉGICO
              </span>
            </p>

            {/* H1 */}
            <h1
              className="hero-h1 font-display font-bold text-white leading-[1.08]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.25rem)" }}
            >
              Tu presencia digital que atrae, convence y vende
              <span style={{ color: "var(--accent-orange)" }}>.</span>
            </h1>

            {/* Subtítulo */}
            <p
              className="hero-subtitle text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-gray)", maxWidth: "30rem" }}
            >
              Estudio Nómade y Grovia unen desarrollo web y marketing
              para que tu negocio crezca online.
            </p>

            {/* CTA */}
            <div className="hero-cta">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-display font-bold text-sm tracking-[0.12em] text-white rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{
                  background: "var(--accent-orange)",
                  boxShadow: "0 4px 40px rgba(232, 71, 10, 0.4)",
                }}
              >
                AGENDAR LLAMADA ↗
              </a>
            </div>
          </div>

          {/* ══ COLUMNA DERECHA — CONSTELACIÓN FLOTANTE (desktop) ═══ */}
          <div className="hidden lg:block w-full">
            {/* Contenedor de la constelación — sin label */}
            <div
              className="relative w-full"
              style={{ aspectRatio: "600 / 520", overflow: "visible" }}
            >
              {/* SVG con líneas de conexión */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 600 520"
                preserveAspectRatio="xMidYMid meet"
                style={{ overflow: "visible" }}
                aria-hidden="true"
              >
                {/* ── Líneas principales → Confianza (300, 268) ── */}
                <path d="M 300 40 C 300 130 300 200 300 268"  className="svg-line line-d0" stroke="rgba(120,60,255,0.35)" strokeWidth="1.5" fill="none"/>
                <path d="M 90 155 C 160 190 230 225 300 268"  className="svg-line line-d1" stroke="rgba(120,60,255,0.35)" strokeWidth="1.5" fill="none"/>
                <path d="M 490 155 C 430 190 370 225 300 268" className="svg-line line-d2" stroke="rgba(120,60,255,0.35)" strokeWidth="1.5" fill="none"/>
                <path d="M 100 370 C 170 335 235 300 300 268" className="svg-line line-d3" stroke="rgba(120,60,255,0.35)" strokeWidth="1.5" fill="none"/>
                <path d="M 490 370 C 425 335 360 300 300 268" className="svg-line line-d4" stroke="rgba(120,60,255,0.35)" strokeWidth="1.5" fill="none"/>

                {/* ── Líneas secundarias ── */}
                <path d="M 300 40 C 200 90 145 120 90 155"   className="svg-line line-d1" stroke="rgba(120,60,255,0.2)" strokeWidth="1" fill="none"/>
                <path d="M 300 40 C 390 80 445 120 490 155"  className="svg-line line-d2" stroke="rgba(120,60,255,0.2)" strokeWidth="1" fill="none"/>
                <path d="M 185 470 C 155 435 125 400 100 370" className="svg-line line-d3" stroke="rgba(120,60,255,0.2)" strokeWidth="1" fill="none"/>
                <path d="M 400 470 C 440 435 465 400 490 370" className="svg-line line-d4" stroke="rgba(120,60,255,0.2)" strokeWidth="1" fill="none"/>

                {/* ── Puntos naranjas en intersecciones ── */}
                <circle cx="300" cy="154" r="3.5" fill="#E8470A" opacity="0.9"/>
                <circle cx="197" cy="215" r="3"   fill="#E8470A" opacity="0.8"/>
                <circle cx="400" cy="215" r="3"   fill="#E8470A" opacity="0.8"/>
                <circle cx="198" cy="322" r="3"   fill="#E8470A" opacity="0.8"/>
                <circle cx="393" cy="322" r="3"   fill="#E8470A" opacity="0.8"/>
              </svg>

              {/* ── Tarjetas flotantes ── */}
              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className={`constellation-card ${v.delay} absolute`}
                  style={{
                    left: `${(v.cx / 600) * 100}%`,
                    top: `${(v.cy / 520) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: v.main ? 2 : 1,
                  }}
                >
                  {/* Wrapper de float — duración y delay únicos por tarjeta */}
                  <div
                    className="float-card"
                    style={
                      { "--fd": v.fd, "--fdelay": v.fdelay } as CSSProperties
                    }
                  >
                    <div className={v.main ? "constellation-card-main" : "constellation-card-inner"}>
                      <span
                        className="font-display"
                        style={{
                          color: "white",
                          fontWeight: v.main ? 700 : 500,
                          fontSize: v.main ? "0.95rem" : "0.85rem",
                        }}
                      >
                        {v.label}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ MOBILE — Grid 2 columnas ══════════════════════ */}
          <div className="lg:hidden w-full mt-6">
            <div className="grid grid-cols-2 gap-3">
              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className="px-4 py-3 text-sm text-center text-white rounded-xl font-medium"
                  style={{
                    background: "var(--card-bg)",
                    border: v.main
                      ? "1px solid rgba(120,60,255,0.5)"
                      : "1px solid var(--card-border)",
                    fontWeight: v.main ? 700 : 400,
                    boxShadow: v.main ? "0 0 20px rgba(120,60,255,0.3)" : "none",
                  }}
                >
                  {v.label}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
