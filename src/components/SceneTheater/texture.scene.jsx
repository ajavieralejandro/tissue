

import {  useFrame } from '@react-three/fiber'
import { Gltf } from '@react-three/drei'
import { PerspectiveCamera } from '@react-three/drei'
import Texture from './Texture'
import { useScroll } from '@react-three/drei'
import { useCurrentSheet } from '@theatre/r3f'
import { val } from '@theatre/core'
const TextureScene = () =>{
    const sheet = useCurrentSheet();
    const scroll = useScroll();
  
    // our callback will run on every animation frame
    useFrame(() => {
      // the length of our sequence
      const sequenceLength = val(sheet.sequence.pointer.length);
      // update the "position" of the playhead in the sequence, as a fraction of its whole length
      sheet.sequence.position = scroll.offset * sequenceLength;
    });
  
    const bgColor = "#84a4f4";
    return(
        <>
            <color attach="background" args={[bgColor]} />
        <fog attach="fog" color={bgColor} near={-4} far={10} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-5, 5, -5]} intensity={1.5} />
        <Gltf src="./models/textures-v1.glb" castShadow receiveShadow />
        <PerspectiveCamera
          theatreKey="Camera"
          makeDefault
          position={[0, 0, 0]}
          fov={90}
          near={0.5}
          far={70}
        />
        </>
    )
}

export default TextureScene;