import { useGLTF } from "@react-three/drei";

const Texture = () =>{
    const model = useGLTF('./models/textures-v1.glb');

    return(
        <>
        <mesh>
            <primitive object={model.scene} />
        </mesh>
        </>
    )
}

export default Texture;