"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigation = [
    { name: "SERVICIOS",      href: "/servicios" },
    { name: "PROYECTOS",      href: "/proyectos" },
    { name: "SOBRE NOSOTROS", href: "/sobre-nosotros" },
    { name: "CONTACTO",       href: "/contacto" },
  ];

  return (
    <header
      className="fixed w-full top-0 z-50 transition-all duration-400"
      style={{
        background: scrolled
          ? "rgba(5, 10, 30, 0.90)"
          : "transparent",
        backdropFilter: scrolled ? "blur(18px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(18px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255, 255, 255, 0.07)"
          : "1px solid transparent",
      }}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="Inicio">
            <span
              className="text-lg font-bold text-white tracking-[0.16em] transition-opacity group-hover:opacity-75"
              style={{ fontFamily: "var(--font-sora), sans-serif" }}
            >
              GROVIA
            </span>
            <span
              className="text-[9px] font-semibold tracking-[0.14em] uppercase border-l border-white/15 pl-3 leading-tight hidden sm:block"
              style={{ color: "var(--text-gray)" }}
            >
              Marketing &<br />Desarrollo Web
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-[10.5px] font-semibold tracking-[0.16em] transition-colors duration-200 group"
                style={{ color: "var(--text-gray)" }}
              >
                <span className="group-hover:text-white transition-colors duration-200">
                  {item.name}
                </span>
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#E8470A] group-hover:w-full transition-all duration-300"
                />
              </Link>
            ))}
          </div>

          {/* CTA Desktop */}
          <div className="hidden md:block">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-[10.5px] py-2.5 px-5 font-bold"
            >
              HABLEMOS
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true">
                <path d="M1.5 9.5L9.5 1.5M9.5 1.5H4M9.5 1.5V7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen
              ? <XMarkIcon className="h-5 w-5" />
              : <Bars3Icon className="h-5 w-5" />
            }
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div
            className="md:hidden py-8 px-2 animate-fade-in"
            style={{
              background: "rgba(5, 10, 30, 0.97)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              borderTop: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div className="flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-xs font-semibold tracking-[0.16em] text-white/60 hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-3 border-t border-white/07">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSc2Oulcutu_sJq7bWBfkN4OyoM68vkgmeuNWNLJ1tBwlbFQqA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline text-[10.5px] py-2.5 px-5"
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
