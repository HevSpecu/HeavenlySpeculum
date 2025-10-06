import React, { useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';
import * as THREE from 'three';
import Scene from './Scene';

export default function Background() {
  const canvasRef = useRef(null);

  return (
    <div className="hev-canvas-container">
      <Canvas
        ref={canvasRef}
        gl={{
          antialias: true,
          powerPreference: "high-performance",
          alpha: false,
        }}
        camera={{
          position: [0, 0, 50],
          fov: 50,
          near: 0.1,
          far: 1000,
        }}
        onCreated={({ gl }) => {
          gl.setClearColor(new THREE.Color(0x0A0A0A));
        }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00A9FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#003366" />
        <spotLight
          position={[0, 50, 0]}
          angle={0.5}
          penumbra={1}
          intensity={0.5}
          color="#00A9FF"
          castShadow
        />

        {/* 3D Scene */}
        <Scene />

        {/* Starfield Background */}
        <Stars
          radius={300}
          depth={60}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />

        {/* Controls removed to avoid conflicts with scroll-driven camera */}
      </Canvas>
    </div>
  );
}