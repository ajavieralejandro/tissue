
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import VideoC from '../components/Video/video';
import Featured from '../components/Featured/featured';
import Footer from '../components/Footer/footer';
import Parallax from '../components/parallax/Parallax';
import { Container } from '@mui/material';
import Gallery from '../components/Gallery/gallery';
import Grid from '@mui/material/Grid';
import ContactForm from '../components/contactForm/contactFom';
import Gallery2 from '../components/Gallery2/Gallery2';
import About from '../components/About/about';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import STLViewer from 'stl-viewer'
import News from '../components/News/news';
import Exhibition from '../components/Exhibition/exhibition';
import Card4 from '../components/Cards/card4';
import SectionHeader from '../components/SectionHeader';
import Card3 from '../components/Cards/card3';
import Inti from '../components/Inti/inti';
import Inti2 from '../components/Inti/inti2';
import Exhibitions from '../components/Exhibitions/exhibitions';
import Parallax2 from '../components/parallax/Parallax2';
import Menu from '../components/Menu/menu';
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import CustomCursor from "../CustomCursor";
import YoutubeVideo from '../components/YoutubeVideo/youtubeVideo';
import Timeline from '../components/Timeline/timeline';
import "../styles/home.scss";
import '../styles/reset.css';
import '../App.css';
import { Canvas } from '@react-three/fiber';

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl";



const HomePage = () => {
 
  const theme = useTheme();
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);
  const cursor = useMediaQuery(theme.breakpoints.up('md'));





  useEffect(() => {
    
    if (!preloader && ref) {
      if (typeof window === "undefined" || !window.document) {
        return;
      }
    }
  }, [preloader]);

  const [timer, setTimer] = React.useState(3);

  const id = React.useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
    setPreload(false);
  };

  React.useEffect(() => {
    id.current = window.setInterval(() => {
      setTimer((time) => time - 1);
    }, 1000);
    return () => clear();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <>
    
    {cursor?<CustomCursor />:null}
      {preloader ? (
        <div className="loader-wrapper absolute">

<h1>Laura Heiss</h1>
          <h2>Tissue</h2>
                    <div className="parallax-loader"></div>

     </div>
      ) : (
        <div className="main-container scroll-smooth h-screen w-screen" id='main-container'>
        
             <Navbar />

        <VideoC />

        <Container>

        <Featured />

        </Container>

      
        <Parallax /> 

        <Container>
        <Gallery />
        <YoutubeVideo embedId="a0R8Rdao1Do" />

        <SectionHeader className="section-header" title="INTI | Argentina" />

        <Inti2 />
        </Container>

        

        <About />
        
        
      
        <Footer />

        <Timeline />


      
       
      </div>

      )}
    </>
  );
};
export default HomePage;


