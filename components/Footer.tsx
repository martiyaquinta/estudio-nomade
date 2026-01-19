import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-oscuro text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Marca */}
          <div>
            <div className="space-y-6">
              {/* Estudio Nómade */}
              <div className="flex items-center gap-4">
                <Image 
                  src="/logosinfondo.png" 
                  alt="Estudio Nómade" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain grayscale"
                />
                <div>
                  <h3 className="text-lg font-blanka text-white mb-1">
                    ESTUDIO NÓMADE
                  </h3>
                  <p className="text-sm text-white/60 italic">
                    Diseño y código en movimiento
                  </p>
                </div>
              </div>

              {/* Grovia */}
              <div className="flex items-center gap-4">
                <Image 
                  src="/LOGO GROVIA SIN FONDO.png" 
                  alt="Grovia Marketing" 
                  width={60} 
                  height={60}
                  className="w-14 h-14 object-contain grayscale"
                />
                <div>
                  <h3 className="text-lg font-montserrat font-bold text-white mb-1">
                    GROVIA
                  </h3>
                  <p className="text-sm text-white/60 italic">
                    Marketing que impulsa resultados
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enlaces */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/proyectos" className="text-white/70 hover:text-lavanda transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-white/70 hover:text-lavanda transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-white/70 hover:text-lavanda transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-semibold mb-4">Conecta</h4>
            <ul className="space-y-3">
              <li>
                <p className="text-xs text-white/50 mb-1">Estudio Nómade</p>
                <a href="mailto:estudionomade2025@gmail.com" className="text-white/70 hover:text-lavanda transition-colors text-sm">
                  estudionomade2025@gmail.com
                </a>
              </li>
              <li>
                <p className="text-xs text-white/50 mb-1">Grovia Marketing</p>
                <a href="mailto:groviaagencia@gmail.com" className="text-white/70 hover:text-orange transition-colors text-sm">
                  groviaagencia@gmail.com
                </a>
              </li>
              <li className="pt-2">
                <a href="https://www.instagram.com/estudionomade.web/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-violeta transition-colors">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-violeta transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-sm">
          <p>© {currentYear} Estudio Nómade + Grovia Marketing. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
