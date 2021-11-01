import { Box } from "drei";
import { useRef } from "react";
import { useEffect } from "react";
import { useFrame } from "react-three-fiber";
import { Vector3 } from "three";
import { useBox } from "use-cannon";

function Obstacle({ position }) {
  var currentPositionZ = position[2];
  var currentSpeed = 1;
  const [ref, api] = useBox(() => ({
    mass: 100,
    position: position,
    rotation: [0, 0, 0],
    fixedRotation: true,
  }));

  useFrame(() => {
    currentPositionZ -= 0.4 * currentSpeed;
    ref.current.position.set(position[0], position[1], currentPositionZ);
  });

  return (
    <Box ref={ref} scale={new Vector3(5, 5, 1)}>
      <meshLambertMaterial attach="material" color="red" />
    </Box>
  );
}

export default Obstacle;
