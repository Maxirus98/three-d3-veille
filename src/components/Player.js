import { Box } from "drei";
import { useEffect } from "react";
import { Vector3 } from "three";
import { Physics, usePlane, useBox } from "use-cannon";

function Player({ movements }) {
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 2, 0],
    rotation: [0, 0, 0],
    angularDamping: 1,
    linearDamping: 0,
  }));

  useEffect(() => {
    api.velocity.set(movements.x, movements.y, movements.z);
  }, [movements]);

  return (
    <Box
      ref={ref}
      position={[0, 2, 0]}
      onPointerMove={(e) => {
        api.position.set(e.point);
        console.log("e point", e.point);
        console.log("pos", ref.current.position);
      }}
    >
      {<meshLambertMaterial attach="material" color="hotpink" />}
    </Box>
  );
}

export default Player;
