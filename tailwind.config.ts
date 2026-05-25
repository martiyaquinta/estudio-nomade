import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Dark theme
        "dark-bg": "#06080f",
        "dark-secondary": "#0d0f1f",
        "accent-orange": "#e8470a",
        "text-muted": "#8a8fa8",
        // Legacy (Estudio Nómade)
        lavanda: {
          DEFAULT: "#AEB2E4",
          light: "#C9CCF0",
          dark: "#8B90D1",
        },
        violeta: {
          DEFAULT: "#DAABE4",
          light: "#E8C9F0",
          dark: "#C98CD1",
        },
        // Legacy (Grovia)
        navy: {
          DEFAULT: "#1E3A8A",
          light: "#3B82F6",
          dark: "#1E293B",
        },
        orange: {
          DEFAULT: "#E8470A",
          light: "#F97316",
          dark: "#C73D09",
        },
        humo: "#F8F8F8",
        oscuro: "#1E1E1E",
      },
      fontFamily: {
        // New (dark theme)
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-syne)", "sans-serif"],
        syne: ["var(--font-syne)", "sans-serif"],
        dmSans: ["var(--font-dm-sans)", "sans-serif"],
        // Legacy aliases → mapeados a nuevas fuentes
        montserrat: ["var(--font-syne)", "sans-serif"],
        openSans: ["var(--font-dm-sans)", "sans-serif"],
        blanka: ["var(--font-syne)", "sans-serif"],
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
