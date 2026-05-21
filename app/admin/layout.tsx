import Link from "next/link";
import Image from "next/image";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Admin Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/logo.png" 
              alt="Estudio Nomade" 
              width={40} 
              height={40}
              className="object-contain"
            />
            <span className="text-2xl font-bold font-serif text-gray-800">Estudio Nomade</span>
          </Link>
          <div className="hidden md:flex gap-6">
            <Link href="/admin" className="text-gray-600 hover:text-violet-500 transition">
              Plantillas
            </Link>
            <Link href="/admin/my-invitations" className="text-gray-600 hover:text-violet-500 transition">
              Mis Invitaciones
            </Link>
            <Link href="/" className="text-gray-600 hover:text-violet-500 transition">
              Inicio
            </Link>
          </div>
        </nav>
      </header>
      {children}
    </div>
  );
}
