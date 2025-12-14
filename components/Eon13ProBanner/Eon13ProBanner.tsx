/* eslint-disable init-declarations */
/* eslint-disable import/order */
import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";

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
  static_img: string;
}

const GIF_DURATION = 1500;

const Eon13ProBanner = ({
  banner_bg,
  product_img,
  description,
  static_img,
  ...props
}: IEon13ProBannerProps) => {
  const [showGif, setShowGif] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleScroll = () => {
      if (window.scrollY === 0) {
        setShowGif(true);

        clearTimeout(timer);
        timer = setTimeout(() => {
          setShowGif(false);
        }, GIF_DURATION);
      }
    };

    // run on initial load
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(product_img, showGif, static_img, "showGif");

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
            {showGif ? (
              <Image
                src={product_img}
                alt="product animation"
                width={1100}
                height={500}
                unoptimized
                priority
              />
            ) : (
              <Image
                src={static_img}
                alt="product static"
                width={1100}
                height={500}
                priority
              />
            )}
          </figure>

          <Typography>{description}</Typography>
        </Box>
      </Container>
    </Eon13ProBannerStyled>
  );
};

export default Eon13ProBanner;
