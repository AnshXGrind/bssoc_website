"use client";

import { motion, animate, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// lazy load WebGL (performance)
const CinematicCanvas = dynamic(() => import("./CinematicCanvas"), {
  ssr: false,
});

export default function CinematicLoader({ onFinish }: any) {
  const progress = useMotionValue(0);
  const [value, setValue] = useState(0);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const controls = animate(progress, 100, {
      duration: 2,
      ease: "easeInOut",
      onUpdate: (v) => setValue(Math.floor(v)),
      onComplete: () => {
        setExit(true);

        // micro sound
        const audio = new Audio("/click.mp3");
        audio.volume = 0.2;
        audio.play().catch(() => {});

        setTimeout(onFinish, 900);
      },
    });

    return () => controls.stop();
  }, [progress, onFinish]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999]"
      animate={{ opacity: exit ? 0 : 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* WebGL background */}
      <div className="absolute inset-0">
        <CinematicCanvas />
      </div>

      {/* overlay UI */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        {/* logo text fallback / reinforcement */}
        <motion.h1
          className="text-white text-5xl md:text-7xl font-bold tracking-widest"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            exit
              ? {
                  x: "-42vw",
                  y: "-42vh",
                  scale: 0.5,
                }
              : {
                  opacity: 1,
                  scale: 1,
                }
          }
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          BSSOC<span className="text-[#FF4D00]">.</span>
        </motion.h1>

        {/* percentage */}
        <motion.p
          className="mt-6 text-white/70 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {value}%
        </motion.p>
      </div>
    </motion.div>
  );
}
