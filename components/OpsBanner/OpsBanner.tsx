import { Box, styled } from "@mui/material";

const OpsBannerStyled = styled(Box)`
  figure {
    line-height: 0;
    font-size: 0;
    video {
      width: 100%;
    }
  }
`;

const OpsBanner = ({ bannerVideo }: { bannerVideo: string }) => {
  return (
    <OpsBannerStyled>
      <figure>
        <video src={bannerVideo} autoPlay loop muted />
      </figure>
    </OpsBannerStyled>
  );
};

export default OpsBanner;
