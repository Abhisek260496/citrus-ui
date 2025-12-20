import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const DualLanStyled = styled(Box)`
  position: relative;
  figure {
    @media (max-width: 899px) {
      height: 450px;
    }
    @media (max-width: 599px) {
      height: 350px;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    height: calc(100% - 200px);
    @media (max-width: 899px) {
      top: 60px;
    }
    @media (max-width: 599px) {
      top: 30px;
    }
    .MuiContainer-root {
      height: 100%;
    }
    .core_content {
      position: relative;
      height: 100%;
    }
    .core_content_txt {
      max-width: 690px;
      @media (max-width: 1199px) {
        max-width: 100%;
      }
      h2 {
        max-width: 533px;
        margin-bottom: 15px;
      }
      p {
        max-width: 522px;
        @media (max-width: 1199px) {
          max-width: 100%;
        }
      }
    }
    .faster_hdr {
      font-size: 138px;

      @media (max-width: 1199px) {
        font-size: 100px;
      }
      @media (max-width: 899px) {
        font-size: 60px;
      }
      @media (max-width: 599px) {
        font-size: 30px;
      }
      span {
        font-size: 58px;
        font-weight: 600;
        text-transform: capitalize;
        @media (max-width: 899px) {
          font-size: 38px;
        }
        @media (max-width: 599px) {
          font-size: 22px;
        }
      }
    }
    .btm_block {
      position: absolute;
      bottom: 0;
      right: 0;

      @media (max-width: 1199px) {
        bottom: -20px;
      }
      @media (max-width: 899px) {
        bottom: -100px;
      }
      @media (max-width: 599px) {
        bottom: -150px;
      }
      img {
        margin-right: -100px;

        @media (max-width: 1199px) {
          margin-right: 0;
          width: 300px;
        }
        @media (max-width: 899px) {
          width: 200px;
        }
        @media (max-width: 599px) {
          width: 150px;
        }
      }
    }
  }
`;

const DualLan = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content,
  section_image
}: ICommonProductSection) => {
  return (
    <DualLanStyled>
      <figure>
        <Image
          src={String(section_background_image)}
          alt="dual_lan_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <Box className="core_content_txt">
              <CommonHeader
                mainTitle={String(section_subtitle)}
                subTitle={String(section_title)}
              />
              <Typography>{section_content}</Typography>
            </Box>
            <Stack className="btm_block" direction="row" alignItems="center">
              <Image
                src={String(section_image)}
                alt="wifi_img"
                width={452}
                height={230}
              />
              <Typography variant="h2" className="faster_hdr">
                2.5 <Typography variant="caption">x faster</Typography>
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </DualLanStyled>
  );
};

export default DualLan;
