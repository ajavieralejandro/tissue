import * as React from 'react';
import { Grid } from '@mui/material';
import Card3 from '../Cards/card3';
import {Container} from '@mui/material';
import BasicCard from '../materialCard/materialCard';
import Exhibition from '../Exhibition/exhibition';
import styled from 'styled-components';
import Vimeo from '@u-wave/react-vimeo';
import Hero2 from '../Tailwinds/hero2';
import Card4 from '../Cards/card4';
const StyledText = styled.div`

color : white;
font-family : 'Simpletix';
font-size :1rem;

@media only screen and (max-width: 728px) {
  font-size:0.8rem;
}
justify-content: center;
margin : 10%;

padding-left:2%;
padding-right: 2%;

`
export default function Inti2({itemData}) {
  return (
      <div className='pb-12 mx-auto'>
          <Grid container>
            <Grid item xs={12} md={6}>
            <div className="grid h-full place-items-center ">

            <p className=" text-sm">     <StyledText>Thank you very much for opening the doors to me @intiargentina.
Fluorescence is widely used in microscopy and an important tool for observing the distribution of specific molecules. Most molecules in cells do not fluoresce. Therefore, they have to be labeled with fluorescent molecules called fluorochromes. Molecules of interest can be labeled directly, (eg, DNA with DAPI) or they can be immunolabeled with fluorochromes that are coupled to specific antibodies. Cell fixation is usually required for immunostaining.
</StyledText></p>

            <Card3 />
            </div>

            </Grid>
            <Grid item xs={12} md={6}>
            <div className="grid h-screen place-items-center">
            <Vimeo
  video="https://vimeo.com/817115216"
  autoplay={false}
  loop
  muted={false}
  showPortrait
  background={true}
  controls={false}
/>
<StyledText className="leading-relaxed text-sm">
Fluorescence microscopy also allows for time-lapse imaging of living cells or tissues. Hence, the proteins of interest can be tagged with genetically encoded fluorescent molecules such as GFP (green fluorescent protein). Molecules of interest can also be labeled using reversibly binding synthetic dyes (eg fura-2) or genetically modified naturally occurring proteins (eg GFP derivatives).

</StyledText>


                </div>
            </Grid>     
      
       </Grid>
       </div>
       
    );
}
