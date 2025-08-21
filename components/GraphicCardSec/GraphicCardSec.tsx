import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const GraphicCardSecStyled = styled(Box)`
  position: relative;
  .graphic_card_wrapper {
    position: absolute;
    left: 0;
    top: 120px;
    width: 100%;
    z-index: 1;
    h2 {
      margin-bottom: 25px;
      max-width: 1077px;
      line-height: 1.2;
    }
    p {
      max-width: 335px;
    }
  }
  figure {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;

const GraphicCardSec = () => {
  return (
    <GraphicCardSecStyled>
      <figure>
        <Image
          src={assest?.graphic_card}
          alt="graphic_card"
          width={1920}
          height={900}
        />
      </figure>
      <Box className="graphic_card_wrapper">
        <Container fixed>
          <CommonHeader
            mainTitle=" Graphic/Capture card"
            subTitle="Streamlining creative power with dedicated"
          />
          <Typography>
            Edit, stream, and render with ease. Experience smooth visuals,
            faster processing and seamless content creation all in a compact
            form
          </Typography>
        </Container>
      </Box>
    </GraphicCardSecStyled>
  );
};

export default GraphicCardSec;
