import assest from "@/json/assest";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const DualLanStyled = styled(Box)`
  position: relative;
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    height: calc(100% - 200px);
    .MuiContainer-root {
      height: 100%;
    }
    .core_content {
      position: relative;
      height: 100%;
    }
    .core_content_txt {
      max-width: 690px;
      h2 {
        max-width: 533px;
        margin-bottom: 15px;
      }
      p {
        max-width: 522px;
      }
    }
    .faster_hdr {
      position: absolute;
      bottom: 0;
      right: 0;
      font-size: 138px;
      span {
        font-size: 58px;
        font-weight: 600;
        text-transform: capitalize;
      }
    }
  }
`;

const DualLan = () => {
  return (
    <DualLanStyled>
      <figure>
        <Image
          src={assest?.dual_lan_bg}
          alt="dual_lan_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <Box className="core_content_txt">
              <CommonHeader mainTitle=" LAN" subTitle="Dual " />
              <Typography>
                Keep-up with the heavy workloads or real-time demands with dual
                2.5 Gbps LAN that deliver double the power to enjoy smoother
                streaming & quicker data transfers. Supports both internet &
                extranet
              </Typography>
            </Box>
            <Stack className="">
              <Image
                src={assest?.wifi_img}
                alt="wifi_img"
                width={452}
                height={230}
              />
              <Typography variant="h2" className="faster_hdr">
                2.5 <Typography variant="caption">x faster</Typography>
              </Typography>
            </Stack>
          </Box>
        </Container>
      </Box>
    </DualLanStyled>
  );
};

export default DualLan;
