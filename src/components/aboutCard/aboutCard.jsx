import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Img1 from '../../img/laura.JPEG';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import './style.scss';
const StyledImg = styled.img`
    width:100%;
    height : auto;
    object-fit: contain;

`


export default function MediaCard() {
  return (
      <div className="card">
    <Grid container spacing={0}>
             
    <Grid item sm={12} >

    <StyledImg src={Img1} />
    <StyledImg src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bf75bba4-64e5-47bc-b3b1-ee68c9c45e00/public" />

    </Grid>
    <Grid item sm={12}>
        <div className="center">
        <p className="headline">
Laura Heiss was born in Germany and has been living in different countries throughout the world always with the same passion: NGOs and their identities, stories. “Tissue” is her first installation. She lives between Ibiza and Buenos Aires.
</p>
        </div>                

    </Grid>

    </Grid>
    </div>
  );}