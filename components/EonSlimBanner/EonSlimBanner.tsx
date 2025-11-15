/* eslint-disable import/order */
import assest from "@/json/assest";
import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";

const EonSlimBannerStyled = styled(Box)`
  padding: 90px 0px 200px 0px;
  .eon_slim_wrapper {
    text-align: center;
    p{
      margin-top:40px;
    }
  }
`;

interface IEonSlimProps extends BoxProps{
  bannerImage:string;
  bannerText:string
}

const EonSlimBanner = ({bannerImage,bannerText,...props}:IEonSlimProps) => {
  return (
    <EonSlimBannerStyled {...props}
      sx={{
        backgroundImage: `url(${assest?.eonSlimBannerBg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container fixed>
        <Box className="eon_slim_wrapper">
          <figure>
            <Image
              src={bannerImage}
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
