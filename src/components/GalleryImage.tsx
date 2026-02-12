"use client";

import Image from "next/image";
import { useState } from "react";

interface GalleryImageProps {
  src: string;
  alt: string;
  fill?: boolean;
  sizes?: string;
  className?: string;
  priority?: boolean;
  /** Für das große Querformat-Bild (row-span-2) */
  tall?: boolean;
}

export default function GalleryImage({
  src,
  alt,
  fill = true,
  sizes,
  className = "",
  priority = false,
  tall = false,
}: GalleryImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`bg-[var(--color-sand-dark)] flex items-center justify-center ${className}`}
        aria-label={alt}
      >
        <span className="text-[var(--color-foreground)]/40 text-sm px-4 text-center">
          {alt}
        </span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      sizes={sizes ?? (tall ? "(max-width: 768px) 50vw, 33vw" : "(max-width: 768px) 50vw, 33vw")}
      className={`object-cover hover:scale-105 transition-transform duration-700 ${className}`}
      onError={() => setError(true)}
      priority={priority}
    />
  );
}
