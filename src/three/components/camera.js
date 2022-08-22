import { PerspectiveCamera } from "three";

export function createCamera() {
  const camera = new PerspectiveCamera(75, 1, 0.1, 100);
  camera.position.set(0, 0, 19);

  return camera;
}