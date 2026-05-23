"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  CheckIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
  SparklesIcon,
  MegaphoneIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

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
      "Integración con formularios, WhatsApp o campañas",
    ],
    destacado: true,
    icon: RocketLaunchIcon,
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
      "Pensada como sistema, no como folleto",
    ],
    destacado: false,
    icon: DevicePhoneMobileIcon,
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
      "Fácil de compartir",
    ],
    destacado: false,
    icon: SparklesIcon,
  },
  {
    nombre: "E-commerce",
    queEs: "Un sistema inicial para salir al mundo con una marca sólida y funcional.",
    paraQueSirve: "Para lanzar tu proyecto con una presencia digital coherente desde el día uno.",
    caracteristicas: [
      "Tienda online automáticamente integrada a tu web",
      "Mensaje y estructura optimizada",
      "Configuración básica de captación de clientes",
      "Preparado para crecer",
      "Todo conectado en un mismo sistema",
    ],
    destacado: false,
    icon: MegaphoneIcon,
  },
];

export default function ServiciosPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({ nombre: "", email: "", descripcion: "" });

  const handleSubmitInvitacion = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "5492233491780";
    const mensaje = `*Consulta por Invitación Digital*%0A%0A*Nombre:* ${formData.nombre}%0A*Email:* ${formData.email}%0A*Descripción:*%0A${formData.descripcion}`;
    window.open(`https://wa.me/${phoneNumber}?text=${mensaje}`, "_blank");
    setShowModal(false);
    setFormData({ nombre: "", email: "", descripcion: "" });
  };

  return (
    <main className="min-h-screen" style={{ background: "var(--bg-primary)" }}>
      <Header />

      {/* ── Hero ── */}
      <section
        className="pt-32 pb-16 relative overflow-hidden"
        style={{ background: "var(--bg-hero-gradient)" }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="flex items-center justify-center gap-3 mb-6">
              <span className="h-px w-8 flex-shrink-0" style={{ background: "var(--accent-orange)" }} />
              <span className="text-[11px] font-medium tracking-[0.18em] uppercase" style={{ color: "var(--accent-orange)" }}>
                DESARROLLO WEB & MARKETING
              </span>
              <span className="h-px w-8 flex-shrink-0" style={{ background: "var(--accent-orange)" }} />
            </p>
            <h1 className="font-display font-bold text-white mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
              Servicios
            </h1>
            <p className="text-lg mb-6" style={{ color: "var(--text-gray)" }}>
              Desarrollo web + Estrategia de marketing
            </p>
            <span
              className="inline-block px-6 py-2.5 text-sm font-semibold rounded-full"
              style={{
                background: "rgba(232,71,10,0.1)",
                border: "1px solid rgba(232,71,10,0.3)",
                color: "var(--accent-orange)",
              }}
            >
              💬 Consultoría gratuita · Presupuesto personalizado
            </span>
          </div>
        </div>
      </section>

      {/* ── Cards de servicios ── */}
      <section className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {servicios.map((servicio, index) => {
              const Icon = servicio.icon;
              return (
                <div
                  key={index}
                  className="dark-card p-8 flex flex-col relative"
                  style={
                    servicio.destacado
                      ? {
                          border: "1px solid rgba(232,71,10,0.45)",
                          boxShadow: "0 0 40px rgba(232,71,10,0.12)",
                        }
                      : {}
                  }
                >
                  {servicio.destacado && (
                    <span
                      className="absolute top-6 right-6 px-4 py-1 text-xs font-bold tracking-wider rounded-full"
                      style={{
                        background: "rgba(232,71,10,0.15)",
                        border: "1px solid rgba(232,71,10,0.4)",
                        color: "var(--accent-orange)",
                      }}
                    >
                      RECOMENDADO
                    </span>
                  )}

                  {/* Icon + título */}
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: "rgba(232,71,10,0.1)" }}
                    >
                      <Icon className="w-6 h-6" style={{ color: "var(--accent-orange)" }} />
                    </div>
                    <h2 className="font-display font-bold text-white text-xl leading-tight pt-1">
                      {servicio.nombre}
                    </h2>
                  </div>

                  {/* Qué es */}
                  <div className="mb-4">
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-1" style={{ color: "var(--accent-orange)" }}>
                      QUÉ ES
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                      {servicio.queEs}
                    </p>
                  </div>

                  {/* Para qué sirve */}
                  <div className="mb-5">
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-1" style={{ color: "var(--accent-orange)" }}>
                      PARA QUÉ SIRVE
                    </p>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-gray)" }}>
                      {servicio.paraQueSirve}
                    </p>
                  </div>

                  {/* Características */}
                  <div className="mb-8 flex-1">
                    <p className="text-[11px] font-bold tracking-[0.12em] uppercase mb-3" style={{ color: "var(--accent-orange)" }}>
                      CARACTERÍSTICAS
                    </p>
                    <ul className="space-y-2.5">
                      {servicio.caracteristicas.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="flex-shrink-0 mt-0.5 text-xs" style={{ color: "var(--accent-orange)" }}>—</span>
                          <span className="text-sm" style={{ color: "var(--text-gray)" }}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  {servicio.nombre === "Invitaciones Digitales / Páginas de Eventos" ? (
                    <button
                      onClick={() => setShowModal(true)}
                      className="w-full px-6 py-3 font-display font-bold text-sm tracking-wider text-white rounded-full transition-all hover:opacity-90 hover:scale-[1.02]"
                      style={{
                        background: "var(--accent-orange)",
                        boxShadow: "0 4px 24px rgba(232,71,10,0.35)",
                      }}
                    >
                      Consultar por WhatsApp
                    </button>
                  ) : (
                    <button
                      onClick={() => window.open("https://forms.gle/CNwLHM2Tj2PDSEWYA", "_blank")}
                      className="w-full px-6 py-3 font-display font-bold text-sm tracking-wider text-white rounded-full transition-all duration-250 hover:bg-white hover:text-[#06080f]"
                      style={{ border: "1px solid rgba(255,255,255,0.3)" }}
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

      {/* ── Modal Invitaciones ── */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          style={{ background: "rgba(0,0,0,0.7)", backdropFilter: "blur(12px)" }}
        >
          <div
            className="relative w-full max-w-lg p-8 rounded-3xl animate-fade-in"
            style={{
              background: "rgba(13,15,31,0.98)",
              border: "1px solid var(--card-border)",
              boxShadow: "0 0 80px rgba(120,60,255,0.2)",
            }}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 right-5 p-2 rounded-full transition-colors hover:bg-white/10"
              aria-label="Cerrar"
            >
              <XMarkIcon className="w-5 h-5 text-white/60" />
            </button>

            <h3 className="font-display font-bold text-white text-2xl mb-1">
              Invitaciones Digitales
            </h3>
            <p className="text-sm mb-8" style={{ color: "var(--text-gray)" }}>
              Completá tus datos y te contactamos por WhatsApp
            </p>

            <form onSubmit={handleSubmitInvitacion} className="space-y-5">
              {[
                { id: "nombre", label: "Nombre completo", type: "text", placeholder: "Tu nombre" },
                { id: "email", label: "Correo electrónico", type: "email", placeholder: "tu@email.com" },
              ].map((field) => (
                <div key={field.id}>
                  <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-white/60">
                    {field.label} *
                  </label>
                  <input
                    type={field.type}
                    required
                    value={formData[field.id as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [field.id]: e.target.value })}
                    placeholder={field.placeholder}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid var(--card-border)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,71,10,0.5)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")}
                  />
                </div>
              ))}
              <div>
                <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-white/60">
                  Descripción *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.descripcion}
                  onChange={(e) => setFormData({ ...formData, descripcion: e.target.value })}
                  placeholder="Contanos qué tipo de invitación necesitás (boda, cumpleaños, evento, etc.) y qué estilo tenés en mente..."
                  className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all resize-none"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--card-border)",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(232,71,10,0.5)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "var(--card-border)")}
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 px-6 py-3 text-sm font-bold rounded-full transition-all hover:bg-white/10"
                  style={{ border: "1px solid rgba(255,255,255,0.2)", color: "var(--text-gray)" }}
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-6 py-3 text-sm font-display font-bold text-white rounded-full transition-all hover:opacity-90"
                  style={{
                    background: "var(--accent-orange)",
                    boxShadow: "0 4px 24px rgba(232,71,10,0.35)",
                  }}
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
