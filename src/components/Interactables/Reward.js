import { useFrame } from "react-three-fiber";
import { Vector3 } from "three";
import { useBox } from "use-cannon";

function Reward({ position, index }) {
  var currentPositionZ = position[2];
  var currentSpeed = 0.5;
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: position,
    rotation: [0, 90, 0],
    fixedRotation: false,
    collisionFilterMask: 5,
    onCollide: (e) => {
      if (e.body.name === "player") {
        ref.current.visible = false;
      }
    },
  }));

  useFrame(() => {
    currentPositionZ += currentSpeed;
    api.position.set(position[0], position[1], currentPositionZ);
  });

  return (
    <mesh ref={ref} scale={new Vector3(0.2, 1, 1)} name="player">
      <sphereBufferGeometry />
      <meshLambertMaterial attach="material" color="yellow" />
    </mesh>
  );
}

export default Reward;
