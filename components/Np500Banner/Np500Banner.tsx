import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const Np500BannerStyled = styled(Box)`
  position: relative;
  .np500_banner_txt {
    position: absolute;
    right: 0;
    bottom: 100px;
    z-index: 1;
    width: 100%;
    .np500_content {
      max-width: 563px;
      margin-left: auto;
      h1 {
        margin-bottom: 17px;
        font-size: 100px;
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

const Np500Banner = () => {
  return (
    <Np500BannerStyled>
      <figure>
        <Image
          src={assest?.np500_banner}
          alt="np500_banner"
          width={1920}
          height={810}
        />
      </figure>
      <Box className="np500_banner_txt">
        <Container fixed>
          <Box className="np500_content">
            <Typography variant="h1">NEO NP500</Typography>
            <Typography>
              Building new standards of Creative Computing
            </Typography>
          </Box>
        </Container>
      </Box>
    </Np500BannerStyled>
  );
};

export default Np500Banner;
