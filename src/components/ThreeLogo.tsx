"use client";

import { Canvas } from "@react-three/fiber";
import { Text, Float } from "@react-three/drei";

export default function ThreeLogo() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.6} />
      <pointLight position={[10, 10, 10]} intensity={1} />

      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Text
          fontSize={1}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          BSSOC
        </Text>
      </Float>
    </Canvas>
  );
}
