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
        humo: '#F8F8F8',
        oscuro: '#1E1E1E',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['var(--font-montserrat)', 'Inter', 'sans-serif'],
        display: ['var(--font-poppins)', 'sans-serif'],
        // Placeholders para fuentes personalizadas
        blanka: ['Blanka', 'sans-serif'],
        tek: ['Tek Tall Arabic Condensed', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
