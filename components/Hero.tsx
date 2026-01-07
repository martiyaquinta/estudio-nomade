import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
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
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center pt-32 sm:pt-20">
        <div className="max-w-5xl mx-auto space-y-10">
          
          {/* Título principal - Estilo Ideamos */}
          <div className="animate-fade-in">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold leading-tight text-white mb-6">
              <span className="block">Expertos en crear sitios web</span>
              <span className="block">que atraen clientes y ventas</span>
            </h1>
            <p className="text-2xl sm:text-3xl text-white/90 leading-relaxed font-light">
              Diseño web y marketing digital de alto impacto
            </p>
          </div>


          {/* CTA Principal - Grande y centrado */}
          <div className="pt-4 animate-fade-in delay-400">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-orange text-white font-montserrat font-bold rounded-full hover:bg-orange-dark transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange/50 text-sm sm:text-base"
              >
                QUIERO UNA ASESORÍA GRATUITA
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contacto"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 bg-white text-navy font-montserrat font-bold rounded-full hover:bg-white/90 transition-all transform hover:scale-105 shadow-2xl text-sm sm:text-base border-2 border-white/20"
              >
                QUIERO CONTACTAR UN EXPERTO
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Logos duales debajo del CTA */}
          <div className="flex items-center justify-center gap-8 pt-8 animate-fade-in delay-600">
            <div className="flex flex-col items-center opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/logosinfondo.png"
                alt="Estudio Nómade"
                width={100}
                height={100}
                className="object-contain grayscale"
                priority
              />
              <span className="text-xs font-semibold text-white/70 mt-2">DISEÑO & DESARROLLO</span>
            </div>
            <div className="h-20 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
            <div className="flex flex-col items-center opacity-90 hover:opacity-100 transition-opacity">
              <Image
                src="/grovia sin fondo.png"
                alt="Grovia Marketing"
                width={100}
                height={100}
                className="object-contain grayscale"
                priority
              />
              <span className="text-xs font-semibold text-white/70 mt-2">MARKETING DIGITAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
