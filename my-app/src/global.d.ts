import * as THREE from "three";

declare module "*.glb" {
  const src: string;
  export default src;
}

declare module "*.png" {
  const src: string;
  export default src;
}

declare module "meshline" {
  export class MeshLineGeometry extends THREE.BufferGeometry {
    setPoints(
      points: THREE.Vector3[] | Float32Array,
      callback?: (p: number) => number
    ): void;
  }
  export class MeshLineMaterial extends THREE.Material {
    constructor(parameters?: Record<string, unknown>);
  }
}
