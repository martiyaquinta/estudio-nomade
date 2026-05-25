import type { Metadata } from "next";
import { Syne, DM_Sans, Share_Tech_Mono, Sora, Poppins } from "next/font/google";
import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";

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

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600", "700", "800"],
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
  title: "Grovia — Marketing Estratégico & Desarrollo Web",
  description:
    "Grovia es una agencia de marketing estratégico y desarrollo web. Te ayudamos a crecer online con estrategia clara, diseño profesional y resultados reales.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${syne.variable} ${dmSans.variable} ${shareTechMono.variable} ${sora.variable} ${poppins.variable}`}
    >
      <body className={`${dmSans.className} antialiased`}>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
