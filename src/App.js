
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
import ModalFLyer from './components/ModalFlyer/modalFlyer';

import React, { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

//import Footer from "./components/Footer";
import CustomCursor from "./CustomCursor";

import useLocoScroll from "./hooks/useLocoScroll";
import "./styles/home.scss";
import './styles/reset.css';
import './App.css';

const Home = () => {
  const ref = useRef(null);
  const [preloader, setPreload] = useState(true);



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
      <CustomCursor />
      {preloader ? (
        <div className="loader-wrapper absolute">
          <h1>Laura Heiss</h1>
          <h2>Tissue</h2>
     </div>
      ) : (
        <div className="main-container" id='main-container'>
          <Navbar />
        <VideoC />
        <ModalFLyer />
        <Container>

        <Featured />
        </Container>
        <Parallax />  
        <Gallery />
  
        <Footer />
      </div>
      )}
    </>
  );
};
export default Home;


