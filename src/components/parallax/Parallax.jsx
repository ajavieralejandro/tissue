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
        
        <div className={cursor?"parallax":"mparallax"}>
            
        </div>

        </>
    )
}

export default Parallax;
