import { ICommonProductSection } from "@/interface/apiresp.interfaces";
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

interface IInnerBannerProps extends ICommonProductSection {
  bannerVideo?: string;
}

const InnerBanner = ({ bannerVideo }: IInnerBannerProps) => {
  return (
    <InnerBannerWrapper>
      <figure>
        <video src={bannerVideo} autoPlay loop muted />
      </figure>
    </InnerBannerWrapper>
  );
};

export default InnerBanner;
