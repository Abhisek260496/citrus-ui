/* eslint-disable import/order */
import { Box, BoxProps, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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

    .productFig {
      position: relative;
      width: 1100px;
      height: 500px;
      margin: 0 auto;

      @media (max-width: 1499px) {
        max-width: 900px;
      }
      @media (max-width: 1199px) {
        max-width: 700px;
      }
    }
  }
`;

const FadeImage = styled("div")<{ visible: boolean }>(({ visible }) => ({
  position: "absolute",
  inset: 0,
  opacity: visible ? 1 : 0,
  transition: "opacity 600ms ease",
  pointerEvents: visible ? "auto" : "none"
}));
const GIF_DURATION = 3000;

interface IEonSlimProps extends BoxProps {
  bannerImage: string;
  bannerText?: string | null;
  productImage: string; // GIF
  static_img: string; // Static
}

const EonSlimBanner = ({
  bannerImage,
  bannerText,
  productImage,
  static_img,
  ...props
}: IEonSlimProps) => {
  const [showGif, setShowGif] = useState(true);
  const [gifKey, setGifKey] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const hasPlayedRef = useRef(false);

  const playGifOnce = () => {
    if (hasPlayedRef.current) return;

    hasPlayedRef.current = true;
    setGifKey((k) => k + 1); // 🔥 restart GIF
    setShowGif(true);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      setShowGif(false);
    }, GIF_DURATION);
  };

  useEffect(() => {
    // ▶️ initial play
    playGifOnce();

    const handleScroll = () => {
      if (window.scrollY === 0) {
        playGifOnce();
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
          <figure className="productFig">
            {/* GIF */}
            <FadeImage visible={showGif}>
              <Image
                key={gifKey}
                src={productImage}
                alt="eon slim animation"
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
                alt="eon slim static"
                style={{
                  width: "100%",
                  height: "500px",
                  objectFit: "contain"
                }}
              />
            </FadeImage>
          </figure>

          <Typography>{bannerText}</Typography>
        </Box>
      </Container>
    </EonSlimBannerStyled>
  );
};

export default EonSlimBanner;
