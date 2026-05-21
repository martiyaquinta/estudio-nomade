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
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Label */}
        <p
          className="text-center mb-10 text-[11px] font-medium tracking-[0.25em] uppercase"
          style={{ color: "var(--text-gray)" }}
        >
          TRABAJAMOS CON
        </p>

        {/* Clientes en fila horizontal */}
        <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5">
          {clients.map((client, index) => (
            <span
              key={index}
              className="font-display font-semibold text-sm tracking-[0.12em] transition-colors duration-200 hover:text-white"
              style={{ color: "var(--text-gray)" }}
            >
              {client}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
