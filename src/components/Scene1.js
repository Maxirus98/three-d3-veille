import { Stars } from "drei";
import { useState, useRef } from "react";
import { Canvas, useThree, useFrame, extend } from "react-three-fiber";
import { Euler } from "three";
import { Physics, useBox } from "use-cannon";
import Plane from "../components/Plane";
import Player from "../components/Player";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

import Interactables from "./Interactables/Interactables";
import { Suspense } from "react";

extend({ OrbitControls });

/* const CameraControls = () => {
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => {
    console.log("camera", camera);
    controls.current.update();
  });
  return <orbitControls ref={controls} args={[camera, domElement]} />;
}; */

// Obstacles x and z position are randomized
const Scene1 = () => {
  return (
    <div
      style={{
        margin: "auto",
        marginTop: "10vh",
        width: "75vw",
        height: "75vh",
      }}
    >
      <Canvas
        camera={{
          position: [0, 5, -5],
          rotation: new Euler(0, 90, 0),
          fov: 90,
        }}
        onKeyPress={(key) => {
          if (key.code === "KeyD") {
          }
        }}
      >
        <fog attach="fog" args={["gray", 0, 100]} />
        <Stars />
        <directionalLight intensity={1} />
        <ambientLight intensity={0.1} />
        <Physics gravity={[0, -9, 0]} defaultContactMaterial={{ friction: 0 }}>
          <Suspense>
            <Interactables isObstacle={true} />
            <Interactables isObstacle={false} />
          </Suspense>
          <Player />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Scene1;
