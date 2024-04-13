import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { getProject } from '@theatre/core'
import { SheetProvider } from '@theatre/r3f'
import {  ScrollControls } from '@react-three/drei'
import studio from '@theatre/studio'
import extension from '@theatre/r3f/dist/extension'
import TextureScene from './texture.scene'
import demoScene from './demoScene.json'
studio.initialize()
studio.extend(extension)

// our Theatre.js project sheet, we'll use this later
const sheet = getProject('Demo Project').sheet('Demo Sheet')
//const sheet = getProject("Fly Through", {state: demoScene}).sheet("Scene");


const Example = () => {

 

  return (
    <Canvas
      camera={{
        position: [0, 0, 0],
        fov: 75,
      }}
    >
              <ScrollControls pages={5}>

          <SheetProvider sheet={sheet}>
          <TextureScene />
      </SheetProvider>
      </ScrollControls>
    </Canvas>
  )
}

export default Example;