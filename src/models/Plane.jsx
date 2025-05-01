import { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const modelUrl = new URL("../assets/3d/plane.glb", import.meta.url).href;
  const { scene, animations } = useGLTF(modelUrl);
  const ref = useRef();
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions["Take 001"]) {
      if (isRotating) {
        actions["Take 001"].play();
      } else {
        actions["Take 001"].stop();
      }
    }
  }, [actions, isRotating]);

  return <primitive ref={ref} object={scene} {...props} />;
};

export default Plane;
