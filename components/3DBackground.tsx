'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { Float, OrbitControls, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import type { Mesh } from 'three';

function FloatingCore() {
  const mesh = useRef<Mesh>(null);
  useFrame((_, delta) => { if (mesh.current) mesh.current.rotation.y += delta * 0.35; });
  return <Float speed={1.3} rotationIntensity={0.3} floatIntensity={1.1}><mesh ref={mesh}><icosahedronGeometry args={[1.05, 1]} /><meshStandardMaterial color="#12b8c4" emissive="#0b526f" emissiveIntensity={1.8} wireframe transparent opacity={0.8} /></mesh></Float>;
}

export function ThreeDBackground() {
  return <div className="three-d-background" aria-hidden="true"><Canvas camera={{ position: [0, 0, 4.8], fov: 42 }} dpr={[1, 1.5]}><ambientLight intensity={0.8} /><pointLight position={[3, 2, 4]} color="#bffcff" intensity={16} /><pointLight position={[-4, -2, 2]} color="#1685bd" intensity={12} /><FloatingCore /><Sparkles count={70} scale={8} size={1.4} speed={0.25} color="#b7ffff" /><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.35} /></Canvas></div>;
}
