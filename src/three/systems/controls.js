import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

export function createControls(camera, canvas) {
  const controls = new OrbitControls(camera, canvas);

  controls.enableZoom = false;
  controls.enableDamping = true;

  controls.tick = () => {
    controls.update();
  }

  return controls;
}