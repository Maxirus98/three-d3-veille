import React, { forwardRef, useLayoutEffect, useMemo, useRef } from "react";
import { useLoader } from "react-three-fiber";
import * as THREE from "three";

const Text = forwardRef(
  (
    {
      children,
      vAlign = "center",
      hAlign = "center",
      size = 1,
      color = "#000000",
      ...props
    },
    ref
  ) => {
    const font = useLoader(THREE.FontLoader, "/bold.blob");
    const config = useMemo(() => ({ font, size: 1, height: 1 }), [font]);
    const mesh = useRef();

    // useEffect bloquant
    useLayoutEffect(() => {
      const size = new THREE.Vector3();
      mesh.current.geometry.computeBoundingBox();
      mesh.current.geometry.boundingBox.getSize(size);
      mesh.current.position.x = -size.x / 2;
      mesh.current.position.y = -size.y;
    }, [children]);
    return (
      <group ref={ref} {...props} scale={[0.1 * size, 0.1 * size, 0.1]}>
        <mesh ref={mesh}>
          <textGeometry args={[children, config]} />
          <meshNormalMaterial />
        </mesh>
      </group>
    );
  }
);

export default Text;
