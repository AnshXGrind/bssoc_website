"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const words = ["BOY", "SCRIPT", "SUMMER", "OF", "CODE"];
  const STEP_MS = 1000; // Slower, readable pace
  const EXIT_MS = 1500; // Longer pause on the last word before the fade out begins

  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [isFullyComplete, setIsFullyComplete] = useState(false);

  useEffect(() => {
    // Lock scroll while loading
    document.body.style.overflow = "hidden";

    const wordTimer = setInterval(() => {
      setActiveIndex((prev) => {
        if (prev >= words.length - 1) {
          clearInterval(wordTimer);
          return prev;
        }
        return prev + 1;
      });
    }, STEP_MS);

    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, words.length * STEP_MS + 200);

    const finishTimer = setTimeout(() => {
      setIsFullyComplete(true);
      document.body.style.overflow = "auto";
    }, words.length * STEP_MS + EXIT_MS + 1000);

    return () => {
      clearInterval(wordTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
      document.body.style.overflow = "auto";
    };
  }, [words.length]);

  return (
    <AnimatePresence>
      {!isFullyComplete && (
        <motion.div
          animate={isExiting ? { y: "-100%" } : { y: 0 }}
          transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#05080f] shadow-[0_20px_50px_rgba(0,0,0,0.5)] text-white origin-bottom"
        >
          <div className="relative w-full max-w-[900px] px-6 text-center">
            {words.map((word, idx) => {
              const isActive = idx === activeIndex;
              const wasShown = idx < activeIndex;
              
              // Last word "CODE" gets a special gradient
              const textClasses = word === "CODE" 
                ? "text-transparent bg-clip-text bg-gradient-to-r from-white to-[#94a3b8]" 
                : "text-white";

              return (
                <h1
                  key={word}
                  className={`absolute inset-x-0 mx-auto top-1/2 -translate-y-1/2 text-5xl md:text-7xl lg:text-8xl font-black tracking-wider uppercase ${textClasses}`}
                  style={{
                    opacity: isActive ? 1 : 0,
                    filter: isActive ? "blur(0px)" : "blur(6px)",
                    transform: isExiting
                      ? "translateY(0px) scale(0.95)"
                      : isActive
                      ? "translateY(0px) scale(1)"
                      : wasShown
                      ? "translateY(-18px) scale(1.03)"
                      : "translateY(18px) scale(0.97)",
                    transition: "opacity 380ms cubic-bezier(0.22, 1, 0.36, 1), transform 560ms cubic-bezier(0.22, 1, 0.36, 1), filter 380ms ease"
                  }}
                >
                  {word}
                </h1>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}