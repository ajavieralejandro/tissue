import {Canvas, useFrame} from '@react-three/fiber'
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/navbar';
//Theatre Imports
import { ScrollControls,useScroll,Scroll, OrbitControls} from '@react-three/drei'
import {getProject,val} from '@theatre/core';
import demoProjectState from './demoScene.json'
import Texture from './Texture';
import { useNavigate } from 'react-router-dom';
import {
  SheetProvider, editable as e,
  PerspectiveCamera, useCurrentSheet
} from '@theatre/r3f';
function App() {
  let navigate = useNavigate();
  const sheet = getProject('Demo Project',{state:demoProjectState}).sheet('Demo Sheet')
  return (
    <div className='h-screen w-screen'>

    <Canvas gl={{preserveDrawingBuffer:true,phisicallyCorrectLight:true}}>
      <ScrollControls pages={5}>
      <SheetProvider sheet={sheet}>

    
      <Scene />
      <Scroll html>

          <div className='bg-transparent w-full h-full'>
          <section className="container   mx-auto p-10 md:p-20 transform duration-500">

        <article className="flex flex-wrap bg-black md:flex-nowrap shadow-lg mx-auto max-w-xl ">
            <div className="p-10 my-auto">
                <h1 className="text-2xl font-semibold text-white">Work in progress...</h1>
                <p className="text-base text-gray-400 mt-2">
                </p>
            </div>
        </article>
    </section>
          </div>
          
      </Scroll>
   
      </SheetProvider>

      </ScrollControls>
      

    </Canvas>
    
    </div>
  )
}

const Scene = () =>{
  
  const sheet = useCurrentSheet();
  const scroll = useScroll();
  useFrame(()=>{
    //Try to understand and explain this twol lines
    const sequenceLenght = val(sheet.sequence.pointer.length);
    sheet.sequence.position = scroll.offset * sequenceLenght;

  },[])

  const bgColor = "#84a4f4";


  return(
    <>
     <color attach="background" args={[bgColor]} />
      <fog attach="fog" color={bgColor} near={4} far={15} />
      <PerspectiveCamera theatreKey='Camara' makeDefault={true}
      position={[0,0,0]}
      fov={90} near={0.1} far={70} />

  <directionalLight position={[3.3, 4.0, 4.4]} intensity={4} />
          <Texture />
    </>
  )
}

export default App
