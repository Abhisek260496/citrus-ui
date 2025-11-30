import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const GbLanSecStyled = styled(Box)`
  position: relative;
  height: 933px;
  figure {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
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
      span {
        font-size: 58px;
        font-weight: 600;
        text-transform: capitalize;
      }
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
      <figure>
        <Image
          src={section_background_image as string}
          alt="gb_per_lan_bg"
          width={1920}
          height={1080}
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
