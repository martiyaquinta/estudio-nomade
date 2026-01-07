import Image from "next/image";

export default function AboutMe() {
  return (
    <section className="py-24 bg-gradient-to-br from-lavanda/5 to-violeta/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen */}
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-lavanda/20 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-lavanda/20 to-violeta/20 flex items-center justify-center">
                  <p className="text-lavanda text-sm">Tu foto aquí</p>
                </div>
              </div>
              {/* Decoración */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-violeta/20 rounded-full blur-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-orange/20 rounded-full blur-2xl -z-10" />
            </div>

            {/* Contenido */}
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-display font-bold text-oscuro">
                Sobre nosotros
              </h2>
              <div className="space-y-4 text-oscuro/80">
                <p className="text-lg">
                  Somos <span className="text-orange font-semibold">técnicos en marketing</span> por Grovia y <span className="text-lavanda font-semibold">técnica en sistemas</span> por Estudio Nómade.
                </p>
                <p>
                  Nos fusionamos para brindar un servicio integral y completo: combinamos desarrollo web profesional con estrategia de marketing efectiva, creando soluciones digitales que no solo se ven bien, sino que generan resultados reales.
                </p>
                <p>
                  Desde landings con estrategia de lanzamiento hasta invitaciones digitales personalizadas, cada proyecto es una oportunidad para crear algo único y efectivo que impulse tu negocio.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-4 py-2 bg-lavanda/10 text-lavanda rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="px-4 py-2 bg-violeta/10 text-violeta rounded-full text-sm font-medium">
                  Tailwind CSS
                </span>
                <span className="px-4 py-2 bg-lavanda/10 text-lavanda rounded-full text-sm font-medium">
                  TypeScript
                </span>
                <span className="px-4 py-2 bg-orange/10 text-orange rounded-full text-sm font-medium">
                  Marketing Digital
                </span>
                <span className="px-4 py-2 bg-violeta/10 text-violeta rounded-full text-sm font-medium">
                  Diseño UI/UX
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
