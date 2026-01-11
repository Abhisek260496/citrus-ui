import { prodcutMediaUrl } from "@/api/endpoints";
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const TwoLanSectionStyled = styled(Box)`
  position: relative;
  figure {
    position: relative;
    z-index: 1;
    width: 811px;
    &::after {
      content: "";
      position: absolute;
      width: 163px;
      height: 163px;
      border-radius: 100%;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background: #009fe3;
      filter: blur(117.5px);
      z-index: -1;
    }
  }
  .core_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .core_content {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      z-index: 2;

      @media (max-width: 1199px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
      }
      .core_content_left {
        max-width: 455px;
        h2 {
          margin-bottom: 20px;
        }
      }
      .faster_hdr {
        font-size: 138px;
        @media (max-width: 1199px) {
          font-size: 90px;
        }
        @media (max-width: 899px) {
          font-size: 60px;
        }
        @media (max-width: 599px) {
          font-size: 40px;
        }
        span {
          font-size: 58px;
          font-weight: 600;
          text-transform: capitalize;
          @media (max-width: 899px) {
            font-size: 38px;
          }
          @media (max-width: 599px) {
            font-size: 28px;
          }
        }
      }
    }
  }
  .water_mark_hdr {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    text-align: center;
    font-size: 300px;
    line-height: 1 !important;
    background: -webkit-linear-gradient(top, #12132f, rgba(1, 2, 20, 0.661));
    background: -o-linear-gradient(bottom, #12132f, rgba(1, 2, 20, 0.661));
    background: -moz-linear-gradient(bottom, #12132f, rgba(1, 2, 20, 0.661));
    background: linear-gradient(to bottom, #12132f, rgba(1, 2, 20, 0.661));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    @media (max-width: 1499px) {
      font-size: 250px;
    }
    @media (max-width: 1199px) {
      font-size: 12.492vw;
    }
    @media (max-width: 899px) {
      /* font-size: 150px; */
    }
  }

  .dual_lan_Fig {
    @media (max-width: 1199px) {
      max-width: 600px;
      margin: 0 auto;
    }
    @media (max-width: 899px) {
      max-width: 500px;
    }
    @media (max-width: 599px) {
      max-width: 400px;
    }
  }
`;

const TwoLanSection = ({
  section_background_image,
  section_image,
  section_content,
  section_subtitle,
  section_title,
  section_video
}: ICommonProductSection) => {
  return (
    <TwoLanSectionStyled className="cmn_gap">
      <Container fixed>
        <Box className="core_wrapper">
          <figure className="dual_lan_Fig">
            <Image
              src={prodcutMediaUrl(section_image as string)}
              alt="dual_lan_img"
              width={811}
              height={600}
            />
          </figure>
          <Typography variant="h3" className="water_mark_hdr">
            Dual LAN
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="core_content"
          >
            <Box className="core_content_left">
              <CommonHeader
                mainTitle={section_subtitle as string}
                subTitle={section_title as string}
                className="cmn_header"
              />
              <Typography
                dangerouslySetInnerHTML={{
                  __html: section_content as string
                }}
              />
            </Box>
            <Typography variant="h2" className="faster_hdr">
              2.5 <Typography variant="caption">x faster</Typography>
            </Typography>
          </Stack>
        </Box>
      </Container>
    </TwoLanSectionStyled>
  );
};

export default TwoLanSection;
