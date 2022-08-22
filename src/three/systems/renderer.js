import { WebGLRenderer } from "three";

export function createRenderer() {
  const renderer = new WebGLRenderer({
    antialias: true,
    alpha: true
  });

  renderer.physicallyCorrectLights = true;

  return renderer;
}