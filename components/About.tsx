import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

const problems = [
  {
    title: "Pierdo oportunidades por no tener una web seria",
    description:
      "Tu empresa necesita una buena presencia online, pero no querés algo improvisado. Diseñamos sitios que transmiten confianza, explican claro lo que hacés y te ayudan a captar más clientes desde el primer día.",
  },
  {
    title: "Quiero ser primero en Google pero no sé por dónde empezar",
    description:
      "SEO, campañas, blog, Google Ads, posicionamiento... Suena complejo. Nosotros lo simplificamos y armamos un plan realista para que empieces a tener visibilidad y resultados.",
  },
  {
    title: "Necesitamos una web compleja, con funcionalidades específicas",
    description:
      "Contamos con un equipo completo: programadores, diseñadores, maquetadores y estrategas. Abordamos proyectos grandes, complejos y personalizados para empresas que necesitan soluciones en el siguiente nivel.",
  },
  {
    title: "No sé cómo arrancar, pero sé que necesito hacer algo",
    description:
      "Muchos clientes llegan con un mix de dudas, urgencias y ganas de mejorar. Tengamos una charla sin compromiso y te ayudamos a ordenar prioridades y entender qué conviene hacer paso a paso.",
  },
];

export default function About() {
  return (
    <section
      className="py-24"
      style={{ background: "var(--bg-secondary)" }}
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
              PROBLEMAS QUE RESOLVEMOS
            </span>
            <span
              className="h-px w-8 flex-shrink-0"
              style={{ background: "var(--accent-orange)" }}
            />
          </div>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{ fontSize: "clamp(1.75rem, 3vw, 3rem)" }}
          >
            ¿Qué problemas resuelve un sitio web profesional para tu empresa?
          </h2>
        </div>

        {/* Grid de problemas */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="dark-card group p-8 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <ExclamationTriangleIcon
                  className="w-6 h-6 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform"
                  style={{ color: "var(--accent-orange)" }}
                />
                <h3 className="text-xl font-display font-bold text-white leading-tight">
                  {problem.title}
                </h3>
              </div>
              <p
                className="text-sm leading-relaxed pl-10"
                style={{ color: "var(--text-gray)" }}
              >
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 font-display font-bold tracking-wider text-white rounded-full transition-all hover:opacity-90 hover:scale-105 text-sm"
            style={{
              background: "var(--accent-orange)",
              boxShadow: "0 4px 40px rgba(232,71,10,0.4)",
            }}
          >
            QUIERO UNA ASESORÍA DE MARKETING GRATUITA
          </a>
        </div>
      </div>
    </section>
  );
}
