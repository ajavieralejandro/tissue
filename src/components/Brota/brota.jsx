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
import '../Gallery2/gallery2.scss';
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Fade from '@mui/material/Fade';

const StyledText = styled.p`
text-transform: uppercase;
margin:2%;
font-weight: 400;
letter-spacing: 1px;
color: white;
text-align: left;
`



export default function MasonryImageList({title,itemData}) {
  const [click, setclick] = useState(false)
  const [image,setImage] = useState("");
  const [visible,setVisible] = useState(true);

const handleClick = (image)=>{
  setImage(image);
  setclick(true);
}

const handleClick2 = ()=>{
  setVisible(!visible);
}



  return (
    <>
 <h1 className="styled-text hover:text-sky-700" >{title} 
</h1>
    <Fade timeout={2000} in={visible} unmountOnExit><Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={3}
  >
    <Grid item xs={12} sm={12}
     >
       <StyledText className="responsive-text">
        <p>During my residency at Brota in Buenos Aires, I have been transforming the processes of the alteration of the brain glitch characterized by its disruption into various artistic experiments. Hence, I have been starting to deconstruct the human tissue of the brain working cameraless by throwing and mixing different liquids on a retroproyector which are based on diagnostic brain imaging. In a second step I have been reconstructing the human brain by putting together the different fragments of the projection. Working at the intersection of art, science and technology, I have been using an AI Programme and will be further investigating the relationship between human and technology by working digital and hands on.
</p>
        <p>My analog fragmentation series is the work in progress of my immersive multimedia installation “Tissue”.</p>
     </StyledText>
     </Grid>
     <Grid item xs={12} sm={12}>
    <Box sx={{ minWidth: 200, minHeight: 200}}>
      <ImageList variant="masonry" cols={4} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
              onClick={()=>handleClick(item.img)}
              
            />
            
          
          </ImageListItem>
        ))}
      </ImageList>
      <ModalFLyer open={click} setOpen={setclick} image={image} />

    </Box>
    </Grid>
    </Grid></Fade> 
   
    </>
  );
}

