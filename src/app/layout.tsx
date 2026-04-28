import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  title: "BoyScript Summer of Code 2026",
  description: "Official website for BoyScript Summer of Code 2026",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <ClientWrapper>
          {children}
        </ClientWrapper>
      </body>
    </html>
  );
}
