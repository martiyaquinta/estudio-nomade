import Link from "next/link";
import Image from "next/image";
import { Calendar, Users, Image as ImageIcon, MapPin, Gift } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Estudio Nomade" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold font-serif text-gray-800">Estudio Nomade</span>
          </div>
          <div className="hidden md:flex gap-6">
            <Link href="#templates" className="text-gray-600 hover:text-pink-500 transition">Plantillas</Link>
            <Link href="#features" className="text-gray-600 hover:text-pink-500 transition">Características</Link>
            <Link href="#pricing" className="text-gray-600 hover:text-pink-500 transition">Precios</Link>
            <Link href="/admin" className="bg-pink-500 text-white px-4 py-2 rounded-full hover:bg-pink-600 transition">
              Crear Invitación
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-gray-800 mb-6">
          Invitaciones Digitales
          <br />
          <span className="text-pink-500">Únicas y Memorables</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Crea invitaciones personalizadas para bodas, cumpleaños, eventos especiales y más.
          Comparte fácilmente y gestiona confirmaciones de asistencia.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/admin" className="bg-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-600 transition shadow-lg">
            Comenzar Gratis
          </Link>
          <Link href="#templates" className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-50 transition shadow-lg border-2 border-pink-500">
            Ver Plantillas
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-12">
          Todo lo que necesitas para tu evento
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar className="w-12 h-12 text-pink-500" />}
            title="Cuenta Regresiva"
            description="Cuenta regresiva en tiempo real para mantener a tus invitados emocionados"
          />
          <FeatureCard
            icon={<Users className="w-12 h-12 text-pink-500" />}
            title="Gestión de RSVP"
            description="Confirma asistencia fácilmente y gestiona tu lista de invitados"
          />
          <FeatureCard
            icon={<ImageIcon className="w-12 h-12 text-pink-500" />}
            title="Galería de Fotos"
            description="Comparte momentos especiales con una hermosa galería"
          />
          <FeatureCard
            icon={<MapPin className="w-12 h-12 text-pink-500" />}
            title="Ubicación del Evento"
            description="Integración con mapas para que todos lleguen sin problemas"
          />
          <FeatureCard
            icon={<Gift className="w-12 h-12 text-pink-500" />}
            title="Mesa de Regalos"
            description="Comparte información de regalos y deseos de forma elegante"
          />
          <FeatureCard
            icon={<Image 
              src="/logo.png" 
              alt="Estudio Nomade" 
              width={48} 
              height={48}
              className="object-contain"
            />}
            title="Diseños Personalizados"
            description="Plantillas elegantes totalmente personalizables a tu estilo"
          />
        </div>
      </section>

      {/* Templates Preview */}
      <section id="templates" className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold text-center text-gray-800 mb-4">
            Nuestras Plantillas
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Diseños elegantes y modernos para cada tipo de evento
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <TemplateCard
              title="Elegancia Clásica"
              category="Bodas"
              color="bg-gradient-to-br from-pink-100 to-purple-100"
            />
            <TemplateCard
              title="Celebración Moderna"
              category="Cumpleaños"
              color="bg-gradient-to-br from-blue-100 to-cyan-100"
            />
            <TemplateCard
              title="Fiesta Temática"
              category="Eventos"
              color="bg-gradient-to-br from-yellow-100 to-orange-100"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-3xl p-12 text-white">
          <h2 className="text-4xl font-serif font-bold mb-4">
            ¿Listo para crear tu invitación?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Únete a miles de personas que han creado invitaciones memorables
          </p>
          <Link href="/admin" className="bg-white text-pink-500 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition inline-block shadow-lg">
            Empezar Ahora
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image 
              src="/logo.png" 
              alt="Estudio Nomade" 
              width={32} 
              height={32}
              className="object-contain"
            />
            <span className="text-xl font-serif font-bold">Estudio Nomade</span>
          </div>
          <p className="text-gray-400">
            © 2025 Estudio Nomade. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TemplateCard({ title, category, color }: { title: string; category: string; color: string }) {
  return (
    <div className="group cursor-pointer">
      <div className={`${color} h-80 rounded-2xl shadow-lg group-hover:shadow-2xl transition-shadow flex items-center justify-center mb-4`}>
        <div className="text-center">
          <Image 
            src="/logo.png" 
            alt="Estudio Nomade" 
            width={64} 
            height={64}
            className="mx-auto mb-4 opacity-20 object-contain"
          />
          <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{category}</p>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 text-center">{title}</h3>
    </div>
  );
}
