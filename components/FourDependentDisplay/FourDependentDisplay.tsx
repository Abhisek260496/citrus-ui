import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const FourDependentDisplayStyled = styled(Box)`
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
    h2 {
      max-width: 533px;
    }
    p {
      position: absolute;
      bottom: 0;
      right: 0;
      max-width: 522px;
    }
  }
`;

const FourDependentDisplay = () => {
  return (
    <FourDependentDisplayStyled>
      <figure>
        <Image
          src={assest?.four_dependent_display_bg}
          alt="core_to_everything"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader mainTitle="independent displays" subTitle="four " />
            <Typography>
              With 2 × HDMIs, Display Port & Type C, run multiple applications
              side by side without performance drops or display limitations
              along with 4K Ultra HD stunning experience.
            </Typography>
          </Box>
        </Container>
      </Box>
    </FourDependentDisplayStyled>
  );
};

export default FourDependentDisplay;
