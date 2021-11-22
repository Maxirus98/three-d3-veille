import React from "react";
import { useFrame } from "react-three-fiber";
import { useBox } from "use-cannon";

const LevelTrigger = ({ position, args }) => {
  var currentPositionZ = position[2];
  var currentSpeed = 0.5;
  const [ref, api] = useBox(() => ({
    mass: 100,
    position: position,
    rotation: [0, 0, 0],
    args: args,
    fixedRotation: true,
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
    <mesh ref={ref} name="level">
      <boxBufferGeometry attach="geometry" args={args} />
      <meshLambertMaterial attach="material" color="green" wireframe />
    </mesh>
  );
};

export default LevelTrigger;
