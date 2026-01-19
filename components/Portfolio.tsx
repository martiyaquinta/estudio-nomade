"use client";

import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      nombre: "Tarjeta Digital Pili",
      tipo: "Invitación Digital",
      año: 2025,
      url: "https://tarjeta-digital-pili.vercel.app/",
      color: "from-violeta to-lavanda"
    },
    {
      nombre: "Cabalgatas GR Turismo",
      tipo: "Web Institucional",
      año: 2025,
      url: "https://cabalgatas.grturismoaventura.com/",
      color: "from-orange to-orange-light"
    },
    {
      nombre: "Lo Saludable",
      tipo: "Web Institucional",
      año: 2025,
      url: "https://losaludable.vercel.app/",
      color: "from-lavanda to-violeta"
    },
  ];

  return (
    <section className="py-24 bg-humo">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-display font-bold text-navy mb-4">
            Casos de Éxito
          </h2>
          <p className="text-lg sm:text-xl text-oscuro/60 mb-6">
            Transformamos negocios
          </p>
          <p className="text-xl text-oscuro/70 max-w-3xl mx-auto">
            Diseños que no solo se ven bien: <span className="font-bold text-orange">funcionan</span>. Aumentan ventas, mejoran el posicionamiento en Google y generan más contactos calificados.
          </p>
        </div>

        {/* Grid de proyectos reales */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl border-2 border-oscuro/10 hover:border-orange/30 transition-all hover:shadow-xl group cursor-pointer"
            >
              <div className={`aspect-square bg-gradient-to-br ${project.color} rounded-xl mb-6 flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform`}>
                <div className="text-center text-white p-6">
                  <div className="text-6xl mb-4">🚀</div>
                  <div className="text-sm font-bold opacity-90">{project.año}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-navy mb-2 group-hover:text-orange transition-colors">{project.nombre}</h3>
              <span className="text-sm text-orange font-semibold">{project.tipo}</span>
            </a>
          ))}
        </div>

        {/* Botón ver todos */}
        <div className="text-center">
          <Link
            href="/proyectos"
            className="inline-flex items-center gap-3 px-8 py-4 bg-navy text-white font-montserrat font-bold rounded-full hover:bg-navy-dark transition-all transform hover:scale-105 shadow-lg"
          >
            Ver todos los proyectos →
          </Link>
        </div>

        {/* Testimonial destacado */}
        <div className="max-w-4xl mx-auto bg-white p-10 rounded-3xl shadow-xl border border-oscuro/10 mt-16">
          <div className="flex items-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-orange text-3xl">★</span>
            ))}
          </div>
          <blockquote className="text-2xl text-navy font-semibold mb-6 italic">
            "Notamos un cambio real: Más consultas, más movimiento y sobretodo, más ventas"
          </blockquote>
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-lavanda to-violeta rounded-full flex items-center justify-center text-white font-bold text-xl">
              P
            </div>
            <div>
              <div className="font-bold text-navy">Pablo García</div>
              <div className="text-sm text-oscuro/60">Director Comercial</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
