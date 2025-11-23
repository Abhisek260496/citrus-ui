import { prodcutMediaUrl } from "@/api/endpoints";
import { IProduct } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";

const XtremeBannerStyled = styled(Box)(() => ({
  padding: "90px 0px 200px 0px",
  h1: {
    fontWeight: 700,
    fontSize: "110px",
    textTransform: "uppercase",
    color: "#FFFFFF",
    "& span": {
      fontSize: "68px"
    }
  },
  figure: {
    marginRight: "60px"
  }
}));
const XtremeStack = styled(Stack)(() => ({
  maxWidth: "1136px",
  margin: "0 auto"
}));

const XtremeBanner = ({ ...props }: IProduct) => {
  return (
    <XtremeBannerStyled
      sx={{
        backgroundImage: `url(${
          prodcutMediaUrl(props?.banner_background_img as string) ||
          assest?.xtreme_n_banner
        })`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container fixed>
        <XtremeStack direction="row" alignItems="center">
          <figure>
            <Image
              src={
                prodcutMediaUrl(props?.product_banner_content as string) ||
                assest?.xtreme_n
              }
              alt="xtreme_n"
              width={200}
              height={585}
            />
          </figure>
          <Box>
            <Typography variant="h1">
              {props?.product_banner_title_1}{" "}
              <Typography variant="caption">
                {props?.product_banner_title_2}
              </Typography>
              <br />
              <Typography variant="caption">
                {props?.product_banner_title_3}
              </Typography>
            </Typography>
            <Typography>{props?.product_banner_description}</Typography>
          </Box>
        </XtremeStack>
      </Container>
    </XtremeBannerStyled>
  );
};

export default XtremeBanner;
