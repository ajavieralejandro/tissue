import * as React from 'react';
import Divider from '@mui/material/Divider';
import Paper from '@mui/material/Paper';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import styled from 'styled-components';
import { Style } from '@mui/icons-material';
const StyledText = styled.p`
text-transform: uppercase;
margin:1%;
font-weight: 900;
letter-spacing: 1px;
font-size: 3vh;
font-family: 'Syncopate', sans-serif;
color: white;
text-align: left;

`

export default function IconMenu({setMenu}) {
  return (
    <Paper  sx={{ width: 320, maxWidth: '100%',background:'transparent' }}>
      <MenuList>
        <MenuItem>
          
          <ListItemText onClick={()=>setMenu(1)}><StyledText>Samana</StyledText></ListItemText>
       
        </MenuItem>
        <MenuItem>
          
          <ListItemText  onClick={()=>setMenu(3)}><StyledText>Inti</StyledText></ListItemText>
       
        </MenuItem>

        <MenuItem>
          
          <ListItemText  onClick={()=>setMenu(2)}><StyledText>Brota</StyledText></ListItemText>
       
        </MenuItem>

        <MenuItem>
          
          <ListItemText  onClick={()=>setMenu(4)}><StyledText>Videos</StyledText></ListItemText>
       
        </MenuItem>
      
      </MenuList>
    </Paper>
  );
}