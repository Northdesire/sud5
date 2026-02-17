import ImageSlider from "./ImageSlider";

const SLIDER_IMAGES = [
  { src: "/gallery/IMG_1975-c3807c6a-ed54-498f-9395-ce5f9d9d31cf.png", alt: "Süd5 von außen" },
  { src: "/gallery/IMG_1974-a2372910-b58b-4721-a911-21ac66994652.png", alt: "Süd5 – Gebäude mit Dachgauben" },
  { src: "/gallery/IMG_1390-72042b28-50a6-499e-898b-e1cb29acbe7e.png", alt: "Nic & Hendrik – Treppenhaus" },
  { src: "/gallery/IMG_1433-5fa6ed20-850c-484e-be55-911e61ab22a5.png", alt: "Umbau Süd5 – Innenbereich" },
  { src: "/gallery/IMG_1394-f75ed686-a258-4377-9377-8a3a48937d10.png", alt: "Umbau – Raum im Rohbau" },
  { src: "/gallery/IMG_1355-72a2f8a5-0e0e-47d9-a833-e17a3f03eec8.png", alt: "Umbau – Treppe und gelbe Tür" },
  { src: "/gallery/IMG_0220-feca9702-1f67-4e45-9c76-bbe812047190.png", alt: "Umbau – Zimmer mit Trockenbau" },
  { src: "/gallery/IMG_1319-566ac134-0e9c-445d-aab9-e7c4f8345ae3.png", alt: "Umbau – Wand mit Metallständer" },
];

export default function Gallery() {
  return (
    <section id="galerie" className="pt-16 pb-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Intro text – auf PC zentriert */}
        <div className="max-w-2xl mb-16 md:mx-auto md:text-center">
          <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-5xl text-[var(--color-foreground)] mb-6 leading-snug">
            Ankommen &amp; Wohlfühlen
          </h2>
          <p className="text-base md:text-[17px] text-[var(--color-foreground)]/75 leading-relaxed">
            Unser Strandhaus auf Borkum bietet Einzelzimmer, Doppelzimmer
            und eine großzügige Ferienwohnung mit 100&thinsp;m² für
            bis zu 6 Personen. Alles im nordischen Strandhaus-Stil,
            nur wenige Schritte von den Dünen entfernt.
          </p>

          {/* Hinweis: Noch im Umbau – folgt uns auf Insta für Updates */}
          <div className="mt-8 p-5 rounded-xl border border-[var(--color-ocean-strong)]/30 bg-[var(--color-sand)]/50">
            <p className="text-base md:text-[17px] text-[var(--color-foreground)]/85 leading-relaxed mb-3">
              <strong>Süd5 ist noch im Umbau.</strong> Deshalb gibt es hier noch keine fertigen Zimmerbilder — dafür zeigen wir euch oben Einblicke vom Baufortschritt.
            </p>
            <p className="text-base md:text-[17px] text-[var(--color-foreground)]/75 leading-relaxed">
              Für <strong>tägliche Updates</strong> folgt uns auf Instagram:{" "}
              <a
                href="https://instagram.com/nicundhendrik"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-ocean-strong)] font-medium underline decoration-[var(--color-ocean-strong)]/50 underline-offset-2 hover:decoration-[var(--color-ocean-strong)]"
              >
                @nicundhendrik
              </a>
            </p>
          </div>
        </div>

        {/* Bilderslider – 2 Bilder sichtbar, scrollbar links/rechts */}
        <div className="mb-4 md:text-center">
          <p className="text-[13px] tracking-[0.2em] uppercase text-[var(--color-ocean-strong)]/80 mb-3">
            Galerie · Nach links und rechts scrollen
          </p>
          <ImageSlider images={SLIDER_IMAGES} visibleCount={2} />
        </div>

        {/* Angebote – klares Grid, auf PC zentriert */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 max-w-2xl gap-px bg-[var(--color-sand-dark)]/50 rounded-xl overflow-hidden md:mx-auto">
          {[
            { label: "Einzelzimmer", detail: "Gemütlich für 1" },
            { label: "Doppelzimmer", detail: "Perfekt zu zweit" },
            { label: "Ferienwohnung", detail: "100 m² · bis 6 Personen" },
            { label: "Hunde", detail: "Herzlich willkommen" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-[var(--color-cream)] px-6 py-4"
            >
              <p className="font-[family-name:var(--font-serif)] text-lg text-[var(--color-foreground)]">
                {item.label}
              </p>
              <p className="text-sm text-[var(--color-foreground)]/65 mt-0.5">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
