import { Sphere } from "drei";
import { useFrame } from "react-three-fiber";
import { Vector3 } from "three";
import { useBox } from "use-cannon";

function Reward({ position, index }) {
  var currentPositionZ = position[2];
  var currentSpeed = 0.4;
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: position,
    rotation: [0, 90, 0],
  }));

  useFrame(() => {
    currentPositionZ += currentSpeed;
    ref.current.position.set(position[0], position[1], currentPositionZ);
  });

  return (
    <Sphere ref={ref} scale={new Vector3(0.2, 1, 1)}>
      <meshLambertMaterial attach="material" color="yellow" />
    </Sphere>
  );
}

export default Reward;
