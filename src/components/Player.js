import { useEffect } from "react";
import { Vector3 } from "three";
import { Physics, usePlane, useBox } from "use-cannon";

function Player() {
  const [ref, api] = useBox(() => ({ mass: 1, position: [0, 1, 0] }));
  const moveForward = () => {
    api.velocity.set([0, 10, 0]);
    console.log("position", api.position);
  };

  return (
    <mesh ref={ref} position={[0, 1, 0]} onClick={moveForward}>
      <boxBufferGeometry attach="geometry" />
      <meshLambertMaterial attach="material" color="hotpink" />
    </mesh>
  );
}

export default Player;
