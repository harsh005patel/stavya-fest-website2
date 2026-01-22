import { useGLTF } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

function HeroModel3D() {
  const { scene } = useGLTF("/model.glb");

  const clonedScene = useMemo(() => {
    const cloned = scene.clone();

    cloned.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;

        if (child.name.includes("banner") || child.name.includes("poster")) {
          if (child.material) {
            child.material.side = THREE.DoubleSide;
            child.material.transparent = true;
          }
        }
      }
    });

    cloned.rotation.y = Math.PI;
    return cloned;
  }, [scene]);

  return <primitive object={clonedScene} />;
}

useGLTF.preload("/model.glb");
export default HeroModel3D;

