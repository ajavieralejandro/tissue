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
import './gallery2.scss'
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Fade from '@mui/material/Fade';


const StyledText = styled.p`
text-transform: uppercase;
margin:2%;
font-weight: 600;
letter-spacing: 1px;
color: white;
text-align: left;
`



export default function MasonryImageList() {
  const [click, setclick] = useState(false)
  const [image,setImage] = useState("");
  const [visible,setVisible] = useState(false);

const handleClick = (image)=>{
  setImage(image);
  setclick(true);
}

const handleClick2 = ()=>{
  setVisible(!visible);
}



  return (
    <>
                  <div               onClick={()=>handleClick2()}
 ><h1 className="styled-text hover:text-sky-700" >Samana exhibition | Buenos Aires <KeyboardDoubleArrowDownIcon />
</h1></div>
    {visible?<Fade timeout={2000} in={visible} unmountOnExit><Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
    spacing={3}
  >
    <Grid item xs={12} sm={12}
     >
       <StyledText className="responsive-text">
       <p>My first work in progress exhibition „Tissue” in Casa Samana in Buenos Aires resulted in an immersive multimedia installation including video art, site specific art, virtual reality as well as a live performance.</p>
       <p>
Not only I experimented with medical imaging including a digital microscope and the brain scans of my father but also with using different formats and technology where the medium of documentary has served me as a starting point of my investigation. Hence, it functioned as a sprout from which different formats have emerged and created a cycle of technology: Starting with an overhead projector where I am reconstructing the structure of the human tissue using different materials such as coloured liquids, foam, ice melting and ending with VR by the full immersion in an ice cave, taking you on a meditative journey through the body – visually and conceptual. Having collaborated with agora3D, an educational 3D studio from Buenos Aires, I have transformed the brain scans into metaphorical animations. Having started with the medical bio model, they resulted in more and more abstraction, including the profile as well as the inferior view of the brain - from the human tissue until fabric-like tissue – being covered by water and lastly by fog.
</p>
       <p>Moreover, the microscope has influenced the visuals and concept of my exhibition. “Under the microscope”, the starting point of my whole work, a two channel video installation, juxtaposing shots of the laboratory as well as exploring an ice cave in Austria close to my hometown in Germany close to where I used to go skiing with my father, led to the experimental projection of the “human tissue” with the overhead projector being accompanied by live sounds as well as microscopic timelapse shots of ice melting covered by red colour – like the cancerous tissue absorbing 5 ALA – a red liquid used for the PDT treatment my father received.
</p>
<p>Last, the two – channel video installation “Under the microscope” was projected in a cave like installation which you could enter one by one, which added to the conceptual experience of my exhibition – the journey of the visitor´s body (tissue) itself: the approach and immersion of pain to start the healing process.</p>
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
    </Grid></Fade> :null}
   
    </>
  );
}

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
