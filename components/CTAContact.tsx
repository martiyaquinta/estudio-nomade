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
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-center">

          {/* Columna texto */}
          <div className="flex flex-col">

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
                fontSize: "clamp(2.25rem, 4vw, 3.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              ¿Listo para impulsar<br />tu negocio?
            </h2>

            {/* Subtítulo */}
            <p
              className="text-lg mb-10 leading-[1.75]"
              style={{ color: "var(--text-muted)", maxWidth: "28rem" }}
            >
              Agenda una consultoría gratuita y descubrí cómo podemos ayudarte a crecer online.
            </p>

            {/* CTA principal */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
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
            <div className="geo-line mb-8" />

            {/* Contacto directo */}
            <p
              className="text-xs font-medium tracking-[0.14em] uppercase mb-4"
              style={{ color: "var(--text-dim)" }}
            >
              Escribinos directamente
            </p>
            <a
              href="mailto:groviaagencia@gmail.com"
              className="text-sm font-bold transition-colors duration-200 hover:opacity-80 w-fit"
              style={{ color: "var(--accent-orange)" }}
            >
              groviaagencia@gmail.com
            </a>
          </div>

          {/* Columna imagen */}
          <div className="relative">
            {/* Glow detrás */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-8%",
                background: "radial-gradient(ellipse, rgba(18,64,170,0.22) 0%, transparent 65%)",
                filter: "blur(30px)",
                zIndex: 0,
              }}
            />
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                border: "1px solid rgba(18,64,170,0.30)",
                boxShadow: "0 24px 60px rgba(0,0,0,0.50)",
                zIndex: 1,
              }}
            >
              <Image
                src="/socios1.png"
                alt="Valentín y Martina, equipo de Grovia"
                width={1040}
                height={693}
                className="w-full h-auto object-cover"
              />
              {/* Badge sobre la imagen */}
              <div
                className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-2 rounded-xl"
                style={{
                  background: "rgba(5,10,30,0.82)",
                  border: "1px solid rgba(18,64,170,0.35)",
                  backdropFilter: "blur(12px)",
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#4ade80" }} />
                <span className="text-white text-xs font-bold tracking-wider">Valentín & Martina · Grovia</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
