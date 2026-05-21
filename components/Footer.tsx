import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 text-white"
      style={{
        background: "#050710",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 mb-12">

          {/* Marcas */}
          <div>
            <div className="space-y-6">
              {/* Estudio Nómade */}
              <div className="flex items-center gap-4">
                <Image
                  src="/logosinfondo.png"
                  alt="Estudio Nómade"
                  width={52}
                  height={52}
                  className="w-12 h-12 object-contain opacity-70"
                />
                <div>
                  <h3 className="font-display font-bold text-white tracking-widest text-sm mb-0.5">
                    ESTUDIO NÓMADE
                  </h3>
                  <p
                    className="text-xs italic"
                    style={{ color: "var(--text-gray)" }}
                  >
                    Diseño y código en movimiento
                  </p>
                </div>
              </div>

              {/* Grovia */}
              <div className="flex items-center gap-4">
                <Image
                  src="/LOGO GROVIA SIN FONDO.png"
                  alt="Grovia Marketing"
                  width={52}
                  height={52}
                  className="w-12 h-12 object-contain opacity-70"
                />
                <div>
                  <h3 className="font-display font-bold text-white tracking-widest text-sm mb-0.5">
                    GROVIA
                  </h3>
                  <p
                    className="text-xs italic"
                    style={{ color: "var(--text-gray)" }}
                  >
                    Marketing que impulsa resultados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navegación */}
          <div>
            <h4
              className="font-display font-bold text-xs tracking-[0.18em] uppercase mb-5"
              style={{ color: "var(--text-gray)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/proyectos", label: "Proyectos" },
                { href: "/servicios", label: "Servicios" },
                { href: "/sobre-nosotros", label: "Sobre nosotros" },
                { href: "/contacto", label: "Contacto" },
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
              className="font-display font-bold text-xs tracking-[0.18em] uppercase mb-5"
              style={{ color: "var(--text-gray)" }}
            >
              Conecta
            </h4>
            <ul className="space-y-3">
              <li>
                <p
                  className="text-[10px] uppercase tracking-wider mb-1"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Estudio Nómade
                </p>
                <a
                  href="mailto:estudionomade2025@gmail.com"
                  className="text-sm transition-colors duration-200 hover:text-white"
                  style={{ color: "var(--text-gray)" }}
                >
                  estudionomade2025@gmail.com
                </a>
              </li>
              <li>
                <p
                  className="text-[10px] uppercase tracking-wider mb-1"
                  style={{ color: "rgba(255,255,255,0.3)" }}
                >
                  Grovia Marketing
                </p>
                <a
                  href="mailto:groviaagencia@gmail.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "var(--accent-orange)" }}
                >
                  groviaagencia@gmail.com
                </a>
              </li>
              <li className="pt-2 flex gap-4">
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

        {/* Copyright */}
        <div
          className="pt-8 text-center text-xs"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          © {currentYear} Estudio Nómade + Grovia Marketing. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
