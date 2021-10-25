import { OrbitControls, Stars } from "drei";
import { useState } from "react";
import { Canvas } from "react-three-fiber";
import { Euler } from "three";
import { Physics } from "use-cannon";
import Ground from "../components/Plane";
import Player from "../components/Player";

const initVelocity = {
  x: 0,
  y: 0,
  z: 10,
};

const Scene1 = () => {
  const [velocity, setVelocity] = useState(initVelocity);

  // Only called when a key is pressed
  const handleMovements = (key) => {
    if (key.code === "KeyD") setVelocity({ ...velocity, x: -10 });
    if (key.code === "KeyA") setVelocity({ ...velocity, x: 10 });
    if (key.code === "KeyS") setVelocity({ ...velocity, x: 0 });
  };

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
          position={[0, 10, 5]}
          intensity={2}
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
          <Ground />
        </Physics>
      </Canvas>
    </div>
  );
};

export default Scene1;
