import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background con overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-lavanda/30 via-violeta/20 to-humo z-0">
        {/* Aquí irá la imagen del universo */}
        <div className="absolute inset-0 bg-[url('/universe-bg.jpg')] bg-cover bg-center opacity-30" />
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavanda rounded-full opacity-10 blur-3xl animate-pulse" />
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-violeta rounded-full opacity-10 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Título principal */}
          <h1 className="text-6xl sm:text-7xl lg:text-8xl font-blanka text-lavanda animate-fade-in">
            ESTUDIO NÓMADE
          </h1>

          {/* Subtítulo */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-tek text-violeta animate-slide-up delay-200">
            Diseño y código en movimiento.
          </h2>

          {/* Descripción */}
          <p className="text-lg sm:text-xl text-oscuro/80 max-w-2xl mx-auto animate-fade-in delay-400">
            Desde cualquier lugar del mundo. Para cualquier lugar.
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in delay-600">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-violeta text-oscuro font-medium rounded-full hover:bg-violeta/90 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Crear mi proyecto
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/proyectos"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-lavanda text-lavanda font-medium rounded-full hover:bg-lavanda hover:text-humo transition-all transform hover:scale-105"
            >
              Ver portafolio
            </Link>
          </div>

          {/* Microcopy */}
          <p className="text-sm text-oscuro/60 animate-fade-in delay-800">
            Trabajamos de forma remota con clientes de todo el mundo
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-lavanda rounded-full flex justify-center">
          <div className="w-1 h-3 bg-lavanda rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
