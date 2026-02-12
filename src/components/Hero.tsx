interface HeroProps {
  onInquiry: () => void;
}

export default function Hero({ onInquiry }: HeroProps) {
  return (
    <section className="relative min-h-[50vh] md:min-h-[55vh] max-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background – Düne & Meer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero-bg.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/35" />
      </div>

      {/* Seagulls */}
      <div className="absolute top-28 left-[12%] opacity-25 animate-[drift_7s_ease-in-out_infinite]">
        <svg width="40" height="16" viewBox="0 0 40 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
          <path d="M0 10 Q10 0, 20 6 Q30 0, 40 10" />
        </svg>
      </div>
      <div className="absolute top-36 right-[18%] opacity-15 animate-[drift_9s_ease-in-out_infinite_2s]">
        <svg width="30" height="12" viewBox="0 0 40 16" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
          <path d="M0 10 Q10 0, 20 6 Q30 0, 40 10" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-2xl">
        <h1 className="font-[family-name:var(--font-serif)] text-6xl md:text-8xl mb-6 tracking-wide">
          Süd5
        </h1>
        <div className="w-20 h-[1px] bg-white/40 mx-auto mb-6" />
        <p className="text-base md:text-[17px] font-light leading-relaxed mb-3 text-white tracking-wide">
          Strandhaus auf Borkum
        </p>
        <p className="text-base md:text-[17px] font-light leading-relaxed mb-12 text-white/90 tracking-wider">
          Zwischen Dünen, Wellen &amp; Weite
        </p>
        <button
          onClick={onInquiry}
          className="px-8 py-3.5 bg-white/15 backdrop-blur-sm text-white border border-white/40 rounded-full text-base md:text-[17px] tracking-[0.2em] uppercase hover:bg-white/25 transition-all duration-500 cursor-pointer"
        >
          Jetzt anfragen
        </button>
      </div>

      {/* Scroll-Hinweis */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-[1px] h-10 bg-gradient-to-b from-transparent to-white/40" />
      </div>
    </section>
  );
}
