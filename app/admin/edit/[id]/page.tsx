"use client";

import { useState, use } from "react";
import Link from "next/link";
import { ArrowLeft, Save, Eye, Share2, Download } from "lucide-react";

export default function EditInvitationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [formData, setFormData] = useState({
    eventType: "Boda",
    title: "Nuestra Boda",
    names: "Ana & Carlos",
    date: "2025-12-31",
    time: "18:00",
    location: "Salón de Eventos",
    address: "Calle Principal 123, Ciudad",
    message: "Tenemos el honor de invitarte a celebrar con nosotros",
    rsvpEnabled: true,
    galleryEnabled: true,
    countdownEnabled: true,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver</span>
            </Link>
            <div className="flex gap-3">
              <Link
                href={`/invitation/${id}`}
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
              >
                <Eye className="w-4 h-4" />
                Vista Previa
              </Link>
              <button className="flex items-center gap-2 px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition">
                <Save className="w-4 h-4" />
                Guardar
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Editor Panel */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h2 className="text-2xl font-serif font-bold mb-6">Personaliza tu Invitación</h2>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Tipo de Evento
                  </label>
                  <select
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                  >
                    <option>Boda</option>
                    <option>XV Años</option>
                    <option>Cumpleaños</option>
                    <option>Baby Shower</option>
                    <option>Bautizo</option>
                    <option>Otro</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Título del Evento
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Ej: Nuestra Boda"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Nombres
                  </label>
                  <input
                    type="text"
                    name="names"
                    value={formData.names}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Ej: Ana & Carlos"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Fecha
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora
                    </label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Lugar
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Nombre del lugar"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dirección
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Dirección completa"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje Personal
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Mensaje de bienvenida para tus invitados"
                  />
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="countdownEnabled"
                      checked={formData.countdownEnabled}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-violet-500 rounded focus:ring-violet-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Activar cuenta regresiva</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="rsvpEnabled"
                      checked={formData.rsvpEnabled}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-violet-500 rounded focus:ring-violet-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Habilitar confirmación de asistencia</span>
                  </label>
                  <label className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      name="galleryEnabled"
                      checked={formData.galleryEnabled}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-violet-500 rounded focus:ring-violet-500"
                    />
                    <span className="text-sm font-medium text-gray-700">Incluir galería de fotos</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Compartir Invitación</h3>
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                  <Share2 className="w-4 h-4" />
                  Compartir
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition">
                  <Download className="w-4 h-4" />
                  Descargar
                </button>
              </div>
            </div>
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-24 h-fit">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Vista Previa</h3>
              <div className="bg-gradient-to-br from-purple-100 to-purple-100 rounded-lg p-8 min-h-[600px] flex flex-col items-center justify-center text-center">
                <div className="space-y-6">
                  <p className="text-sm text-gray-600 uppercase tracking-wide">{formData.eventType}</p>
                  <h1 className="text-4xl font-serif font-bold text-gray-800">{formData.title}</h1>
                  <h2 className="text-3xl font-serif text-violet-700">{formData.names}</h2>
                  <p className="text-gray-700 max-w-md">{formData.message}</p>
                  <div className="space-y-2">
                    <p className="text-lg font-semibold text-gray-800">
                      {new Date(formData.date).toLocaleDateString('es-ES', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-gray-600">{formData.time} hrs</p>
                  </div>
                  <div className="space-y-1">
                    <p className="font-semibold text-gray-800">{formData.location}</p>
                    <p className="text-sm text-gray-600">{formData.address}</p>
                  </div>
                  {formData.rsvpEnabled && (
                    <button className="bg-violet-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-violet-700 transition">
                      Confirmar Asistencia
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
