"use client";

import { useState, use, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, Save, Eye, Share2, Download } from "lucide-react";
import { invitationStorage } from "@/lib/storage";

export default function EditInvitationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isSaved, setIsSaved] = useState(false);
  const [invitationId, setInvitationId] = useState<string | null>(null);
  
  const [formData, setFormData] = useState({
    eventType: "Boda",
    title: "Nuestra Boda",
    names: "Ana & Carlos",
    date: "2025-12-31",
    time: "18:00",
    location: "Salón de Eventos",
    address: "Calle Principal 123, Ciudad",
    mapUrl: "",
    message: "Tenemos el honor de invitarte a celebrar con nosotros",
    ceremonyTime: "18:00",
    receptionTime: "20:00",
    rsvpEnabled: true,
    galleryEnabled: true,
    countdownEnabled: true,
    photoUrls: [] as string[],
    photoInput: "", // Campo temporal para agregar URLs
    cbu: "",
    alias: "",
    titular: "",
    banco: "",
    dressCode: "",
    hashtag: "",
    giftMessage: "",
  });

  // Cargar invitación existente si viene el parámetro invId
  useEffect(() => {
    const invId = searchParams.get('invId');
    if (invId) {
      const invitation = invitationStorage.getById(invId);
      if (invitation) {
        setFormData({
          eventType: invitation.eventType,
          title: invitation.title,
          names: invitation.names,
          date: invitation.date,
          time: invitation.time,
          location: invitation.location,
          address: invitation.address,
          mapUrl: invitation.mapUrl || "",
          message: invitation.message,
          ceremonyTime: invitation.ceremonyTime || invitation.time,
          receptionTime: invitation.receptionTime || "",
          rsvpEnabled: invitation.rsvpEnabled,
          galleryEnabled: invitation.galleryEnabled,
          countdownEnabled: invitation.countdownEnabled,
          photoUrls: invitation.photoUrls || [],
          photoInput: "",
          cbu: invitation.bankAccount?.cbu || "",
          alias: invitation.bankAccount?.alias || "",
          titular: invitation.bankAccount?.titular || "",
          banco: invitation.bankAccount?.banco || "",
          dressCode: invitation.dressCode || "",
          hashtag: invitation.hashtag || "",
          giftMessage: invitation.giftMessage || "",
        });
        setInvitationId(invId);
      }
    }
  }, [searchParams]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
    setIsSaved(false);
  };

  const handleAddPhoto = () => {
    if (formData.photoInput.trim()) {
      setFormData({
        ...formData,
        photoUrls: [...formData.photoUrls, formData.photoInput.trim()],
        photoInput: "",
      });
      setIsSaved(false);
    }
  };

  const handleRemovePhoto = (index: number) => {
    setFormData({
      ...formData,
      photoUrls: formData.photoUrls.filter((_, i) => i !== index),
    });
    setIsSaved(false);
  };

  const handleSave = () => {
    const dataToSave = {
      eventType: formData.eventType,
      title: formData.title,
      names: formData.names,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      address: formData.address,
      mapUrl: formData.mapUrl,
      message: formData.message,
      ceremonyTime: formData.ceremonyTime,
      receptionTime: formData.receptionTime,
      rsvpEnabled: formData.rsvpEnabled,
      galleryEnabled: formData.galleryEnabled,
      countdownEnabled: formData.countdownEnabled,
      photoUrls: formData.photoUrls,
      bankAccount: (formData.cbu || formData.alias || formData.titular || formData.banco) ? {
        cbu: formData.cbu,
        alias: formData.alias,
        titular: formData.titular,
        banco: formData.banco,
      } : undefined,
      dressCode: formData.dressCode,
      hashtag: formData.hashtag,
      giftMessage: formData.giftMessage,
      templateId: parseInt(id),
    };

    if (invitationId) {
      // Actualizar invitación existente
      invitationStorage.update(invitationId, dataToSave);
    } else {
      // Crear nueva invitación
      const saved = invitationStorage.save(dataToSave);
      setInvitationId(saved.id);
    }
    
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000);
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
              {invitationId && (
                <Link
                  href={`/invitation/${invitationId}`}
                  target="_blank"
                  className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <Eye className="w-4 h-4" />
                  Vista Previa
                </Link>
              )}
              <button 
                onClick={handleSave}
                className={`flex items-center gap-2 px-4 py-2 text-white rounded-lg transition ${
                  isSaved ? 'bg-green-600' : 'bg-violet-600 hover:bg-violet-700'
                }`}
              >
                <Save className="w-4 h-4" />
                {isSaved ? '¡Guardado!' : 'Guardar'}
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

                {/* Nuevos campos mejorados */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora Ceremonia
                    </label>
                    <input
                      type="time"
                      name="ceremonyTime"
                      value={formData.ceremonyTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Hora Recepción
                    </label>
                    <input
                      type="time"
                      name="receptionTime"
                      value={formData.receptionTime}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    URL del Mapa (Google Maps Embed)
                  </label>
                  <input
                    type="url"
                    name="mapUrl"
                    value={formData.mapUrl}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="https://www.google.com/maps/embed?pb=..."
                  />
                  <p className="text-xs text-gray-500 mt-1">Obtén el código embed desde Google Maps</p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Dress Code
                  </label>
                  <input
                    type="text"
                    name="dressCode"
                    value={formData.dressCode}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Ej: Elegante, Casual, Formal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Hashtag del Evento
                  </label>
                  <input
                    type="text"
                    name="hashtag"
                    value={formData.hashtag}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="#MiBoda2025"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Fotos para Galería (URLs)
                  </label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="url"
                      name="photoInput"
                      value={formData.photoInput}
                      onChange={handleInputChange}
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="URL de la foto"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddPhoto())}
                    />
                    <button
                      type="button"
                      onClick={handleAddPhoto}
                      className="px-4 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition"
                    >
                      Agregar
                    </button>
                  </div>
                  {formData.photoUrls.length > 0 && (
                    <div className="space-y-2">
                      {formData.photoUrls.map((url, index) => (
                        <div key={index} className="flex items-center gap-2 text-sm bg-gray-50 p-2 rounded">
                          <span className="flex-1 truncate">{url}</span>
                          <button
                            type="button"
                            onClick={() => handleRemovePhoto(index)}
                            className="text-red-600 hover:text-red-700"
                          >
                            Eliminar
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="border-t pt-4">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">Datos Bancarios para Regalos</h4>
                  <div className="space-y-3">
                    <input
                      type="text"
                      name="titular"
                      value={formData.titular}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Titular de la cuenta"
                    />
                    <input
                      type="text"
                      name="banco"
                      value={formData.banco}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Banco"
                    />
                    <input
                      type="text"
                      name="cbu"
                      value={formData.cbu}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="CBU (22 dígitos)"
                    />
                    <input
                      type="text"
                      name="alias"
                      value={formData.alias}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                      placeholder="Alias"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Mensaje de Regalos
                  </label>
                  <textarea
                    name="giftMessage"
                    value={formData.giftMessage}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-violet-500 focus:border-transparent"
                    placeholder="Tu presencia es nuestro mejor regalo..."
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
