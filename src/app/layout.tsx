import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/layout/SmoothScroll";
import CustomCursor from "@/components/layout/CustomCursor";

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
      className={`${geistSans.variable} ${geistMono.variable} dark`}
    >
      <body className="bg-[#0A0A0A] text-white antialiased overflow-x-hidden selection:bg-[#FF4D00] selection:text-white">
        <SmoothScroll>
          <CustomCursor />
          <div className="fixed inset-0 pointer-events-none z-50 opacity-20 mix-blend-overlay noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
