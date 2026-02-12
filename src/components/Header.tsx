"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onInquiry: () => void;
}

export default function Header({ onInquiry }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[var(--color-cream)]/95 backdrop-blur-md shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="group">
          <span
            className={`font-[family-name:var(--font-serif)] text-2xl tracking-wide transition-colors duration-500 ${
              scrolled ? "text-[var(--color-foreground)]" : "text-white"
            }`}
          >
            Süd5
          </span>
        </a>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-10">
          {["Galerie", "Anfrage", "Kontakt"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-base md:text-[17px] tracking-[0.15em] uppercase transition-colors duration-500 hover:opacity-80 ${
                scrolled ? "text-[var(--color-foreground)]/75" : "text-white"
              }`}
            >
              {item}
            </a>
          ))}
          <a
            href="https://instagram.com/nicundhendrik"
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-500 hover:opacity-80 ${
              scrolled ? "text-[var(--color-foreground)]/75" : "text-white"
            }`}
            aria-label="Instagram"
          >
            <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <button
            onClick={onInquiry}
            className={`text-base md:text-[17px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full transition-all duration-500 cursor-pointer ${
              scrolled
                ? "bg-[var(--color-foreground)] text-white hover:bg-[var(--color-foreground)]/80"
                : "bg-white/15 backdrop-blur-sm text-white border border-white/30 hover:bg-white/25"
            }`}
          >
            Anfragen
          </button>
        </nav>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden cursor-pointer"
          aria-label="Menü"
        >
          <div className="flex flex-col gap-[5px]">
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? "bg-[var(--color-foreground)]" : "bg-white"
              } ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? "bg-[var(--color-foreground)]" : "bg-white"
              } ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-[1.5px] transition-all duration-300 ${
                scrolled ? "bg-[var(--color-foreground)]" : "bg-white"
              } ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[var(--color-cream)]/98 backdrop-blur-md border-t border-[var(--color-sand)] mt-4 py-8 flex flex-col items-center gap-6">
          {["Galerie", "Anfrage", "Kontakt"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className="text-base md:text-[17px] tracking-[0.15em] uppercase text-[var(--color-foreground)]/75"
            >
              {item}
            </a>
          ))}
          <a
            href="https://instagram.com/nicundhendrik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-foreground)]/75 hover:opacity-100"
            aria-label="Instagram"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
            </svg>
          </a>
          <button
            onClick={() => { setMenuOpen(false); onInquiry(); }}
            className="text-base md:text-[17px] tracking-[0.15em] uppercase px-5 py-2.5 rounded-full bg-[var(--color-foreground)] text-white cursor-pointer"
          >
            Anfragen
          </button>
        </nav>
      )}
    </header>
  );
}
