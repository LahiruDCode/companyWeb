import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function IcosahedronGeometry() {
  const meshRef = useRef()
  const wireRef = useRef()

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.x = t * 0.1
      meshRef.current.rotation.y = t * 0.15
      meshRef.current.rotation.z = t * 0.05
    }
    if (wireRef.current) {
      wireRef.current.rotation.x = t * 0.1
      wireRef.current.rotation.y = t * 0.15
      wireRef.current.rotation.z = t * 0.05
    }
  })

  const glowMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#06b6d4'),
      transparent: true,
      opacity: 0.06,
      side: THREE.DoubleSide,
    })
  }, [])

  const wireMaterial = useMemo(() => {
    return new THREE.MeshBasicMaterial({
      color: new THREE.Color('#06b6d4'),
      wireframe: true,
      transparent: true,
      opacity: 0.3,
    })
  }, [])

  return (
    <group>
      <mesh ref={meshRef} material={glowMaterial}>
        <icosahedronGeometry args={[2.2, 1]} />
      </mesh>
      <mesh ref={wireRef} material={wireMaterial}>
        <icosahedronGeometry args={[2.2, 1]} />
      </mesh>
    </group>
  )
}

function FloatingParticles() {
  const pointsRef = useRef()
  const count = 200

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return pos
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      pointsRef.current.rotation.x = state.clock.getElapsedTime() * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#06b6d4"
        size={0.03}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        style={{ background: 'transparent' }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.5} />
        <IcosahedronGeometry />
        <FloatingParticles />
      </Canvas>
    </div>
  )
}
