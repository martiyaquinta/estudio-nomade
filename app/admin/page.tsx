import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Plus, Heart } from "lucide-react";

export default function AdminPage() {
  const templates = [
    { id: 1, name: "Boda Elegante", category: "Bodas", color: "from-pink-100 to-purple-100" },
    { id: 2, name: "XV Años Princesa", category: "XV Años", color: "from-purple-100 to-pink-100" },
    { id: 3, name: "Cumpleaños Infantil", category: "Cumpleaños", color: "from-blue-100 to-cyan-100" },
    { id: 4, name: "Baby Shower", category: "Baby Shower", color: "from-yellow-100 to-pink-100" },
    { id: 5, name: "Bautizo Tradicional", category: "Bautizo", color: "from-blue-50 to-blue-100" },
    { id: 6, name: "Evento Corporativo", category: "Corporativo", color: "from-gray-100 to-blue-100" },
  ];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-800">
              <ArrowLeft className="w-5 h-5" />
              <span>Volver al inicio</span>
            </Link>
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Estudio Nomade" 
                width={28} 
                height={28}
                className="object-contain"
              />
              <span className="text-xl font-bold font-serif">Panel de Administración</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Elige una Plantilla
          </h1>
          <p className="text-lg text-gray-600">
            Selecciona el diseño perfecto para tu evento y personalízalo a tu gusto
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {templates.map((template) => (
            <Link
              key={template.id}
              href={`/admin/edit/${template.id}`}
              className="group"
            >
              <div className={`bg-gradient-to-br ${template.color} h-96 rounded-2xl shadow-lg group-hover:shadow-2xl transition-all transform group-hover:scale-105 flex flex-col items-center justify-center p-8 border border-gray-200`}>
                <Heart className="w-16 h-16 mb-6 text-gray-700 opacity-30 group-hover:opacity-50 transition" />
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-2">
                    {template.category}
                  </p>
                  <h3 className="text-2xl font-serif font-bold text-gray-800 mb-4">
                    {template.name}
                  </h3>
                  <div className="bg-white/80 backdrop-blur-sm px-6 py-2 rounded-full inline-flex items-center gap-2 text-pink-600 font-semibold">
                    <Plus className="w-4 h-4" />
                    Usar Plantilla
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Custom Template Option */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-serif font-bold mb-4">
              ¿Necesitas algo personalizado?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Contáctanos para crear una invitación completamente única
            </p>
            <button className="bg-white text-pink-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
              Contactar
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
