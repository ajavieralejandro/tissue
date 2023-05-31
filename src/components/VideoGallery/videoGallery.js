import { Stream } from "@cloudflare/stream-react";
import styled from "styled-components";
import SectionHeader from "../SectionHeader";

const StyledDiv = styled.div`
    padding-bottom:10%;
`

export const VideoGallery = () => {
  const videoIdOrSignedUrl = "6e4707e8f353a9cf823d5ae585d49564";
  return (
    <section id="video">
                    <SectionHeader className="section-header" title="Video" />

    <StyledDiv>
      <Stream autoplay controls src={videoIdOrSignedUrl} />
    </StyledDiv>
    </section>
  );
};