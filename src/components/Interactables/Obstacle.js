import { useFrame } from "react-three-fiber";
import { useBox } from "use-cannon";

function Obstacle({ position }) {
  var currentPositionZ = position[2];
  var currentSpeed = 0.4;
  const [ref, api] = useBox(() => ({
    mass: 100,
    position: position,
    rotation: [0, 0, 0],
    args: [5, 5, 1],
    fixedRotation: true,
    collisionFilterMask: 5,
    onCollide: (e) => {
      if (e.collisionFilters.bodyFilterMask == 5) console.log("hit 5");
    },
  }));

  useFrame(() => {
    currentPositionZ += currentSpeed;
    api.position.set(position[0], position[1], currentPositionZ);
  });

  return (
    <mesh ref={ref} name="obstacle">
      <boxBufferGeometry attach="geometry" args={[5, 5, 1]} />
      <meshLambertMaterial attach="material" color="red" />
    </mesh>
  );
}

export default Obstacle;
