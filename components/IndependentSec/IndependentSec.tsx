/* eslint-disable sort-imports */
import assest from "@/json/assest";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const IndependentWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 840px;
  .independent_img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 840px;
    z-index: 1;
  }
  .sec_hd {
    text-align: center;
    z-index: 2;
    position: relative;

    h2{
        color: #041724;
        font-weight: 400;
        margin-bottom: 15px;
    }
    p{
        color: #464646;
        max-width: 700px;
        margin: 0 auto;
    }
  }
`;

const IndependentSec = () => {
  return (
    <IndependentWrapper>
      <Image
        src={assest?.independentBackImg}
        alt="independentBackImg"
        width={1600}
        height={840}
        className="independent_img"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">
            Three <strong>Independent Displays</strong>
          </Typography>
          <Typography variant="body1">
            With 2 × Display Ports & an HDMI Port, run multiple applications
            side by side without performance drop or display limitations.
          </Typography>
        </Box>
      </Container>
    </IndependentWrapper>
  );
};

export default IndependentSec;
