import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum | Süd5 Borkum",
  description: "Impressum und rechtliche Angaben – Süd5 Borkum",
};

export default function ImpressumPage() {
  return (
    <div className="wood-bg min-h-screen">
      <div className="max-w-2xl mx-auto px-6 py-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[var(--color-ocean-strong)] text-sm mb-12 hover:underline"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Zurück zur Startseite
        </Link>

        <h1 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[var(--color-foreground)] mb-10">
          Impressum
        </h1>

        <div className="space-y-6 text-base md:text-[17px] text-[var(--color-foreground)]/75 leading-relaxed">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[var(--color-ocean-strong)] font-medium">
            Süd5 – Strandhaus auf Borkum
          </p>

          <p>
            <strong>Inseltraum Housing eGbR</strong>
            <br />
            vertretungsberechtigte Gesellschafter: Nic Iburg, Hendrik Pietschmann
          </p>

          <p>
            Süderreihe 29<br />
            26757 Borkum<br />
            Deutschland
          </p>

          <p>
            Telefon: 015679415201
          </p>

          <p>
            Mail:{" "}
            <a
              href="mailto:moin@sued5.de"
              className="text-[var(--color-ocean-strong)] hover:underline"
            >
              moin@süd5.de
            </a>
          </p>

          <p>
            Verantwortlich gemäß § 18 MStV: Nic Bennet Iburg, Süderreihe 29, 26757 Borkum
          </p>

          <p className="pt-4">
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit, die Sie hier finden:{" "}
            <a
              href="https://ec.europa.eu/consumers/odr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-ocean-strong)] hover:underline"
            >
              https://ec.europa.eu/consumers/odr/
            </a>
            .
          </p>

          <p>
            Zur Teilnahme an einem Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle sind wir nicht verpflichtet und nicht bereit.
          </p>
        </div>
      </div>
    </div>
  );
}
