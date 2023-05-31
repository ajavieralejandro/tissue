import React,{useState} from 'react';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Link,animateScroll as scroll } from 'react-scroll';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
import { useTimer } from 'use-timer';
import {Img} from 'react-image';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Dialog from '../Dialog/dialog';





const StyledLink = styled(Link)`
  font-family: 'Source Code Pro', monospace;
  text-align : center;
  color : white;
  font-size : 22px;
  &:hover{
    font-weight: bold;
  }
`; 

const StyledDiv = styled.div`
  padding-top: 20%;
`


const Burger = styled.div`
    float : left;
    margin-top: 2%;
    margin-left : 5%;

`
const StyledModal = styled(Modal)`
    background-color : transparent;
    oppacity : 0.7;
`
const StyledButton = styled(Button)`
text-align: center;
color: white;
cursor: 'point';
font-size : 22px;
&:hover {
  -webkit-transform: scale(1.08);  transition : 0.5s;
  
}`

const StyledImg = styled(Img)`
position: absolute;
border-radius : 5%; 
margin-left: auto;
margin-right: auto;
left: 0;
right: 0;
top:15%;
text-align: center;
  width : 600px;
  height : 600px;
`

const StyledIconButton = styled(IconButton)`
  position : absolute;
  right : 0;
  top:10;
`




export default function ModalFLyer({open,image,setOpen}) {
    
    
    
    return (
        <>
        <Dialog open={open} image={image} setOpen={setOpen} />
       
        </>
    )
}

