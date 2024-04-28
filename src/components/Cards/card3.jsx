import * as React from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';
import { ImageList,ImageListItem } from '@mui/material';
import { useState } from 'react';
import ModalFLyer from '../ModalFlyer/modalFlyer';
import { click } from '@testing-library/user-event/dist/click';
import './card3.css'



const Label = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
}));

export default function ImageMasonry({children}) {
  const [image,setImage] = useState("https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/d7faaf42-4749-4403-66ec-ae2238196e00/public");
  const [click,setClick] = useState(false);

  const handleClick = (img) =>{
    setImage(img);
    setClick(true);

  }
  return (
    <>
<div class="">
      <Box sx={{ minWidth: 200, minHeight: 200}}>
   <div class="grid grid-cols-2 text-center md:grid-cols-4 gap-4">
   {itemData.map((item) => (
          
          
            <img               onClick={()=>handleClick(item.img)}
 class="h-32 max-w-full rounded-lg" src={`${item.img}`} alt={item.title}></img>
            
          
        ))}
      
        </div>
      <ModalFLyer open={click} setOpen={setClick  } image={image} />

    </Box>

  </div>
  </>
  );
}

const itemData = [
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/d7faaf42-4749-4403-66ec-ae2238196e00/public',
    title: 'Fern',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/07a99c41-5a03-40e3-dab2-22278a6af700/Tissue',
    title: 'Snacks',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/571a8439-08a8-4d69-2b6f-9979f6995b00/public',
    title: 'Mushrooms',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/62ffa013-33f6-4a82-3af3-c988c22a5300/Tissue',
    title: 'Tower',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/f6552cbe-2258-46a3-345f-5bcdcbecb600/Tissue',
    title: 'Sea star',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/1978dbfa-cb11-4917-2e93-f2560504d400/Tissue',
    title: 'Honey',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/66390f17-a597-4b80-e311-953f5239d800/Tissue',
    title: 'Basketball',
  },
  {
    img: 'https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/40cfbe0f-b183-4fa0-b245-1bf875af5d00/Tissue',
    title: 'Breakfast',
  }
  
];


