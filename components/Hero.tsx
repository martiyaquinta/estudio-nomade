"use client";

import { CSSProperties } from "react";

/* ── Tarjetas métricas flotantes ── */
const metrics = [
  {
    id: "m1",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 13L7 9L10 12L15 6" stroke="#E8470A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6H15V9" stroke="#E8470A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    value: "+340%",
    label: "Conversiones",
    pos: { top: "6%", right: "-4%" },
    fd: "4.2s",
    fdelay: "0s",
    delay: "cc-d1",
  },
  {
    id: "m2",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7" stroke="#E8470A" strokeWidth="1.6"/>
        <path d="M9 5V9L12 11" stroke="#E8470A" strokeWidth="1.6" strokeLinecap="round"/>
      </svg>
    ),
    value: "24 / 7",
    label: "Sitio siempre activo",
    pos: { bottom: "18%", right: "-6%" },
    fd: "5.0s",
    fdelay: "0.6s",
    delay: "cc-d3",
  },
  {
    id: "m3",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M2 16L6.5 10L10 13L14.5 7L16 9" stroke="#E8470A" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="16" cy="4" r="2" fill="#E8470A"/>
      </svg>
    ),
    value: "3×",
    label: "Más leads calificados",
    pos: { bottom: "6%", left: "4%" },
    fd: "4.7s",
    fdelay: "1.2s",
    delay: "cc-d5",
  },
];

/* ── Líneas simuladas de texto ── */
function TextLine({ w, opacity = 1 }: { w: string; opacity?: number }) {
  return (
    <div
      style={{
        width: w,
        height: "7px",
        borderRadius: "4px",
        background: `rgba(255,255,255,${opacity})`,
      }}
    />
  );
}

