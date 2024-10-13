import * as THREE from "three";

(function () {
  "use strict";

  let scene, camera, renderer;
  let container, HEIGHT, WIDTH;
  let mouseX = 0,
    mouseY = 0;
  let windowHalfX, windowHalfY;
  let particles,
    particleCount = 10000;

  init();
  animate();

  function init() {
    HEIGHT = window.innerHeight;
    WIDTH = window.innerWidth;
    windowHalfX = WIDTH / 2;
    windowHalfY = HEIGHT / 2;

    camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 1, 200);
    camera.position.z = 100;

    scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x000000, 0.0007);

    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = Math.random() * 2000 - 1000; // x
      positions[i * 3 + 1] = Math.random() * 2000 - 1000; // y
      positions[i * 3 + 2] = Math.random() * 2000 - 1000; // z
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const materials = [
      new THREE.PointsMaterial({ color: new THREE.Color(1, 1, 0.5), size: 5 }),
      new THREE.PointsMaterial({
        color: new THREE.Color(0.95, 1, 0.5),
        size: 4,
      }),
      new THREE.PointsMaterial({
        color: new THREE.Color(0.9, 1, 0.5),
        size: 3,
      }),
      new THREE.PointsMaterial({
        color: new THREE.Color(0.85, 1, 0.5),
        size: 2,
      }),
      new THREE.PointsMaterial({
        color: new THREE.Color(0.8, 1, 0.5),
        size: 1,
      }),
    ];

    materials.forEach((material) => {
      particles = new THREE.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      scene.add(particles);
    });

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    document.body.appendChild(renderer.domElement);

    container = document.createElement("div");
    document.body.appendChild(container);
    document.body.style.margin = "0";
    document.body.style.overflow = "hidden";

    document.addEventListener("mousemove", onDocumentMouseMove, false);
    document.addEventListener("touchstart", onDocumentTouchStart, false);
    document.addEventListener("touchmove", onDocumentTouchMove, false);
  }

  function animate() {
    requestAnimationFrame(animate);
    render();
  }

  function render() {
    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;

    camera.lookAt(scene.position);
    renderer.render(scene, camera);
  }

  function onDocumentMouseMove(e) {
    mouseX = e.clientX - windowHalfX;
    mouseY = e.clientY - windowHalfY;
  }

  function onDocumentTouchStart(e) {
    if (e.touches.length === 1) {
      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }

  function onDocumentTouchMove(e) {
    if (e.touches.length === 1) {
      e.preventDefault();
      mouseX = e.touches[0].pageX - windowHalfX;
      mouseY = e.touches[0].pageY - windowHalfY;
    }
  }
})();
