import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import { useEffect, useRef, useState } from "react";

const Eon13ProBannerStyled = styled(Box)<{ bg: string }>(({ theme, bg }) => ({
  padding: "90px 0px 200px",
  backgroundImage: `url(${bg})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",

  [theme.breakpoints.down("lg")]: {
    padding: "70px 0px 150px"
  },
  [theme.breakpoints.down("md")]: {
    padding: "50px 0px 100px"
  },
  [theme.breakpoints.down("sm")]: {
    padding: "40px 0px 70px"
  },

  "& .eon_slim_wrapper": {
    textAlign: "center"
  }
}));

const ProductImageWrapper = styled("div")({
  position: "relative",
  width: "1100px",
  height: "570px",
  margin: "0 auto"
});

const FadeImage = styled("div")<{ visible?: boolean }>(({ visible }) => ({
  position: "absolute",
  left: "50%",
  top: "50%",
  width: "100%",
  transform: "translate(-50%,-50%)",

  "&.product_img": {
    zIndex: 2
  },

  "&.product_text_img": {
    zIndex: 1,
    top: visible ? "0" : "50%",
    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(-50%)" : "translate(-50%, -50%)",
    transition: "top 600ms ease, opacity 600ms ease, transform 600ms ease"
  },

  "&.product_description": {
    zIndex: 1,

    /* middle → bottom */
    top: visible ? "auto" : "50%",
    bottom: visible ? "0" : "auto",

    opacity: visible ? 1 : 0,
    transform: visible ? "translateX(-50%)" : "translate(-50%, -50%)",

    transition:
      "top 600ms ease, bottom 600ms ease, opacity 600ms ease, transform 600ms ease"
  }
}));

interface IEon13ProBannerProps extends BoxProps {
  banner_bg: string;
  product_img: string;
  product_title_img: string;
  description: string;
}

const GIF_DURATION = 1000;

const Eon13ProBanner = ({
  banner_bg,
  product_img,
  product_title_img,
  description,
  ...props
}: IEon13ProBannerProps) => {
  const [showGif, setShowGif] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const playGif = () => {
    setShowGif(false);
    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShowGif(true);
    }, GIF_DURATION);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    playGif();

    const handleScroll = () => {
      if (window.scrollY === 0) {
        playGif();
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(showGif, "showGif");

  return (
    <Eon13ProBannerStyled bg={banner_bg} {...props}>
      <Container fixed>
        <Box className="eon_slim_wrapper">
          <figure className="productBnrFig">
            <ProductImageWrapper>
              {/* GIF */}
              <FadeImage className="product_img">
                <img src={product_img} alt="product animation" />
              </FadeImage>
              <FadeImage visible={showGif} className="product_text_img">
                <img src={product_title_img} alt="product static" />
              </FadeImage>
              <FadeImage visible={showGif} className="product_description">
                <Typography variant="body1">{description}</Typography>
              </FadeImage>
            </ProductImageWrapper>
          </figure>
        </Box>
      </Container>
    </Eon13ProBannerStyled>
  );
};

export default Eon13ProBanner;
