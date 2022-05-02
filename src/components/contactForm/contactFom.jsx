    import react from 'react';
    import { Grid } from '@mui/material';
    import styled from 'styled-components'
    import { TextField } from '@mui/material';
    import { Container } from '@mui/material';
    import FilledInput from '@mui/material/FilledInput';
    import { Button } from '@mui/material';
    import SendIcon from '@mui/icons-material/Send';




    const StyledTextField = styled(TextField)`
    /* default */
    .MuiInput-underline:before {
        border-bottom: 2px solid green;
    }
    /* hover (double-ampersand needed for specificity reasons. */
    && .MuiInput-underline:hover:before {
        border-bottom: 2px solid lightblue;
    }
    /* focused */
    .MuiInput-underline:after {
        border-bottom: 2px solid red;
    }
    `;
    const Wrapper = styled.div`
            padding-top:2%;
    `;
    const Wrapper2 = styled.div`
        margin : auto;
    `;

    const Input = styled(TextField)`
    padding: 0.5em;
    margin: 0.5em;
    background: grey;
    border-radius: 3px;
    width : 250px;
    height:100%;
    `;

    const MultiInput = styled(TextField)`
    padding: 0.5em;
    width:250px;
    margin: 0.5em;
    background: grey;
    border-radius: 3px;
    `

    const StyledText = styled.p`
        color : white;
        font-family: 'Minimal';
        font-size: 2rem;

    `

    const StyledButton = styled(Button)`
        width: 250px;
    `



    const  ContactForm =   () =>{
        return(
            <Wrapper2>
                                <Wrapper>

                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    >
                                        <StyledText>Lets' keep in contact</StyledText>

                    <Wrapper>
                        <Input color="info"  variant="filled" id="filled-basic"  label="name" />
                    </Wrapper>
                    <Wrapper>
                        <Input color="info"  variant="filled" id="filled-basic"  label="email" />
                    </Wrapper>
                    <Wrapper>
                    <MultiInput
          id="filled-textarea"
          label="Message"
          placeholder="Message"
          multiline
          variant="filled"
          rows={4}
        />
                        </Wrapper>
                        <Wrapper>
                        <StyledButton variant="contained" endIcon={<SendIcon />}>
        Send Mail
      </StyledButton>
                        </Wrapper>
                  


                </Grid>
                </Wrapper>


            </Wrapper2>
        )
    }

    export default ContactForm;