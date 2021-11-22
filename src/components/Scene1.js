import { OrbitControls, Stars } from "drei";
import React, { useState, memo } from "react";
import { Canvas } from "react-three-fiber";
import { useEffect } from "react/cjs/react.development";
import { Euler } from "three";
import { Physics } from "use-cannon";
import Plane from "../components/Plane";
import Player from "../components/Player";
import GameOver from "./GameOver";
import { Obstacles, Rewards } from "./Interactables/Interactables";
import LevelTrigger from "./LevelTrigger";

// Obstacles x and z position are randomized
const Scene1 = ({ handleDataChange }) => {
  const [currentGameId, setCurrentGameId] = useState(1);
  const [currentLevel, setCurrentLevel] = useState(1);
  const [gameOver, setGameOver] = useState(false);
  const handleGameOver = () => {
    setGameOver(true);
  };

  const handleScoreChange = (score) => {
    handleDataChange(currentGameId, score);
  };

  const handleReplay = () => {
    setCurrentGameId(currentGameId + 1);
    setGameOver(false);
  };

  const handleLevelChange = () => {
    setCurrentLevel(2);
  };

  return (
    <div
      style={{
        float: "left",
        width: "75vw",
        height: "100vh",
      }}
    >
      {gameOver ? (
        <GameOver handleReplay={handleReplay} />
      ) : (
        <Canvas
          camera={{
            position: [0, 5, 5],
            rotation: new Euler(0, 75, 0),
            fov: 100,
          }}
        >
          <OrbitControls />
          <fog attach="fog" args={["gray", 0, 100]} />
          <directionalLight intensity={1} />
          <ambientLight intensity={0.1} />
          <Stars />
          <Physics gravity={[0, 0, 0]}>
            <Obstacles />
            <Rewards />

            <Player
              handleGameOver={handleGameOver}
              handleScoreChange={handleScoreChange}
              handleLevelChange={handleLevelChange}
            />
            <Plane args={[30, 3000, 500, 50]} />
            {/* <LevelTrigger position={[0, 1, -100]} args={[30, 1, 1, 100, 100]} /> */}
          </Physics>
        </Canvas>
      )}
    </div>
  );
};

export default memo(Scene1);
