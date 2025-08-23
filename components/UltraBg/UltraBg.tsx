import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const UltraBgStyled = styled(Box)`
  position: relative;
  .core_wrapper {
    position: absolute;
    left: 0;
    top: 160px;
    width: 100%;
    z-index: 1;
    .core_content {
      /* max-width: 858px; */
      text-align: center;
      margin: 0 auto;
      h2 {
        line-height: 1.3;
      }
      p {
        max-width: 988px;
        margin: 0 auto;
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

const UltraBg = () => {
  return (
    <UltraBgStyled>
      <figure>
        <Image
          src={assest.ultra_bg}
          alt="core_to_everything"
          width={1600}
          height={900}
        />
      </figure>
      <Box className="core_wrapper">
        <Container fixed>
          <Box className="core_content">
            <CommonHeader
              subTitle="Richer Visual Experience with"
              mainTitle=" 4K Ultra HD"
              //   isReversed
            />
            <Typography>
              Choose your experience with the EON Slim, where every detail comes
              to life in stunning 4K resolution at 60 fps much more in pixels as
              compared to usual 1920×1080 resolution.
            </Typography>
          </Box>
        </Container>
      </Box>
    </UltraBgStyled>
  );
};

export default UltraBg;
