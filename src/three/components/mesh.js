import { Mesh, IcosahedronGeometry, MeshPhongMaterial, MathUtils } from 'three';

export function createMesh() {
  const geometry = new IcosahedronGeometry(10, 1);
  const material = new MeshPhongMaterial({
    color: 0xe1a624,
    flatShading: true
  });

  const ico = new Mesh(geometry, material);

  const radiansPerSecond = MathUtils.degToRad(10);

  ico.tick = (delta) => {
    ico.rotation.x += delta * radiansPerSecond;
    ico.rotation.y += delta * radiansPerSecond;
  }

  return ico;
}