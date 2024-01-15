import React from 'react';
import './style.scss';
import styled from 'styled-components'
import SectionHeader from '../SectionHeader';
import { useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const Div = styled.div`
    min-height:400px;
`

function Parallax() {
    const theme = useTheme();
    const cursor = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
        
        <div
  class="mx-auto h-80 w-screen  bg-cover bg-fixed bg-center bg-no-repeat shadow-lg"
  style={{ 
    backgroundImage: `url("https://imagedelivery.net/rXQkQjLMcsIgr9J-xeKCWA/dd1bf274-33b2-408d-cf48-99d36321f700/public")`
  }}>
    </div>

        </>
    )
}

export default Parallax;
