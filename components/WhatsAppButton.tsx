"use client";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/5492233491780"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="group"
      style={{
        position: "fixed",
        bottom: "28px",
        right: "24px",
        zIndex: 100,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        opacity: 0.55,
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.08)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.opacity = "0.55";
        (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
      }}
    >
      {/* Etiqueta de número — visible al hover */}
      <span
        className="text-xs font-bold tracking-wide text-white px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "rgba(37, 211, 102, 0.15)",
          border: "1px solid rgba(37, 211, 102, 0.30)",
          whiteSpace: "nowrap",
        }}
      >
        +54 9 223 349-1780
      </span>

      {/* Ícono WhatsApp */}
      <div
        style={{
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          background: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 4px 20px rgba(37, 211, 102, 0.35)",
          flexShrink: 0,
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M14 2.5C7.649 2.5 2.5 7.649 2.5 14C2.5 16.21 3.13 18.27 4.22 20.02L2.5 25.5L8.14 23.81C9.84 24.79 11.85 25.5 14 25.5C20.351 25.5 25.5 20.351 25.5 14C25.5 7.649 20.351 2.5 14 2.5Z"
            fill="white"
            fillOpacity="0.15"
          />
          <path
            d="M19.5 17.36C19.22 18.08 18.05 18.69 17.21 18.86C16.63 18.97 15.87 19.06 13.32 18.02C10.09 16.71 8.02 13.43 7.86 13.22C7.71 13.01 6.6 11.54 6.6 10.02C6.6 8.5 7.38 7.76 7.69 7.44C7.95 7.17 8.38 7.05 8.79 7.05C8.92 7.05 9.04 7.06 9.14 7.07C9.45 7.08 9.61 7.1 9.82 7.62L10.62 9.59C10.72 9.84 10.82 10.17 10.65 10.47C10.49 10.78 10.35 10.92 10.14 11.16C9.93 11.4 9.73 11.59 9.52 11.85C9.33 12.08 9.11 12.32 9.35 12.73C9.59 13.13 10.44 14.49 11.67 15.59C13.26 17.01 14.57 17.46 15.02 17.64C15.35 17.77 15.74 17.74 15.99 17.47C16.31 17.12 16.71 16.54 17.12 15.97C17.41 15.56 17.78 15.51 18.17 15.65L20.09 16.5C20.48 16.67 20.74 16.76 20.84 16.93C20.93 17.1 20.93 17.82 20.64 18.54L19.5 17.36Z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  );
}
