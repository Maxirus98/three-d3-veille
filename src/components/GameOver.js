import { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import Text from "./Text";

function GameOver({ handleReplay }) {
  return (
    <Canvas>
      <Suspense fallback={<></>}>
        <Text size={5} position={[0, 0, 0]} clickEnabled={false}>
          Fin de la partie
        </Text>
        <Text
          size={4}
          position={[0, -1, 0]}
          clickEnabled={true}
          handleReplay={handleReplay}
        >
          Rejouer
        </Text>
      </Suspense>
    </Canvas>
  );
}

export default GameOver;
