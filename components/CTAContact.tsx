import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTAContact() {
  return (
    <section
      className="py-32 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Glow navy fondo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 80% at 50% 0%, rgba(18, 64, 170, 0.22) 0%, transparent 70%)",
        }}
      />

      {/* Glow orange sutil */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 100% 100%, rgba(232, 71, 10, 0.08) 0%, transparent 60%)",
        }}
      />

      {/* Dot grid sutil */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 mb-10">
            <span
              className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold tracking-[0.16em] rounded-full"
              style={{
                background: "rgba(232, 71, 10, 0.10)",
                border: "1px solid rgba(232, 71, 10, 0.25)",
                color: "var(--accent-orange)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent-orange)" }}
              />
              PRIMERA CONSULTA GRATUITA
            </span>
          </div>

          {/* Título */}
          <h2
            className="font-display font-bold text-white mb-6"
            style={{
              fontSize: "clamp(2.25rem, 5vw, 4rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
            }}
          >
            ¿Listo para impulsar<br />tu negocio?
          </h2>

          {/* Subtítulo */}
          <p
            className="text-lg max-w-xl mx-auto mb-10 leading-[1.75]"
            style={{ color: "var(--text-muted)" }}
          >
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a crecer
          </p>

          {/* Foto equipo */}
          <div className="flex justify-center mb-12">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                width: "min(520px, 90vw)",
                border: "1px solid rgba(18,64,170,0.30)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.50), 0 0 80px rgba(18,64,170,0.12)",
              }}
            >
              <Image
                src="/socios1.png"
                alt="Valentín y Martina, equipo de Grovia"
                width={1040}
                height={693}
                className="w-full h-auto object-cover"
                style={{ maxHeight: "320px", objectPosition: "center 25%" }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
                style={{
                  background: "linear-gradient(to top, rgba(5,10,30,0.75) 0%, transparent 100%)",
                }}
              />
              <div
                className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap"
                style={{
                  background: "rgba(5,10,30,0.80)",
                  border: "1px solid rgba(18,64,170,0.35)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} />
                <span className="text-white text-xs font-bold tracking-wider">Valentín & Martina · Grovia</span>
              </div>
            </div>
          </div>

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary font-display"
            >
              Solicitar consultoría gratuita
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Línea separadora */}
          <div className="geo-line mb-12" />

          {/* Contacto directo */}
          <p
            className="text-xs font-medium tracking-[0.14em] uppercase mb-6"
            style={{ color: "var(--text-dim)" }}
          >
            Escribinos directamente
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-8 justify-center items-center">
            <a
              href="mailto:groviaagencia@gmail.com"
              className="text-sm font-bold transition-colors duration-200 hover:opacity-80"
              style={{ color: "var(--accent-orange)" }}
            >
              groviaagencia@gmail.com
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
