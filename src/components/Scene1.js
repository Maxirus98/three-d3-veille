import { OrbitControls, Stars } from "drei";
import { Canvas } from "react-three-fiber";
import { Euler, Quaternion } from "three";
import { Physics } from "use-cannon";
import Plane from "../components/Plane";
import Player from "../components/Player";

const Scene1 = () => {
  return (
    <Canvas
      colorManagement
      camera={{
        position: [0, 10, -10],
        rotation: new Euler(0, 90, 0),
      }}
    >
      <OrbitControls />
      <Stars />
      <directionalLight
        position={[0, 10, 0]}
        intensity={1.5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <spotLight position={[10, 15, 10]} angle={0.3} />
      <Physics>
        <Player />
        <Plane />
      </Physics>
    </Canvas>
  );
};

export default Scene1;
