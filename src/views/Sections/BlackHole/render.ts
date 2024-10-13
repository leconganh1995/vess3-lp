import * as THREE from "three";
import { EffectComposer } from "three/addons/postprocessing/EffectComposer.js";
import { RenderPass } from "three/addons/postprocessing/RenderPass.js";
import { ShaderPass } from "three/addons/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/addons/postprocessing/UnrealBloomPass.js";
import { CopyShader } from "three/addons/shaders/CopyShader.js";
import { Vector2 } from "three/src/math/Vector2.js";

import { CameraDragControls } from "./camera/CameraDragControls";
import { Observer } from "./camera/Observer";
// @ts-ignore: Unreachable code error
import fragmentShader from "./graphics/fragmentShader.glsl";

export function createRenderer() {
  const renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(0x000000, 1.0);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.autoClear = false;
  return renderer;
}

export function createScene(renderer) {
  const scene = new THREE.Scene();
  const camera = new THREE.Camera();
  camera.position.z = 1;

  const composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  const bloomPass = new UnrealBloomPass(new Vector2(128, 128), 0.8, 2.0, 0.0);
  const shaderPass = new ShaderPass(CopyShader);
  shaderPass.renderToScreen = true;

  composer.addPass(renderPass);
  composer.addPass(bloomPass);
  composer.addPass(shaderPass);

  return {
    scene,
    composer,
    bloomPass,
  };
}

export function createCamera(renderer) {
  const observer = new Observer(
    100.0,
    window.innerWidth / window.innerHeight,
    1,
    80000
  );
  const cameraControl = new CameraDragControls(observer, renderer.domElement);
  return {
    observer,
    cameraControl,
  };
}

export function loadTextures() {
  const textures = new Map();
  const textureLoader = new THREE.TextureLoader();
  function loadTexture(name, interpolation, wrap = THREE.ClampToEdgeWrapping) {
    textures.set(name, null);
    textureLoader.load("/images/accretion_disk-3.png", (texture) => {
      texture.magFilter = interpolation;
      texture.minFilter = interpolation;
      texture.wrapT = wrap;
      texture.wrapS = wrap;
      textures.set(name, texture);
    });
  }

  loadTexture("disk", THREE.LinearFilter);

  window.onbeforeunload = () => {
    // @ts-ignore: Unreachable code error
    for (const texture of textures.values()) {
      texture.dispose();
    }
  };

  return textures;
}

export async function createShaderProjectionPlane(uniforms) {
  // const vertexShader = document.getElementById("vertexShader")?.textContent;
  // if (!vertexShader) {
  //   throw new Error("Error reading vertex shader!");
  // }
  const material = new THREE.ShaderMaterial({
    uniforms: uniforms,
    vertexShader: `void main()	{
      gl_Position = vec4( position, 1.0 );
    }`,
    fragmentShader: getShaderDefineConstant("low") + fragmentShader,
  });
  material.needsUpdate = true;

  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), material);

  function getShaderDefineConstant(quality) {
    let STEP, NSTEPS;
    switch (quality) {
      case "low":
        STEP = 0.1;
        NSTEPS = 300;
        break;
      case "medium":
        STEP = 0.05;
        NSTEPS = 600;
        break;
      case "high":
        STEP = 0.02;
        NSTEPS = 1000;
        break;
      default:
        STEP = 0.05;
        NSTEPS = 600;
    }
    return `
      #define STEP ${STEP}
      #define NSTEPS ${NSTEPS}
    `;
  }

  return {
    mesh,
  };
}
