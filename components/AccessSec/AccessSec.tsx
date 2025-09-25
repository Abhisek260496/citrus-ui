/* eslint-disable sort-imports */
import assest from "@/json/assest";
import { Box, Container, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

export const AccessSecWrapper = styled(Box)`
  position: relative;
  padding: 100px 0;
  .accessBackImg {
    position: absolute;
    width: 100%;
    height: 888px;
    top: 0;
    left: 0;
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
  .access_row{
    position: relative;
    z-index: 2;
  

    .access_box{
      figure{
        margin: 0;
        margin-bottom: 20px;
      }
      p{
        font-size: 49px;
        font-weight: 700;
        text-transform: uppercase;
        text-align: center;
        
      }
    }
  }
`;
const AccessSec = () => {
  return (
    <AccessSecWrapper>
      <Image
        src={assest.accessBackImg}
        alt="accessBackImg"
        width={1600}
        height={888}
        className="accessBackImg"
      />
      <Container fixed>
        <Box className="sec_hd">
          <Typography variant="h2">
            Access <strong>Locally & Remotely</strong>
          </Typography>
          <Typography variant="body1">
            Handle demanding tasks and real-time performance with ease with dual
            2.5 GbE LAN for faster data flow and uninterrupted streaming also
            featuring Wi-Fi and Bluetooth for effortless wireless connections
          </Typography>
        </Box>
        <Stack direction="row" alignItems="center" justifyContent='center' gap={10} className="access_row">
          <Box className="access_box">
            <figure>
              <Image
                src={assest.wifiImg}
                alt="wifiImg"
                width={364}
                height={362}
              />
            </figure>
            <Typography variant="body1">Lan</Typography>
          </Box>
             <Box className="access_box">
            <figure>
              <Image
                src={assest.wifiImg1}
                alt="wifiImg1"
                width={364}
                height={362}
              />
            </figure>
            <Typography variant="body1">Wifi</Typography>
          </Box>
        </Stack>
      </Container>
    </AccessSecWrapper>
  );
};

export default AccessSec;
