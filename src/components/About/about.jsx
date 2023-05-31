
        import React from 'react';
        import './style.scss';
        import SectionHeader from '../SectionHeader/index';
        import Img1 from '../../img/agora.jpg';
        import AboutCard from '../aboutCard/aboutCard';
        import Grid from '@mui/material/Grid';
        import Box from '@mui/material/Box';
        import { Container } from '@mui/material';
        import ContactForm from '../contactForm/contactFom';
        import { useMediaQuery } from '@material-ui/core';
        import { useTheme } from '@material-ui/core';
        
        
        
        import styled from 'styled-components';
        import { Paper } from '@mui/material';
        const StyledImg = styled.img`
            width : 18px;
            float : right;
            heigth:auto;
        `
        
        const StyledDiv = styled.div`
        bottom:0;
        width:100%;
        height:60px;   /* Height of the footer */
        background:black;
        `
        
        const StyledVideo = styled.video`
            width:400px;
            height:auto;
        `
        
   
 const StyledText = styled.div`

 color : white;
 font-family : 'Simpletix';
 font-size :1.3rem;
 
 @media only screen and (max-width: 728px) {
   font-size:0.8rem;
 }
 color: #fff;
 font-family: Minimal;
 font-size: 1.5rem;
 padding-left: 30%;
 text-align: justify;
 text-justify: inter-word;
 
 `
        
        const StyledA = styled.a`
            text-decoration : none;
            color : white;
            font-size : 16px;
        
        `
        const About = () =>{
            const theme = useTheme();
            const cursor = useMediaQuery(theme.breakpoints.up('md'));

            return(
                <>
                        <SectionHeader className="section-header" title="about me" />
                        <div className={cursor?"parallax2":"movparallax"}>
                       
              
         
                    
              </div>
        
              
               
                <section id="about" className='footer'>
                        <Grid container spacing={0}>
                            <Grid item sm={6} xs={12}>
                    
                            <StyledText >
                   
                            “Tissue” has been the expression of my constant experimentation and exploration of the mystery, of the unknown, of what connects life and death in an endless chiasmus, manifesting in a multi-channel video installation.                              </StyledText>
                    <StyledText className="parallax-text">
        
         
                    Through metaphorical images, I mutated my experience of pain in the face of loss. From the very beginning of this process, I had the idea of ​​using different materials such as my father's CT scans as an analogy to the abstract memories that I had left of him from my childhood. These memories became, over time, more and more subtle.                      </StyledText>     
                                <StyledText className="parallax-text"> 
                                I carry out this work as if I were on a journey through a meditation process, a process in which I enable myself over and over again to continue mutating and discovering pain in always new transforming expressions. Art embraces pain and transforms it. ”Tissue”, my first installation, is a healing journey.                                </StyledText>
                    <StyledText className="parallax-text">
                    Laura Heiss was born in Germany and has been living in different countries throughout the world always with the same passion: telling different journeys uniting people to share their experiences. “Tissue” is her first installation. She lives between Ibiza and Buenos Aires.
                 
                 </StyledText>                            </Grid>
                         
                            <Grid item sm={6} xs={12}>
                                <ContactForm />
                            </Grid>
                            </Grid>
                          
        
        
        
            
                    
        
              
        
                </section>        
                </>
            )
        }
        


export default About;