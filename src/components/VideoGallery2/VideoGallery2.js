import { Stream } from "@cloudflare/stream-react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const StyledDiv = styled.div`
    padding-bottom:10%;
`

export const VideoGallery2 = () => {
  const videoIdOrSignedUrl = "https://vimeo.com/817115216";
  return (
    
      <Stream controls src={videoIdOrSignedUrl} />
  
  );
};