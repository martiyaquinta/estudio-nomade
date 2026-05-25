import {
  SparklesIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    step: "01",
    icon: SparklesIcon,
    title: "Tu marca proyectando confianza",
    description:
      "Un sitio bien presentado transmite seriedad y profesionalismo, es el aliado ideal y complemento necesario de tus redes.",
  },
  {
    step: "02",
    icon: ShoppingBagIcon,
    title: "Nuevo canal de ventas",
    description:
      "Con una web activa, tus clientes tienen un lugar siempre abierto para comprarte o contactarte.",
  },
  {
    step: "03",
    icon: MagnifyingGlassIcon,
    title: "Más visibilidad",
    description:
      "Cuando alguien busque en Google o redes las soluciones que brindas, vas a estar donde tus clientes te están buscando.",
  },
  {
    step: "04",
    icon: ClockIcon,
    title: "Consultas 24 horas",
    description:
      "Mientras vos descansás, tu sitio sigue recibiendo mensajes, pedidos y oportunidades.",
  },
];

export default function Benefits() {
  return (
    <section
      className="py-28"
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="section-label justify-center mb-5">EL MÉTODO</p>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            El método Grovia
          </h2>
          <p className="text-base leading-relaxed" style={{ color: "var(--text-gray)" }}>
            Estrategia clara, ejecución precisa, ventas reales
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.step}
                className="dark-card group p-8 flex flex-col gap-6 relative overflow-hidden"
              >
                {/* Número de fondo decorativo */}
                <span
                  className="absolute top-4 right-5 font-display font-bold text-5xl leading-none pointer-events-none select-none transition-opacity duration-300 group-hover:opacity-30"
                  style={{ color: "rgba(18, 64, 170, 0.18)", fontSize: "5rem" }}
                  aria-hidden="true"
                >
                  {benefit.step}
                </span>

                {/* Ícono */}
                <Icon
                  className="w-8 h-8 transition-transform duration-300 group-hover:scale-110 relative z-10"
                  style={{ color: "var(--accent-orange)" }}
                />

                {/* Texto */}
                <div className="relative z-10">
                  <h3 className="text-lg font-display font-bold text-white mb-3 leading-snug">
                    {benefit.title}
                  </h3>
                  <p
                    className="text-sm leading-[1.75]"
                    style={{ color: "var(--text-gray)" }}
                  >
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
