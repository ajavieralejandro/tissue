import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useEffect } from "react";
import {  BoxGeometry } from "three";
import { Canvas,useThree } from "@react-three/fiber";
import { Cell } from "./Cell/Cell";
import { Suspense } from 'react'

export const Experience = () => {
  
  return (
    <>
        <Canvas camera={
      { fov: 10,  position: [1, 2, 3] }
    }>
        <Suspense fallback={null}>

              <OrbitControls  enableZoom={true} />

                    <ambientLight intensity={1} />

          <Cell />
          </Suspense>
</Canvas>
    </>
  );
};
