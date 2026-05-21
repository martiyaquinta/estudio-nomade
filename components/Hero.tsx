import type { CSSProperties } from "react";

/*
  ── GEOMETRÍA ────────────────────────────────────────────────────────
  Heptágono regular con Confianza en el centro.
  Desktop:  viewBox 0 0 600 520  | centro (300, 260) | radio 190
  Mobile:   viewBox 0 0 320 520  | centro (160, 250) | radio 105

  Ángulo inicial: -90° (vértice 0 arriba).
  Paso entre vértices: 360/7 ≈ 51.43°

  Desktop vértices (calculados):
    0 Innovación:      (300, 70)
    1 Creatividad:     (449, 142)
    2 Estrategia:      (485, 302)
    3 Marketing:       (382, 431)
    4 Resultados:      (218, 431)
    5 Profesionalismo: (115, 302)
    6 Calidad:         (151, 142)
    C Confianza:       (300, 260)  ← centro

  Mobile vértices (radio 105, centro 160,250):
    0 Innovación:      (160, 145)
    1 Creatividad:     (242, 185)
    2 Estrategia:      (262, 273)
    3 Marketing:       (206, 345)
    4 Resultados:      (115, 345)
    5 Profesionalismo:  (58, 273)
    6 Calidad:          (78, 185)
    C Confianza:       (160, 250)  ← centro
  ─────────────────────────────────────────────────────────────────── */

const VALUES = [
  /* Centro — Confianza */
  { label: "Confianza",       cx: 300, cy: 260, mcx: 160, mcy: 250, main: true,  delay: "cc-d3", fd: "6.0s", fdelay: "0.4s" },
  /* Vértices del heptágono, horario desde arriba */
  { label: "Innovación",      cx: 300, cy:  70, mcx: 160, mcy: 145, main: false, delay: "cc-d0", fd: "4.2s", fdelay: "0s"   },
  { label: "Creatividad",     cx: 449, cy: 142, mcx: 242, mcy: 185, main: false, delay: "cc-d1", fd: "5.1s", fdelay: "0.8s" },
  { label: "Estrategia",      cx: 485, cy: 302, mcx: 262, mcy: 273, main: false, delay: "cc-d2", fd: "3.7s", fdelay: "1.4s" },
  { label: "Marketing",       cx: 382, cy: 431, mcx: 206, mcy: 345, main: false, delay: "cc-d4", fd: "4.5s", fdelay: "2.0s" },
  { label: "Resultados",      cx: 218, cy: 431, mcx: 115, mcy: 345, main: false, delay: "cc-d5", fd: "3.9s", fdelay: "0.6s" },
  { label: "Profesionalismo", cx: 115, cy: 302, mcx:  58, mcy: 273, main: false, delay: "cc-d6", fd: "5.4s", fdelay: "1.2s" },
  { label: "Calidad",         cx: 151, cy: 142, mcx:  78, mcy: 185, main: false, delay: "cc-d7", fd: "4.8s", fdelay: "2.4s" },
];

/* Estilo de tarjeta reutilizable */
const cardStyle = (main: boolean, sm = false): CSSProperties => ({
  padding: main ? (sm ? "10px 18px" : "14px 28px") : (sm ? "7px 13px" : "10px 22px"),
  background: "var(--card-bg)",
  border: main ? "1px solid rgba(120,60,255,0.6)" : "1px solid var(--card-border)",
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  whiteSpace: "nowrap",
  cursor: "default",
  userSelect: "none",
  boxShadow: main
    ? "0 0 40px rgba(120,60,255,0.35), 0 0 80px rgba(120,60,255,0.15)"
    : "0 0 12px rgba(120,60,255,0.1)",
});

const labelStyle = (main: boolean, sm = false): CSSProperties => ({
  color: "white",
  fontWeight: main ? 700 : 500,
  fontSize: main ? (sm ? "0.8rem" : "0.95rem") : (sm ? "0.7rem" : "0.85rem"),
  fontFamily: "var(--font-syne), sans-serif",
  display: "block",
});

/* ── Polígono SVG y radios reutilizables ── */
function DesktopSVG() {
  /* Radios: Confianza(300,260) → cada vértice */
  const radios = [
    { x1: 300, y1: 260, x2: 300, y2:  70, d: "0.5s" },
    { x1: 300, y1: 260, x2: 449, y2: 142, d: "0.7s" },
    { x1: 300, y1: 260, x2: 485, y2: 302, d: "0.9s" },
    { x1: 300, y1: 260, x2: 382, y2: 431, d: "1.1s" },
    { x1: 300, y1: 260, x2: 218, y2: 431, d: "1.1s" },
    { x1: 300, y1: 260, x2: 115, y2: 302, d: "0.9s" },
    { x1: 300, y1: 260, x2: 151, y2: 142, d: "0.7s" },
  ];
  /* Vértices del heptágono */
  const vertices = [[300,70],[449,142],[485,302],[382,431],[218,431],[115,302],[151,142]];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 600 520"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Relleno muy sutil del polígono (aparece inmediatamente) */}
      <polygon
        points={vertices.map(([x,y]) => `${x},${y}`).join(" ")}
        fill="rgba(120,60,255,0.04)"
        stroke="none"
      />

      {/* Radios (spoke lines) con draw-in animation */}
      {radios.map((r, i) => (
        <line
          key={i}
          x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          className="svg-line"
          stroke="rgba(120,60,255,0.35)"
          strokeWidth="1"
          style={{ animationDelay: r.d }}
        />
      ))}

      {/* Heptágono exterior — se dibuja último */}
      <polygon
        points={vertices.map(([x,y]) => `${x},${y}`).join(" ")}
        className="svg-line"
        stroke="rgba(120,60,255,0.45)"
        strokeWidth="1.5"
        fill="none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Puntos naranjas en cada vértice */}
      {vertices.map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#E8470A" opacity="0.9" />
      ))}

      {/* Glow difuso en el centro */}
      <circle cx="300" cy="260" r="22" fill="rgba(120,60,255,0.08)" />
    </svg>
  );
}

