/* eslint-disable sort-imports */
import assest from "@/json/assest";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const RicherWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 840px;
  .richerBackImg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 840px;
    z-index: 1;
  }
  .sec_hd {
    text-align: center;
    position: relative;
    z-index: 2;
    h2 {
      color: #041724;
      font-weight: 400;
      margin-bottom: 15px;
    }
  }
  p {
    color: #464646;
    max-width: 700px;
    margin: 0 auto;
  }
`;

const RicherSec = () => {
  return (
    <RicherWrapper>
      <Image
        src={assest?.richerBackImg}
        alt="richerBackImg"
        width={1600}
        height={842}
        className="richerBackImg"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">
            Richer Visual Experience with <strong>4K Ultra HD</strong>
          </Typography>
          <Typography variant="body1">
            Choose your experience where every detail comes to life in stunning
            4K resolution at 60 fps much more in pixels as compared to usual
            1920×1080 resolution
          </Typography>
        </Box>
      </Container>
    </RicherWrapper>
  );
};

export default RicherSec;
