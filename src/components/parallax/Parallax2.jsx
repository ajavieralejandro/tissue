import React from 'react';
import './style2.scss';
import styled from 'styled-components'
import SectionHeader from '../SectionHeader';
import { useTheme } from '@material-ui/core';
import { useMediaQuery } from '@material-ui/core';

const Div = styled.div`
    min-height:400px;
`

function Parallax2() {
    const theme = useTheme();
    const cursor = useMediaQuery(theme.breakpoints.up('md'));
    return (
        <>
        <div className={cursor?"parallax3":"mparallax3"}>
            
        </div>

        </>
    )
}

export default Parallax2;
