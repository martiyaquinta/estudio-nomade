import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export default function About() {
  const problems = [
    {
      title: "Pierdo oportunidades por no tener una web seria",
      description: "Tu empresa necesita una buena presencia online, pero no querés algo improvisado. Diseñamos sitios que transmiten confianza, explican claro lo que hacés y te ayudan a captar más clientes desde el primer día."
    },
    {
      title: "Quiero ser primero en Google pero no sé por dónde empezar",
      description: "SEO, campañas, blog, Google Ads, posicionamiento... Suena complejo. Nosotros lo simplificamos y armamos un plan realista para que empieces a tener visibilidad y resultados."
    },
    {
      title: "Necesitamos una web compleja, con funcionalidades específicas",
      description: "Contamos con un equipo completo: programadores, diseñadores, maquetadores y estrategas. Abordamos proyectos grandes, complejos y personalizados para empresas que necesitan soluciones en el siguiente nivel."
    },
    {
      title: "No sé cómo arrancar, pero sé que necesito hacer algo",
      description: "Muchos clientes llegan con un mix de dudas, urgencias y ganas de mejorar. Tengamos una charla sin compromiso y te ayudamos a ordenar prioridades y entender qué conviene hacer paso a paso."
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Título principal */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            ¿Qué problemas resuelve un sitio web profesional para tu empresa?
          </h2>
        </div>

        {/* Grid de problemas */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-humo p-8 rounded-2xl border border-oscuro/10 hover:border-orange/30 transition-all hover:shadow-xl group"
            >
              <div className="flex items-start gap-4 mb-4">
                <ExclamationTriangleIcon className="w-8 h-8 text-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-navy leading-tight">
                  {problem.title}
                </h3>
              </div>
              <p className="text-oscuro/70 leading-relaxed pl-12">
                {problem.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/contacto"
            className="inline-flex items-center gap-3 px-10 py-5 bg-orange text-white font-montserrat font-bold rounded-full hover:bg-orange-dark transition-all transform hover:scale-105 shadow-xl text-lg"
          >
            QUIERO UNA ASESORÍA DE MARKETING GRATUITA
          </Link>
        </div>
      </div>
    </section>
  );
}
