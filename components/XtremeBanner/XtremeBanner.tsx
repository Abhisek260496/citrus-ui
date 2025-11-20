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

const XtremeBanner = () => {
  return (
    <XtremeBannerStyled
      sx={{
        backgroundImage: `url(${assest?.xtreme_n_banner})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
    >
      <Container fixed>
        <XtremeStack direction="row" alignItems="center">
          <figure>
            <Image
              src={assest?.xtreme_n}
              alt="xtreme_n"
              width={200}
              height={585}
            />
          </figure>
          <Box>
            <Typography variant="h1">
              Xtreme <Typography variant="caption">Thin Client</Typography>
              <br />
              <Typography variant="caption">N Series</Typography>
            </Typography>
            <Typography>
              Unleashing the X-factor of business computing
            </Typography>
          </Box>
        </XtremeStack>
      </Container>
    </XtremeBannerStyled>
  );
};

export default XtremeBanner;
