import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const ResistSectionStyled = styled(Box)`
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
      display: flex;
      align-items: flex-end;
      justify-content: center;
    }
    .core_content_txt {
      max-width: 1111px;
      text-align: center;
      h2 {
        /* max-width: 533px; */
        margin-bottom: 15px;
      }
      p {
        /* max-width: 522px; */
      }
    }
  }
`;

const ResistSection = () => {
  return (
    <ResistSectionStyled>
      <figure>
        <Image
          src={assest?.handle_bg}
          alt="dual_lan_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <Box className="core_content_txt">
              <CommonHeader
                mainTitle="Handles Vibrations, Blocks Dust, Resists "
                subTitle="Damage"
                className="gradient_header"
                sx={{
                  fontSize: "68px !important"
                }}
                isReversed
              />
              <Typography>
                Keep-up with the heavy workloads or real-time demands with dual
                2.5 Gbps LAN that deliver double the power to enjoy smoother
                streaming & quicker data transfers. Supports both internet &
                extranet
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </ResistSectionStyled>
  );
};

export default ResistSection;
