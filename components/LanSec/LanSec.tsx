/* eslint-disable sort-imports */
import { ICommonProductSection } from "@/interface/apiresp.interfaces";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const LanSecWrapper = styled(Box)`
  position: relative;
  height: 900px;

  @media (max-width: 1199px) {
    height: 700px;
  }
  @media (max-width: 899px) {
    height: 500px;
  }
  @media (max-width: 599px) {
    height: 400px;
  }
  .lanBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
    @media (max-width: 1199px) {
      height: 100%;
    }
  }
  .sec_hd {
    position: relative;
    z-index: 2;

    @media (max-width: 1199px) {
      flex-direction: column;
      gap: 20px;
    }
    h2 {
      font-size: 120px;
      font-weight: 400;
      color: #041724;

      @media (max-width: 1499px) {
        font-size: 100px;
      }
      @media (max-width: 1199px) {
        font-size: 80px;
      }
      @media (max-width: 899px) {
        font-size: 50px;
      }
      @media (max-width: 599px) {
        font-size: 30px;
      }
    }
    p {
      color: #4f5c65;
      max-width: 534px;
      @media (max-width: 599px) {
        color: #000;
        font-size: 14px;
      }
    }
  }
  .btm_block {
    position: absolute;
    bottom: 100px;
    right: 0;
    width: 100%;
    h2 {
      text-align: right;
      font-size: 120px;
      font-weight: 700;
      color: #041724;
      span {
        font-size: 58px;
        font-weight: 400;
      }
    }
    @media (max-width: 1199px) {
      bottom: 20px;
    }
    @media (max-width: 899px) {
      right: auto;
      left: 50%;
      transform: translateX(-50%);
      h2 {
        text-align: center;
        font-size: 50px;
        span {
          font-size: 25px;
        }
      }
    }
  }
`;

const LanSec = ({
  section_background_image,
  section_title,
  section_subtitle,
  section_content
}: ICommonProductSection) => {
  return (
    <LanSecWrapper className="cmn_gap">
      <Image
        src={String(section_background_image)}
        alt="lanBack"
        width={1600}
        height={900}
        className="lanBack"
      />
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="sec_hd"
        >
          <Typography variant="h2">
            {String(section_title)} <strong>{String(section_subtitle)}</strong>
          </Typography>
          <Typography variant="body1">{section_content}</Typography>
        </Stack>
      </Container>
      <Box className="btm_block">
        <Container fixed>
          <Typography variant="h2" className="faster_hdr">
            2.5 <Typography variant="caption">x faster</Typography>
          </Typography>
        </Container>
      </Box>
    </LanSecWrapper>
  );
};

export default LanSec;
