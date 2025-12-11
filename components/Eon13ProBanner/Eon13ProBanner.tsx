/* eslint-disable import/order */
import assest from "@/json/assest";
import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
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

interface IEon13ProBannerProps extends BoxProps {
  banner_bg: string;
  product_img: string;
  description: string;
}

const Eon13ProBanner = ({
  banner_bg,
  product_img,
  description,
  ...props
}: IEon13ProBannerProps) => {
  return (
    <Eon13ProBannerStyled
      sx={{
        backgroundImage: `url(${banner_bg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      {...props}
    >
      <Container fixed>
        <Box className="eon_slim_wrapper">
          <figure>
            <Image
              src={assest?.eon_13pro_banner_bg}
              alt="eon_product_img"
              width={1100}
              height={500}
            />
          </figure>
          <Typography>{description}</Typography>
        </Box>
      </Container>
    </Eon13ProBannerStyled>
  );
};

export default Eon13ProBanner;
