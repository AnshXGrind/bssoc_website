import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BSSOC | Build. Ship. Scale. Open Code",
  description: "An elite open-source program focused on real-world product building.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark perspective-1000 overflow-x-hidden`}
    >
      <body className="overflow-x-hidden">
        <LoadingScreen />
        <ScrollProgress />
        <Navbar />
        <Link
          href="/"
          aria-label="BSSOC Home"
          className="fixed z-[1000] uppercase font-black tracking-tighter text-white text-2xl md:text-3xl"
          style={{ top: "20px", left: "32px" }}
        >
          BSSOC.
        </Link>
        <SmoothScroll>
          <CustomCursor />

          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#0A0A0A] max-w-full">
            <div className="absolute inset-0 opacity-[0.03] noise-overlay" />
          </div>

          {children}

          <footer className="w-full max-w-full overflow-hidden flex justify-between items-center py-8 z-50 relative bg-[#0A0A0A] px-6 md:px-12 border-t border-white/10">
            <span className="text-xs md:text-sm text-white/50 font-mono uppercase tracking-widest">BSSOC</span>
            <span className="text-xs md:text-sm text-white/50 font-mono uppercase tracking-widest">Build. Ship. Scale.</span>
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
