export default function Footer() {
  return (
    <footer id="kontakt" className="border-t border-[var(--color-sand-dark)]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-[family-name:var(--font-serif)] text-2xl text-[var(--color-foreground)] mb-3">
              Süd5
            </h3>
            <p className="text-base md:text-[17px] text-[var(--color-foreground)]/75 leading-relaxed mb-4">
              Ein Projekt von Nic &amp; Hendrik.
              <br />
              Strandhaus auf Borkum — im Umbau.
            </p>
            <a
              href="https://instagram.com/nicundhendrik"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-base md:text-[17px] text-[var(--color-foreground)]/75 hover:text-[var(--color-foreground)] transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
              </svg>
              @nicundhendrik
            </a>
          </div>

          {/* Contact */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-foreground)]/30 mb-4">
              Kontakt
            </p>
            <div className="space-y-2 text-base md:text-[17px] text-[var(--color-foreground)]/75 leading-relaxed">
              <p>Borkum, Ostfriesische Inseln</p>
              <p>
                <a href="mailto:moin@sued5.de" className="hover:text-[var(--color-foreground)] transition-colors">
                  moin@süd5.de
                </a>
              </p>
              <p>015679415201</p>
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-[var(--color-foreground)]/30 mb-4">
              Links
            </p>
            <div className="space-y-2 text-base md:text-[17px] leading-relaxed">
              <a href="#story" className="block text-[var(--color-foreground)]/75 hover:text-[var(--color-foreground)] transition-colors">
                Unsere Story
              </a>
              <a href="#galerie" className="block text-[var(--color-foreground)]/75 hover:text-[var(--color-foreground)] transition-colors">
                Galerie
              </a>
              <a href="#anfrage" className="block text-[var(--color-foreground)]/75 hover:text-[var(--color-foreground)] transition-colors">
                Anfrage
              </a>
              <a
                href="https://instagram.com/nicundhendrik"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-[var(--color-foreground)]/75 hover:text-[var(--color-foreground)] transition-colors"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-[var(--color-sand)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] text-[var(--color-foreground)]/25 tracking-wider">
            &copy; {new Date().getFullYear()} Süd5 Borkum
          </p>
          <div className="flex gap-6 text-[11px] text-[var(--color-foreground)]/25 tracking-wider">
            <a href="/impressum" className="hover:text-[var(--color-foreground)]/50 transition-colors">
              Impressum
            </a>
            <a href="#" className="hover:text-[var(--color-foreground)]/50 transition-colors">
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
