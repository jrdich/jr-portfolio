"use client"

import { useRef, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Environment, Stars } from "@react-three/drei"
import { useTheme } from "next-themes"
import * as THREE from "three"

function FloatingParticles({ count = 100, color = "#ffffff" }) {
  const mesh = useRef<THREE.InstancedMesh>(null)
  const particles = useRef<{ position: [number, number, number]; velocity: [number, number, number] }[]>([])

  useEffect(() => {
    particles.current = Array.from({ length: count }, () => ({
      position: [(Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20],
      velocity: [(Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02, (Math.random() - 0.5) * 0.02],
    }))
  }, [count])

  useFrame(() => {
    if (!mesh.current) return

    const tempMatrix = new THREE.Matrix4()

    particles.current.forEach((particle, i) => {
      // Update position
      particle.position[0] += particle.velocity[0]
      particle.position[1] += particle.velocity[1]
      particle.position[2] += particle.velocity[2]

      // Boundary check and bounce
      for (let j = 0; j < 3; j++) {
        if (Math.abs(particle.position[j]) > 10) {
          particle.velocity[j] *= -1
        }
      }

      // Set matrix for instanced mesh
      tempMatrix.setPosition(particle.position[0], particle.position[1], particle.position[2])
      mesh.current.setMatrixAt(i, tempMatrix)
    })

    mesh.current.instanceMatrix.needsUpdate = true
  })

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </instancedMesh>
  )
}

function GridFloor() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <gridHelper
      args={[40, 40, isDark ? "#444444" : "#dddddd", isDark ? "#222222" : "#bbbbbb"]}
      position={[0, -5, 0]}
      rotation={[0, 0, 0]}
    />
  )
}

// Improve contrast in 3D scene for better text visibility
export default function HeroScene() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <Canvas className="h-full w-full">
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.8} />
      <FloatingParticles count={150} color={isDark ? "#ffffff" : "#000000"} />
      <GridFloor />
      <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />
      <Environment preset={isDark ? "night" : "sunset"} />
      {/* Add a semi-transparent plane behind text for better readability */}
      <mesh position={[0, 0, -5]} rotation={[0, 0, 0]}>
        <planeGeometry args={[40, 40]} />
        <meshBasicMaterial color={isDark ? "#000000" : "#ffffff"} transparent opacity={0.2} />
      </mesh>
    </Canvas>
  )
}

