"use client";

import Link from "next/link";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: "SERVICIOS", href: "/servicios" },
    { name: "PROYECTOS", href: "/proyectos" },
    { name: "SOBRE NOSOTROS", href: "/sobre-nosotros" },
    { name: "CONTACTO", href: "/contacto" },
  ];

  return (
    <header className="fixed w-full top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            {/* ESTUDIO NÓMADE — tipografía tech/monospace */}
            <span
              className="text-sm font-bold text-white tracking-[0.22em] group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-tech), monospace" }}
            >
              ESTUDIO NÓMADE
            </span>
            <span className="text-white/25 text-xs px-0.5">×</span>
            {/* GROVIA — Sora */}
            <span
              className="text-base font-bold text-white tracking-[0.14em] group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              GROVIA
            </span>
          </Link>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-[11px] font-medium tracking-[0.15em] text-[#8A8FA8] hover:text-white transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA button desktop */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 text-[11px] font-bold tracking-[0.15em] text-white border border-white/50 rounded-full transition-all duration-250 hover:bg-white hover:text-[#06080f]"
            >
              HABLEMOS ↗
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-6 px-2"
            style={{
              background: "rgba(6, 8, 15, 0.97)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="flex flex-col gap-5">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium tracking-[0.12em] text-white/70 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-2">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 text-[11px] font-bold tracking-[0.15em] text-white border border-white/50 rounded-full hover:bg-white hover:text-[#06080f] transition-all duration-250"
                >
                  HABLEMOS ↗
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
