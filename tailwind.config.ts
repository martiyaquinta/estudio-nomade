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
        // Paleta ESTUDIO NÓMADE
        lavanda: {
          DEFAULT: '#AEB2E4',
          light: '#C9CCF0',
          dark: '#8B90D1',
        },
        violeta: {
          DEFAULT: '#DAABE4',
          light: '#E8C9F0',
          dark: '#C98CD1',
        },
        // Paleta GROVIA MARKETING (colaboración)
        navy: {
          DEFAULT: '#1E3A8A',
          light: '#3B82F6',
          dark: '#1E293B',
        },
        orange: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
        },
        humo: '#F8F8F8',
        oscuro: '#1E1E1E',
      },
      fontFamily: {
        sans: ['var(--font-open-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-montserrat)', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        openSans: ['var(--font-open-sans)', 'sans-serif'],
        // Fuentes adicionales Estudio Nómade
        blanka: ['Blanka', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
