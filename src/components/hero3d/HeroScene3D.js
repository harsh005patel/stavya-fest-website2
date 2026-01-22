import React, { useRef, useLayoutEffect, useMemo } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import HeroModel3D from "./HeroModel3D";

const START_Y_ANGLE = 0;
const START_X_ANGLE = 5;

const PartyLights = React.memo(() => {
  const front = useRef();
  const cameraLights = useRef([]);
  const orbitLights = useRef([]);
  const strobe = useRef();

  useFrame(({ camera, clock }) => {
    const t = clock.elapsedTime;

    if (front.current) {
      front.current.position.copy(camera.position);
      front.current.position.z -= 2;
    }

    cameraLights.current.forEach((light, i) => {
      if (!light) return;
      const o = i * 2;
      light.position.set(
        camera.position.x + Math.sin(t * 1.2 + o) * 2,
        camera.position.y + Math.cos(t * 1.4 + o) * 1.5,
        camera.position.z + Math.sin(t * 1.1 + o) * 2
      );
      light.intensity = 1.5 + Math.sin(t * 3 + o);
    });

    orbitLights.current.forEach((light, i) => {
      if (!light) return;
      const speed = 0.6 + i * 0.15;
      const radius = 6 + i;
      light.position.set(
        Math.sin(t * speed + i) * radius,
        2 + Math.sin(t * 2 + i),
        Math.cos(t * speed + i) * radius
      );
      light.intensity = 2 + Math.abs(Math.sin(t * 1.8 + i)) * 3;
    });

    if (strobe.current) {
      strobe.current.intensity = Math.random() > 0.97 ? 4 : 0;
    }
  });

  const cameraLightColors = useMemo(() => ["#00eaff", "#66ffff"], []);
  const orbitLightColors = useMemo(() => ["#ff008c", "#00eaff", "#7c3aed", "#ffae00"], []);

  return (
    <>
      <spotLight ref={front} intensity={2.5} angle={0.5} penumbra={1} distance={40} />
      {cameraLightColors.map((c, i) => (
        <pointLight key={i} ref={(el) => (cameraLights.current[i] = el)} distance={18} color={c} />
      ))}
      {orbitLightColors.map((c, i) => (
        <pointLight key={i} ref={(el) => (orbitLights.current[i] = el)} distance={35} color={c} />
      ))}
      <pointLight ref={strobe} position={[0, 3, 4]} distance={20} />
    </>
  );
});

PartyLights.displayName = "PartyLights";

function SceneLogic({ scrollProgress }) {
  const { camera, scene } = useThree();
  const modelRef = useRef();
  const startRadius = useRef(0);
  const endRadius = useRef(0);
  const targetPosition = useRef(new THREE.Vector3());
  const targetScale = useRef(new THREE.Vector3(1.2, 1.2, 1.2));

  useLayoutEffect(() => {
    let model;
    scene.traverse((obj) => {
      if (obj.isGroup && obj.children.length) model = obj;
    });

    if (!model) return;
    modelRef.current = model;

    const box = new THREE.Box3().setFromObject(model);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    model.position.sub(center);

    const maxDim = Math.max(size.x, size.y);
    const fov = camera.fov * (Math.PI / 180);
    const fitZ = maxDim / (2 * Math.tan(fov / 2));

    startRadius.current = fitZ * 0.9;
    endRadius.current = fitZ * 0.15;

    const theta = THREE.MathUtils.degToRad(START_Y_ANGLE);
    const phi = THREE.MathUtils.degToRad(90 - START_X_ANGLE);

    camera.position.set(
      startRadius.current * Math.sin(phi) * Math.sin(theta),
      startRadius.current * Math.cos(phi),
      startRadius.current * Math.sin(phi) * Math.cos(theta)
    );

    camera.lookAt(0, 0, 0);
  }, [camera, scene]);

  useFrame(() => {
    if (!modelRef.current) return;

    const p = scrollProgress.current;
    const radius = THREE.MathUtils.lerp(startRadius.current, endRadius.current, p);
    const angle = THREE.MathUtils.lerp(START_Y_ANGLE, 0, p);

    const theta = THREE.MathUtils.degToRad(angle);
    const phi = THREE.MathUtils.degToRad(90 - START_X_ANGLE);

    targetPosition.current.set(
      radius * Math.sin(phi) * Math.sin(theta),
      radius * Math.cos(phi),
      radius * Math.sin(phi) * Math.cos(theta)
    );

    camera.position.lerp(targetPosition.current, 0.12);
    camera.lookAt(0, 0, 0);

    const scale = 1.2 + p * 0.6;
    targetScale.current.set(scale, scale, scale);
    modelRef.current.scale.lerp(targetScale.current, 0.1);
  });

  return null;
}

export default function HeroScene3D({ scrollProgress }) {
  useLayoutEffect(() => {
    scrollProgress.current = 0;
  }, [scrollProgress]);

  return (
    <Canvas
      camera={{ fov: 40 }}
      dpr={[1, 2]}
      className="w-full h-full bg-black"
      gl={{ antialias: true, alpha: false }}
      performance={{ min: 0.5 }}
    >
      <ambientLight intensity={0.2} />
      <directionalLight position={[5, 8, 5]} intensity={2} />
      <pointLight position={[-6, 2, 4]} intensity={3} />
      <pointLight position={[0, 6, -6]} intensity={4} />
      <spotLight position={[0, 10, 10]} angle={0.35} penumbra={1} intensity={3} />

      <HeroModel3D />
      <PartyLights />
      <SceneLogic scrollProgress={scrollProgress} />
    </Canvas>
  );
}

