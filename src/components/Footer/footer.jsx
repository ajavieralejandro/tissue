import React from 'react';
import './style.scss';
import SectionHeader from '../SectionHeader/index';
import Img1 from '../../img/agora.jpg';
import AboutCard from '../aboutCard/aboutCard';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import ContactForm from '../contactForm/contactFom';



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

const StyledText = styled.p`
  color : white;
  float : right;
  font-size:12px;
  padding-right:10%;
`

const StyledA = styled.a`
    text-decoration : none;
    color : white;
    font-size : 16px;

`
const Footer = () =>{
    return(
 
        <StyledDiv>
           <StyledText>Designed by Laura Heiss & <StyledA href="https://agora3dstudio.com">Agora3dStudio      
</StyledA></StyledText>
       </StyledDiv>

    )
}

export default Footer;