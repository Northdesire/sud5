"use client";

import Image from "next/image";
import { useRef, useState, useEffect } from "react";

interface ImageSliderProps {
  images: { src: string; alt: string }[];
  /** Wie viele Bilder gleichzeitig sichtbar (Standard 2) */
  visibleCount?: number;
}

export default function ImageSlider({
  images,
  visibleCount = 2,
}: ImageSliderProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 2);
    setCanScrollRight(
      el.scrollLeft < el.scrollWidth - el.clientWidth - 2
    );
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [images.length]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const step = el.clientWidth;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  const itemWidthPercent = 100 / visibleCount;

  return (
    <div className="relative">
      {/* Scroll-Hinweis links */}
      {canScrollLeft && (
        <button
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[var(--color-foreground)]/90 text-white flex items-center justify-center shadow-lg hover:bg-[var(--color-foreground)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]"
          aria-label="Nach links scrollen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
      )}

      {/* Scroll-Container */}
      <div
        ref={scrollRef}
        className="flex overflow-x-auto gap-4 scroll-smooth snap-x snap-mandatory py-2 scrollbar-thin"
        style={{
          scrollbarWidth: "thin",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {images.map((img, i) => (
          <div
            key={img.src}
            className="flex-shrink-0 snap-center rounded-2xl overflow-hidden bg-[var(--color-sand)]"
            style={{ width: `calc(${itemWidthPercent}% - ${(16 * (visibleCount - 1)) / visibleCount}px)` }}
          >
            <div className="relative aspect-[3/4] w-full">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Scroll-Hinweis rechts */}
      {canScrollRight && (
        <button
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-[var(--color-foreground)]/90 text-white flex items-center justify-center shadow-lg hover:bg-[var(--color-foreground)] transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--color-ocean)]"
          aria-label="Nach rechts scrollen"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {/* Dezente Gradienten am Rand als Scroll-Hinweis */}
      {canScrollLeft && (
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[var(--color-cream)] to-transparent z-[1]" aria-hidden />
      )}
      {canScrollRight && (
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[var(--color-cream)] to-transparent z-[1]" aria-hidden />
      )}
    </div>
  );
}
