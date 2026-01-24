"use client";

import Image from "next/image";

export default function AboutUs() {
  return (
    <section id="sobre-nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-display font-bold text-navy mb-4">
              Sobre nosotros
            </h2>
            <p className="text-xl text-oscuro/70">
              Dos equipos especializados trabajando juntos para tu éxito digital
            </p>
          </div>

          {/* Grid de equipos */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Grovia */}
            <div className="bg-gradient-to-br from-orange/5 to-orange/10 p-8 rounded-3xl border border-orange/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-orange rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">📢</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Grovia Marketing</h3>
                  <p className="text-sm text-orange font-semibold">Técnico en Marketing</p>
                </div>
              </div>
              <p className="text-oscuro/80 leading-relaxed text-lg">
              Con el tiempo entendí que muchos negocios hacen esfuerzos constantes, pero sin una dirección clara. Para mí, el marketing no es solo una herramienta, es una forma de ordenar ideas, mensajes y decisiones. Me apasiona lo que hago y trabajo con quienes buscan crecer con criterio, no con promesas vacías.
              </p>
            </div>

            {/* Estudio Nómade */}
            <div className="bg-gradient-to-br from-lavanda/5 to-violeta/10 p-8 rounded-3xl border border-lavanda/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-lavanda rounded-2xl flex items-center justify-center">
                  <span className="text-3xl">💻</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy">Estudio Nómade</h3>
                  <p className="text-sm text-lavanda font-semibold">Desarrollo Web y Sistemas</p>
                </div>
              </div>
              <p className="text-oscuro/80 leading-relaxed text-lg">
                Actualmente estoy cursando la carrera de Tecnicatura en Redes Informáticas y Telecomunicaciones. Me formé en desarrollo web y diseño digital a través de distintos cursos, y con el tiempo descubrí que lo que más me gusta es poder trabajar online creando soluciones reales para personas y negocios.
                <br /><br />
                Me dedico a diseñar y desarrollar sitios web profesionales, funcionales y optimizados, con foco en la experiencia del usuario, el orden y la claridad. Disfruto transformar ideas en herramientas digitales que no solo se vean bien, sino que realmente funcionen y ayuden a resolver necesidades concretas.
                <br /><br />
                Me motiva poder acompañar a cada proyecto, entender sus problemáticas y aportar soluciones simples, eficientes y pensadas a medida. Creo en el trabajo bien hecho, en el detalle y en construir experiencias digitales que aporten valor real.
              </p>
            </div>
          </div>

          {/* Juntos */}
          <div className="mt-12 bg-gradient-to-br from-navy to-navy-light p-10 rounded-3xl text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              ✨ Juntos, somos tu equipo digital completo
            </h3>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              La combinación perfecta entre <span className="font-bold text-orange">estrategia de marketing</span> y <span className="font-bold text-lavanda">desarrollo técnico</span>. No solo creamos presencia digital, construimos sistemas que venden, conectan y crecen con tu negocio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
