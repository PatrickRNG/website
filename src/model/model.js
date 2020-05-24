/*
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useLoader, useFrame } from 'react-three-fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { draco } from 'drei';

export default function Model(props) {
  const [count, setCount] = useState(-0.5);
  const group = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    '/plato.glb',
    draco('/draco-gltf/')
  );

  useFrame(() => {
    // group.current.rotation.y = (Math.sin(Date.now() * 0.001) * Math.PI * 0.5);
    group.current.rotation.x = -0.05;
    group.current.rotation.y += 0.002;
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-4.03, 2.5, 12.86]}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <group position={[0, 0, 1.88]}>
            <mesh
              material={materials.plato}
              geometry={nodes['mesh-3'].geometry}
              position={[1.2, 0.23, -0.16]}
            />
            <mesh
              material={materials.plato}
              geometry={nodes['mesh-0'].geometry}
              position={[1.2, 0.23, -0.16]}
            />
            <mesh
              material={materials.plato}
              geometry={nodes['mesh-1'].geometry}
              position={[1.2, 0.23, -0.16]}
            />
            <mesh
              material={materials.plato}
              geometry={nodes['mesh-2'].geometry}
              position={[1.2, 0.23, -0.16]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
