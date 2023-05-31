import { Stream } from "@cloudflare/stream-react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const StyledDiv = styled.div`
    padding-bottom:10%;
`

export const VideoGallery2 = () => {
  const videoIdOrSignedUrl = "6e4707e8f353a9cf823d5ae585d49564";
  return (
    
      <Stream controls src={videoIdOrSignedUrl} />
  
  );
};