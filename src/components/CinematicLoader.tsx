"use client";

import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const CinematicCanvas = dynamic(() => import("./CinematicCanvas"), {
  ssr: false,
});

export default function CinematicLoader({ onFinish }: any) {
  const progress = useMotionValue(0);
  const [value, setValue] = useState(0);
  const [phase, setPhase] = useState("intro"); // intro ? move ? exit

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 1.6,
      ease: "easeInOut",
      onUpdate: (v) => setValue(Math.floor(v)),
      onComplete: () => {
        setPhase("move");

        const audio = new Audio("/tick.mp3");
        audio.volume = 0.15;
        audio.play().catch(() => {});

        setTimeout(() => {
          setPhase("exit");
          setTimeout(onFinish, 500);
        }, 800);
      },
    });

    return () => controls.stop();
  }, [progress, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] bg-black"
      animate={{ opacity: phase === "exit" ? 0 : 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* PARTICLES BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: phase === "intro" ? 1 : 0.6 }}
        transition={{ duration: 0.6 }}
      >
        <CinematicCanvas />
      </motion.div>

      {/* CENTER CONTENT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">

        {/* LOGO */}
        <motion.h1
          className="text-white text-5xl md:text-7xl font-bold tracking-widest"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            phase === "move"
              ? {
                  x: "-42vw",
                  y: "-42vh",
                  scale: 0.45,
                }
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{
            duration: 0.8,
            ease: [0.65, 0, 0.35, 1], // smooth cubic
          }}
        >
          BSSOC<span className="text-[#94a3b8]">.</span>
        </motion.h1>

        {/* PERCENT */}
        <motion.div
          className="mt-6 text-white/70 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: phase === "intro" ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          {value}%
        </motion.div>
      </div>

      {/* GLOW */}
      <div className="absolute w-[500px] h-[500px] bg-[#94a3b8] opacity-20 blur-[160px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}