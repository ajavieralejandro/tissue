
import React,{useState} from 'react';
import styled from 'styled-components';
//import { useReadyElement } from "@egjs/react-imready";
import CircularProgress from '@mui/material/CircularProgress';
import LazyLoad from 'react-lazyload';
import Header from '../Header/header';






const StyledVideo = styled.video`  
object-fit: cover;
top:0;
right: 0;
width: 100%;
height:  100vh;
position: absolute;
z-index : -1;


`

const MobileVideo = styled.video`
top:0;
width: 100%; 
height: auto;
z-index: -1; 
object-fit: cover;

`



const Container = styled.div`
    height : 100vh;
    width : 90vh;
    text-align : center;
`

const VideoContainer = styled.div`
height: 92vh;
width: 100%;
object-fit: contain;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Spinner = styled(CircularProgress)`
position: absolute;
top: 20%;  /* position the top  edge of the element at the middle of the parent */
left: 50%; /* position the left edge of the element at the middle of the parent */

    
`

const Wrap = styled.div`
    height : 600px;
    width : 100%;
`



const VideoC = () =>{
    const [isLoading, setIsLoading] = useState(true);
    //console.log(Video);
    //const isMobile = useMediaQuery({ query: '(min-width: 600px)' });
    /*const { register, readyCount, totalCount, isReady } = useReadyElement({
        selector: "video",
    });
    /*const onVideoLoad = ()=>{
        console.log("El video se esta cargando");
    }*/

    return(
        <>          <VideoContainer>  <LazyLoad>
            {isLoading?<Spinner />:null}
            <StyledVideo onPlaying={()=>setIsLoading(false)}  src="https://videodelivery.net/ecd59c39e6b0eb001fc90af3e5868208/downloads/default.mp4" autoPlay muted loop  />
            <Header />
            </LazyLoad></VideoContainer> 


         
            </>
    )
}

export default VideoC;