/* ── Mockup de browser ── */
function BrowserMockup() {
  return (
    <div
      style={{
        borderRadius: "14px",
        overflow: "hidden",
        boxShadow: "0 32px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(18,64,170,0.30)",
        background: "#060D26",
      }}
    >
      {/* Chrome bar */}
      <div
        style={{
          background: "#0B1640",
          padding: "10px 14px",
          display: "flex",
          alignItems: "center",
          gap: "6px",
          borderBottom: "1px solid rgba(18,64,170,0.25)",
        }}
      >
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "#E8470A", display: "block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "block" }} />
        <span style={{ width: 9, height: 9, borderRadius: "50%", background: "rgba(255,255,255,0.15)", display: "block" }} />
        <div
          style={{
            flex: 1,
            marginLeft: "10px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "5px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            paddingLeft: "8px",
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.30)", fontSize: "0.58rem", letterSpacing: "0.06em" }}>
            grovia.com
          </span>
        </div>
      </div>

      {/* Simulación de contenido web */}
      <div style={{ padding: "16px", display: "flex", flexDirection: "column", gap: "14px" }}>

        {/* Nav simulada */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ width: "60px", height: "8px", borderRadius: "4px", background: "rgba(232,71,10,0.60)" }} />
          <div style={{ display: "flex", gap: "10px" }}>
            {[40, 50, 38, 30].map((w, i) => (
              <div key={i} style={{ width: `${w}px`, height: "6px", borderRadius: "3px", background: "rgba(255,255,255,0.12)" }} />
            ))}
          </div>
        </div>

        {/* Hero simulado */}
        <div
          style={{
            borderRadius: "10px",
            padding: "20px 16px",
            background: "linear-gradient(135deg, rgba(18,64,170,0.25) 0%, rgba(11,31,82,0.40) 100%)",
            display: "flex",
            flexDirection: "column",
            gap: "8px",
          }}
        >
          <TextLine w="75%" opacity={0.85} />
          <TextLine w="55%" opacity={0.85} />
          <TextLine w="38%" opacity={0.40} />
          <div style={{ marginTop: "8px", display: "flex", gap: "8px" }}>
            <div style={{ width: "72px", height: "20px", borderRadius: "20px", background: "#E8470A" }} />
            <div style={{ width: "60px", height: "20px", borderRadius: "20px", background: "rgba(255,255,255,0.10)", border: "1px solid rgba(255,255,255,0.18)" }} />
          </div>
        </div>

        {/* Cards simuladas */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "8px" }}>
          {[
            { color: "rgba(232,71,10,0.20)", border: "rgba(232,71,10,0.30)" },
            { color: "rgba(18,64,170,0.20)", border: "rgba(18,64,170,0.30)" },
            { color: "rgba(255,255,255,0.04)", border: "rgba(255,255,255,0.10)" },
          ].map((c, i) => (
            <div
              key={i}
              style={{
                borderRadius: "8px",
                padding: "10px 8px",
                background: c.color,
                border: `1px solid ${c.border}`,
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              <div style={{ width: "14px", height: "14px", borderRadius: "4px", background: "rgba(255,255,255,0.20)" }} />
              <TextLine w="70%" opacity={0.70} />
              <TextLine w="50%" opacity={0.30} />
            </div>
          ))}
        </div>

        {/* Gráfico simulado */}
        <div
          style={{
            borderRadius: "8px",
            padding: "10px 12px",
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "8px" }}>
            <TextLine w="30%" opacity={0.50} />
            <TextLine w="15%" opacity={0.25} />
          </div>
          {/* Barras de gráfico */}
          <div style={{ display: "flex", alignItems: "flex-end", gap: "5px", height: "36px" }}>
            {[40, 55, 35, 70, 50, 85, 65, 90].map((h, i) => (
              <div
                key={i}
                style={{
                  flex: 1,
                  height: `${h}%`,
                  borderRadius: "3px 3px 0 0",
                  background: i === 7
                    ? "#E8470A"
                    : `rgba(18,64,170,${0.3 + i * 0.05})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "var(--bg-primary)" }}
    >
      {/* Gradiente de fondo — navy */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--bg-hero-gradient)" }}
      />

      {/* Textura dot grid */}
      <div className="absolute inset-0 pointer-events-none dot-grid opacity-40" />

      <div className="relative z-10 w-full container mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="flex flex-col lg:grid lg:grid-cols-[46fr_54fr] gap-12 lg:gap-16 items-center min-h-[80vh]">

          {/* ══ TEXTO IZQUIERDA ════════════════════════════════ */}
          <div className="flex flex-col gap-8">

            <p className="hero-label section-label">
              MARKETING ESTRATÉGICO & DESARROLLO WEB
            </p>

            <h1
              className="hero-h1 font-poppins font-bold text-white"
              style={{
                fontSize: "clamp(2.4rem, 4.6vw, 4.25rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
              }}
            >
              Tu presencia digital que atrae, convence y vende
              <span style={{ color: "var(--accent-orange)" }}>.</span>
            </h1>

            <p
              className="hero-subtitle text-base sm:text-lg leading-[1.75]"
              style={{ color: "var(--text-muted)", maxWidth: "28rem" }}
            >
              Somos Grovia — marketing estratégico y desarrollo web
              para que tu negocio crezca y venda online.
            </p>

            <div className="hero-cta flex items-center gap-5 flex-wrap">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary font-display"
              >
                AGENDAR LLAMADA
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <span
                className="text-xs font-medium"
                style={{ color: "var(--text-gray)", letterSpacing: "0.04em" }}
              >
                Consultoría gratuita · Sin compromiso
              </span>
            </div>
          </div>

          {/* ══ VISUAL DERECHA — Browser mockup ══════════════ */}
          <div className="hidden lg:block w-full">
            <div className="relative" style={{ padding: "30px 40px 30px 20px" }}>

              {/* Glow detrás del mockup */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "10%",
                  background: "radial-gradient(ellipse, rgba(18,64,170,0.35) 0%, transparent 70%)",
                  filter: "blur(30px)",
                  zIndex: 0,
                }}
              />

              {/* Browser mockup con animación de entrada */}
              <div
                className="constellation-card cc-d0 relative"
                style={{ zIndex: 1 }}
              >
                <BrowserMockup />
              </div>

              {/* Tarjetas métricas flotantes */}
              {metrics.map((m) => (
                <div
                  key={m.id}
                  className={`constellation-card ${m.delay} absolute`}
                  style={{ ...m.pos, zIndex: 2 }}
                >
                  <div
                    className="float-card"
                    style={{ "--fd": m.fd, "--fdelay": m.fdelay } as CSSProperties}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 16px",
                        background: "rgba(6, 13, 38, 0.90)",
                        border: "1px solid rgba(18, 64, 170, 0.40)",
                        borderRadius: "10px",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.40)",
                        whiteSpace: "nowrap",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "8px",
                          background: "rgba(232,71,10,0.15)",
                          border: "1px solid rgba(232,71,10,0.25)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        {m.icon}
                      </div>
                      <div>
                        <div
                          style={{
                            color: "#fff",
                            fontWeight: 700,
                            fontSize: "1rem",
                            lineHeight: 1.2,
                            fontFamily: "var(--font-poppins), sans-serif",
                          }}
                        >
                          {m.value}
                        </div>
                        <div
                          style={{
                            color: "var(--text-gray)",
                            fontSize: "0.68rem",
                            letterSpacing: "0.04em",
                            marginTop: "1px",
                          }}
                        >
                          {m.label}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ══ MOBILE — mockup compacto ═══════════════════════ */}
          <div className="lg:hidden w-full">
            <div className="relative mx-auto" style={{ maxWidth: "360px", padding: "20px 0" }}>
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "0",
                  background: "radial-gradient(ellipse, rgba(18,64,170,0.30) 0%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
              <div className="constellation-card cc-d0 relative">
                <BrowserMockup />
              </div>
              {/* Solo la primera métrica en mobile */}
              <div
                className="constellation-card cc-d2 absolute"
                style={{ bottom: "0", right: "-10px", zIndex: 2 }}
              >
                <div
                  className="float-card"
                  style={{ "--fd": "4.2s", "--fdelay": "0.4s" } as CSSProperties}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 12px",
                      background: "rgba(6, 13, 38, 0.92)",
                      border: "1px solid rgba(18, 64, 170, 0.40)",
                      borderRadius: "9px",
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.40)",
                    }}
                  >
                    <span style={{ color: "#E8470A", fontWeight: 700, fontSize: "1rem", fontFamily: "var(--font-poppins)" }}>
                      +340%
                    </span>
                    <span style={{ color: "var(--text-gray)", fontSize: "0.65rem" }}>
                      Conversiones
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
