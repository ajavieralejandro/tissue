import React from 'react';
import styled from 'styled-components';
import { Grid } from '@mui/material';
import Gallery from '../Gallery/gallery';
import Exhibition from '../Exhibition/exhibition';
import {Container} from '@mui/material';
import Card from '../Cards/card1';
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

 const News =  () => {
    
       return( 
        <>
            <Grid container>
                <Grid item  xs={12} md={6} alignItems="center">
                    <Container>
                   

                    </Container>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Container>
                    <Card />
                  </Container>
                </Grid>

            </Grid>
        </>
      
    );
    
 }
export default News;