import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function CTAContact() {
  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-navy relative overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavanda/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center text-white space-y-8">
          <div className="inline-block px-6 py-2 bg-orange/20 border border-orange/50 rounded-full mb-4">
            <span className="text-orange font-bold">💬 CONSULTORÍA 100% GRATUITA</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold leading-tight">
            ¿Listo para impulsar tu negocio?
          </h2>
          
          <p className="text-xl sm:text-2xl text-white/90 max-w-2xl mx-auto">
            Agenda una consultoría gratuita y descubre cómo podemos ayudarte a crecer
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4">
            <Link
              href="/contacto"
              className="group inline-flex items-center gap-3 px-12 py-6 bg-orange text-white font-montserrat font-bold rounded-full hover:bg-orange-dark transition-all transform hover:scale-105 shadow-2xl hover:shadow-orange/50 text-lg"
            >
              Solicitar consultoría gratuita
              <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="pt-8 border-t border-white/10">
            <p className="text-sm text-white/60 mb-3">Contáctanos directamente:</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href="mailto:estudionomade2025@gmail.com" className="text-sm text-lavanda hover:text-white transition-colors font-semibold">
                📧 estudionomade2025@gmail.com
              </a>
              <span className="hidden sm:block text-white/30">•</span>
              <a href="mailto:groviaagencia@gmail.com" className="text-sm text-orange hover:text-white transition-colors font-semibold">
                📧 groviaagencia@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
