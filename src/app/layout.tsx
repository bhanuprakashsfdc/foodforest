import type { Metadata } from "next";
import { Fraunces, IBM_Plex_Mono, Work_Sans } from "next/font/google";
import "./globals.css";
import { Ribbon } from "@/components/Ribbon";
import { TopNav } from "@/components/TopNav";
import { Footer } from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-display",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: {
    default: "Tirupati Food Forest — One Acre, Five Layers",
    template: "%s · Tirupati Food Forest",
  },
  description:
    "A complete 1-acre five-layer food forest design for Tirupati, Andhra Pradesh, built on Subhash Palekar Natural Farming principles — feeding a family of five year-round.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${workSans.variable} ${plexMono.variable}`}
    >
      <body>
        <div className="shell">
          <Ribbon />
          <div className="main">
            <TopNav />
            <main>{children}</main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
