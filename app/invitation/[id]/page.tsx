"use client";

import { useState, useEffect } from "react";
import { Heart, Calendar, MapPin, Users, Image as ImageIcon, Gift, Music } from "lucide-react";

export default function InvitationPage({ params }: { params: { id: string } }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [showRSVP, setShowRSVP] = useState(false);

  // Datos de ejemplo (en producción vendrían de una base de datos)
  const invitation = {
    eventType: "Boda",
    title: "Nuestra Boda",
    names: "Ana & Carlos",
    date: "2025-12-31T18:00:00",
    location: "Salón de Eventos Jardín",
    address: "Calle Principal 123, Ciudad de México",
    message: "Tenemos el honor de invitarte a celebrar con nosotros el día más importante de nuestras vidas. Tu presencia hará este momento aún más especial.",
    rsvpEnabled: true,
    galleryEnabled: true,
    countdownEnabled: true,
    ceremonyTime: "18:00",
    receptionTime: "20:00",
  };

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(invitation.date).getTime() - new Date().getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [invitation.date]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-purple-100/50" />
        <div className="relative text-center max-w-4xl mx-auto">
          <Heart className="w-16 h-16 mx-auto mb-6 text-pink-500 fill-pink-500 animate-pulse" />
          <p className="text-sm text-gray-600 uppercase tracking-widest mb-4">{invitation.eventType}</p>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-6">
            {invitation.title}
          </h1>
          <h2 className="text-4xl md:text-5xl font-serif text-pink-600 mb-8">
            {invitation.names}
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto mb-12">
            {invitation.message}
          </p>
          
          {/* Date */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl max-w-md mx-auto">
            <Calendar className="w-8 h-8 mx-auto mb-4 text-pink-500" />
            <p className="text-2xl font-serif font-bold text-gray-800 mb-2">
              {new Date(invitation.date).toLocaleDateString('es-ES', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </p>
            <p className="text-lg text-gray-600">{invitation.ceremonyTime} hrs</p>
          </div>
        </div>
      </section>

      {/* Countdown */}
      {invitation.countdownEnabled && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-serif font-bold text-center text-gray-800 mb-12">
              Faltan
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <CountdownUnit value={timeLeft.days} label="Días" />
              <CountdownUnit value={timeLeft.hours} label="Horas" />
              <CountdownUnit value={timeLeft.minutes} label="Minutos" />
              <CountdownUnit value={timeLeft.seconds} label="Segundos" />
            </div>
          </div>
        </section>
      )}

      {/* Event Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Ceremony */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Heart className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-2xl font-serif font-bold mb-2">Ceremonia</h3>
              <p className="text-lg text-gray-600 mb-4">{invitation.ceremonyTime} hrs</p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">{invitation.location}</p>
                <p className="text-sm text-gray-600">{invitation.address}</p>
              </div>
              <button className="mt-6 bg-pink-500 text-white px-6 py-3 rounded-full hover:bg-pink-600 transition flex items-center gap-2 mx-auto">
                <MapPin className="w-4 h-4" />
                Ver Ubicación
              </button>
            </div>

            {/* Reception */}
            <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
              <Music className="w-12 h-12 mx-auto mb-4 text-purple-500" />
              <h3 className="text-2xl font-serif font-bold mb-2">Recepción</h3>
              <p className="text-lg text-gray-600 mb-4">{invitation.receptionTime} hrs</p>
              <div className="space-y-2">
                <p className="font-semibold text-gray-800">{invitation.location}</p>
                <p className="text-sm text-gray-600">{invitation.address}</p>
              </div>
              <button className="mt-6 bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition flex items-center gap-2 mx-auto">
                <MapPin className="w-4 h-4" />
                Ver Ubicación
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* RSVP */}
      {invitation.rsvpEnabled && (
        <section className="py-20 bg-gradient-to-r from-pink-500 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center text-white">
              <Users className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-4xl font-serif font-bold mb-4">Confirma tu Asistencia</h3>
              <p className="text-xl mb-8 opacity-90">
                Por favor, confirma tu asistencia antes del 15 de diciembre
              </p>
              <button
                onClick={() => setShowRSVP(!showRSVP)}
                className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Confirmar Ahora
              </button>

              {showRSVP && (
                <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <form className="space-y-4 text-left">
                    <div>
                      <label className="block text-sm font-semibold mb-2">Nombre Completo</label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 rounded-lg text-gray-800"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Número de Invitados</label>
                      <select className="w-full px-4 py-3 rounded-lg text-gray-800">
                        <option>1 persona</option>
                        <option>2 personas</option>
                        <option>3 personas</option>
                        <option>4 personas</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Mensaje (Opcional)</label>
                      <textarea
                        className="w-full px-4 py-3 rounded-lg text-gray-800"
                        rows={3}
                        placeholder="Deja un mensaje para los novios"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition"
                    >
                      Enviar Confirmación
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Gallery Preview */}
      {invitation.galleryEnabled && (
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <ImageIcon className="w-12 h-12 mx-auto mb-4 text-pink-500" />
              <h3 className="text-4xl font-serif font-bold text-gray-800 mb-4">Galería</h3>
              <p className="text-lg text-gray-600">Momentos especiales</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl shadow-lg hover:shadow-xl transition"
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Gift Registry */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <Gift className="w-12 h-12 mx-auto mb-4 text-pink-500" />
            <h3 className="text-3xl font-serif font-bold text-gray-800 mb-4">Mesa de Regalos</h3>
            <p className="text-lg text-gray-600 mb-8">
              Tu presencia es nuestro mejor regalo, pero si deseas obsequiarnos algo más, 
              aquí están nuestras sugerencias
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <button className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition">
                Liverpool
              </button>
              <button className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition">
                Amazon
              </button>
              <button className="bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition">
                Transferencia
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-6 h-6 mx-auto mb-2 text-pink-500 fill-pink-500" />
          <p className="text-gray-400 text-sm">
            Creado con ❤️ en Invitaciones Digitales
          </p>
        </div>
      </footer>
    </div>
  );
}

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl p-6 shadow-lg">
      <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm uppercase tracking-wide text-gray-600">{label}</div>
    </div>
  );
}
