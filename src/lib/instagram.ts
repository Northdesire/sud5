/**
 * Instagram content for the Story section.
 * Set profileImage and post src when you have the files:
 * - Add profile image to public/nicundhendrik-profile.jpg
 * - Add 6 latest post images to public/ig-post-1.jpg … public/ig-post-6.jpg
 * Or use full URLs (e.g. from a CDN) if you host them elsewhere.
 */

export const instagram = {
  username: "nicundhendrik",
  profileImage: "/nicundhendrik-profile.png",
  location: "Borkum, Germany",
  stats: {
    posts: 43,
    followers: "5.879",
    following: 13,
  },
  /** 6 neueste Posts (Thumbnails in der Instagram-Karte) */
  posts: [
    { src: "/ig-post-1.png", alt: "Hotel Umbau Tag 25" },
    { src: "/ig-post-2.png", alt: "Hotel Umbau Tag 24" },
    { src: "/ig-post-3.png", alt: "wait for it" },
    { src: "/ig-post-4.png", alt: "Tag 1 · Schlüssel!" },
    { src: "/ig-post-5.png", alt: "Nic & Hendrik" },
    { src: "/ig-post-6.png", alt: "ES IST SAMSTAG" },
  ] as Array<{ src: string | null; alt: string }>,
};
