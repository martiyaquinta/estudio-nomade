"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Link from "next/link";
import { CheckIcon, RocketLaunchIcon, DevicePhoneMobileIcon, SparklesIcon, MegaphoneIcon, X } from "@heroicons/react/24/outline";

export default function ServiciosPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    descripcion: ''
  });

  const handleInvitacionClick = () => {
    setShowModal(true);
  };

  const handleSubmitInvitacion = (e: React.FormEvent) => {
    e.preventDefault();
    
    const phoneNumber = '5492233491780';
    const mensaje = `*Consulta por Invitación Digital*%0A%0A*Nombre:* ${formData.nombre}%0A*Email:* ${formData.email}%0A*Descripción:*%0A${formData.descripcion}`;
    
    window.open(`https://wa.me/${phoneNumber}?text=${mensaje}`, '_blank');
    
    // Cerrar modal y limpiar formulario
    setShowModal(false);
    setFormData({ nombre: '', email: '', descripcion: '' });
  };

  const handleContactClick = () => {
    window.open('https://forms.gle/CNwLHM2Tj2PDSEWYA', '_blank');
  };

  const servicios = [
    {
      nombre: "Landing Page",
      queEs: "Una página pensada para un solo objetivo: convertir visitas en contactos o ventas.",
      paraQueSirve: "Para lanzar un producto, servicio o campaña de forma clara, enfocada y medible.",
      caracteristicas: [
        "Mensaje claro y directo",
        "Diseño enfocado en conversión",
        "Estructura estratégica de contenido",
        "Adaptada a mobile",
        "Integración con formularios, WhatsApp o campañas"
      ],
      destacado: true,
      icon: RocketLaunchIcon,
      colores: "violeta"
    },
    {
      nombre: "Web Institucional",
      queEs: "El sitio principal de tu marca: tu base digital. De 3 a 5 secciones.",
      paraQueSirve: "Para presentar quién sos, qué hacés y generar confianza en tus clientes.",
      caracteristicas: [
        "Diseño alineado a tu identidad",
        "Estructura clara y profesional",
        "Escalable en el tiempo",
        "Optimizada para todos los dispositivos",
        "Pensada como sistema, no como folleto"
      ],
      destacado: false,
      icon: DevicePhoneMobileIcon,
      colores: "navy"
    },
    {
      nombre: "Invitaciones Digitales / Páginas de Eventos",
      queEs: "Piezas digitales interactivas para eventos, lanzamientos o celebraciones.",
      paraQueSirve: "Para comunicar, invitar y organizar de forma simple, moderna y elegante.",
      caracteristicas: [
        "Diseño personalizado",
        "Versión mobile first",
        "Información clara y accesible",
        "Posibilidad de confirmación de asistencia",
        "Fácil de compartir"
      ],
      destacado: false,
      icon: SparklesIcon,
      colores: "lavanda"
    },
    {
      nombre: "Pack Lanzamiento (Ecommerce + estrategia de marketing)",
      queEs: "Un sistema inicial para salir al mundo con una marca sólida y funcional.",
      paraQueSirve: "Para lanzar tu proyecto con una presencia digital coherente desde el día uno.",
      caracteristicas: [
        "Web + estrategias de marketing",
        "Mensaje y estructura optimizada",
        "Configuración básica de captación de clientes",
        "Preparado para crecer",
        "Todo conectado en un mismo sistema"
      ],
      destacado: false,
      icon: MegaphoneIcon,
      colores: "orange"
    }
  ];

  return (
    <main className="min-h-screen bg-humo">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-[#0b1226] via-navy to-[#0b1226]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-white mb-6">
              Servicios
            </h1>
            <p className="text-xl text-white/90 mb-4">
              Desarrollo web + Estrategia de marketing
            </p>
            <div className="inline-block px-6 py-3 bg-orange/20 border border-orange/50 rounded-full">
              <p className="text-orange font-semibold">
                💬 Consultoría gratuita · Presupuesto personalizado
              </p>
            </div>
            <div className="mt-6 flex items-center justify-center gap-3">
              <span className="text-lavanda text-sm">Estudio Nómade</span>
              <span className="text-white/50">·</span>
              <span className="text-orange text-sm">Grovia Marketing</span>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios */}
      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => {
              const IconComponent = servicio.icon;
              const borderColor = servicio.colores === "orange" ? "border-orange" :
                                 servicio.colores === "navy" ? "border-navy" :
                                 servicio.colores === "lavanda" ? "border-lavanda" :
                                 "border-violeta";
              const bgColor = servicio.colores === "orange" ? "bg-orange/10" :
                             servicio.colores === "navy" ? "bg-navy/10" :
                             servicio.colores === "lavanda" ? "bg-lavanda/10" :
                             "bg-violeta/10";
              const iconColor = servicio.colores === "orange" ? "text-orange" :
                               servicio.colores === "navy" ? "text-navy" :
                               servicio.colores === "lavanda" ? "text-lavanda" :
                               "text-violeta";
              const buttonStyles = servicio.destacado
                ? "bg-violeta text-white hover:bg-violeta/90"
                : servicio.colores === "orange"
                  ? "border-2 border-orange text-orange hover:bg-orange hover:text-white"
                  : servicio.colores === "navy"
                    ? "border-2 border-navy text-navy hover:bg-navy hover:text-white"
                    : servicio.colores === "lavanda"
                      ? "border-2 border-lavanda text-lavanda hover:bg-lavanda hover:text-white"
                      : "border-2 border-violeta text-violeta hover:bg-violeta hover:text-white";
              
              return (
                <div
                  key={index}
                  className={`bg-white rounded-2xl p-8 border-2 transition-all duration-300 ${
                    servicio.destacado
                      ? `${borderColor} shadow-xl scale-105`
                      : `${borderColor}/20 hover:${borderColor} hover:shadow-lg`
                  }`}
                >
                  {servicio.destacado && (
                    <span className="inline-block px-4 py-1 bg-violeta text-white text-sm font-medium rounded-full mb-4">
                      Recomendado
                    </span>
                  )}
                  
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`w-14 h-14 ${bgColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <IconComponent className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <h2 className="text-2xl font-bold text-oscuro">
                      {servicio.nombre}
                    </h2>
                  </div>
                  
                  {servicio.queEs && (
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-oscuro mb-1">Qué es</h3>
                      <p className="text-oscuro/70">{servicio.queEs}</p>
                    </div>
                  )}

                  {servicio.paraQueSirve && (
                    <div className="mb-4">
                      <h3 className="text-sm font-bold text-oscuro mb-1">Para qué sirve</h3>
                      <p className="text-oscuro/70">{servicio.paraQueSirve}</p>
                    </div>
                  )}

                  {servicio.caracteristicas && (
                    <>
                      <h3 className="text-sm font-bold text-oscuro mb-3">Características clave</h3>
                      <ul className="space-y-3 mb-8">
                        {servicio.caracteristicas.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="text-oscuro/40 text-sm">—</span>
                            <span className="text-oscuro/80 text-sm">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  {servicio.nombre === "Invitaciones Digitales / Páginas de Eventos" ? (
                    <button
                      onClick={handleInvitacionClick}
                      className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all transform hover:scale-105 ${buttonStyles}`}
                    >
                      Consultar por WhatsApp
                    </button>
                  ) : (
                    <button
                      onClick={handleContactClick}
                      className={`block w-full text-center px-6 py-3 font-semibold rounded-full transition-all transform hover:scale-105 ${buttonStyles}`}
                    >
                      Contactar
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Modal para Invitaciones Digitales */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-8 relative animate-fade-in">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition"
            >
              <X className="w-6 h-6 text-gray-600" />
            </button>

            <div className="mb-6">
              <h3 className="text-3xl font-display font-bold text-navy mb-2">
                Invitaciones Digitales
              </h3>
              <p className="text-oscuro/70">
                Completá tus datos y te contactaremos por WhatsApp
              </p>
            </div>

            <form onSubmit={handleSubmitInvitacion} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-semibold text-oscuro mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-oscuro/20 focus:border-lavanda focus:ring-2 focus:ring-lavanda/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-oscuro mb-2">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-oscuro/20 focus:border-lavanda focus:ring-2 focus:ring-lavanda/20 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="descripcion" className="block text-sm font-semibold text-oscuro mb-2">
                  Descripción de la invitación *
                </label>
                <textarea
                  id="descripcion"
                  required
                  rows={4}
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-oscuro/20 focus:border-lavanda focus:ring-2 focus:ring-lavanda/20 outline-none transition-all resize-none"
                  placeholder="Contanos qué tipo de invitación necesitás (boda, cumpleaños, evento, etc.) y qué estilo tenés en mente..."
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:bg-gray-50 transition-all"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 bg-lavanda text-white rounded-full font-semibold hover:bg-lavanda/90 transition-all transform hover:scale-105 shadow-lg"
                >
                  Enviar a WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
}
