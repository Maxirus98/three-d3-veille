import { OrbitControls, Stars } from "drei";
import React, { Suspense, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "react-three-fiber";
import { Euler, Font, FontLoader, Vector3 } from "three";
import { Physics } from "use-cannon";
import Plane from "../components/Plane";
import Player from "../components/Player";
import { Obstacles, Rewards } from "./Interactables/Interactables";
import Text from "./Text";
import * as THREE from "three";
import { useEffect } from "react/cjs/react.development";

// Obstacles x and z position are randomized
const Scene1 = () => {
  const [gameOver, setGameOver] = useState(false);
  const handleGameOver = () => {
    setGameOver(true);
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
      {gameOver ? (
        <Canvas>
          <Suspense fallback={<></>}>
            <Text size={10}>Fin de la partie</Text>
          </Suspense>
          <OrbitControls />
          <Stars />
        </Canvas>
      ) : (
        <Canvas
          camera={{
            position: [0, 5, 5],
            rotation: new Euler(0, 90, 0),
            fov: 90,
          }}
        >
          <fog attach="fog" args={["gray", 0, 100]} />
          <Stars />
          <directionalLight intensity={1} />
          <ambientLight intensity={0.1} />
          <Physics gravity={[0, 0, 0]}>
            <Obstacles />
            <Rewards />

            <Player handleGameOver={handleGameOver} />
            <Plane args={[30, 5000, 500, 50]} />
          </Physics>
        </Canvas>
      )}
    </div>
  );
};

export default Scene1;
