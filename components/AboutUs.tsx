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
                Soy Valentín, técnico en marketing y actualmente estudiante de la Licenciatura en Marketing. Me formé en marketing digital con el objetivo de potenciar mi carrera y brindar un servicio profesional y responsable a mis clientes. En un mundo lleno de información y estímulos, creo que el verdadero valor está en simplificar y enfocarse en lo que realmente importa. Desde esa mirada nace mi alianza con Estudio Nómade, con quien trabajamos para ofrecer un servicio integral. La idea es simple: crear recorridos claros y coherentes, y lograr que la experiencia de los usuarios sea diferente al resto. 
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
                Soy Martina, creadora de Estudio Nómade x Grovia.
                Actualmente estudio la Tecnicatura en Redes Informáticas y Telecomunicaciones y me dedico al diseño y desarrollo web.
                <br /><br />
                Creo sitios web para personas y marcas que quieren una presencia online clara, prolija y que funcione. Me gusta trabajar de forma cercana, entender cada proyecto y transformar ideas en páginas simples, lindas y útiles.
                <br /><br />
                Creo en el trabajo bien hecho, en los detalles y en crear soluciones digitales que realmente ayuden.
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
