/* eslint-disable sort-imports */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const AccessSecWrapper = styled(Box)`
  position: relative;

  .accessBackImg {
    position: absolute;
    width: 100%;
    height: 888px;
    top: 0;
    left: 0;
    z-index: 1;

    @media (max-width: 1199px) {
      height: 100%;
    }
  }
  .sec_hd {
    text-align: center;
    position: relative;
    z-index: 2;
    margin-bottom: 50px;
    h2 {
      color: #fff;
      font-weight: 400;
      margin-bottom: 15px;
    }
    p {
      color: #fff;
      max-width: 700px;
      margin: 0 auto;
    }
  }
  .access_row {
    position: relative;
    z-index: 2;

    .access_box {
      figure {
        margin: 0;
        margin-bottom: 20px;
        @media (max-width: 1199px) {
          max-width: 200px;
        }
        @media (max-width: 899px) {
          max-width: 150px;
        }
      }
      p {
        font-size: 49px;
        font-weight: 700;
        /* text-transform: uppercase; */
        text-align: center;

        @media (max-width: 1199px) {
          font-size: 39px;
        }
        @media (max-width: 899px) {
          font-size: 30px;
        }
        @media (max-width: 599px) {
          font-size: 25px;
        }
      }
    }
  }
`;
const AccessSec = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content,
  section_image_one,
  section_image,
  section_sub_title_one,
  section_sub_title_two
}: ICommonProductSection) => {
  return (
    <AccessSecWrapper className="cmn_gap">
      <Image
        src={String(section_background_image)}
        alt="accessBackImg"
        width={1600}
        height={888}
        className="accessBackImg"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">
            {section_title} <strong>{section_subtitle}</strong>
          </Typography>
          <Typography variant="body1">{section_content}</Typography>
        </Box>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          gap={10}
          className="access_row"
        >
          <Box className="access_box">
            <figure>
              <Image
                src={String(section_image)}
                alt="wifiImg"
                width={364}
                height={362}
              />
            </figure>
            <Typography variant="body1">{section_sub_title_one}</Typography>
          </Box>
          <Box className="access_box">
            <figure>
              <Image
                src={String(section_image_one)}
                alt="wifiImg1"
                width={364}
                height={362}
              />
            </figure>
            <Typography variant="body1">{section_sub_title_two}</Typography>
          </Box>
        </Stack>
      </Container>
    </AccessSecWrapper>
  );
};

export default AccessSec;
