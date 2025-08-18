/* eslint-disable import/order */
import assest from "@/json/assest";
import { Box, styled } from "@mui/material";
import Image from "next/image";
import React from "react";
import CommonHeader from "../CommonHeader/CommonHeader";

const ProcessorsStyled = styled(Box)`
  /* padding-top: 150px; */
  figure {
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Processsors = () => {
  return (
    <ProcessorsStyled>
      <Box className="processors_fig">
        <figure>
          <Image
            src={assest?.processors_img}
            alt="processors_img"
            width={1600}
            height={986}
          />
        </figure>
      </Box>
       <Box className='processor_content'>
        <CommonHeader mainTitle="processors" subTitle="our core"/>
       </Box>
    </ProcessorsStyled>
  );
};

export default Processsors;