function MobileSVG() {
  const radios = [
    { x1: 160, y1: 250, x2: 160, y2: 145, d: "0.5s" },
    { x1: 160, y1: 250, x2: 242, y2: 185, d: "0.7s" },
    { x1: 160, y1: 250, x2: 262, y2: 273, d: "0.9s" },
    { x1: 160, y1: 250, x2: 206, y2: 345, d: "1.1s" },
    { x1: 160, y1: 250, x2: 115, y2: 345, d: "1.1s" },
    { x1: 160, y1: 250, x2:  58, y2: 273, d: "0.9s" },
    { x1: 160, y1: 250, x2:  78, y2: 185, d: "0.7s" },
  ];
  const vertices = [[160,145],[242,185],[262,273],[206,345],[115,345],[58,273],[78,185]];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 320 520"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Relleno sutil */}
      <polygon
        points={vertices.map(([x,y]) => `${x},${y}`).join(" ")}
        fill="rgba(120,60,255,0.04)"
        stroke="none"
      />

      {/* Radios */}
      {radios.map((r, i) => (
        <line
          key={i}
          x1={r.x1} y1={r.y1} x2={r.x2} y2={r.y2}
          className="svg-line"
          stroke="rgba(120,60,255,0.4)"
          strokeWidth="1"
          style={{ animationDelay: r.d }}
        />
      ))}

      {/* Heptágono exterior */}
      <polygon
        points={vertices.map(([x,y]) => `${x},${y}`).join(" ")}
        className="svg-line"
        stroke="rgba(120,60,255,0.5)"
        strokeWidth="1.5"
        fill="none"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Puntos naranjas */}
      {vertices.map(([x,y], i) => (
        <circle key={i} cx={x} cy={y} r="3" fill="#E8470A" opacity="0.9" />
      ))}

      {/* Glow centro */}
      <circle cx="160" cy="250" r="14" fill="rgba(120,60,255,0.08)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Gradiente de fondo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--bg-hero-gradient)" }}
      />

      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="flex flex-col lg:grid lg:grid-cols-[45fr_55fr] gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* ══ TEXTO IZQUIERDA ════════════════════════════════ */}
          <div className="flex flex-col gap-7">
            <p className="hero-label flex items-center gap-3">
              <span className="flex-shrink-0 h-px w-8" style={{ background: "var(--accent-orange)" }} />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: "var(--accent-orange)" }}>
                DESARROLLO WEB & MARKETING ESTRATÉGICO
              </span>
            </p>

            <h1
              className="hero-h1 font-display font-bold text-white leading-[1.08]"
              style={{ fontSize: "clamp(2.4rem, 4.5vw, 4.25rem)" }}
            >
              Tu presencia digital que atrae, convence y vende
              <span style={{ color: "var(--accent-orange)" }}>.</span>
            </h1>

            <p
              className="hero-subtitle text-base sm:text-lg leading-relaxed"
              style={{ color: "var(--text-gray)", maxWidth: "30rem" }}
            >
              Estudio Nómade y Grovia unen desarrollo web y marketing
              para que tu negocio crezca online.
            </p>

            <div className="hero-cta">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 font-display font-bold text-sm tracking-[0.12em] text-white rounded-full transition-all duration-300 hover:opacity-90 hover:scale-105"
                style={{ background: "var(--accent-orange)", boxShadow: "0 4px 40px rgba(232,71,10,0.4)" }}
              >
                AGENDAR LLAMADA ↗
              </a>
            </div>
          </div>

          {/* ══ DESKTOP — heptágono horizontal ════════════════ */}
          <div className="hidden lg:block w-full">
            <div
              className="relative w-full"
              style={{ aspectRatio: "600 / 520", overflow: "visible" }}
            >
              <DesktopSVG />

              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className={`constellation-card ${v.delay} absolute`}
                  style={{
                    left: `${(v.cx / 600) * 100}%`,
                    top:  `${(v.cy / 520) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: v.main ? 2 : 1,
                  }}
                >
                  <div
                    className="float-card"
                    style={{ "--fd": v.fd, "--fdelay": v.fdelay } as CSSProperties}
                  >
                    <div style={cardStyle(v.main)}>
                      <span style={labelStyle(v.main)}>{v.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ MOBILE — heptágono portrait ════════════════════ */}
          <div className="lg:hidden w-full mt-2">
            <div
              className="relative mx-auto"
              style={{
                width: "min(100%, 340px)",
                aspectRatio: "320 / 520",
                overflow: "visible",
              }}
            >
              <MobileSVG />

              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className={`constellation-card ${v.delay} absolute`}
                  style={{
                    left: `${(v.mcx / 320) * 100}%`,
                    top:  `${(v.mcy / 520) * 100}%`,
                    transform: "translate(-50%, -50%)",
                    zIndex: v.main ? 2 : 1,
                  }}
                >
                  <div
                    className="float-card"
                    style={{ "--fd": v.fd, "--fdelay": v.fdelay } as CSSProperties}
                  >
                    <div style={cardStyle(v.main, true)}>
                      <span style={labelStyle(v.main, true)}>{v.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
