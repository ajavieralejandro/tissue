import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useEffect } from "react";
import {  BoxGeometry } from "three";
import { Canvas,useThree } from "@react-three/fiber";
import { Cell } from "./Cell/Cell";
import { Suspense } from 'react'
import useMediaQuery from '@material-ui/core/useMediaQuery';
export const Experience = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
        <Canvas camera={
      { fov: 10,  position: [9, 2, 3] }
    }>
        <Suspense fallback={null}>

              <OrbitControls  enableZoom={!matches} />

                    <ambientLight intensity={1} />

          <Cell />
          </Suspense>
</Canvas>
    </>
  );
};
