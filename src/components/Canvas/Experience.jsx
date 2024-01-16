import { OrbitControls, ScrollControls } from "@react-three/drei";
import {  BoxGeometry } from "three";
import { Canvas } from "@react-three/fiber";
import { Cell } from "./Cell/Cell";
export const Experience = () => {
  return (
    <>
        <Canvas camera={
      {fov:64,position:[2.3,1.5,2.3]}
    }>
              <OrbitControls enableZoom={true} />

                    <ambientLight intensity={1} />

          <Cell />
</Canvas>
    </>
  );
};
