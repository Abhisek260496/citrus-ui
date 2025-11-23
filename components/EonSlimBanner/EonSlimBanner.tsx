/* eslint-disable import/order */
import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const EonSlimBannerStyled = styled(Box)`
  padding: 90px 0px 200px 0px;
  .eon_slim_wrapper {
    text-align: center;
    p {
      margin-top: 40px;
    }
    h1 {
      text-transform: capitalize;
      font-size: 164px;
    }
    img {
      margin-right: 20px;
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
          <figure>
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
