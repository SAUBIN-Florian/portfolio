import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const setupThreeCanvas = (element) => {

  const canvas = document.querySelector(element);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 1000);

  const renderer = new THREE.WebGLRenderer({alpha: true});
  renderer.setSize(400, 400);
  canvas.appendChild(renderer.domElement);

  new OrbitControls(camera, renderer.domElement);

  const geometry = new THREE.IcosahedronGeometry(10, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x0000ff })
  const ico = new THREE.Mesh(geometry, material)
  scene.add(ico);

  camera.position.z = 17;

  const animate = () => {
    requestAnimationFrame(animate);
    ico.rotation.x += .003;
    ico.rotation.y += .003;

    renderer.render(scene, camera);
  };

  animate();

};

export default setupThreeCanvas;