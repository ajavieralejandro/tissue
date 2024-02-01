import { OrbitControls, ScrollControls } from "@react-three/drei";
import { useEffect } from "react";
import {  BoxGeometry } from "three";
import { Canvas,useThree } from "@react-three/fiber";
import { Cell } from "./Cell/Cell";

export const Experience = () => {
  
  return (
    <>
        <Canvas camera={
      {fov:10}
    }>

              <OrbitControls  enableZoom={true} />

                    <ambientLight intensity={1} />

          <Cell />
</Canvas>
    </>
  );
};
