import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import styled from 'styled-components';
import Slider from '../Slider/slider';
import SectionHeader from '../SectionHeader';


import Img1 from '../../img/gallery/1.PNG';
import Img2 from '../../img/gallery/2.png';
import Img3 from '../../img/gallery/3.JPEG';
import Img4 from '../../img/gallery/4.JPEG';
import Img5 from '../../img/gallery/5.png';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import './style.scss';


const Wrapper = styled.div`
  width: 100%;
  height: auto;
  background :#282c34;
  font-size : 2rem;
  


`

const Wrapper2 = styled.div`
  width: 100%;
  height: auto;
  background : transparent;

 

`

const Div = styled.div`
  padding-top:10%;
  padding-bottom : 10%;
`

const StyledImg = styled.img`
  width : 100%;
  object-fit:cover;
  height:auto;

`

const StyledText = styled.div`

color : white;
font-family : 'Simpletix';
font-size:1.2rem;
justify-content: center;
margin : 10%;
padding-top:5%;
padding-bottom:2%;
padding-left:2%;
padding-right: 2%;

`

const ItemSlider = () =>{
  return(<Wrapper2>
    <Grid container spacing={0}>
    <Grid item xs={12} sm={6} >
    <Grid
container
direction="row"
justifyContent="center"
alignItems="center"
>
      <StyledText>
        <p>
Every year, around 8,000 people in Germany get brain cancer, of which 40% are diagnosed as Glioblastoma, the most aggressive type of brain cancer which cannot fully cured yet.</p>
<p>
The artist's father who was diagnosed with this particular type of brain cancer, was able to extend his first given life expectancy by around one and a half years. Besides changing his diet to keto and receiving chemotherapy, one of the major reasons for this to be possible was the PDT treatment (Photodynamic Therapy), an experimental treatment, he received, carried out by Professor Kreth, leading head of the neurological department at Grosshadern in Munich, Germany. Kreth was the first and only one to apply this treatment in his department, in one of the few hospitals in Germany where the PDT is applied. Life expectancy of PDT patients was increased by approximately ten months after surgery with some patients in the PDT group remaining progression-free in the five-year follow-up. While the three-year survival rate after conventional resection was only 21%, it could be increased up to 65% in the PDT group.
</p>
      </StyledText>
      </Grid>

    </Grid>
    <Grid item xs={12} sm={6} >     
    <div className="img2"></div>
</Grid>
  
    


</Grid>
</Wrapper2>)
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
Still in the experimental phase, PDT could be a promising alternative to conventional treatments.

This work is also inspired by this treatment and its application while playing with reflection, colors, and liquids.

</p>
<p>

How can we give pain a new expression?</p>

 <p>Is acceptance the way?</p>

<p>How can art contribute to our resilience and healing?</p>

<p>What is art? What science?
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <section id="abstract">
    <Div >
              <SectionHeader title="Abstract..." />

    <Container>
   
  
    <Slider components={[ItemSlider,ItemSlider2]} />
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