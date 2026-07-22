import { useRef, Suspense, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function FlutterShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const { viewport } = useThree();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      meshRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.2) * 0.05;
    }
  });

  const scale = Math.min(viewport.width, viewport.height) * 0.15;

  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef} scale={scale}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#027DFD"
          roughness={0.2}
          metalness={0.8}
          distort={0.3}
          speed={2}
          envMapIntensity={1}
        />
      </mesh>
      <mesh scale={scale * 0.7} position={[0.5, -0.3, 0.2]}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial
          color="#00D4FF"
          roughness={0.3}
          metalness={0.7}
          distort={0.2}
          speed={1.5}
          transparent
          opacity={0.9}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#027DFD" />
      <pointLight position={[5, 5, 5]} intensity={0.3} color="#00D4FF" />
      <FlutterShape />
    </>
  );
}

export default function FlutterLogo3D() {
  const [isVisible, setIsVisible] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    const handler = () => setReducedMotion(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const element = document.getElementById('hero-canvas');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  if (reducedMotion) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent opacity-50 blur-xl" />
      </div>
    );
  }

  return (
    <div id="hero-canvas" className="w-full h-full">
      <Canvas
        frameloop={isVisible ? "always" : "never"}
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
