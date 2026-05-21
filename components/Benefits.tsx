import {
  SparklesIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: SparklesIcon,
    title: "Tu marca proyectando confianza",
    description:
      "Un sitio bien presentado transmite seriedad y profesionalismo, es el aliado ideal y complemento necesario de tus redes.",
  },
  {
    icon: ShoppingBagIcon,
    title: "Nuevo canal de ventas",
    description:
      "Con una web activa, tus clientes tienen un lugar siempre abierto para comprarte o contactarte.",
  },
  {
    icon: MagnifyingGlassIcon,
    title: "Más visibilidad",
    description:
      "Cuando alguien busque en Google o redes las soluciones que brindas, vas a estar donde tus clientes te están buscando.",
  },
  {
    icon: ClockIcon,
    title: "Consultas 24 horas",
    description:
      "Mientras vos descansás, tu sitio sigue recibiendo mensajes, pedidos y oportunidades.",
  },
];

export default function Benefits() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--bg-primary)" }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <span
              className="h-px w-8 flex-shrink-0"
              style={{ background: "var(--accent-orange)" }}
            />
            <span
              className="text-[11px] font-medium tracking-[0.18em] uppercase"
              style={{ color: "var(--accent-orange)" }}
            >
              EL MÉTODO
            </span>
            <span
              className="h-px w-8 flex-shrink-0"
              style={{ background: "var(--accent-orange)" }}
            />
          </div>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)" }}
          >
            Conocé el método Estudio Nómade + Grovia
          </h2>
          <p
            className="text-lg mt-4 max-w-2xl mx-auto"
            style={{ color: "var(--text-gray)" }}
          >
            Estrategia clara, ejecución precisa, ventas reales
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="dark-card group p-8 transition-all duration-300"
            >
              <benefit.icon
                className="w-12 h-12 mb-6 group-hover:scale-110 transition-transform"
                style={{ color: "var(--accent-orange)" }}
              />
              <h3 className="text-xl font-display font-bold text-white mb-3">
                {benefit.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-gray)" }}
              >
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
