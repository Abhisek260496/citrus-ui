/* eslint-disable import/order */
import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const EonSlimBannerStyled = styled(Box)`
  padding: 90px 0px 200px 0px;

  @media (max-width: 1499px) {
    padding: 70px 0px 150px 0px;
  }
  @media (max-width: 1199px) {
    padding: 50px 0px 100px 0px;
  }
  @media (max-width: 899px) {
    padding: 40px 0px 80px 0px;
  }
  @media (max-width: 599px) {
    padding: 30px 0px 50px 0px;
  }
  .eon_slim_wrapper {
    text-align: center;
    p {
      margin-top: 40px;
      @media (max-width: 599px) {
        margin-top: 0;
      }
    }
    h1 {
      text-transform: capitalize;
      font-size: 164px;
    }

    .productFig {
      @media (max-width: 1499px) {
        max-width: 900px;
        margin: 0 auto;
      }
      @media (max-width: 1199px) {
        max-width: 700px;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      /* margin-right: 20px; */
    }
  }
`;

interface IEonSlimProps extends BoxProps {
  bannerImage: string;
  bannerText?: string | null;
  productImage?: string;
}

const EonSlimBanner = ({
  bannerImage,
  bannerText,
  productImage,
  ...props
}: IEonSlimProps) => {
  return (
    <EonSlimBannerStyled
      {...props}
      sx={{
        backgroundImage: `url(${bannerImage})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container fixed>
        <Box className="eon_slim_wrapper">
          {/* <Stack
            direction="row"
            alignItems="flex-end"
            justifyContent="center"
            mb={4}
          >
            <Image
              src={assest?.eon_logo}
              alt="eon_logo"
              width={530}
              height={180}
            />
            <Typography variant="h1">{bannerTitle}</Typography>
          </Stack> */}
          <figure className="productFig">
            <Image
              src={productImage as string}
              alt="eon_slim_banner"
              width={1100}
              height={500}
            />
          </figure>
          <Typography>{bannerText}</Typography>
        </Box>
      </Container>
    </EonSlimBannerStyled>
  );
};

export default EonSlimBanner;
