import React,{useState} from 'react';
import Grid from '@mui/material/Grid';
import styled from 'styled-components';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const StyledArrow1 = styled(ArrowBackIosNewIcon)`
    font-size : 24px;
`


const StyledArrow2 = styled(ArrowForwardIosIcon)`
    font-size : 24px;
`



const StyledDiv = styled.div`
    background : red;
    width : 100px;
    height : 100px;
`


function Slider(props) {
    const [toRender, setToRender] = useState(props.components[0]);
    const [counter, setCounter] = useState(0);
    const  addOne =  () =>{
      
        
        if(counter+1<props.components.length){
            let i = counter + 1;
            setCounter(counter+1);
            setToRender(props.components[i]);




        }
    }
    const moveBack = () =>{
     
        if(counter>0){
            let i = counter -1;
            setCounter(counter-1);
            setToRender(props.components[i]);

            


        }
        }
    return (
        <div >
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <Grid item xs={1}>{counter>0?<ArrowBackIosNewIcon style={{fontSize:'3rem',color:'white'}} onClick={()=>moveBack()} />:null}  
</Grid>
                <Grid item xs={10}>{toRender}</Grid>
                <Grid item xs={1}>{counter<2?<ArrowForwardIosIcon style={{float:'right',fontSize:'3rem',color:'white'}} onClick={()=>addOne()}/>:null}</Grid>


            </Grid>
        </div>)
}

export default Slider;
