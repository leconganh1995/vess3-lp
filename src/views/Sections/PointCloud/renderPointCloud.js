import * as THREE from "three";

export function renderPointCloud() {
  "use strict";

  let scene, camera, renderer;

  let container, HEIGHT, WIDTH;
  let mouseX = 0,
    mouseY = 0;
  let windowHalfX, windowHalfY;

  init();
  animate();

  function init() {
    // Set the size of the scene
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    // Create the camera
    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 200);
    camera.position.z = 66; // Positioning the camera further back to view particles

    // Create the scene
    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0007);

    // Create the container for the renderer
    container = document.createElement("div");
    document.body.appendChild(container);
    document.body.style.margin = 0;
    document.body.style.overflow = "hidden";

    // Create particles
    const particleCount = 10000;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 2000 - 1000; // x
      positions[i * 3 + 1] = Math.random() * 2000 - 1000; // y
      positions[i * 3 + 2] = Math.random() * 2000 - 1000; // z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    // Create material for particles
    const material = new THREE.PointsMaterial({
      size: 1,
      sizeAttenuation: true,
      color: 0xffffff, // Set particle color
    });

    // Create the particles and add to the scene
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Create the renderer
    renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(WIDTH, HEIGHT);
    container.appendChild(renderer.domElement);

    // Add event listeners for mouse movement
    document.addEventListener("mousemove", onDocumentMouseMove, false);
    document.addEventListener("touchstart", onDocumentTouchStart, false);
    document.addEventListener("touchmove", onDocumentTouchMove, false);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    const time = Date.now() * 0.00005;

    // Update camera position based on mouse movement
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    // Render the scene
    renderer.render(scene, camera);
  }

  function onDocumentMouseMove(event) {
    mouseX = event.clientX - windowHalfX;
    mouseY = event.clientY - windowHalfY;
  }

  function onDocumentTouchStart(event) {
    if (event.touches.length === 1) {
      event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }

  function onDocumentTouchMove(event) {
    if (event.touches.length === 1) {
      event.preventDefault();
      mouseX = event.touches[0].pageX - windowHalfX;
      mouseY = event.touches[0].pageY - windowHalfY;
    }
  }

  return <></>;
}
