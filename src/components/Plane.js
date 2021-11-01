import { usePlane } from "use-cannon";
import { useFrame } from "react-three-fiber";
import { useEffect, useRef } from "react";
const GROUND_HEIGHT = -50; // A Constant to store the ground height of the game.

// A Ground plane that moves relative to the player. The player stays at 0,0
function Plane() {
  var currentPositionZ = 0;
  const [ref, api] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  useFrame(() => {
    currentPositionZ -= 0.04;
    ref.current.position.set(0, 0, currentPositionZ);
  });

  return (
    <mesh
      visible
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={ref}
    >
      <planeBufferGeometry attach="geometry" args={[50, 5000, 500, 50]} />
      <meshLambertMaterial attach="material" color="black" wireframe />
    </mesh>
  );
}

export default Plane;
