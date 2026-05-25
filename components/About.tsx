const problems = [
  {
    number: "01",
    title: "Pierdo oportunidades por no tener una web seria",
    description:
      "Tu empresa necesita una buena presencia online, pero no querés algo improvisado. Diseñamos sitios que transmiten confianza, explican claro lo que hacés y te ayudan a captar más clientes desde el primer día.",
  },
  {
    number: "02",
    title: "Quiero ser primero en Google pero no sé por dónde empezar",
    description:
      "SEO, campañas, blog, Google Ads, posicionamiento... Suena complejo. Nosotros lo simplificamos y armamos un plan realista para que empieces a tener visibilidad y resultados.",
  },
  {
    number: "03",
    title: "Necesitamos una web compleja, con funcionalidades específicas",
    description:
      "Contamos con un equipo completo: programadores, diseñadores, maquetadores y estrategas. Abordamos proyectos grandes, complejos y personalizados para empresas que necesitan soluciones en el siguiente nivel.",
  },
  {
    number: "04",
    title: "No sé cómo arrancar, pero sé que necesito hacer algo",
    description:
      "Muchos clientes llegan con un mix de dudas, urgencias y ganas de mejorar. Tengamos una charla sin compromiso y te ayudamos a ordenar prioridades y entender qué conviene hacer paso a paso.",
  },
];

export default function About() {
  return (
    <section
      className="py-28"
      style={{
        background: "var(--bg-secondary)",
        borderTop: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Encabezado */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <p className="section-label justify-center mb-5">POR QUÉ ELEGIRNOS</p>
          <h2
            className="font-display font-bold text-white text-balance"
            style={{
              fontSize: "clamp(1.875rem, 3.5vw, 3rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
            }}
          >
            Los problemas que resolvemos para tu negocio
          </h2>
        </div>

        {/* Grid de problemas */}
        <div className="grid md:grid-cols-2 gap-5 max-w-6xl mx-auto mb-16">
          {problems.map((problem) => (
            <div
              key={problem.number}
              className="dark-card group p-8 flex flex-col gap-5"
            >
              {/* Número + título en línea */}
              <div className="flex items-start gap-5">
                <span
                  className="font-display font-bold text-2xl leading-none shrink-0 mt-0.5 tabular-nums"
                  style={{ color: "rgba(232, 71, 10, 0.35)" }}
                >
                  {problem.number}
                </span>
                <h3 className="text-lg font-display font-bold text-white leading-snug">
                  {problem.title}
                </h3>
              </div>

              {/* Separador */}
              <div className="geo-line" />

              {/* Descripción */}
              <p
                className="text-sm leading-[1.75]"
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
            className="btn-primary font-display"
          >
            HABLAR CON GROVIA
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H5M12 2V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

      </div>
    </section>
  );
}
