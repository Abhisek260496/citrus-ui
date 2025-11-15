import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const HighBandwidthSecStyled = styled(Box)`
  position: relative;
  height: 900px;
  figure {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const HighBandwidthSec = () => {
  return (
    <HighBandwidthSecStyled className="cmn_gap">
      <Container fixed>
        <Box
          sx={{
            maxWidth: "1170px",
            margin: "0 auto 40px auto",
            textAlign: "center",
            position: "relative",
            zIndex: 2,
            "& p": {
              maxWidth: "950px",
              margin: "0 auto"
            }
          }}
        >
          <CommonHeader
            mainTitle="DDR4"
            subTitle=" High bandwidth interface with "
            sx={{
              marginBottom: "10px"
            }}
          />
          <Typography>
            An energy-effcient memory module which operates at 3200Mhz, 50 times
            faster than DDR3 delivering higher data transfer rates and lower
            power consumption making it ideal for Thin Clients.
          </Typography>
        </Box>
      </Container>
      <figure>
        <Image
          src={assest?.high_bandwidth_banner}
          alt="high_bandwidth_banner"
          width={1920}
          height={900}
        />
      </figure>
    </HighBandwidthSecStyled>
  );
};

export default HighBandwidthSec;
