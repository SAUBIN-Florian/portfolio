import { World } from "./World";

export default function main(canvas){

  const container = document.querySelector(canvas);

  // create a new world
  const world = new World(container);

  // start animation loop
  world.start();
}