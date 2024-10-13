/* eslint-disable react/display-name */
// components/ThreeScene.js
import { memo, useEffect, useRef } from "react";
import * as THREE from "three";
import { motion } from "framer-motion";
import {
  createCamera,
  createRenderer,
  createScene,
  createShaderProjectionPlane,
  loadTextures,
} from "./render";
import { useSectionState } from "@/store";
import { SectionIndexEnum } from "@/constants";
import { useBreakpoint } from "@/hooks/useBreakpoint";

const animationDuration = 500;

const ThreeScene = memo(() => {
  const { isLg } = useBreakpoint("lg");
  const canvasRef = useRef(null);
  const { currentSectionIndex } = useSectionState();
  const currentSectionIndexRef = useRef(0);
  const fovAnimationActive = useRef(false);
  const startTime = useRef<any>(null);
  const initialFov = useRef(100);
  const targetFov = useRef(60);

  useEffect(() => {
    currentSectionIndexRef.current = currentSectionIndex;
    fovAnimationActive.current = true;
    startTime.current = Date.now();

    if (currentSectionIndex === 1) {
      targetFov.current = 60;
      initialFov.current = 100;
      return;
    }

    if (currentSectionIndex === 2) {
      targetFov.current = 100;
      initialFov.current = 60;
      return;
    }

    targetFov.current = 100;
    initialFov.current = 60;
  }, [currentSectionIndex]);

  useEffect(() => {
    let lastframe = Date.now();
    let delta = 0;
    let time = 0;

    // Set up uniforms for the shader
    const uniforms = {
      time: { type: "f", value: 0.0 },
      resolution: { type: "v2", value: new THREE.Vector2() },
      accretion_disk: { type: "b", value: false },
      use_disk_texture: { type: "b", value: true },
      lorentz_transform: { type: "b", value: false },
      doppler_shift: { type: "b", value: false },
      beaming: { type: "b", value: false },
      cam_pos: { type: "v3", value: new THREE.Vector3() },
      cam_vel: { type: "v3", value: new THREE.Vector3() },
      cam_dir: { type: "v3", value: new THREE.Vector3() },
      cam_up: { type: "v3", value: new THREE.Vector3() },
      fov: { type: "f", value: 0.0 },
      bg_texture: { type: "t", value: null },
      star_texture: { type: "t", value: null },
      disk_texture: { type: "t", value: null },
    };

    // Create renderer, scene, and other instances
    const renderer = createRenderer();
    if (canvasRef.current) {
      canvasRef.current.appendChild(renderer.domElement);
    }

    const { composer, bloomPass, scene } = createScene(renderer);

    const init = async () => {
      // Load textures and set up the shader projection plane
      const textures = loadTextures();
      const { mesh } = await createShaderProjectionPlane(uniforms);
      scene.add(mesh);

      // Set up the camera
      const { observer, cameraControl } = createCamera(renderer);
      scene.add(observer);

      // Add point cloud
      const pointCloudGeometry = new THREE.BufferGeometry();
      const points = new Float32Array(500 * 3); // 500 points, each with x, y, z coordinates

      for (let i = 0; i < 500; i++) {
        points[i * 3] = (Math.random() - 0.5) * 200; // x
        points[i * 3 + 1] = (Math.random() - 0.5) * 200; // y
        points[i * 3 + 2] = (Math.random() - 0.5) * 200; // z
      }

      pointCloudGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(points, 3)
      );

      const pointCloudMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 1.5,
        sizeAttenuation: true,
      });

      const pointCloud = new THREE.Points(
        pointCloudGeometry,
        pointCloudMaterial
      );
      scene.add(pointCloud);

      // Start the update loop
      const update = () => {
        delta = (Date.now() - lastframe) / 1000;
        time += delta;

        // Update renderer dimensions
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(window.innerWidth, window.innerHeight);
        composer.setSize(window.innerWidth, window.innerHeight);

        // Update observer and controls
        observer.update(delta);
        cameraControl.update(delta);

        // Update shader variables
        updateUniforms();
        // Render the scene
        composer.render();

        // Loop
        requestAnimationFrame(update);
        lastframe = Date.now();
      };

      const interpolateFov = () => {
        if (!fovAnimationActive.current) return observer.fov;
        if (observer.fov === targetFov.current) return observer.fov;
        const elapsed = Date.now() - startTime.current;
        const progress = Math.min(elapsed / animationDuration, 1);

        observer.fov =
          initialFov.current +
          (targetFov.current - initialFov.current) * progress;

        if (progress === 1) {
          fovAnimationActive.current = false;
          fovAnimationActive.current = null;
        }

        return observer.fov;
      };

      // Update uniforms function
      const updateUniforms = () => {
        uniforms.time.value = time;
        uniforms.resolution.value.x = window.innerWidth;
        uniforms.resolution.value.y = window.innerHeight;

        uniforms.cam_pos.value = observer.position;
        uniforms.cam_dir.value = observer.direction;
        uniforms.cam_up.value = observer.up;
        uniforms.fov.value = observer.fov;

        uniforms.cam_vel.value = observer.velocity;

        // Update textures
        // uniforms.bg_texture.value = textures.get("bg1");
        // uniforms.star_texture.value = textures.get("star");
        uniforms.disk_texture.value = textures.get("disk");

        bloomPass.strength = 1;
        bloomPass.radius = 0.5;
        bloomPass.threshold = 2;

        observer.distance = 12;
        // observer.moving = true;
        observer.fov = interpolateFov();
        uniforms.lorentz_transform.value = true;
        uniforms.accretion_disk.value = true;
        uniforms.use_disk_texture.value = true;
        uniforms.doppler_shift.value = true;
        uniforms.beaming.value = true;
      };

      update();
    };

    init();

    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <motion.div
      animate={{
        rotateZ: 4,
        y:
          currentSectionIndex === SectionIndexEnum.Governance && !isLg
            ? "-30%"
            : "0%",
        x:
          currentSectionIndex === SectionIndexEnum.Governance && isLg
            ? "20%"
            : "0%",
        transition: {
          duration: 0.5,
        },
      }}
      ref={canvasRef}
      style={{ width: "100%", height: "100vh" }}
    />
  );
});

export default ThreeScene;
