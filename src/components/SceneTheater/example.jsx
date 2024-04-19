import {Canvas, useFrame} from '@react-three/fiber'

//Theatre Imports
import { ScrollControls,useScroll,Scroll} from '@react-three/drei'
import {getProject,val} from '@theatre/core';
import demoProjectState from './demoScene.json'
import Texture from './Texture';
import {
  SheetProvider, editable as e,
  PerspectiveCamera, useCurrentSheet
} from '@theatre/r3f';
function App() {

  const sheet = getProject('Demo Project',{state:demoProjectState}).sheet('Demo Sheet')
  return (
    <div className='h-screen w-screen'>
    <Canvas gl={{preserveDrawingBuffer:true,phisicallyCorrectLight:true}}>

      <ScrollControls pages={5}>
      <SheetProvider sheet={sheet}>

    
      <Scene />
      <Scroll html>
          <div className='bg-transparent'>
          <section class="container bg-black mx-auto p-10 md:p-20 transform duration-500">
        <article class="flex flex-wrap md:flex-nowrap shadow-lg mx-auto max-w-xl ">
            <img class="w-full md:w-40 h-auto" src="https://weandthecolor.com/wp-content/uploads/2012/03/A-Way-Out-Illustration-by-Matheus-Lopes-4563464.jpg" alt="" />
            <div class="p-10 my-auto">
                <h1 class="text-2xl font-semibold text-gray-800">A Way Out</h1>
                <p class="text-base text-gray-400 mt-2">
                    Super creative and colorful illustrations by Matheus Lopes. Check out more of his amazing artworks in his portfolio.
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
