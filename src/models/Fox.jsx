import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import scene from "../assets/3d/fox.glb";

const Fox = ({ currentAnimation = "Idle", ...props }) => {
  const group = useRef();
  const { scene: foxScene, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    if (!actions || Object.keys(actions).length === 0) return;

    console.log("🎬 Gerçek animasyon isimleri:", Object.keys(actions));

    Object.values(actions).forEach((action) => action.stop());

    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    } else {
      console.warn(`❗ Animasyon "${currentAnimation}" bulunamadı.`);
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <primitive object={foxScene} />
    </group>
  );
};

useGLTF.preload(scene);
export default Fox;
