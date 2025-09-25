import assest from "@/json/assest";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const ModeSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  .modeBack {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 956px;
    z-index: 1;
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
  .modeImg {
    max-width: 792px;
    margin: 0  auto;
  }
`;

const ModeSec = () => {
  return (
    <ModeSecWrapper>
      <Image
        src={assest.modeBack}
        alt="modeBack"
        width={1600}
        height={956}
        className="modeBack"
      />
      <Container fixed sx={{position:"relative",zIndex:2}}>
        <Box className="sec_hd">
          <Typography variant="h2">
            <strong>Centralised, Controlled</strong> & <strong>Secure</strong>{" "}
            mode of Computing
          </Typography>
          <Typography variant="body1">
            Thin Clients apart from being used as a Desktop PC it allows
            operation through a central server, keeping all data off local
            machines. This minimizes risk, strengthens data protection and
            ensures confidential workflow to be intact
          </Typography>
        </Box>
        <figure className="modeImg">
          <Image src={assest.modeImg} alt="modeImg" width={792} height={495} />
        </figure>
      </Container>
    </ModeSecWrapper>
  );
};

export default ModeSec;
