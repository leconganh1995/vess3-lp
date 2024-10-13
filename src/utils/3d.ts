import * as THREE from "three";

export const getPointStarsData = () => {
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
  return { material, geometry };
};
