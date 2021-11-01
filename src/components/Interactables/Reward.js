import { Sphere } from "drei";
import { useFrame } from "react-three-fiber";
import { Euler, Material, Vector3 } from "three";
import { useBox, useSphere } from "use-cannon";
import { randomPositions } from "./Interactables";
function Reward({ position, index }) {
  var currentPositionZ = position[2];
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: position,
    rotation: [0, 90, 0],
  }));

  useFrame(() => {
    currentPositionZ -= 0.4;
    ref.current.position.set(position[0], position[1], currentPositionZ);
  });

  return (
    <Sphere ref={ref} scale={new Vector3(0.2, 1, 1)}>
      <meshLambertMaterial attach="material" color="yellow" />
    </Sphere>
  );
}

export default Reward;
