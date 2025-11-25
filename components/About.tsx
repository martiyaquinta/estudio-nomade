import { CodeBracketIcon, DevicePhoneMobileIcon, SparklesIcon, WifiIcon } from "@heroicons/react/24/outline";

export default function About() {
  const features = [
    {
      icon: CodeBracketIcon,
      title: "Desarrollo Web",
      description: "Sitios y aplicaciones web modernas, rápidas y escalables"
    },
    {
      icon: DevicePhoneMobileIcon,
      title: "Diseño Responsivo",
      description: "Experiencias perfectas en cualquier dispositivo"
    },
    {
      icon: SparklesIcon,
      title: "Invitaciones Digitales",
      description: "Invitaciones únicas para tus eventos especiales"
    },
    {
      icon: WifiIcon,
      title: "Servicios Técnicos",
      description: "Configuración de redes, Starlink y soluciones IT"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-oscuro mb-6">
            Qué hacemos
          </h2>
          <p className="text-lg text-oscuro/70">
            Combinamos diseño minimalista con tecnología de vanguardia para crear experiencias digitales que conectan.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 border border-lavanda/20 rounded-2xl hover:border-violeta/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4 inline-block p-3 bg-lavanda/10 rounded-xl group-hover:bg-violeta/20 transition-colors">
                <feature.icon className="w-8 h-8 text-lavanda group-hover:text-violeta transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-oscuro mb-2">
                {feature.title}
              </h3>
              <p className="text-oscuro/70">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
