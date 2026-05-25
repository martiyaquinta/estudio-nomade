const clients = [
  "IVESS",
  "MACBA",
  "ONER VFX",
  "RE/MAX",
  "SANTILLANA",
  "STROMBERG",
  "UBA",
  "WYNN'S",
  "BGH",
  "KAPELUSZ",
];

export default function TrustedBy() {
  return (
    <section
      className="py-20"
      style={{
        background: "var(--bg-primary)",
        borderTop:    "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <p
          className="text-center mb-12 text-[10px] font-bold tracking-[0.30em] uppercase"
          style={{ color: "var(--text-dim)" }}
        >
          TRABAJAMOS CON
        </p>

        {/* Clientes */}
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-5 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <span
              key={index}
              className="font-display font-bold text-xs tracking-[0.18em] transition-colors duration-200 hover:text-white cursor-default"
              style={{ color: "rgba(255,255,255,0.22)" }}
            >
              {client}
            </span>
          ))}
        </div>

      </div>
    </section>
  );
}
