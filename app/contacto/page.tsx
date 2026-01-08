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
                href="https://wa.me/5493885579898"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-green-500 text-white font-montserrat font-bold rounded-full hover:bg-green-600 transition-all transform hover:scale-105 shadow-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Chatear por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
