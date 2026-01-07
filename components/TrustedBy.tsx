"use client";

export default function TrustedBy() {
  const clients = [
    "IVESS", "MACBA", "ONER VFX", "RE/MAX", "SANTILLANA",
    "STROMBERG", "UBA", "WYNN'S", "BGH", "KAPELUSZ"
  ];

  return (
    <section className="py-20 bg-white border-y border-oscuro/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-navy text-center mb-12">
          Confían en nosotros
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-6xl mx-auto items-center">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-humo rounded-xl border border-oscuro/5 hover:border-orange/20 transition-all grayscale hover:grayscale-0"
            >
              <span className="font-bold text-navy/60 text-sm">{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
