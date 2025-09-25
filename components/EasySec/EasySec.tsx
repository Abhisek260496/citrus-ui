import assest from "@/json/assest";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const EasySecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  height: 910px;
  .easyBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 910px;
    z-index: 2;
    object-fit: cover;
  }
  .sec_hd{
    position: relative;
    z-index: 2;
    h2{
        font-weight: 400;
        color: #fff;
        line-height: 1.3;
    }
    p{
        color: #fff;
        max-width: 512px;
    }
  }
`;

const EasySec = () => {
  return (
    <EasySecWrapper>
      <Image
        src={assest.easyBack}
        alt="easyBack"
        width={1600}
        height={910}
        className="easyBack"
      />
      <Container fixed>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          className="sec_hd"
        >
          <Typography variant="h2">
            Easy <br />
            <strong>Communicative</strong>
            <br /> Peripherals
          </Typography>
          <Typography variant="body1">
            When uptime matters and Wi-Fi wavers, the serial stays solid.
            Simple, stable & reliable route of communication notably from PC to
            industrial controllers, sensors, routers and PoS systems.
          </Typography>
        </Stack>
      </Container>
    </EasySecWrapper>
  );
};

export default EasySec;
