/* eslint-disable sort-imports */
import assest from "@/json/assest";
import { Box, Container, styled, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";

export const RigBannerWrapper = styled(Box)`
  padding: 100px 0;
  background-color: #fff;
  .banner_cnt {
    text-align: center;
    figure {
      margin: 0 0 15px;
    }
    h1 {
      font-size: 68px;
      color: #041724;
    }
    p {
      font-size: 18px;
      color: #4f5c65;
    }
  }
`;

const RigBanner = () => {
  return (
    <RigBannerWrapper>
      <Container fixed>
        <Box className="banner_cnt">
          <figure>
            <Image
              src={assest.rigBanner}
              alt="rigBanner"
              width={875}
              height={461}
            />
          </figure>
          <Typography variant="h1">RIG Slim Rugged PC</Typography>
          <Typography variant="body1">
            Tough Enough for the Field. Slim Enough for the Desk.
          </Typography>
        </Box>
      </Container>
    </RigBannerWrapper>
  );
};

export default RigBanner;
