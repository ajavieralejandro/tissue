import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Grid'
import SectionHeader from '../SectionHeader';
import styled from 'styled-components'

const StyledText = styled.p`
text-transform: uppercase;
font-weight: 600;
letter-spacing: 1px;
font-size : 1.3rem;
padding-bottom : 2%;
padding-top:3%;
font-family: 'Syncopate', sans-serif;
color: white;
text-align : center;`

export default function MasonryImageList() {
  return (
    <>
                  <StyledText >Muestra Samana | Buenos Aires</StyledText>

    <Grid
    container
    direction="row"
    justifyContent="center"
    alignItems="center"
  >
    <Box sx={{ minWidth: 600, minHeight: 400}}>
      <ImageList variant="masonry" cols={4} gap={10}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
    </Grid>
    </>
  );
}

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
