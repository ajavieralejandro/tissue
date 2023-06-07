
import Navbar from './components/Navbar/navbar';
import Header from './components/Header/header';
import VideoC from './components/Video/video';
import Featured from './components/Featured/featured';
import Footer from './components/Footer/footer';
import Parallax from './components/parallax/Parallax';
import { Container } from '@mui/material';
import Gallery from './components/Gallery/gallery';
import  {VideoGallery} from './components/VideoGallery/videoGallery';
import Grid from '@mui/material/Grid';
import ContactForm from './components/contactForm/contactFom';
import Gallery2 from './components/Gallery2/Gallery2';
import About from './components/About/about';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material';
import STLViewer from 'stl-viewer'
import News from './components/News/news';
import Exhibition from './components/Exhibition/exhibition';
import Card4 from './components/Cards/card4';
import SectionHeader from './components/SectionHeader';
import Card3 from './components/Cards/card3';
import Inti from './components/Inti/inti';
import Inti2 from './components/Inti/inti2';
import Exhibitions from './components/Exhibitions/exhibitions';
import Parallax2 from './components/parallax/Parallax2';
import Menu from './components/Menu/menu';
import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Card5 from './components/Cards/card5';
//import Footer from "./components/Footer";
import CustomCursor from "./CustomCursor";
import Card2 from './components/Cards/card2';

import useLocoScroll from "./hooks/useLocoScroll";
import "./styles/home.scss";
import './styles/reset.css';
import './App.css';

const url = "https://storage.googleapis.com/ucloud-v3/ccab50f18fb14c91ccca300a.stl"
const itemData = [
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/474c370e-2a59-42cf-442f-11b7b2227300/public',
    title: 'Bed',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/df24f2e3-17ae-4e9f-feb2-e61259da2c00/public',
    title: 'Books',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/9b53d02c-afe8-4780-167f-4079acadff00/public',
    title: 'Sink',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0e6474d0-cd17-41cc-a7d9-f0fba0a0c500/public',
    title: 'Kitchen',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bade9527-e43c-4643-d5b0-b0cf97b0e200/public',
    title: 'Blinds',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/86ac925e-90f0-4672-5da0-a88c57e46800/public',
    title: 'Chairs',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/8fa25ec1-3057-486b-83b8-fd7b5f2fdc00/public',
    title: 'Laptop',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bb05308f-3604-441c-2423-446301bdfa00/public',
    title: 'Doors',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/7d1d39be-7478-4eb2-d463-bd1ca1e94c00/public',
    title: 'Coffee',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/40a4c57a-db1b-4f1e-14d3-c3c2ef767f00/public',
    title: 'Storage',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/69cb4309-b1cf-4226-71e7-d67eae109e00/public',
    title: 'Candle',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/31270291-169b-4114-7b33-d275484be200/public',
    title: 'Coffee table',
  },
];

const style = {
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
}

const Home = () => {
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
        <div className="main-container scroll-smooth" id='main-container'>
        
             <Navbar />

        <VideoC />

        <Container>

        <Featured />
        
        </Container>

      
        <Parallax /> 

        <Container>
        <Gallery />

       
        </Container>
        <VideoGallery />
        <SectionHeader className="section-header" title="INTI | Argentina" />

        <Inti2 />

        <About />
        


      
        <Footer />
        <SectionHeader className="section-header" title="Exhibitions" />

        <Exhibitions />
      
       
      </div>

      )}
    </>
  );
};
export default Home;


