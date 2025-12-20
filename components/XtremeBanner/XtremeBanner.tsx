import { prodcutMediaUrl } from "@/api/endpoints";
import { IProduct } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";

const XtremeBannerStyled = styled(Box)(() => ({
  padding: "90px 0px 200px 0px",

  "@media (max-width:1199px)": {
    padding: "70px 0px 150px 0px"
  },

  "@media (max-width:899px)": {
    padding: "50px 0px 100px 0px"
  },
  "@media (max-width:599px)": {
    padding: "30px 0px 50px 0px"
  },
  h1: {
    fontWeight: 700,
    fontSize: "110px",
    textTransform: "uppercase",
    color: "#FFFFFF",
    "& span": {
      fontSize: "68px"
    },

    "@media (max-width:1199px)": {
      fontSize: "90px",
      "& span": {
        fontSize: "58px"
      }
    },
    "@media (max-width:899px)": {
      fontSize: "70px",
      "& span": {
        fontSize: "48px"
      }
    },
    "@media (max-width:599px)": {
      fontSize: "40px",
      "& span": {
        fontSize: "38px"
      }
    }
  },
  figure: {
    marginRight: "60px",

    "@media (max-width:1199px)": {
      marginRight: "40px"
    },
    "@media (max-width:899px)": {
      marginRight: "0",
      height: "400px"
    },
    "@media (max-width:599px)": {
      height: "250px"
    },

    "& img": {
      "@media (max-width:899px)": {
        height: "100%"
      }
    }
  }
}));
const XtremeStack = styled(Stack)(() => ({
  maxWidth: "1136px",
  margin: "0 auto",

  "@media (max-width : 899px)": {
    flexDirection: "column",
    gap: "20px"
  }
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
