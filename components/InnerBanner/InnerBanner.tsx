import { Box, styled } from "@mui/material";

export const InnerBannerWrapper = styled(Box)`
  figure {
    line-height: 0;
    font-size: 0;
    video {
      width: 100%;
    }
  }
`;

const InnerBanner = ({ bannerVideo }: { bannerVideo?: string }) => {
  return (
    <InnerBannerWrapper>
      <figure>
        <video src={bannerVideo} autoPlay loop muted />
      </figure>
    </InnerBannerWrapper>
  );
};

export default InnerBanner;
