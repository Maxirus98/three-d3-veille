import { usePlane } from "use-cannon";

// A Ground plane that moves relative to the player. The player stays at 0,0
function Plane({ args }) {
  const [ref, api] = usePlane(() => ({
    mass: 1000,
    rotation: [-Math.PI / 2, 0, 0],
    type: "Static",
  }));

  return (
    <mesh
      visible
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      ref={ref}
    >
      <planeBufferGeometry attach="geometry" args={args} />
      <meshLambertMaterial attach="material" color="black" wireframe />
    </mesh>
  );
}

export default Plane;
