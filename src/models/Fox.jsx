import React, { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

// Eğer Vite kullanıyorsan bu import çalışabilir.
// Ama sorun çıkarsa, glb dosyasını public/ klasörüne koyup "/fox.glb" şeklinde çağır.
import scene from "../assets/3d/fox.glb";

const Fox = ({ currentAnimation = "Idle", ...props }) => {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(scene);
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    // Mevcut tüm animasyonları durdur
    Object.values(actions).forEach((action) => action.stop());

    // Belirtilen animasyonu oynat
    if (actions[currentAnimation]) {
      actions[currentAnimation].reset().fadeIn(0.5).play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Sketchfab_Scene'>
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        {["Object_7", "Object_8", "Object_9", "Object_10", "Object_11"].map((name) => (
          <skinnedMesh
            key={name}
            name={name}
            geometry={nodes[name].geometry}
            material={materials.PaletteMaterial001}
            skeleton={nodes[name].skeleton}
          />
        ))}
      </group>
    </group>
  );
};

useGLTF.preload(scene);

export default Fox;
