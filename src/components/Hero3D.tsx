import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Environment } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

function Knot() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.18;
    ref.current.rotation.y = state.clock.elapsedTime * 0.24;
  });
  return (
    <mesh ref={ref} scale={1.55}>
      <torusKnotGeometry args={[1, 0.34, 220, 32]} />
      <MeshDistortMaterial
        color="#8b5cf6"
        emissive="#6d28d9"
        emissiveIntensity={0.35}
        roughness={0.18}
        metalness={0.85}
        distort={0.32}
        speed={1.4}
      />
    </mesh>
  );
}

function OrbitingSphere({
  radius,
  speed,
  color,
  offset = 0,
  size = 0.18,
}: {
  radius: number;
  speed: number;
  color: string;
  offset?: number;
  size?: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.elapsedTime * speed + offset;
    if (!ref.current) return;
    ref.current.position.x = Math.cos(t) * radius;
    ref.current.position.z = Math.sin(t) * radius;
    ref.current.position.y = Math.sin(t * 1.3) * 0.6;
  });
  return (
    <mesh ref={ref}>
      <sphereGeometry args={[size, 24, 24]} />
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.6} roughness={0.3} />
    </mesh>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.2} color="#a78bfa" />
        <directionalLight position={[-5, -3, -5]} intensity={0.8} color="#22d3ee" />
        <pointLight position={[0, 0, 3]} intensity={1.2} color="#f0abfc" />

        <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.8}>
          <Knot />
        </Float>

        <OrbitingSphere radius={2.6} speed={0.6} color="#22d3ee" offset={0} size={0.16} />
        <OrbitingSphere radius={2.9} speed={0.45} color="#f0abfc" offset={2} size={0.12} />
        <OrbitingSphere radius={2.4} speed={0.7} color="#fbbf24" offset={4} size={0.1} />

        <Environment preset="night" />
      </Suspense>
    </Canvas>
  );
}