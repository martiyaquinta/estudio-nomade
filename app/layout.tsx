import type { Metadata } from "next";
import { Inter, Montserrat, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: '--font-montserrat',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: '--font-poppins',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Estudio Nómade - Diseño y código en movimiento",
  description: "Creamos experiencias digitales únicas. Diseño web, invitaciones digitales y servicios técnicos desde cualquier lugar del mundo.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${poppins.variable}`}>
      <body className={`${montserrat.className} antialiased bg-humo text-oscuro`}>
        {children}
      </body>
    </html>
  );
}
