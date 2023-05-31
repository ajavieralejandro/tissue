import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './materialCard.scss'
import exhibitions from '../Exhibitions/exhibitions';
import Exhibitions from '../Exhibitions/exhibitions';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
  return (
        <div className='card'>
            <Box>
            <Exhibitions />

            </Box>
        </div>
    
  );
}