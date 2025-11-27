"use client";

import { useState } from "react";
import emailjs from '@emailjs/browser';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { EnvelopeIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

export default function ContactoPage() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: ""
  });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.nombre.trim()) {
      newErrors.nombre = "El nombre es requerido";
    }

    if (!formData.email.trim()) {
      newErrors.email = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email inválido";
    }

    if (!formData.mensaje.trim()) {
      newErrors.mensaje = "El mensaje es requerido";
    } else if (formData.mensaje.trim().length < 10) {
      newErrors.mensaje = "El mensaje debe tener al menos 10 caracteres";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      // Enviar email usando EmailJS
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          from_name: formData.nombre,
          from_email: formData.email,
          message: formData.mensaje,
          to_email: 'estudionomade2025@gmail.com'
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      setSubmitSuccess(true);
      setFormData({ nombre: "", email: "", mensaje: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Error al enviar email:', error);
      alert('Hubo un error al enviar el mensaje. Por favor intenta de nuevo.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  return (
    <main className="min-h-screen bg-humo">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <EnvelopeIcon className="w-16 h-16 text-lavanda mx-auto mb-6" />
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-oscuro mb-6">
              Contacto
            </h1>
            <p className="text-xl text-oscuro/70">
              ¿Tienes un proyecto en mente? Conversemos sobre cómo hacerlo realidad
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            {submitSuccess && (
              <div className="mb-8 p-6 bg-green-50 border-2 border-green-200 rounded-2xl flex items-center gap-4">
                <CheckCircleIcon className="w-8 h-8 text-green-600 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-green-900 mb-1">
                    ¡Mensaje enviado!
                  </h3>
                  <p className="text-green-700 text-sm">
                    Gracias por contactarme. Te responderé lo antes posible.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 border border-lavanda/20 shadow-lg">
              {/* Nombre */}
              <div className="mb-6">
                <label htmlFor="nombre" className="block text-sm font-semibold text-oscuro mb-2">
                  Nombre *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.nombre
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-lavanda/20 focus:border-lavanda'
                  }`}
                  placeholder="Tu nombre completo"
                />
                {errors.nombre && (
                  <p className="mt-2 text-sm text-red-600">{errors.nombre}</p>
                )}
              </div>

              {/* Email */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-semibold text-oscuro mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-lavanda/20 focus:border-lavanda'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>

              {/* Mensaje */}
              <div className="mb-8">
                <label htmlFor="mensaje" className="block text-sm font-semibold text-oscuro mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                  rows={6}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors resize-none ${
                    errors.mensaje
                      ? 'border-red-300 focus:border-red-500'
                      : 'border-lavanda/20 focus:border-lavanda'
                  }`}
                  placeholder="Cuéntame sobre tu proyecto..."
                />
                {errors.mensaje && (
                  <p className="mt-2 text-sm text-red-600">{errors.mensaje}</p>
                )}
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 bg-violeta text-white font-semibold rounded-full hover:bg-violeta/90 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </form>

            {/* Info adicional */}
            <div className="mt-12 text-center">
              <p className="text-oscuro/70 mb-4">
                También puedes escribirme directamente a:
              </p>
              <a
                href="mailto:estudionomade2025@gmail.com"
                className="text-lavanda hover:text-violeta font-medium transition-colors"
              >
                estudionomade2025@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
