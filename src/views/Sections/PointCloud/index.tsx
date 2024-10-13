/* eslint-disable react/display-name */
import React, { useEffect, useRef, memo, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useSectionState } from "@/store";
import { getPointStarsData } from "@/utils/3d";

const ParticleSystem = memo(() => {
  const { currentSectionIndex } = useSectionState();
  const { geometry, material } = useMemo(() => {
    return getPointStarsData();
  }, []);

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
