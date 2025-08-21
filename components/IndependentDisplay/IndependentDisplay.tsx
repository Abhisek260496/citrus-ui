import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const IndependentDisplayStyled = styled(Box)`
  position: relative;
  .independent_wrapper {
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    z-index: 1;
    text-align: center;
    h2 {
      margin-bottom: 25px;
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const IndependentDisplay = () => {
  return (
    <IndependentDisplayStyled>
      <figure>
        <Image
          src={assest?.independent_display}
          alt="independent_display"
          width={1920}
          height={900}
        />
      </figure>
      <Box className="independent_wrapper">
        <Container fixed>
          <CommonHeader mainTitle=" Independent Displays" subTitle="Three" />
          <Typography>
            With a Display Port, a VGA port & an HDMI, run multiple applications
            side by side without performance drop or display limitations.
          </Typography>
        </Container>
      </Box>
    </IndependentDisplayStyled>
  );
};

export default IndependentDisplay;
