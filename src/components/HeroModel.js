import { useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

function HeroModel() {
  // Replace with your actual exported .glb path
  const { scene } = useGLTF('/model.glb');

  // Ensure posters are visible and lights react correctly
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
      
      // If posters are still missing, force material side to DoubleSide
      if (child.name.includes("banner") || child.name.includes("poster")) {
        child.material.side = THREE.DoubleSide;
        child.material.transparent = true;
      }
    }
  });

  scene.rotation.y = Math.PI; 
  return <primitive object={scene} />;
}

// Preload to prevent flickering during scroll
useGLTF.preload('/model.glb');
export default HeroModel;
