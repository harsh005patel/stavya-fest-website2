import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { useRef, useLayoutEffect } from 'react';
import * as THREE from 'three';
import HeroModel from './HeroModel';

const START_Y_ANGLE = -15; 
const START_X_ANGLE = 0; 


function PartyLights() {
    const front = useRef()
    const cameraLights = useRef([])
    const orbitLights = useRef([])
    const strobe = useRef()
  
    useFrame(({ camera, clock }) => {
      const t = clock.elapsedTime
  
      /* CLEAN FRONT STAGE LIGHT (neutral) */
      if (front.current) {
        front.current.position.copy(camera.position)
        front.current.position.z -= 2
      }
  
      /* CAMERA NEON (LOW + MOVING ONLY) */
      cameraLights.current.forEach((light, i) => {
        if (!light) return
        const o = i * 2
  
        light.position.set(
          camera.position.x + Math.sin(t * 1.2 + o) * 2,
          camera.position.y + Math.cos(t * 1.4 + o) * 1.5,
          camera.position.z + Math.sin(t * 1.1 + o) * 2
        )
  
        // Pulse instead of constant color
        light.intensity = 1.5 + Math.sin(t * 3 + o) * 1
      })
  
      /* ORBITING PARTY LIGHTS (MAIN ENERGY) */
      orbitLights.current.forEach((light, i) => {
        if (!light) return
  
        const speed = 0.6 + i * 0.15
        const radius = 6 + i
  
        light.position.set(
          Math.sin(t * speed + i) * radius,
          2 + Math.sin(t * 2 + i),
          Math.cos(t * speed + i) * radius
        )
  
        // Fade in/out (NOT permanent)
        light.intensity = 2 + Math.abs(Math.sin(t * 1.8 + i)) * 3
      })
  
      /* RANDOM PARTY POP (RARE) */
      if (strobe.current) {
        strobe.current.intensity = Math.random() > 0.97 ? 4 : 0
      }
    })
  
    return (
      <>
        {/* CLEAN FRONT STAGE LIGHT */}
        <spotLight
          ref={front}
          intensity={2.5}
          angle={0.5}
          penumbra={1}
          distance={40}
          color="#ffffff"
        />
  
        {/* CAMERA NEON (TEMPORARY COLOR) */}
        {['#00eaff', '#66ffff'].map((c, i) => (
          <pointLight
            key={i}
            ref={(el) => (cameraLights.current[i] = el)}
            distance={18}
            color={c}
          />
        ))}
  
        {/* PARTY ORBIT LIGHTS */}
        {['#ff008c', '#00eaff', '#7c3aed', '#ffae00'].map((c, i) => (
          <pointLight
            key={i}
            ref={(el) => (orbitLights.current[i] = el)}
            distance={35}
            color={c}
          />
        ))}
  
        {/* STROBE POP */}
        <pointLight
          ref={strobe}
          position={[0, 3, 4]}
          color="#ffffff"
          distance={20}
        />
      </>
    )
  }
  
  

  

function SceneLogic({ scrollProgress }) {
  const { camera, scene } = useThree();
  const initialZ = useRef(null);
  const zoomLimit = useRef(null);
  const modelRef = useRef();

  useLayoutEffect(() => {
    const box = new THREE.Box3().setFromObject(scene);
    const boxSize = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    scene.traverse((obj) => {
      if (obj.isGroup || obj.isMesh) {
        obj.position.set(-center.x, -center.y, -center.z); // Precise Centering
        modelRef.current = obj;
      }
    });

    const maxDim = Math.max(boxSize.x, boxSize.y);
    const fov = camera.fov * (Math.PI / 180);
    const fitZ = maxDim / (2 * Math.tan(fov / 2));

    camera.position.set(0, 0, fitZ * 0.85); 
    camera.lookAt(0, 0, 0);

    initialZ.current = fitZ * 0.85;
    zoomLimit.current = fitZ * 0.1; 
  }, [camera, scene]);

  useFrame((state, delta) => {
    if (!initialZ.current) return;

    // 1. Zoom and Straighten Calculation
    const targetRadius = THREE.MathUtils.lerp(initialZ.current, zoomLimit.current, scrollProgress.current);
    const currentYAngle = THREE.MathUtils.lerp(START_Y_ANGLE, 0, scrollProgress.current);
    
    const theta = THREE.MathUtils.degToRad(currentYAngle);
    const phi = THREE.MathUtils.degToRad(90 - START_X_ANGLE);
  
    const x = targetRadius * Math.sin(phi) * Math.sin(theta);
    const y = targetRadius * Math.cos(phi);
    const z = targetRadius * Math.sin(phi) * Math.cos(theta);
  
    // 🔹 Maintain sleek transition speed
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, x, 0.4);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, y, 0.4);
    camera.position.z = THREE.MathUtils.lerp(camera.position.z, z, 0.4);
  
    camera.lookAt(0, 0, 0);
  
    // 2. Scale Credentials
    if (modelRef.current) {
      const targetScale = 1.2 + (scrollProgress.current * 0.6);
      const s = THREE.MathUtils.lerp(modelRef.current.scale.x, targetScale, 0.1);
      modelRef.current.scale.setScalar(s);
      modelRef.current.rotation.y += delta * 0.15;
    }
  });

  return null;
}

export default function HeroScene({ scrollProgress }) {
  return (
    <Canvas camera={{ fov: 40 }} dpr={[1, 2]} className="w-full h-full">
     {/* Base ambient (very low) */}
<ambientLight intensity={0.3} />

{/* Main neon key light */}
<directionalLight
  position={[5, 8, 5]}
  intensity={3}
  color="00f6ff"
/>

{/* Cyan fill */}
<pointLight
  position={[-6, 2, 4]}
  intensity={4}
  color="#00f6ff"
/>

{/* Purple rim light */}
<pointLight
  position={[0, 6, -6]}
  intensity={5}
  color="#7c3aed"
/>

{/* Warm contrast */}
<spotLight
  position={[0, 10, 10]}
  angle={0.35}
  penumbra={1}
  intensity={4}
  color="#ffae00"
/>

      <HeroModel />
      <PartyLights />
      <SceneLogic scrollProgress={scrollProgress} />
    </Canvas>
  );
}