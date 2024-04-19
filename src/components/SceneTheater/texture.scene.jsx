

import {  useFrame } from '@react-three/fiber'
import { Gltf } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import Texture from './Texture'
import { useScroll } from '@react-three/drei'
import { useCurrentSheet } from '@theatre/r3f'
import { val } from '@theatre/core'
import { useGLTF } from '@react-three/drei'
const TextureScene = () =>{
    const sheet = useCurrentSheet();
    const scroll = useScroll();
  

  
    const bgColor = "#84a4f4";
    return(
        <>
            <color attach="background" args={[bgColor]} />
        <fog attach="fog" color={bgColor} near={-4} far={10} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} />
        <PerspectiveCamera theatreKey='Camara' makeDefault={true}
      position={[0,0,0]}
      fov={90} near={0.1} far={70} />
<Texture />
      
        </>
    )
}

export default TextureScene;