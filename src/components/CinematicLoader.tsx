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
    }, 1000); // 1 second per word for a slow, premium feel

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
      <div className="relative h-20 w-full overflow-hidden flex items-center justify-center text-center">
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
                background: words[index] === "BSSOC" ? "linear-gradient(to right, #94a3b8, #00E5FF)" : "none",
                WebkitBackgroundClip: words[index] === "BSSOC" ? "text" : "none",
                WebkitTextFillColor: words[index] === "BSSOC" ? "transparent" : "white",
                color: "white"
            }}
          >
            {words[index] || ""}
          </motion.h1>
        </AnimatePresence>
      </div>

      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: index / (words.length - 1) }}
        transition={{ duration: 1, ease: "linear" }}
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-blue origin-left"
      />
    </motion.div>
  );
}
