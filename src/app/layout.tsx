"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import CinematicLoader from "@/components/CinematicLoader";
import Navbar from "@/components/layout/Navbar";

export default function RootLayout({ children }: any) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const seen = sessionStorage.getItem("bssoc_loader");
    if (seen) setLoading(false);
  }, []);

  const handleFinish = () => {
    sessionStorage.setItem("bssoc_loader", "true");
    setLoading(false);
  };

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {loading && <CinematicLoader onFinish={handleFinish} />}

        {!loading && (
          <>
            <Navbar />
            {children}
          </>
        )}
      </body>
    </html>
  );
}
