import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid'
import SectionHeader from '../SectionHeader';
import styled from 'styled-components'
import { Container } from '@mui/material';
import ModalFLyer from '../ModalFlyer/modalFlyer';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Fade from '@mui/material/Fade';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Masonry from '@mui/lab/Masonry';

const StyledText = styled.p`
text-transform: uppercase;
margin:2%;
font-weight: 400;
letter-spacing: 1px;
color: white;
text-align: left;
`

const itemData = [
 

      {
        img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/d1de294f-37f2-4a2d-98ea-94b9cf9a7100/Tissue',
        title: 'East Village 4  ',
      },
      {
        img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/8ea6088c-de3b-4eda-4586-0f919bab2b00/public',
        title: 'East Village 5  ',
      },
      
      
   
  ];

export default function MasonryImageList({setCont}) {
  const [click, setclick] = useState(false)
  const [image,setImage] = useState("");
  const [visible,setVisible] = useState(false);

const handleClick = (image)=>{
  setImage(image);
  setclick(true);
}

const handleClick2 = ()=>{
    if(visible)
  setVisible(!visible);
  else
  setCont(0);
}



  return (
    <Container >
                <ArrowBackIcon  sx={{ color: 'white' }}  onClick={()=>setCont(0)} />


    <Fade timeout={2000} in={true} unmountOnExit>
        <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={3}
  >
    <Grid item xs={12} md={6}> 
    <article class="shadow-md mx-auto max-w-sm transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
            <div class="max-h-140 overflow-hidden">
       
            </div>
            <div class="p-7 my-auto pb-12 ">
                <h1 class="text-2xl font-semibold text-white">East Village || New York</h1>
                <StyledText className="responsive-text">
       Laura your work is fascinating! Abstracting everyday materials into organic collages that reflect
       the simbiotic relationship between science and art, your process is totally unique. With textures that
       range from the wispy and delicate to the dense and saturated, your work resonates a sense of dynamisms and
       change, of thing in flux or in development. Finding a depth of tones and shades in monochrome, your work
       subtly hypnotic and formally inventive. Excellent work!
      </StyledText>
            </div>
        </article>        
</Grid>
<Grid item xs={12} md={6}>     <img class="w-full h-auto" src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/8ea6088c-de3b-4eda-4586-0f919bab2b00/public" 
                    alt="" />
    
</Grid>
    </Grid>

    </Fade> 


   
    </Container>
  );
}

