import type { Metadata } from "next";
import { DM_Serif_Display, DM_Sans } from "next/font/google";
import "./globals.css";

const serif = DM_Serif_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
});

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Süd5 Borkum | Strandhaus an der Nordsee",
  description:
    "Ihr Strandhaus auf Borkum - Zwischen Dünen und Nordsee. Jetzt anfragen!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body className={`${serif.variable} ${sans.variable} antialiased`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
