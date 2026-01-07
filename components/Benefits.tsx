"use client";

import { SparklesIcon, ShoppingBagIcon, MagnifyingGlassIcon, ClockIcon } from "@heroicons/react/24/outline";

export default function Benefits() {
  const benefits = [
    {
      icon: SparklesIcon,
      title: "Tu marca proyectando confianza",
      description: "Un sitio bien presentado transmite seriedad y profesionalismo, es el aliado ideal y complemento necesario de tus redes."
    },
    {
      icon: ShoppingBagIcon,
      title: "Nuevo canal de ventas",
      description: "Con una web activa, tus clientes tienen un lugar siempre abierto para comprarte o contactarte."
    },
    {
      icon: MagnifyingGlassIcon,
      title: "Más visibilidad",
      description: "Cuando alguien busque en Google o redes las soluciones que brindas, vas a estar donde tus clientes te están buscando."
    },
    {
      icon: ClockIcon,
      title: "Consultas 24 horas",
      description: "Mientras vos descansás, tu sitio sigue recibiendo mensajes, pedidos y oportunidades."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-navy via-navy-light to-navy">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
            Conocé el método Estudio Nómade + Grovia
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Estrategia clara, ejecución precisa, ventas reales
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-orange/50 transition-all group"
            >
              <benefit.icon className="w-16 h-16 text-orange mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-bold text-white mb-4">
                {benefit.title}
              </h3>
              <p className="text-white/70 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
