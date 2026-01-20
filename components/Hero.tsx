import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video de fondo */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
          <source src="/hero-video.webm" type="video/webm" />
        </video>
        {/* Overlay oscuro para mejorar legibilidad del texto */}
        <div className="absolute inset-0 bg-navy/70 backdrop-blur-[2px]" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          
          {/* Título principal - Más grande y prominente */}
          <div className="animate-fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display font-bold leading-tight text-white mb-6">
              <span className="block">Expertos en crear sitios web</span>
              <span className="block">que atraen clientes y ventas</span>
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 leading-relaxed font-light">
              Diseño web y marketing de alto impacto
            </p>
          </div>

          {/* CTA Principal - Grande y centrado */}
          <div className="pt-4 animate-fade-in delay-400">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 sm:px-10 sm:py-5 bg-orange text-white font-montserrat font-bold rounded-full hover:bg-orange-dark transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange/50 text-base sm:text-lg"
            >
              QUIERO UNA ASESORÍA DE MARKETING GRATUITA
              <ArrowRightIcon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Logos duales debajo del CTA */}
          <div className="flex items-center justify-center gap-8 pt-6 animate-fade-in delay-600">
            <div className="flex flex-col items-center transition-opacity">
              <Image
                src="/logosinfondo.png"
                alt="Estudio Nómade"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
              <span className="text-xs font-semibold text-white/70 mt-2">DISEÑO & DESARROLLO</span>
            </div>
            <div className="h-24 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <div className="flex flex-col items-center transition-opacity">
              <Image
                src="/LOGO GROVIA SIN FONDO.png"
                alt="Grovia Marketing"
                width={120}
                height={120}
                className="object-contain"
                priority
              />
              <span className="text-xs font-semibold text-white/70 mt-2">MARKETING</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
