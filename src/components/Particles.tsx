"use client";

import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

export default function Particles() {
  const mesh = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();

  // generate positions once
  const count = 600;
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3 + 0] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 6;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (!mesh.current) return;

    // subtle drift
    mesh.current.rotation.y += 0.0008;
    mesh.current.rotation.x += 0.0005;

    // cursor attraction (scaled to viewport)
    const targetX = mouse.x * viewport.width * 0.2;
    const targetY = mouse.y * viewport.height * 0.2;

    mesh.current.position.x += (targetX - mesh.current.position.x) * 0.05;
    mesh.current.position.y += (targetY - mesh.current.position.y) * 0.05;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>

      <pointsMaterial
        size={0.04}
        color="#a3a3a3"
        sizeAttenuation
        transparent
        opacity={0.9}
        depthWrite={false}
      />
    </points>
  );
}