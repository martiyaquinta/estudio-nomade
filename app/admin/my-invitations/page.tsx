"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Plus, Eye, Edit, Trash2, Calendar } from "lucide-react";
import { invitationStorage } from "@/lib/storage";
import { Invitation } from "@/lib/types";

export default function MyInvitationsPage() {
  const [invitations, setInvitations] = useState<Invitation[]>([]);

  useEffect(() => {
    setInvitations(invitationStorage.getAll());
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('¿Estás seguro de eliminar esta invitación?')) {
      invitationStorage.delete(id);
      setInvitations(invitationStorage.getAll());
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Estudio Nomade" 
                width={32} 
                height={32}
                className="object-contain"
              />
              <h1 className="text-2xl font-bold font-serif">Mis Invitaciones</h1>
            </div>
            <Link
              href="/admin"
              className="flex items-center gap-2 bg-violet-600 text-white px-4 py-2 rounded-lg hover:bg-violet-700 transition"
            >
              <Plus className="w-5 h-5" />
              Nueva Invitación
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {invitations.length === 0 ? (
          <div className="text-center py-20">
            <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
            <h2 className="text-2xl font-serif font-bold text-gray-800 mb-2">
              No tienes invitaciones aún
            </h2>
            <p className="text-gray-600 mb-8">
              Crea tu primera invitación digital personalizada
            </p>
            <Link
              href="/admin"
              className="inline-flex items-center gap-2 bg-violet-600 text-white px-6 py-3 rounded-lg hover:bg-violet-700 transition"
            >
              <Plus className="w-5 h-5" />
              Crear Invitación
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {invitations.map((invitation) => (
              <div
                key={invitation.id}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-violet-100 to-purple-100 h-48 flex items-center justify-center">
                  <div className="text-center p-6">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                      {invitation.eventType}
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-gray-800 mb-1">
                      {invitation.title}
                    </h3>
                    <p className="text-lg font-serif text-violet-600">
                      {invitation.names}
                    </p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Fecha</p>
                    <p className="font-semibold text-gray-800">
                      {new Date(invitation.date).toLocaleDateString('es-ES', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-1">Lugar</p>
                    <p className="font-semibold text-gray-800">{invitation.location}</p>
                  </div>

                  <div className="flex gap-2">
                    <Link
                      href={`/invitation/${invitation.id}`}
                      target="_blank"
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-violet-600 text-white rounded-lg hover:bg-violet-700 transition text-sm"
                    >
                      <Eye className="w-4 h-4" />
                      Ver
                    </Link>
                    <Link
                      href={`/admin/edit/${invitation.templateId}?invId=${invitation.id}`}
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition text-sm"
                    >
                      <Edit className="w-4 h-4" />
                      Editar
                    </Link>
                    <button
                      onClick={() => handleDelete(invitation.id)}
                      className="px-3 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
