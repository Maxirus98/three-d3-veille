import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import { Euler } from "three";
import { Physics } from "use-cannon";
import Plane from "../components/Plane";
import Player from "../components/Player";
import GameOver from "./GameOver";
import { Obstacles, Rewards } from "./Interactables/Interactables";

// Obstacles x and z position are randomized
const Scene1 = () => {
  const [gameOver, setGameOver] = useState(false);
  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleReplay = () => {
    setGameOver(false);
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
        <GameOver handleReplay={handleReplay} />
      ) : (
        <Canvas
          camera={{
            position: [0, 5, 5],
            rotation: new Euler(0, 90, 0),
            fov: 90,
          }}
        >
          <fog attach="fog" args={["gray", 0, 100]} />
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
