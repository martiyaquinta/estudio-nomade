"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ContactoPage() {
  const [formData, setFormData] = useState({ nombre: "", email: "", mensaje: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.nombre.trim()) newErrors.nombre = "El nombre es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Email inválido";
    if (!formData.mensaje.trim()) newErrors.mensaje = "El mensaje es requerido";
    else if (formData.mensaje.trim().length < 10) newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    const mensaje = `Hola! Mi nombre es ${formData.nombre}%0A%0AEmail: ${formData.email}%0A%0AMensaje: ${formData.mensaje}`;
    window.open(`https://wa.me/5492233491780?text=${mensaje}`, "_blank");
    setFormData({ nombre: "", email: "", mensaje: "" });
    setSubmitSuccess(true);
    setTimeout(() => setSubmitSuccess(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const inputStyle = (field: string) => ({
    background: "rgba(255,255,255,0.04)",
    border: `1px solid ${
      errors[field]
        ? "rgba(239,68,68,0.6)"
        : focused === field
        ? "rgba(232,71,10,0.5)"
        : "var(--card-border)"
    }`,
    borderRadius: "12px",
    color: "white",
    outline: "none",
    transition: "border-color 0.2s ease",
    width: "100%",
    padding: "14px 16px",
    fontSize: "0.875rem",
  });

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
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
              style={{ background: "rgba(232,71,10,0.12)", border: "1px solid rgba(232,71,10,0.3)" }}
            >
              <EnvelopeIcon className="w-8 h-8" style={{ color: "var(--accent-orange)" }} />
            </div>
            <h1
              className="font-display font-bold text-white mb-4"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}
            >
              Contacto
            </h1>
            <p className="text-lg" style={{ color: "var(--text-gray)" }}>
              ¿Tienes un proyecto en mente? Conversemos sobre cómo hacerlo realidad
            </p>
          </div>
        </div>
      </section>

      {/* ── Formulario ── */}
      <section className="py-24" style={{ background: "var(--bg-primary)" }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">

            {/* Éxito */}
            {submitSuccess && (
              <div
                className="mb-8 p-6 rounded-2xl flex items-center gap-4 animate-fade-in"
                style={{
                  background: "rgba(34,197,94,0.08)",
                  border: "1px solid rgba(34,197,94,0.3)",
                }}
              >
                <CheckCircleIcon className="w-7 h-7 flex-shrink-0" style={{ color: "#22c55e" }} />
                <div>
                  <h3 className="font-display font-bold text-white mb-1">
                    ¡Redirigiendo a WhatsApp!
                  </h3>
                  <p className="text-sm" style={{ color: "var(--text-gray)" }}>
                    Se abrió una nueva ventana con tu mensaje. Si no se abrió, habilitá los popups.
                  </p>
                </div>
              </div>
            )}

            {/* Form card */}
            <div
              className="p-8 sm:p-10 rounded-3xl"
              style={{
                background: "var(--card-bg)",
                border: "1px solid var(--card-border)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Nombre */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-white/60">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    onFocus={() => setFocused("nombre")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tu nombre completo"
                    style={inputStyle("nombre")}
                  />
                  {errors.nombre && (
                    <p className="mt-1.5 text-xs" style={{ color: "#f87171" }}>{errors.nombre}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-white/60">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="tu@email.com"
                    style={inputStyle("email")}
                  />
                  {errors.email && (
                    <p className="mt-1.5 text-xs" style={{ color: "#f87171" }}>{errors.email}</p>
                  )}
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-xs font-bold tracking-wider uppercase mb-2 text-white/60">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    onFocus={() => setFocused("mensaje")}
                    onBlur={() => setFocused(null)}
                    rows={6}
                    placeholder="Cuéntame sobre tu proyecto..."
                    style={{ ...inputStyle("mensaje"), resize: "none" }}
                  />
                  {errors.mensaje && (
                    <p className="mt-1.5 text-xs" style={{ color: "#f87171" }}>{errors.mensaje}</p>
                  )}
                </div>

                {/* Botón */}
                <button
                  type="submit"
                  className="w-full py-4 font-display font-bold text-sm tracking-wider text-white rounded-full transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{
                    background: "var(--accent-orange)",
                    boxShadow: "0 4px 32px rgba(232,71,10,0.4)",
                  }}
                >
                  Enviar mensaje por WhatsApp
                </button>
              </form>
            </div>

            {/* Info de contacto directo */}
            <div className="mt-10 flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="mailto:estudionomade2025@gmail.com"
                className="text-sm font-medium hover:text-white transition-colors"
                style={{ color: "var(--text-gray)" }}
              >
                📧 estudionomade2025@gmail.com
              </a>
              <span className="hidden sm:block" style={{ color: "rgba(255,255,255,0.15)" }}>•</span>
              <a
                href="mailto:groviaagencia@gmail.com"
                className="text-sm font-medium hover:text-white transition-colors"
                style={{ color: "var(--accent-orange)" }}
              >
                📧 groviaagencia@gmail.com
              </a>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
