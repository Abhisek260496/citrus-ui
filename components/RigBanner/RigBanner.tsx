/* eslint-disable sort-imports */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";

export const RigBannerWrapper = styled(Box)`
  padding: 100px 0;
  position: relative;
  min-height: 900px;
  /* background-color: #fff; */
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
    <RigBannerWrapper>
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
