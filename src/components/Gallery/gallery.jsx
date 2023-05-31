import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';
//import Slider from '../Slider/slider';
import SectionHeader from '../SectionHeader';
import {VideoGallery2} from '../VideoGallery2/VideoGallery2';
import Img1 from '../../img/gallery/1.PNG';
import Img2 from '../../img/gallery/2.png';
import Img3 from '../../img/gallery/3.JPEG';
import Img4 from '../../img/gallery/4.JPEG';
import Img5 from '../../img/gallery/5.png';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Slider from "react-slick";
import { VideoGallery } from '../VideoGallery/videoGallery';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Fade from '@mui/material/Fade';

import './style.scss';


const Wrapper = styled.div`
  height: auto;
  background :#282c34;
  


`

const Wrapper2 = styled.div`
  height: auto;
  background : transparent;

 

`

const Div = styled.div`
  padding-top:10%;
  padding-bottom : 10%;
`

const StyledImg = styled.img`
  object-fit:cover;
  height:auto;

`

 const StyledText = styled.div`

color : white;
font-family : 'Simpletix';
font-size :1.3rem;

@media only screen and (max-width: 728px) {
  font-size:0.8rem;
}
justify-content: center;
margin : 10%;
padding-top:5%;
padding-bottom:2%;
padding-left:2%;
padding-right: 2%;

`

const ItemSlider = () =>{
  return(
  <Wrapper2>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={6} >
    <Grid
container
direction="row"
justifyContent="center"
alignItems="center"
>
      <StyledText>
        <p > 
        Every year, around 8,000 people in Germany get diagnosed with brain cancer. 40% of these diagnoses are Glioblastoma, the most aggressive type of brain cancer which cannot be fully cured yet.<p>
</p>
 
The artist's father, who was diagnosed with this particular type of brain cancer, was able to extend his first given life expectancy by around one and a half years. Besides changing his diet to keto and receiving chemotherapy, one of the major reasons for his extended prognosis was PDT treatment (Photodynamic Therapy). PDT is a two stage treatment that combines light energy with a drug (photosensitizer) designed to destroy cancerous cells after light activation. According to Prof. Kreth (leading head of the neurological department at Grosshadern in Munich, Germany) life expectancy of PDT patients was increased by around ten months after surgery. Some patients in the PDT group remained progression-free in the five-year follow-up. His technique was first of its kind to be applied in his department with the already scarcely available neurological hospitals in Germany. Furthermore, it was found that the three-year survival rate after conventional resection was only 21%, it could be increased up to 65% in the PDT group.</p>
      </StyledText>
      </Grid>

    </Grid>
    <Grid item xs={12} sm={6} >     
    <div className="img2"></div>
</Grid>
  
    


</Grid>
</Wrapper2>
)
}

const ItemSlider2 = () =>{
  return(
    <Wrapper>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={6} >     
    <div className="img"></div>
</Grid>
    <Grid item xs={12} sm={6} >
    <Grid
container
direction="row"
justifyContent="center"
alignItems="center"
>
      <StyledText>
      <p>
      Even though PDT is still considered an experimental treatment, it envisions a possible path different from conventional treatments. This work is also inspired by this treatment and its application while playing with reflection, colors, and liquids.
</p>
<p>

How can we give pain a new expression?</p>

 <p>Is acceptance the way?</p>

<p>How can art contribute to our resilience and healing?</p>

<p>What is art? What is science?
</p>

 
<p>
"Tissue" is an attempt at reconstruction. A possible way.

 </p>
      </StyledText>
      </Grid>

    </Grid>



</Grid>
</Wrapper>

  )
}






export default function WovenImageList() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 600,
        settings: {
          slidesToShow: 1 ,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }]
  };
  return (
    <section id="abstract">
    <Div >
              <SectionHeader title="Abstract..." />

    <Container>
   
    <Slider {...settings}>
      <div>
        <ItemSlider />
      </div>
      <div>
        <ItemSlider2 />
      </div>
    </Slider>

    
      </Container>


    </Div>
    </section>
  );
}

const itemData = [
  {
    img: Img2,
    title: 'Bed',
  },
  {
    img: Img5,
    title: 'Kitchen',
  },
  {
    img: Img3,
    title: 'Sink',
  },
  {
    img: Img4,
    title: 'Books',
  }
  
];