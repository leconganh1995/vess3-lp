/* eslint-disable react/display-name */
import React, { useEffect, useRef, memo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useSectionState } from "@/store";

const particleCount = 5000;
const positions = new Float32Array(particleCount * 3);

// Create particle positions
for (let i = 0; i < particleCount; i++) {
  positions[i * 3] = Math.random() * 2000 - 1000; // x
  positions[i * 3 + 1] = Math.random() * 2000 - 1000; // y
  positions[i * 3 + 2] = Math.random() * 2000 - 1000; // z
}

const geometry = new THREE.BufferGeometry();
geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

const sprite = new THREE.TextureLoader().load("/images/disc.png");
sprite.colorSpace = THREE.SRGBColorSpace;

const material = new THREE.PointsMaterial({
  map: sprite,
  transparent: true,
  size: 2,
  sizeAttenuation: true,
  color: 0xffffff, // Set particle color
});

const ParticleSystem = memo(() => {
  const { currentSectionIndex } = useSectionState();

  const mouse = useRef({
    y: 0,
  });
  const particlesRef = useRef();

  // Use frame to update the camera and render
  useFrame(({ camera }) => {
    camera.position.y += (-mouse.current.y - camera.position.y) * 0.05;
    camera.lookAt(0, 0, 0);
  });

  useEffect(() => {
    mouse.current.y = currentSectionIndex * 180;
  }, [currentSectionIndex]);

  return <points ref={particlesRef} geometry={geometry} material={material} />;
});

export const PointCloud = () => {
  return (
    <Canvas
      camera={{ position: [0, 66, 200], fov: 75 }}
      style={{ height: "100vh", width: "100vw", position: "absolute", top: 0 }}
    >
      <ambientLight />
      <fog attach="fog" args={[0x000000, 0.0007]} />
      <ParticleSystem />
    </Canvas>
  );
};
