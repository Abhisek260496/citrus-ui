import { Box, BoxProps, Container, styled } from "@mui/material";
import Image from "next/image";
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
    textAlign: "center",

    "& p": {
      maxWidth: 628,
      margin: "0 auto"
    }
  },

  "& .productBnrFig": {
    [theme.breakpoints.down("md")]: {
      maxWidth: 600,
      margin: "0 auto 20px"
    }
  }
}));

const ProductImageWrapper = styled("div")({
  position: "relative",
  width: "1100px",
  height: "500px",
  margin: "0 auto"
});

const FadeImage = styled("div")<{ visible: boolean }>(({ visible }) => ({
  position: "absolute",
  inset: 0,
  transition: "opacity 600ms ease",
  opacity: visible ? 1 : 0,
  pointerEvents: visible ? "auto" : "none"
}));

interface IEon13ProBannerProps extends BoxProps {
  banner_bg: string;
  product_img: string;
  static_img: string;
  description: string;
}

const GIF_DURATION = 30000;

const Eon13ProBanner = ({
  banner_bg,
  product_img,
  static_img,
  description,
  ...props
}: IEon13ProBannerProps) => {
  const [showGif, setShowGif] = useState(true);
  const [gifKey, setGifKey] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasPlayedRef = useRef(false);

  const playGif = () => {
    if (hasPlayedRef.current) return;

    hasPlayedRef.current = true;
    setGifKey((k) => k + 1);
    setShowGif(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShowGif(false);
    }, GIF_DURATION);
  };

  useEffect(() => {
    playGif();

    const handleScroll = () => {
      if (window.scrollY === 0) {
        playGif();
      } else {
        hasPlayedRef.current = false;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Eon13ProBannerStyled bg={banner_bg} {...props}>
      <Container fixed>
        <Box className="eon_slim_wrapper">
          <figure className="productBnrFig">
            <ProductImageWrapper>
              {/* GIF */}
              <FadeImage visible={showGif}>
                <Image
                  key={gifKey} // forces remount
                  src={product_img}
                  alt="product animation"
                  unoptimized
                  width={700}
                  height={500}
                  style={{ objectFit: "cover" }}
                  priority
                />
              </FadeImage>

              {/* Static */}
              <FadeImage visible={!showGif}>
                <img
                  src={static_img}
                  alt="product static"
                  style={{
                    width: "100%",
                    height: "500px",
                    objectFit: "contain"
                  }}
                />
              </FadeImage>
            </ProductImageWrapper>
          </figure>

          {/* <Typography>{description}</Typography> */}
        </Box>
      </Container>
    </Eon13ProBannerStyled>
  );
};

export default Eon13ProBanner;
