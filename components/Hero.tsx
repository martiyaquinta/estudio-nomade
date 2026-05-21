import type { CSSProperties } from "react";

/*
  ── GEOMETRÍA ABIERTA (sin polígono de cierre) ──────────────────────
  7 valores en los vértices de un heptágono regular.
  Solo radios desde el centro → vértices (sin borde exterior).
  "Confianza" eliminada del listado de valores.

  Desktop:  viewBox 0 0 600 520 | centro (300, 260) | radio 190
  Mobile:   viewBox 0 0 360 440 | centro (180, 240) | radio 115

  Vértices (ángulo inicial -90°, paso 51.43°):
  Desktop          Mobile
  0 Innovación      (300,  70)   (180, 125)
  1 Creatividad     (449, 142)   (270, 168)
  2 Estrategia      (485, 302)   (292, 266)
  3 Marketing       (382, 431)   (230, 344)
  4 Resultados      (218, 431)   (130, 344)
  5 Profesionalismo (115, 302)   ( 68, 266)
  6 Calidad         (151, 142)   ( 90, 168)
  ─────────────────────────────────────────────────────────────────── */

// Mobile viewBox 520×480 | centro (230, 245) | radio 160
const VALUES = [
  { label: "Innovación",      cx: 300, cy:  70, mcx: 230, mcy:  85, delay: "cc-d0", fd: "4.2s", fdelay: "0s"   },
  { label: "Creatividad",     cx: 449, cy: 142, mcx: 355, mcy: 145, delay: "cc-d1", fd: "5.1s", fdelay: "0.8s" },
  { label: "Estrategia",      cx: 485, cy: 302, mcx: 386, mcy: 281, delay: "cc-d2", fd: "3.7s", fdelay: "1.4s" },
  { label: "Marketing",       cx: 382, cy: 431, mcx: 299, mcy: 389, delay: "cc-d4", fd: "4.5s", fdelay: "2.0s" },
  { label: "Resultados",      cx: 218, cy: 431, mcx: 161, mcy: 389, delay: "cc-d5", fd: "3.9s", fdelay: "0.6s" },
  { label: "Profesionalismo", cx: 115, cy: 302, mcx:  74, mcy: 281, delay: "cc-d6", fd: "5.4s", fdelay: "1.2s" },
  { label: "Calidad",         cx: 151, cy: 142, mcx: 105, mcy: 145, delay: "cc-d7", fd: "4.8s", fdelay: "2.4s" },
];

const cardStyle = (sm = false): CSSProperties => ({
  padding: sm ? "7px 13px" : "10px 22px",
  background: "var(--card-bg)",
  border: "1px solid var(--card-border)",
  borderRadius: "12px",
  backdropFilter: "blur(10px)",
  WebkitBackdropFilter: "blur(10px)",
  whiteSpace: "nowrap",
  cursor: "default",
  userSelect: "none",
  boxShadow: "0 0 12px rgba(120,60,255,0.12)",
});

const labelStyle = (sm = false): CSSProperties => ({
  color: "white",
  fontWeight: 500,
  fontSize: sm ? "0.7rem" : "0.85rem",
  fontFamily: "var(--font-syne), sans-serif",
  display: "block",
});

/* ── SVG desktop: solo radios, sin polígono cerrado ── */
function DesktopSVG() {
  // Centro (300, 260) → cada vértice
  const spokes = [
    { x2: 300, y2:  70, d: "0.5s" },
    { x2: 449, y2: 142, d: "0.7s" },
    { x2: 485, y2: 302, d: "0.9s" },
    { x2: 382, y2: 431, d: "1.1s" },
    { x2: 218, y2: 431, d: "1.1s" },
    { x2: 115, y2: 302, d: "0.9s" },
    { x2: 151, y2: 142, d: "0.7s" },
  ];
  const vertices = spokes.map((s) => [s.x2, s.y2]);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 600 520"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      {/* Radios animados */}
      {spokes.map((s, i) => (
        <line
          key={i}
          x1={300} y1={260}
          x2={s.x2} y2={s.y2}
          className="svg-line"
          stroke="rgba(120,60,255,0.4)"
          strokeWidth="1"
          style={{ animationDelay: s.d }}
        />
      ))}

      {/* Puntos naranjas en cada vértice */}
      {vertices.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#E8470A" opacity="0.9" />
      ))}

      {/* Glow difuso en el centro (sin tarjeta) */}
      <circle cx="300" cy="260" r="6"  fill="rgba(120,60,255,0.25)" />
      <circle cx="300" cy="260" r="18" fill="rgba(120,60,255,0.07)" />
    </svg>
  );
}

/* ── SVG mobile: 520×480 | centro (230,245) | radio 160 ── */
function MobileSVG() {
  const spokes = [
    { x2: 230, y2:  85, d: "0.5s" },
    { x2: 355, y2: 145, d: "0.7s" },
    { x2: 386, y2: 281, d: "0.9s" },
    { x2: 299, y2: 389, d: "1.1s" },
    { x2: 161, y2: 389, d: "1.1s" },
    { x2:  74, y2: 281, d: "0.9s" },
    { x2: 105, y2: 145, d: "0.7s" },
  ];
  const vertices = spokes.map((s) => [s.x2, s.y2]);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 520 480"
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "visible" }}
      aria-hidden="true"
    >
      {spokes.map((s, i) => (
        <line
          key={i}
          x1={230} y1={245}
          x2={s.x2} y2={s.y2}
          className="svg-line"
          stroke="rgba(120,60,255,0.45)"
          strokeWidth="1.5"
          style={{ animationDelay: s.d }}
        />
      ))}
      {vertices.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="#E8470A" opacity="0.9" />
      ))}
      <circle cx="230" cy="245" r="6"  fill="rgba(120,60,255,0.3)"  />
      <circle cx="230" cy="245" r="18" fill="rgba(120,60,255,0.08)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
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

          {/* ══ DESKTOP — estrella abierta ═════════════════════ */}
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
                  }}
                >
                  <div className="float-card" style={{ "--fd": v.fd, "--fdelay": v.fdelay } as CSSProperties}>
                    <div style={cardStyle()}>
                      <span style={labelStyle()}>{v.label}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ MOBILE — estrella abierta en portrait ══════════ */}
          <div className="lg:hidden w-full mt-2">
            <div
              className="relative w-full"
              style={{ aspectRatio: "520 / 480", overflow: "visible" }}
            >
              <MobileSVG />
              {VALUES.map((v) => (
                <div
                  key={v.label}
                  className={`constellation-card ${v.delay} absolute`}
                  style={{
                    left: `${(v.mcx / 520) * 100}%`,
                    top:  `${(v.mcy / 480) * 100}%`,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <div className="float-card" style={{ "--fd": v.fd, "--fdelay": v.fdelay } as CSSProperties}>
                    <div style={cardStyle(true)}>
                      <span style={labelStyle(true)}>{v.label}</span>
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
