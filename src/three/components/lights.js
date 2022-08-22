import { DirectionalLight, HemisphereLight } from "three";

export function createLights() {

  const mainLight = new DirectionalLight("white", 2);
  const globalLight = new HemisphereLight("white", "#AD956B", 3);

  mainLight.position.set(0, 0 ,10);


  return { mainLight, globalLight }
}