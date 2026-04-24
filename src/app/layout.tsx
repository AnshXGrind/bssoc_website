import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";
import ScrollProgress from "@/components/layout/ScrollProgress";

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
      className={`${geistSans.variable} ${geistMono.variable} dark perspective-1000`}
    >
      <body>
        <LoadingScreen />
        <ScrollProgress />
        <SmoothScroll>
          <CustomCursor />
          
          {/* Sticky Logo */}
          <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50 pointer-events-none mix-blend-difference">
            <a href="/" className="pointer-events-auto inline-block">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-white uppercase" style={{ fontFamily: 'var(--font-geist-sans)' }}>
                BSSOC
              </span>
            </a>
          </div>

          {/* Global Background Effects - Optimized */}
          <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-[#0A0A0A]">
            <div className="absolute inset-0 opacity-[0.03] noise-overlay" />
          </div>

          {children}

          {/* Footer Image Temp */}
          <footer className="w-full flex justify-center py-8 z-50 relative bg-[#0A0A0A]">
            <img src="/footer-image.png" alt="Footer" className="w-full max-w-[1200px] h-auto object-contain" />
          </footer>
        </SmoothScroll>
      </body>
    </html>
  );
}
