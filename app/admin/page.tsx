"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    const phoneNumber = '5492233491780';
    const mensaje = `Hola! Me interesa consultar por el servicio de *Invitaciones Digitales / Páginas de Eventos*`;
    window.location.href = `https://wa.me/${phoneNumber}?text=${mensaje}`;
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-violet-50 via-purple-50 to-pink-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-violet-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirigiendo a WhatsApp...</p>
      </div>
    </div>
  );
}
