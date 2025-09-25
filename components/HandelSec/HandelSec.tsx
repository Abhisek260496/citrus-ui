/* eslint-disable sort-imports */
import assest from "@/json/assest";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const HandelSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 900px;
  .handelBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
    z-index: 1;
  
  }
  .sec_hd {
    position: relative;
    z-index: 2;
    h2 {
      font-weight: 400;
      color: #fff;
    }
    p {
      color: #fff;
    }
  }
`;

const HandelSec = () => {
  return (
    <HandelSecWrapper>
      <Image
        src={assest.handelBack}
        alt="handelBack"
        width={1600}
        height={900}
        className="handelBack"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">
            Handles{" "}
            <strong>
              Vibrations, <br /> Blocks Dust, Resists <br /> Damage
            </strong>
          </Typography>
          <Typography variant="body1">
            Chassis keeps the dust out ensuring long-term performance in tough
            industrial settings while, its shock-resistant quality protects
            internal components from drops, vibrations & moisture; together
            making the PC reliable in environments where standard systems
            wouldn’t last.
          </Typography>
        </Box>
      </Container>
    </HandelSecWrapper>
  );
};

export default HandelSec;
