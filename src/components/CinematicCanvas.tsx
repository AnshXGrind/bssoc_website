"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Particles from "./Particles";
import { Float, Text } from "@react-three/drei";

export default function CinematicCanvas() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <color attach="background" args={["#000000"]} />

      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1} />

      <Suspense fallback={null}>
        {/* PARTICLES */}
        <Particles />

        {/* FLOATING LOGO */}
        <Float speed={2} rotationIntensity={0.3} floatIntensity={1}>
          <Text
            fontSize={0.8}
            color="#ffffff"
            anchorX="center"
            anchorY="middle"
          >
            BSSOC
          </Text>
        </Float>
      </Suspense>
    </Canvas>
  );
}
