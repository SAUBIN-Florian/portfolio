import { createScene } from "./components/scene";
import { createCamera } from "./components/camera";
import { createLights } from "./components/lights";
import { createMesh } from "./components/mesh";

import { createRenderer } from "./systems/renderer";
import { createControls } from "./systems/controls";
import { Resizer } from "./systems/Resizer";
import { Loop } from "./systems/Loop";


// Declare variables for private scope
let scene;
let camera;
let renderer;
let loop;

export class World {

  constructor(canvas) {
    scene = createScene();
    camera = createCamera();
    renderer = createRenderer(canvas);
    loop = new Loop(camera, scene, renderer);
    canvas.appendChild(renderer.domElement);

    const controls = createControls(camera, renderer.domElement);

    const ico = createMesh();
    const { mainLight, globalLight } = createLights();

    // update each frame element of the array updatables
    loop.updatables.push(ico, controls);

    scene.add(ico, mainLight, globalLight);

    new Resizer(canvas, camera, renderer);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}