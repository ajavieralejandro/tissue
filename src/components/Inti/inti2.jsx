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
      
          <Grid container>
            <Grid item xs={12} md={12}>
            <Card3 />

            </Grid>
            <Grid item xs={12} md={12}>
            <div className="container px-5 py-24 mx-auto flex flex-col">


                </div>
            </Grid>     
      
       </Grid>
       
    );
}
