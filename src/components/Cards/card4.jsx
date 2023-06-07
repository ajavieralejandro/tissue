import * as React from 'react';
import ModalFLyer from '../ModalFlyer/modalFlyer';
import { useState } from 'react';
import Card3 from './card3';
import Inti2 from '../Inti/inti2';
import Vimeo from '@u-wave/react-vimeo';
import styled from 'styled-components';
import { Container } from '@mui/material';
import Card5 from './card5'
const StyledText = styled.p`
text-transform: lowercase;
font-family: 'Minimal';
font-size: 3.5vh;
margin:2%;
font-weight: 400;
letter-spacing: 1px;
color: white;
text-align: left;
`

export default  ({image}) =>{
    const [visible,setVisible] = useState(false);

    return(
        <>
           
 <section className="text-white body-font " >


  <div className="container px-5 py-12 mx-auto flex flex-wrap">
    
    <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
    <p className="leading-relaxed text-sm">     <StyledText>Thank you very much for opening the doors to me @intiargentina.
Fluorescence is widely used in microscopy and an important tool for observing the distribution of specific molecules. Most molecules in cells do not fluoresce. Therefore, they have to be labeled with fluorescent molecules called fluorochromes. Molecules of interest can be labeled directly, (eg, DNA with DAPI) or they can be immunolabeled with fluorochromes that are coupled to specific antibodies. Cell fixation is usually required for immunostaining.
</StyledText></p>
<Card3 />    </div>
    <div className="flex flex-col flex-wrap  -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
      <div className="flex flex-col mb-10 lg:items-start items-center">
     
        <div className="flex-grow">
      
        <div class=" flex items-center justify-center">

  <Vimeo
  video="https://vimeo.com/817115216"
  autoplay={false}
  loop
  muted={false}
  showPortrait
  background={true}
  controls={false}
/></div>

        </div>
      </div>
      <div className="flex flex-col  lg:items-start items-center">

        <div className="flex-grow">
          <StyledText className="leading-relaxed text-sm">
Fluorescence microscopy also allows for time-lapse imaging of living cells or tissues. Hence, the proteins of interest can be tagged with genetically encoded fluorescent molecules such as GFP (green fluorescent protein). Molecules of interest can also be labeled using reversibly binding synthetic dyes (eg fura-2) or genetically modified naturally occurring proteins (eg GFP derivatives).

</StyledText>

        </div>
      </div>
   
    </div>
  </div>

</section>

        </>
    )
}