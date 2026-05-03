"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import CinematicLoader from "@/components/CinematicLoader";
import Navbar from "@/components/layout/Navbar";

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const MailIcon = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

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
          <div className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[999] flex flex-col md:flex-row gap-3">
            <a
              href="mailto:bssoc4u@gmail.com"
              className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:scale-[1.05] transition-all duration-300 text-white/70 hover:text-white shadow-lg flex items-center justify-center"
            >
              <MailIcon className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/boyscriptsoc/about/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-black/60 backdrop-blur-md border border-white/10 rounded-full hover:bg-white/10 hover:scale-[1.05] transition-all duration-300 text-white/70 hover:text-white shadow-lg flex items-center justify-center"
            >
              <LinkedinIcon className="w-5 h-5" />
            </a>
          </div>
          {children}
        </>
      )}
    </>
  );
}
