import React,{useState} from "react";
import Brota from '../Brota/brota';
import Exhibition from '../Exhibition/exhibition';
import { Grid } from '@mui/material';
import Parallax2 from "../parallax/Parallax2";
import Card2 from "../Cards/card2";
import Card4 from "../Cards/card4";
import Hero from "../Tailwinds/hero";
import ExhibitionCard from '../ExhibitionCard/exhibitionCard';
import CasaSamana from '../CasaSamana/casaSamana';
import {Container} from "@mui/material";
import EastVillage from '../EastVillage/eastVillage';
import styled from "styled-components";

export default  () =>{
  const[cont,setCont] = useState(0);
    return(
        <>
        <Grid
  container
  direction="row"
>

        {cont==0?
<>
  <Grid onClick={()=>setCont(1)} item xs={12} md={4} >           <ExhibitionCard title="Casa Samana" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/1c589c4b-484e-4c70-53cb-554be7cdc000/Tissue"  />
</Grid>
  <Grid  onClick={()=>setCont(2)} item xs={12} md={4}>           <ExhibitionCard title="Brota" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4ec33243-cb91-426d-bb88-1b9850425200/Tissue" />
</Grid>
  <Grid  onClick={()=>setCont(3)} item xs={12} md={4}>           <ExhibitionCard title="East Village" img="https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/b5a8e07b-7ef3-4eba-e35f-992793636a00/public" />
</Grid>
</>

        


       :null}
       <div className="mx-2">
      <Container>
      {cont==1?<CasaSamana setCont={setCont}/>:null}
      {cont==2?<Brota setCont={setCont} />:null}
      {cont==3?<EastVillage setCont={setCont} />:null}

      </Container>
      </div>

       </Grid>
        </>
    )
}