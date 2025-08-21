import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const CommunicativeStyled = styled(Box)`
  position: relative;
  .independent_wrapper {
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    z-index: 1;
    h2 {
      margin-bottom: 25px;
      max-width: 811px;
      line-height: 1.2;
    }
    p {
      max-width: 335px;
      margin-left: auto;
      margin-right: 280px;
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const Communicative = () => {
  return (
    <CommunicativeStyled>
      <figure>
        <Image
          src={assest?.coummunicative_wire}
          alt="coummunicative_wire"
          width={1920}
          height={900}
        />
      </figure>
      <Box className="independent_wrapper">
        <Container fixed>
          <CommonHeader
            mainTitle="Peripherals"
            subTitle=" Easy  Communicative "
          />
          <Typography>
            When uptime matters and Wi-Fi wavers, the serial stays solid.
            Simple, stable & reliable route of communication notably from PC to
            industrial controllers, sensors, routers and PoS systems.
          </Typography>
        </Container>
      </Box>
    </CommunicativeStyled>
  );
};

export default Communicative;
