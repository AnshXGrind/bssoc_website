"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CinematicLoader({ onFinish }: { onFinish: () => void }) {
  const words = ["BOY", "SCRIPT", "SUMMER", "OF", "CODE", "BSSOC"];
  const [index, setIndex] = useState(0);


  useEffect(() => {
    if (index === words.length) {
      const finishTimeout = setTimeout(onFinish, 500);
      return () => clearTimeout(finishTimeout);
    }

    const timeout = setTimeout(() => {
      setIndex(index + 1);
    }, 1500); // Slowed down to 1.5s for deeper engagement

    return () => clearTimeout(timeout);
  }, [index, words.length]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        y: "-100%",
        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] } 
      }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <div className="relative h-[150px] md:h-[200px] w-full overflow-hidden flex items-center justify-center text-center">
        <AnimatePresence mode="wait">
          <motion.h1
            key={words[index]}
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1] 
            }}
            className="absolute text-5xl md:text-7xl lg:text-9xl font-black tracking-tighter uppercase"
            style={{
                background: words[idx] === "BSSOC" ? "linear-gradient(to right, white, #94a3b8)" : "none",
                WebkitBackgroundClip: words[index] === "BSSOC" ? "text" : "none",
                WebkitTextFillColor: words[index] === "BSSOC" ? "transparent" : "white",
                color: "white"
            }}
          >
            {words[index] || ""}
          </motion.h1>
        </AnimatePresence>
      </div>

      {/* Progress bar removed as requested */}
    </motion.div>
  );
}
