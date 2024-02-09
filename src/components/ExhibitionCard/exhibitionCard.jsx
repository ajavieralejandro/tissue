import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';
const StyledText = styled.h1`
text-transform: uppercase;
margin:2%;
font-weight: 400;
letter-spacing: 1px;
color: white;
text-align: center;
`
export default function MediaCard({title,img}) {
  return (
            
    
    <div className="p-4 sm:mb-0 mb-6">
    <StyledText className="text-xl font-medium title-font text-gray-900 text-center ">{title}</StyledText>


      <div className="rounded-lg h-full pt-12 md:h-64 overflow-hidden">
        <img alt="content" className="object-cover object-center h-full w-full" src={img} />
      </div>

    </div>
  );
}