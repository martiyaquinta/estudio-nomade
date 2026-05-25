import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="pt-16 pb-10"
      style={{
        background: "#030814",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Grid principal */}
        <div className="grid md:grid-cols-3 gap-12 mb-14">

          {/* Marca */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <Image
                src="/LOGO GROVIA SIN FONDO.png"
                alt="Grovia"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
                style={{ opacity: 0.80 }}
              />
              <span
                className="text-xl font-bold text-white tracking-[0.16em]"
                style={{ fontFamily: "var(--font-sora), sans-serif" }}
              >
                GROVIA
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)", maxWidth: "220px" }}>
              Marketing estratégico y desarrollo web para negocios que quieren crecer online.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold" style={{ color: "var(--text-dim)" }}>
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent-orange)" }}
              />
              Valentín · Martina
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4
              className="font-display font-bold text-[10px] tracking-[0.22em] uppercase mb-6"
              style={{ color: "var(--text-dim)" }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { href: "/proyectos",      label: "Proyectos" },
                { href: "/servicios",      label: "Servicios" },
                { href: "/sobre-nosotros", label: "Sobre nosotros" },
                { href: "/contacto",       label: "Contacto" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "var(--text-gray)" }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4
              className="font-display font-bold text-[10px] tracking-[0.22em] uppercase mb-6"
              style={{ color: "var(--text-dim)" }}
            >
              Contacto
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <p
                  className="text-[10px] uppercase tracking-wider mb-1 font-bold"
                  style={{ color: "var(--text-dim)" }}
                >
                  Email principal
                </p>
                <a
                  href="mailto:groviaagencia@gmail.com"
                  className="text-sm font-semibold transition-colors duration-200 hover:opacity-80"
                  style={{ color: "var(--accent-orange)" }}
                >
                  groviaagencia@gmail.com
                </a>
              </li>
              <li>
                <p
                  className="text-[10px] uppercase tracking-wider mb-1 font-bold"
                  style={{ color: "var(--text-dim)" }}
                >
                  Desarrollo web
                </p>
                <a
                  href="mailto:estudionomade2025@gmail.com"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--text-gray)" }}
                >
                  estudionomade2025@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-5 pt-1">
                <a
                  href="https://www.instagram.com/estudionomade.web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--text-gray)" }}
                >
                  Instagram
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--text-gray)" }}
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Separador */}
        <div className="geo-line mb-8" />

        {/* Copyright */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]"
          style={{ color: "var(--text-dim)" }}
        >
          <span>
            © {currentYear} Grovia · Marketing Estratégico & Desarrollo Web. Todos los derechos reservados.
          </span>
          <span
            className="font-display font-bold tracking-[0.12em]"
            style={{ color: "rgba(255,255,255,0.15)" }}
          >
            GROVIA
          </span>
        </div>

      </div>
    </footer>
  );
}
