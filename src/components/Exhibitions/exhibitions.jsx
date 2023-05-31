import React from "react";
import Brota from '../Brota/brota';
import Exhibition from '../Exhibition/exhibition';
import { Grid } from '@mui/material';
import Parallax2 from "../parallax/Parallax2";
import Card2 from "../Cards/card2";
import Card4 from "../Cards/card4";
import Hero from "../Tailwinds/hero";
const Samana = [
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

  const ImagenesBrota = [
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/ebce3dbd-6715-4ece-46c5-8c09d8580400/public',
      title: 'Bed',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/cc0b1b4a-bec3-4982-4217-fc13a842ca00/Tissue',
      title: 'Books',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/5966625d-708f-4599-d1b1-8c219e680400/Tissue',
      title: 'Sink',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/558f263a-5341-4ec5-05a7-07430d88e200/Tissue',
      title: 'Kitchen',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/d83fea35-8be1-412b-5a3d-bbba9f023100/Tissue',
      title: 'Blinds',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/0745112d-9e71-44a1-ad95-cbf4def85700/Tissue',
      title: 'Chairs',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/bb65c540-cfac-4be3-4892-9e054002ba00/Tissue',
      title: 'Laptop',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/f192effe-6292-4819-6095-3432b8994a00/Tissue',
      title: 'Doors',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/4ec33243-cb91-426d-bb88-1b9850425200/Tissue',
      title: 'Coffee',
    },
    {
      img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/485b0ae9-40dd-435f-1c9a-a01fba7f4200/Tissue',
      title: 'Storage',
    },
 
  ];
export default  () =>{
    return(
        <>
        <Grid container>
            <Grid item xs={12} md={8} alignContent="center">
            <div>
            <Brota title="Brota" itemData={ImagenesBrota} />
            </div>
            </Grid>
            <Grid item xs={12} md={4}>
                </Grid>
        </Grid>
         
        </>
    )
}