import { useGLTF } from '@react-three/drei';
import React from 'react';

import skyScene from '../assets/3d/sky.glb';

const Sky = () => {
  const sky = useGLTF(skyScene);

  return (
    <primitive object={sky.scene} scale={2} position={[0, -2, -5]} />
  );
};

export default Sky;
