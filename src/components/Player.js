import { useState } from "react";
import { useFrame, useThree } from "react-three-fiber";
import { useBox } from "use-cannon";

function Player({ handleGameOver, handleScoreChange }) {
  let points = 0;
  const [playerPosition, setPlayerPosition] = useState([0, 1, 3]);
  const [ref, api] = useBox(() => ({
    mass: 1,
    type: "Kinematic",
    position: playerPosition,
    rotation: [0, 0, 0],
    args: [1, 1, 1],
    collisionFilterMask: 5,
    onCollide: (e) => {
      if (e.body.name == "reward") {
        ++points;
        handleScoreChange(points);
      }
      if (e.body.name === "obstacle") handleGameOver(points);
    },
  }));

  useFrame(({ mouse }) => {
    setPlayerPosition({
      position: { x: mouse.x * 10, y: 1 },
    });
  });

  useFrame(() => {
    api.position.set(
      playerPosition.position.x,
      ref.current.position.y,
      ref.current.position.z
    );
  });

  return (
    <mesh ref={ref} name="player">
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshLambertMaterial attach="material" color="white" />
    </mesh>
  );
}

export default Player;
