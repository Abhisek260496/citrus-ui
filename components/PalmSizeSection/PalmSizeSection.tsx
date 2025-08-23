import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const PalmSizeSectionStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 160px;
    width: 100%;
    z-index: 1;
    .core_content {
      max-width: 858px;
      text-align: center;
      margin: 0 auto;
      h2 {
        line-height: 1.3;
      }
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const PalmSizeSection = () => {
  return (
    <PalmSizeSectionStyled>
      <figure>
        <Image
          src={assest.palm_size_bg}
          alt="core_to_everything"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader
              subTitle="Device"
              mainTitle="Palm-Sized "
              isReversed
            />
            <Typography>
              Easy to carry and effortless to fit into tight setups, it’s the
              ideal solution for those who need performance without the bulk,
              whether on the move or at the desk.
            </Typography>
          </Box>
        </Container>
      </Box>
    </PalmSizeSectionStyled>
  );
};

export default PalmSizeSection;
