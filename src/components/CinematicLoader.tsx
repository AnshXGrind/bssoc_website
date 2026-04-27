"use client";

import { useEffect, useState } from "react";

export default function CinematicLoader({ onFinish }: any) {
  const words = ["BOY", "SCRIPT", "SUMMER", "OF", "CODE"];
  const STEP_MS = 520;
  const EXIT_MS = 700;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
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
    }, words.length * STEP_MS + 260);
    const finishTimer = setTimeout(onFinish, words.length * STEP_MS + EXIT_MS + 260);

    return () => {
      clearInterval(wordTimer);
      clearTimeout(exitTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish, words.length]);

  return (
    <div
      className="fixed inset-0 z-[9999] bg-black"
      style={{
        opacity: isExiting ? 0 : 1,
        transition: "opacity 800ms cubic-bezier(0.16, 1, 0.3, 1)",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-[900px] px-6 text-center">
          {words.map((word, idx) => {
            const isActive = idx === activeIndex;
            const wasShown = idx < activeIndex;
            return (
              <h1
                key={word}
                className="absolute inset-0 text-white text-5xl md:text-7xl lg:text-8xl font-black tracking-[0.18em] uppercase"
                style={{
                  opacity: isExiting ? 0 : isActive ? 1 : 0,
                  filter: isActive ? "blur(0px)" : "blur(6px)",
                  transform: isExiting
                    ? "translateY(-12px) scale(1.02)"
                    : isActive
                    ? "translateY(0px) scale(1)"
                    : wasShown
                    ? "translateY(-18px) scale(1.03)"
                    : "translateY(18px) scale(0.97)",
                  transition:
                    "opacity 380ms cubic-bezier(0.22, 1, 0.36, 1), transform 560ms cubic-bezier(0.22, 1, 0.36, 1), filter 380ms ease",
                }}
              >
                {word}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
}
