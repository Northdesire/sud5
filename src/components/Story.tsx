"use client";

import { useState } from "react";
import Image from "next/image";
import { instagram } from "@/lib/instagram";

const PLACEHOLDER_GRADIENTS = [
  "from-blue-400 to-blue-600",
  "from-gray-400 to-gray-600",
  "from-stone-300 to-stone-500",
  "from-amber-400 to-orange-500",
  "from-pink-400 to-rose-500",
  "from-teal-400 to-cyan-600",
];

export default function Story() {
  const [failedImages, setFailedImages] = useState<Set<string>>(new Set());

  const markFailed = (src: string) => {
    setFailedImages((prev) => new Set(prev).add(src));
  };

  return (
    <section id="story" className="pt-28 pb-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text side */}
          <div>
            <p className="text-[13px] tracking-[0.3em] uppercase font-medium text-[var(--color-ocean-strong)] mb-4">
              Die Geschichte
            </p>
            <h2 className="font-[family-name:var(--font-serif)] text-3xl md:text-4xl text-[var(--color-foreground)] mb-6 leading-snug">
              Zwei Jungs, eine Insel,
              <br />ein Hotel.
            </h2>
            <div className="space-y-4 text-base md:text-[17px] text-[var(--color-foreground)]/75 leading-relaxed">
              <p>
                Wir sind Nic &amp; Hendrik — und wir renovieren unser eigenes
                Hotel auf Borkum. Komplett. Von Grund auf. Jeden Tag ein
                bisschen mehr.
              </p>
              <p>
                Was als verrückte Idee begann, ist mittlerweile ein echtes
                Abenteuer: Wände rausreißen, Leitungen verlegen, Böden
                schleifen — alles auf einer Nordseeinsel mitten im Meer.
                <strong> Für tägliche Updates vom Umbau folgt uns auf Instagram.</strong>
              </p>
              <p>
                Aus dem alten Gebäude wird das <strong>Süd5</strong> — ein
                Strandhaus mit Einzelzimmern, Doppelzimmern und einer großen
                Ferienwohnung. Unser Traum, bald auch eurer Lieblingsort.
              </p>
            </div>

            {/* Instagram CTA */}
            <a
              href={`https://instagram.com/${instagram.username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 mt-8 group"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center overflow-hidden shrink-0">
                {instagram.profileImage && !failedImages.has(instagram.profileImage) ? (
                  <Image
                    src={instagram.profileImage}
                    alt={instagram.username}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    onError={() => markFailed(instagram.profileImage!)}
                  />
                ) : (
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                  </svg>
                )}
              </div>
              <div>
                <p className="text-base md:text-[17px] font-medium text-[var(--color-foreground)] group-hover:text-[var(--color-ocean)] transition-colors">
                  @{instagram.username}
                </p>
                <p className="text-[11px] text-[var(--color-foreground)]/35">
                  Folg unserem Umbau — {instagram.stats.followers.replace(".", ",")}+ Follower
                </p>
              </div>
              <svg className="w-4 h-4 text-[var(--color-foreground)]/30 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>

          {/* Visual side - Instagram-style grid with real profile & posts */}
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-3 max-w-[320px] mx-auto">
              {/* IG header bar */}
              <div className="flex items-center gap-2.5 px-3 py-3 border-b border-gray-100">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] p-[2px] shrink-0">
                  <div className="w-full h-full rounded-full bg-white p-[1px] overflow-hidden">
                    {instagram.profileImage && !failedImages.has(`card-${instagram.profileImage}`) ? (
                      <Image
                        src={instagram.profileImage}
                        alt=""
                        width={32}
                        height={32}
                        className="w-full h-full object-cover"
                        onError={() => markFailed(`card-${instagram.profileImage!}`)}
                      />
                    ) : (
                      <div className="w-full h-full rounded-full bg-gray-200" />
                    )}
                  </div>
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold text-gray-900 truncate">{instagram.username}</p>
                  <p className="text-[9px] text-gray-400">{instagram.location}</p>
                </div>
              </div>

              {/* Grid of 6 thumbnails - real post images or placeholder */}
              <div className="grid grid-cols-3 gap-[2px] mt-[2px]">
                {instagram.posts.map((item, i) => {
                  const showImage = item.src && !failedImages.has(item.src);
                  return (
                    <div
                      key={i}
                      className={`aspect-square relative overflow-hidden ${!showImage ? `bg-gradient-to-br ${PLACEHOLDER_GRADIENTS[i] ?? PLACEHOLDER_GRADIENTS[0]} flex items-center justify-center p-2` : ""}`}
                    >
                      {showImage && item.src ? (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 768px) 33vw, 106px"
                          className="object-cover"
                          onError={() => markFailed(item.src!)}
                        />
                      ) : (
                        <p className="text-white text-[8px] font-bold text-center leading-tight whitespace-pre-line">
                          {item.alt}
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Stats bar */}
              <div className="flex justify-around py-3 mt-1 text-left">
                <div className="text-center flex-1">
                  <p className="text-[11px] font-bold text-gray-900">{instagram.stats.posts}</p>
                  <p className="text-[8px] text-gray-400">Beiträge</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-[11px] font-bold text-gray-900">{instagram.stats.followers}</p>
                  <p className="text-[8px] text-gray-400">Follower</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-[11px] font-bold text-gray-900">{instagram.stats.following}</p>
                  <p className="text-[8px] text-gray-400">Gefolgt</p>
                </div>
              </div>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-20 h-20 opacity-10">
              <div className="grid grid-cols-4 gap-2">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-[var(--color-foreground)]" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
