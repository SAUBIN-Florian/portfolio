import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const setupThreeCanvas = (element) => {

  // const vertex = ``;
  // const fragment = ``;

  const canvas = document.querySelector(element);
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 2, .1, 1000);

  const renderer = new THREE.WebGLRenderer({alpha: true});

  const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }
  
  const onMobileDevice = () => {
    camera.aspect = 350 / 350;
    camera.updateProjectionMatrix();
    renderer.setSize(350, 350);
  }

  window.addEventListener("resize", onMobileDevice, false);

  canvas.appendChild(renderer.domElement);

  // CAMERA CONTROLLER
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enableZoom = false;

  //  LIGHTS
  const light1 = new THREE.DirectionalLight(0xffffff, 1);
  const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
  const light3 = new THREE.DirectionalLight(0xffffff, 0.3);
  light1.position.set(0, 0, 1);
  light2.position.set(0, 0, -1);
  light3.position.set(1, 0, -1);
  scene.add(light1);
  scene.add(light2);
  scene.add(light3);

  const geometry = new THREE.IcosahedronGeometry(10, 1);
  const material = new THREE.MeshPhongMaterial({
    // side: THREE.DoubleSide,
    color: 0xe1a624,
    flatShading: true,
    // wireframe: true,
    // vertexShader: vertex,
    // fragmentShader: fragment
  })
  const ico = new THREE.Mesh(geometry, material)
  scene.add(ico);

  camera.position.z = 19;

  const animate = () => {
    requestAnimationFrame(animate);
    ico.rotation.x += .003;
    ico.rotation.y += .003;

    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    onMobileDevice();

    renderer.render(scene, camera);
  };

  animate();

};

export default setupThreeCanvas;