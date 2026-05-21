import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTAContact() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ background: "var(--bg-secondary)" }}
    >
      {/* Glow decorativo */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: "rgba(232, 71, 10, 0.07)",
          filter: "blur(70px)",
        }}
      />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: "var(--glow-purple)",
          filter: "blur(90px)",
          opacity: 0.5,
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Badge */}
          <div className="inline-block">
            <span
              className="inline-block px-6 py-2 text-sm font-bold rounded-full"
              style={{
                background: "rgba(232, 71, 10, 0.1)",
                border: "1px solid rgba(232, 71, 10, 0.3)",
                color: "var(--accent-orange)",
              }}
            >
              💬 CONSULTORÍA 100% GRATUITA
            </span>
          </div>

          {/* Título */}
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
          >
            ¿Listo para impulsar tu negocio?
          </h2>

          {/* Subtítulo */}
          <p
            className="text-lg max-w-2xl mx-auto"
            style={{ color: "var(--text-gray)" }}
          >
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a
            crecer
          </p>

          {/* CTA principal */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-10 py-5 font-display font-bold text-white rounded-full transition-all hover:opacity-90 hover:scale-105 text-base"
              style={{
                background: "var(--accent-orange)",
                boxShadow: "0 4px 40px rgba(232, 71, 10, 0.4)",
              }}
            >
              Solicitar consultoría gratuita
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Contacto directo */}
          <div
            className="pt-8"
            style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
          >
            <p
              className="text-sm mb-4"
              style={{ color: "var(--text-gray)" }}
            >
              Contáctanos directamente:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:estudionomade2025@gmail.com"
                className="text-sm font-semibold hover:text-white transition-colors duration-200"
                style={{ color: "var(--text-gray)" }}
              >
                📧 estudionomade2025@gmail.com
              </a>
              <span
                className="hidden sm:block"
                style={{ color: "rgba(255,255,255,0.15)" }}
              >
                •
              </span>
              <a
                href="mailto:groviaagencia@gmail.com"
                className="text-sm font-semibold hover:text-white transition-colors duration-200"
                style={{ color: "var(--accent-orange)" }}
              >
                📧 groviaagencia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
