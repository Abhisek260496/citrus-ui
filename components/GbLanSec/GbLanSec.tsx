import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const GbLanSecStyled = styled(Box)`
  position: relative;
  height: 933px;
  @media (max-width: 899px) {
    height: 500px;
  }
  @media (max-width: 599px) {
    height: 350px;
  }
  .gb_per_lanFig {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    @media (max-width: 899px) {
      height: 500px;
    }
    @media (max-width: 599px) {
      height: 350px;
    }
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .core_wrapper {
    position: absolute;
    right: 0;
    bottom: 100px;
    width: 100%;

    @media (max-width: 899px) {
      bottom: 50px;
    }
  }
  .core_content {
    max-width: 569px;
    margin-left: auto;
    .core_content_left {
      max-width: 455px;
      h2 {
        margin-bottom: 20px;
      }
    }
    .faster_hdr {
      font-size: 138px;
      @media (max-width: 1199px) {
        font-size: 100px;
      }
      @media (max-width: 899px) {
        font-size: 70px;
      }
      span {
        font-size: 58px;
        font-weight: 600;
        text-transform: capitalize;
        @media (max-width: 899px) {
          font-size: 48px;
        }
        @media (max-width: 599px) {
          font-size: 38px;
        }
      }
    }
  }
  .lan_fig {
    position: absolute;
    left: 40%;
    top: 55%;
    transform: translate(-50%, -50%);
    img {
      position: relative;
      z-index: 2;
    }
    &::after {
      content: "";
      width: 500px;
      height: 500px;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #009fe3;
      border-radius: 100%;
      filter: blur(110px);
      z-index: 1;
    }
  }
`;

const GbLanSec = ({
  section_background_image,
  section_image,
  section_content,
  section_subtitle,
  section_title,
  section_video
}: ICommonProductSection) => {
  return (
    <GbLanSecStyled className="cmn_gap">
      <figure className="gb_per_lanFig">
        <Image
          src={section_background_image as string}
          alt="gb_per_lan_bg"
          width={1920}
          height={1080}
        />
      </figure>
      <figure className="lan_fig">
        <Image
          src={section_image as string}
          alt="gb_lan_img"
          width={550}
          height={450}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <Typography variant="h2" className="faster_hdr">
              2.5 <Typography variant="caption">GBE LAN</Typography>
            </Typography>
            <Box className="core_content_left">
              <Typography>{section_content}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </GbLanSecStyled>
  );
};

export default GbLanSec;
