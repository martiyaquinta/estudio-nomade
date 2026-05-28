"use client";

import Image from "next/image";

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
        <div className="flex flex-col lg:grid lg:grid-cols-[46fr_54fr] gap-12 lg:gap-0 items-stretch min-h-[80vh]">

          {/* ══ TEXTO IZQUIERDA ════════════════════════════════ */}
          <div className="flex flex-col gap-8">

            <p className="hero-label section-label">
              MARKETING · DESARROLLO WEB · AUTOMATIZACIONES
            </p>

            <h1
              className="hero-h1 font-poppins font-bold text-white"
              style={{
                fontSize: "clamp(2.4rem, 4.6vw, 4.25rem)",
                lineHeight: 1.06,
                letterSpacing: "-0.01em",
              }}
            >
              Soluciones digitales que impulsan tu marca
              <span style={{ color: "var(--accent-orange)" }}>.</span>
            </h1>

            <p
              className="hero-subtitle text-base sm:text-lg leading-[1.75]"
              style={{ color: "var(--text-muted)", maxWidth: "28rem" }}
            >
              Somos <span style={{ color: "#ffffff", fontWeight: 700, textShadow: "0 0 12px rgba(255,255,255,0.5)" }}>G</span>rovia — marketing, desarrollo web y automatizaciones
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

          {/* ══ VISUAL DERECHA — Imagen sin fondo ══════════════════ */}
          <div className="hidden lg:flex w-full items-center justify-center relative self-stretch" style={{ minHeight: "560px" }}>
            <div className="relative w-full h-full">
              <Image
                src="/sinfondo.png"
                alt="Grovia"
                fill
                className="object-contain"
                style={{ mixBlendMode: "screen", transform: "scale(1.35)" }}
                priority
              />
            </div>
          </div>

          {/* ══ MOBILE — imagen compacta ═══════════════════════ */}
          <div className="lg:hidden w-full relative" style={{ height: "340px" }}>
            <Image
              src="/sinfondo.png"
              alt="Grovia"
              fill
              className="object-contain"
              style={{ transform: "scale(1.15)" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
