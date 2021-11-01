import { Box } from "drei";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { MOUSE } from "three";
import { useBox } from "use-cannon";

function Player() {
  const [playerPosition, setPlayerPosition] = useState([0, 1, -3]);
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: playerPosition,
    rotation: [0, 0, 0],
    angularDamping: 1,
    linearDamping: 0,
  }));

  useFrame(({ mouse }) => {
    setPlayerPosition({
      position: { x: -mouse.x * 15, y: 1 },
    });
  });
  // Update the ships position from the updated state.
  useFrame(() => {
    ref.current.position.x = playerPosition.position.x;
  });

  return (
    <Box ref={ref} position={[0, 0.5, 0]} castShadow={true}>
      {<meshLambertMaterial attach="material" color="white" />}
    </Box>
  );
}

export default Player;
