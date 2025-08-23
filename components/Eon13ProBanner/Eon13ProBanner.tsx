/* eslint-disable import/order */
import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const Eon13ProBannerStyled = styled(Box)`
  padding: 90px 0px 200px 0px;
  .eon_slim_wrapper {
    text-align: center;
    p {
      max-width: 628px;
      margin: 0 auto;
    }
  }
`;

const Eon13ProBanner = () => {
  return (
    <Eon13ProBannerStyled
      sx={{
        backgroundImage: `url(${assest?.eon13_pro_bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container fixed>
        <Box className="eon_slim_wrapper">
          <figure>
            <Image
              src={assest?.eon13_pro_img}
              alt="eon_slim_banner"
              width={1100}
              height={500}
            />
          </figure>
          <Typography>
            An Ultra-Compact Micro PC with uninterrupted connectivity for
            uninterrupted data flow.
          </Typography>
        </Box>
      </Container>
    </Eon13ProBannerStyled>
  );
};

export default Eon13ProBanner;
