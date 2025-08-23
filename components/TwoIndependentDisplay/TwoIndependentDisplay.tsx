import assest from "@/json/assest";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const TwoIndependentDisplayStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 100px;
    width: 100%;
    z-index: 1;
    .core_content {
      .cmn_header {
        max-width: 483px;
      }
      h2 {
        line-height: 1.3;
      }
      p {
        max-width: 333px;
        margin-left: auto;
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

const TwoIndependentDisplay = () => {
  return (
    <TwoIndependentDisplayStyled>
      <figure>
        <Image
          src={assest?.two_independent_displays_bg}
          alt="two_independent_displays_bg"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="core_content"
          >
            <Box>
              <CommonHeader
                mainTitle="Independent"
                subTitle="Two"
                className="cmn_header"
              />
              <Typography variant="h2" className="gradient_header">
                Displays
              </Typography>
            </Box>
            <Typography>
              The seamless transition between displays ensures a more efficient
              workflow without the hassle of constantly switching tabs or
              windows.
            </Typography>
          </Stack>
        </Container>
      </Box>
    </TwoIndependentDisplayStyled>
  );
};

export default TwoIndependentDisplay;
