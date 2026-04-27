"use client"

import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import * as THREE from "three"

interface FloatingElementProps {
  position: [number, number, number]
  rotation: [number, number, number]
  children: React.ReactNode
  color: string
}

function FloatingElement({ position, rotation, children, color }: FloatingElementProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.2 + rotation[0]
      meshRef.current.rotation.y = Math.cos(state.clock.elapsedTime) * 0.2 + rotation[1]
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} rotation={rotation}>
        {children}
        <meshStandardMaterial color={color} wireframe={true} emissive={color} emissiveIntensity={0.5} toneMapped={false} />
      </mesh>
    </Float>
  )
}

export default function HeroScene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#00E5FF" />
      
      <FloatingElement position={[-4, 2, -2]} rotation={[0.5, 0.5, 0]} color="#94a3b8">
        <boxGeometry args={[1.5, 1.5, 1.5]} />
      </FloatingElement>
      
      <FloatingElement position={[4, -1, -3]} rotation={[0.2, 0.8, 0]} color="#00E5FF">
        <coneGeometry args={[1, 2, 16]} />
      </FloatingElement>
      
      <FloatingElement position={[0, -3, -5]} rotation={[0, 0, 0]} color="#94a3b8">
        <sphereGeometry args={[1.2, 16, 16]} />
      </FloatingElement>
      
      <FloatingElement position={[-3, -2, -1]} rotation={[0.2, 0.2, 0.2]} color="#FFFFFF">
        <torusGeometry args={[0.8, 0.2, 16, 32]} />
      </FloatingElement>

      <FloatingElement position={[3, 3, -2]} rotation={[0.4, 0.1, 0.5]} color="#FFFFFF">
        <octahedronGeometry args={[1.2]} />
      </FloatingElement>
    </>
  )
}