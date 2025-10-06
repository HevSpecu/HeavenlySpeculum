import React, { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float, MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { animation } from './animations';

// HevSpecu Logo Component
function HevSpecuLogo({ position = [0, 0, 0] }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        {/* Central Crystal */}
        <mesh ref={meshRef}>
          <dodecahedronGeometry args={[5, 0]} />
          <MeshDistortMaterial
            color="#00A9FF"
            attach="material"
            distort={0.3}
            speed={2}
            roughness={0.2}
            metalness={0.8}
          />
        </mesh>

        {/* Orbiting Crystals */}
        {[...Array(6)].map((_, i) => {
          const angle = (i / 6) * Math.PI * 2;
          return (
            <mesh key={i} position={[Math.cos(angle) * 10, 0, Math.sin(angle) * 10]}>
              <octahedronGeometry args={[1.5, 0]} />
              <meshStandardMaterial
                color="#003366"
                emissive="#00A9FF"
                emissiveIntensity={0.5}
                metalness={0.9}
                roughness={0.1}
              />
            </mesh>
          );
        })}
      </group>
    </Float>
  );
}

// Aiamgine Gallery Cubes
function AiamgineGallery({ position = [30, 0, 0] }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {[-1, 0, 1].map((x) =>
        [-1, 0, 1].map((y) => (
          <mesh key={`${x}-${y}`} position={[x * 4, y * 4, 0]}>
            <boxGeometry args={[3, 3, 0.2]} />
            <meshStandardMaterial
              color="#00A9FF"
              emissive="#003366"
              emissiveIntensity={0.2}
              metalness={0.5}
              roughness={0.3}
            />
          </mesh>
        ))
      )}
    </group>
  );
}

// SDNUChronoSync Timeline Network
function ChronoSyncTimeline({ position = [0, 0, -10] }) {
  const points = useMemo(() => {
    const p = [];
    for (let i = 0; i < 10; i++) {
      p.push(
        new THREE.Vector3(
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 10
        )
      );
    }
    return p;
  }, []);

  return (
    <group position={position}>
      {points.map((point, i) => (
        <React.Fragment key={i}>
          <mesh position={point}>
            <sphereGeometry args={[0.5, 16, 16]} />
            <meshStandardMaterial
              color="#00A9FF"
              emissive="#00A9FF"
              emissiveIntensity={0.8}
            />
          </mesh>
          {points.map((otherPoint, j) => {
            if (j <= i) return null;
            return (
              <line key={`line-${i}-${j}`}>
                <bufferGeometry>
                  <bufferAttribute
                    attach="attributes-position"
                    count={2}
                    array={new Float32Array([
                      point.x, point.y, point.z,
                      otherPoint.x, otherPoint.y, otherPoint.z
                    ])}
                    itemSize={3}
                  />
                </bufferGeometry>
                <lineBasicMaterial color="#003366" opacity={0.3} transparent />
              </line>
            );
          })}
        </React.Fragment>
      ))}
    </group>
  );
}

// Acceleration Mirror Tunnels
function AccelerationTunnels({ position = [0, 20, 0] }) {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.5;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {[0, Math.PI / 3, (2 * Math.PI) / 3].map((rotation, i) => (
        <group key={i} rotation={[0, 0, rotation]}>
          {[-5, 0, 5].map((z) => (
            <mesh key={z} position={[10, 0, z]}>
              <cylinderGeometry args={[1, 1, 20, 8]} />
              <meshStandardMaterial
                color="#00A9FF"
                emissive="#00A9FF"
                emissiveIntensity={0.5}
                metalness={0.8}
                roughness={0.2}
                transparent
                opacity={0.8}
              />
            </mesh>
          ))}
        </group>
      ))}
    </group>
  );
}

// Gastigado Image Core
function GastigadoCore({ position = [0, 40, 20] }) {
  const coreRef = useRef();

  useFrame((state) => {
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.1;
      coreRef.current.scale.setScalar(scale);
    }
  });

  return (
    <group position={position}>
      <Sphere ref={coreRef} args={[8, 32, 32]}>
        <meshStandardMaterial
          color="#00A9FF"
          emissive="#003366"
          emissiveIntensity={0.6}
          metalness={0.9}
          roughness={0.1}
        />
      </Sphere>

      {/* Orbiting data streams */}
      {[...Array(12)].map((_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[
              Math.cos(angle) * 15,
              Math.sin(angle) * 15,
              Math.cos(angle * 2) * 5
            ]}
          >
            <octahedronGeometry args={[0.5, 0]} />
            <meshStandardMaterial
              color="#00A9FF"
              emissive="#00A9FF"
              emissiveIntensity={1}
            />
          </mesh>
        );
      })}
    </group>
  );
}

// Main Scene Component
export default function Scene() {
  const groupRef = useRef();

  // Update camera based on scroll with delta for damping
  useFrame((state, delta) => {
    animation(state, delta);
  });

  return (
    <group ref={groupRef}>
      {/* HevSpecu Logo - Center */}
      <HevSpecuLogo position={[0, 0, 0]} />

      {/* Aiamgine Gallery */}
      <AiamgineGallery position={[30, 0, 30]} />

      {/* SDNUChronoSync Timeline */}
      <ChronoSyncTimeline position={[-30, 10, -20]} />

      {/* Acceleration Mirror Tunnels */}
      <AccelerationTunnels position={[0, 40, 0]} />

      {/* Gastigado Image Core */}
      <GastigadoCore position={[0, 60, 40]} />
    </group>
  );
}