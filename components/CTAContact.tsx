import Link from "next/link";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function CTAContact() {
  return (
    <section className="py-24 bg-gradient-to-br from-lavanda via-violeta to-lavanda">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center text-white space-y-8">
          <EnvelopeIcon className="w-16 h-16 mx-auto opacity-90" />
          <h2 className="text-4xl sm:text-5xl font-display font-bold">
            ¿Tienes un proyecto en mente?
          </h2>
          <p className="text-xl opacity-90">
            Conversemos sobre cómo puedo ayudarte a hacerlo realidad
          </p>
          <Link
            href="/contacto"
            className="inline-block px-8 py-4 bg-white text-violeta font-semibold rounded-full hover:bg-humo transition-all transform hover:scale-105 shadow-xl"
          >
            Iniciar conversación
          </Link>
        </div>
      </div>
    </section>
  );
}
