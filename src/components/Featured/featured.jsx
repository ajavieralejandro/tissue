import React from 'react';
import './style.scss';
import Img1 from '../../img/1.png';
import Img2 from '../../img/laura1.jpeg';
import styled from 'styled-components';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Paper } from '@mui/material';


const StyledPapper = styled(Paper)`
opacity: 0.6; /* see the background through the hbox */
background : black;
color: black;


    
`


const Wrapper = styled.div`
margin : auto;
padding-bottom : 2%;
padding-top:2%;

`

const StyledImg = styled.img`
    width:100%;
    height : 100%;
    object-fit: contain;

`

const Featured = () =>{
    return(
        <section className="featured-section">
            <Grid container spacing={0}>
             
                <Grid item sm={12} md={5}>
 
                <StyledImg src="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4aa17241-9190-4338-36f3-779c42df9e00/public" />

                </Grid>
                <Grid item sm={12} md={7}>
                    <div className="center">
                    <p id="headline">"Tissue" unfolds as a multi-channel video installation, that interprets and redefines Glioblastoma brain cancer into a visual and emotional journey.</p>
                    <p id="headline">“Tissue” is the intersection between art and science aiming to express the mystery, the unknown, the ineffable, what is usually totally out of our human control.
</p>

                    </div>                

                </Grid>

                </Grid>

        </section>
    )
}

export default Featured;