"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CinematicLoader from "@/components/CinematicLoader";
import Navbar from "@/components/layout/Navbar";
import { Linkedin } from "lucide-react";

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
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
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <CinematicLoader key="loader" onFinish={handleFinish} />
        )}
      </AnimatePresence>

      {!loading && (
        <>
          <Navbar />
          <a
            href="https://www.linkedin.com/company/boyscriptsoc/about/"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:scale-[1.05] transition-all duration-300 text-white/70 hover:text-white shadow-lg"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {children}
        </>
      )}
    </>
  );
}
