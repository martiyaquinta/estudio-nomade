import type { Metadata } from "next";
import { Syne, DM_Sans, Share_Tech_Mono, Sora } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["400", "500", "700"],
  display: "swap",
});

/* Estudio Nómade — estética tech/terminal */
const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  variable: "--font-tech",
  weight: ["400"],
  display: "swap",
});

/* Grovia — moderna, limpia */
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Estudio Nómade + Grovia - Diseño web y marketing",
  description:
    "Código y diseño en movimiento + Estrategia de marketing. Creamos experiencias digitales únicas con enfoque en resultados.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${shareTechMono.variable} ${sora.variable}`}
    >
      <body className={`${dmSans.className} antialiased`}>{children}</body>
    </html>
  );
}
