import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const NextGenConectivityStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
    .core_content {
      max-width: 483px;
      h2 {
        line-height: 1.3;
        margin-bottom: 20px;
      }
    }
  }
  figure {
    /* height: 860px; */
    img {
      width: 100%;
      height: 100%;
      /* object-fit: cover; */
    }
  }
`;

const NextGenConectivity = () => {
  return (
    <NextGenConectivityStyled>
      <figure>
        <Image
          src={assest?.next_gen_bg}
          alt="next_gen_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader mainTitle=" Connectivity" subTitle="Next-Gen" />
            <Typography>
              As more devices and applications demand higher data rates, Wi-Fi
              6E provides better coverage, especially in dense environments, by
              reducing interference from other networks and devices, ensuring
              stable connectivity.
            </Typography>
          </Box>
        </Container>
      </Box>
    </NextGenConectivityStyled>
  );
};

export default NextGenConectivity;
