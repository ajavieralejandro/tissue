import React,{useState} from 'react';
import './style.css';
import styled from 'styled-components';
import { Modal } from '@mui/material';
import Fade from '@mui/material/Fade';
import { Link,animateScroll as scroll } from 'react-scroll';
import { Button } from '@mui/material';
import { Grid } from '@mui/material';
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
    background-color : black;
`
const StyledButton = styled(Button)`
text-align: center;
color: white;
cursor: 'point';
font-size : 22px;
&:hover {
  -webkit-transform: scale(1.08);  transition : 0.5s;
  
}`





function NavbarIcon() {
    const [clicked, setClicked] = useState(false);
    const isClicked = () =>{
        if(clicked) return "is-active"
        else return "";
    }
    
    return (
        <>
        <StyledModal open={clicked}>
        <Fade in={clicked} out={!clicked}>
            <div>

        <Burger onClick={()=>setClicked(!clicked)}>
          <div className={"hamburger "+isClicked()}id="hamburger-6">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        </Burger>
        <Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
        <StyledDiv>
       
                                  <StyledLink onClick={()=>setClicked(false)} to="abstract"  smooth={true} duration={800}><p>Abstract</p></StyledLink>
                                  <StyledLink onClick={()=>setClicked(false)} to="video"  smooth={true} duration={800}><p>Under the microscope</p></StyledLink>
                                  <StyledLink onClick={()=>setClicked(false)} to="about"  smooth={true} duration={800}><p>About me</p></StyledLink>


        </StyledDiv>
        </Grid>

        </div>
        </Fade>
        </StyledModal>
        <Burger onClick={()=>setClicked(!clicked)}>
          <div className={"hamburger "+isClicked()}id="hamburger-6">
          <span className="line"></span>
          <span className="line"></span>
          <span className="line"></span>
        </div>
        </Burger>
        </>
    )
}

export default NavbarIcon
