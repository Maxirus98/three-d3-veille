import { OrbitControls, Stars } from "drei";
import { useEffect, useState } from "react";
import { Canvas, extend, ResizeContainer, useThree } from "react-three-fiber";
import * as THREE from "three";
import { Euler } from "three";
import { Physics } from "use-cannon";
import Plane from "../components/Plane";
import Player from "../components/Player";

const initVelocity = {
  x: 0,
  y: 0,
  z: 10,
};

const Scene1 = () => {
  const [velocity, setVelocity] = useState(initVelocity);
  const camera = useThree();
  // Only called when it's pressed
  const handleMovements = (key) => {
    if (key.code === "KeyD") setVelocity({ ...velocity, x: -10 });
    if (key.code === "KeyA") setVelocity({ ...velocity, x: 10 });
    if (key.code === "KeyS") setVelocity({ ...velocity, x: 0 });
  };

  const moveCamera = () => {
    console.log("camera", camera);
  };

  useEffect(() => {
    moveCamera();
  });
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
          position: [0, 10, -10],
          rotation: new Euler(0, 90, 0),
        }}
        onKeyDown={(key) => handleMovements(key)}
      >
        <OrbitControls />
        <Stars />
        <directionalLight
          position={[0, 10, 0]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
          shadow-camera-far={50}
          shadow-camera-left={-10}
          shadow-camera-right={10}
          shadow-camera-top={10}
          shadow-camera-bottom={-10}
        />
        <Physics gravity={[0, 0, 0]}>
          <Player movements={velocity} />
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Scene1;
