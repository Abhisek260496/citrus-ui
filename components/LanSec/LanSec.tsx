/* eslint-disable sort-imports */
import assest from "@/json/assest";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const LanSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 900px;
  .lanBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 900px;
  }
  .sec_hd{
    position: relative;
    z-index: 2;
    h2{
        font-size: 120px;
        font-weight: 400;
        color:#041724;
    }
    p{
        color:#4F5C65;
        max-width: 534px;
    }
  }
`;

const LanSec = () => {
  return (
    <LanSecWrapper>
      <Image
        src={assest.lanBack}
        alt="lanBack"
        width={1600}
        height={900}
        className="lanBack"
      />
      <Container fixed>
        <Stack direction="row" alignItems="center" justifyContent="space-between" className="sec_hd">
          <Typography variant="h2">
            Dual <strong>LAN</strong>
          </Typography>
          <Typography variant="body1">
            Keep-up with the heavy workloads or real-time demands with dual 2.5
            Gbps LAN that deliver double the power to enjoy smoother streaming &
            quicker data transfers. Supports both internet & extranet
          </Typography>
        </Stack>
      </Container>
    </LanSecWrapper>
  );
};

export default LanSec;
