/* eslint-disable sort-imports */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export const RigBannerWrapper = styled(Box)`
  position: relative;
  min-height: 900px;
  /* background-color: #fff; */
  @media (max-width: 1199px) {
    height: 700px;
  }
  @media (max-width: 899px) {
    height: 500px;
  }
  .banner_cnt {
    text-align: center;
    figure {
      margin: 0 0 15px;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    h1 {
      font-size: 68px;
      color: #041724;

      @media (max-width: 1499px) {
        font-size: 58px;
      }

      @media (max-width: 1199px) {
        font-size: 48px;
      }
      @media (max-width: 899px) {
        font-size: 38px;
      }
      @media (max-width: 599px) {
        font-size: 25px;
      }
    }
    p {
      font-size: 18px;
      color: #4f5c65;
    }
    .banner_block {
      position: relative;
      z-index: 9;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 100px;
    }
  }
`;

const RigBanner = ({
  product_banner_content,
  section_title,
  section_subtitle,
  section_content,
  section_image
}: ICommonProductSection) => {
  return (
    <RigBannerWrapper className="cmn_gap">
      <Container fixed>
        <Box className="banner_cnt">
          <figure>
            <Image
              src={String(product_banner_content)}
              alt="rigBanner"
              width={875}
              height={461}
            />
          </figure>
          <Box className="banner_block">
            <Typography variant="h1">{String(section_title)}</Typography>
            <Typography variant="body1">{section_content}</Typography>
          </Box>
        </Box>
      </Container>
    </RigBannerWrapper>
  );
};

export default RigBanner;
