import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function ProyectosPage() {
  const proyectos = [
    {
      id: 1,
      nombre: "Landing Café Boutique",
      tipo: "landing",
      año: 2024,
      imagen: "/placeholder-project.jpg",
      descripcion: "Landing page minimalista para cafetería especializada"
    },
    {
      id: 2,
      nombre: "Invitación XV Sofía",
      tipo: "invitación",
      año: 2024,
      imagen: "/placeholder-project.jpg",
      descripcion: "Invitación digital interactiva con RSVP"
    },
    {
      id: 3,
      nombre: "Portfolio Fotógrafo",
      tipo: "web",
      año: 2024,
      imagen: "/placeholder-project.jpg",
      descripcion: "Sitio web completo con galería y blog"
    },
    {
      id: 4,
      nombre: "Landing Wellness",
      tipo: "landing",
      año: 2023,
      imagen: "/placeholder-project.jpg",
      descripcion: "Página de servicios de bienestar"
    },
    {
      id: 5,
      nombre: "Boda Ana & Carlos",
      tipo: "invitación",
      año: 2023,
      imagen: "/placeholder-project.jpg",
      descripcion: "Invitación elegante con contador regresivo"
    },
    {
      id: 6,
      nombre: "E-commerce Artesanías",
      tipo: "web",
      año: 2023,
      imagen: "/placeholder-project.jpg",
      descripcion: "Tienda online con carrito de compras"
    },
  ];

  const tipos = {
    landing: { color: "text-lavanda", bg: "bg-lavanda/10" },
    invitación: { color: "text-violeta", bg: "bg-violeta/10" },
    web: { color: "text-lavanda-dark", bg: "bg-lavanda-dark/10" }
  };

  return (
    <main className="min-h-screen bg-humo">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl font-display font-bold text-oscuro mb-6">
              Proyectos
            </h1>
            <p className="text-xl text-oscuro/70">
              Una selección de trabajos recientes que reflejan nuestra filosofía de diseño minimalista y código limpio.
            </p>
          </div>
        </div>
      </section>

      {/* Grilla de Proyectos */}
      <section className="pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectos.map((proyecto) => (
              <div
                key={proyecto.id}
                className="group bg-white rounded-2xl overflow-hidden border border-lavanda/20 hover:border-violeta/50 hover:shadow-xl transition-all duration-300"
              >
                {/* Imagen */}
                <div className="aspect-video bg-gradient-to-br from-lavanda/20 to-violeta/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center text-lavanda/40 text-sm">
                    Imagen del proyecto
                  </div>
                  {/* Aquí irá la imagen real */}
                  {/* <Image 
                    src={proyecto.imagen} 
                    alt={proyecto.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  /> */}
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className={`px-3 py-1 ${tipos[proyecto.tipo as keyof typeof tipos].bg} ${tipos[proyecto.tipo as keyof typeof tipos].color} text-xs font-medium rounded-full`}>
                      {proyecto.tipo}
                    </span>
                    <span className="text-sm text-oscuro/50">
                      {proyecto.año}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-oscuro mb-2 group-hover:text-lavanda transition-colors">
                    {proyecto.nombre}
                  </h3>
                  <p className="text-oscuro/70 text-sm">
                    {proyecto.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
