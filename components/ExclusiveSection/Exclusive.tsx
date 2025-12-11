/* eslint-disable no-multi-assign */
/* eslint-disable no-plusplus */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
import { ThreeSixtymediaUrl } from "@/api/endpoints";
import { get360Products } from "@/api/functions/cms.api";
import { Each360ProductResponse } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import { ExclusiveStyled } from "@/styles/styledComponents/ExclusiveStyled";
import SliderButtons from "@/ui/Buttons/SliderButtons";
import {
  Box,
  CircularProgress,
  Container,
  Typography,
  styled
} from "@mui/material";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactImageTurntableProps } from "react-image-turntable";
import { ReactImageTurntable } from "react-image-turntable";
import { useQuery } from "react-query";
import Slider from "react-slick";
import CommonHeader from "../CommonHeader/CommonHeader";

const TurnableBlock = styled(Box)`
  position: relative;
  .product_name {
    margin-top: 20px;
  }
`;

/* -------------------------- GLOBAL PRELOADER -------------------------- */

const preloadAllImagesWithProgress = (
  urls: string[],
  onProgress: (percent: number) => void
) => {
  return new Promise<void>((resolve) => {
    let loaded = 0;

    urls.forEach((url) => {
      const img = new window.Image();
      img.src = url;

      img.onload = img.onerror = () => {
        loaded++;
        onProgress(Math.round((loaded / urls.length) * 100));

        if (loaded === urls.length) resolve();
      };
    });
  });
};

/* ---------------------- Rotation Component ---------------------- */

interface IExclusiveRotaionComponentProps
  extends Partial<ReactImageTurntableProps> {
  sourceImages: string[]; // already-preloaded URLs
  product_name: string;
}

const ExclusiveRotaionComponent = ({
  product_name,
  sourceImages,
  ...props
}: IExclusiveRotaionComponentProps) => {
  const [rotationDisabled, setRotationDisabled] = useState<boolean>(true);

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (rotationDisabled) return;
    if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
      setRotationDisabled(true);
    }
  };

  return (
    <TurnableBlock>
      <CommonHeader mainTitle={product_name} className="product_name" />

      {sourceImages?.length ? (
        <ReactImageTurntable
          images={sourceImages}
          autoRotate={{ disabled: rotationDisabled, interval: 200 }}
          onPointerDown={() => setRotationDisabled(true)}
          onPointerUp={() => setRotationDisabled(true)}
          onKeyDown={handleKeyDown}
          onKeyUp={() => setRotationDisabled(true)}
          {...props}
        />
      ) : (
        <CircularProgress />
      )}
    </TurnableBlock>
  );
};

/* -------------------------- MAIN PAGE -------------------------- */

const Exclusive = () => {
  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [preloadedProducts, setPreloadedProducts] = useState<
    { name: string; images: string[] }[]
  >([]);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    draggable: false,
    swipe: false,
    touchMove: false
  };

  const { data: products, isLoading: productsLoading } = useQuery({
    queryKey: ["getAll360PRoducts"],
    queryFn: () => get360Products()
  });

  /* ------------------ PRELOAD ALL IMAGES BEFORE SLIDER ------------------ */

  useEffect(() => {
    if (!products || products.length === 0) return;

    const allUrls: string[] = [];
    const formatted: { name: string; images: string[] }[] = [];

    products.forEach((p) => {
      const urls = p.images.map((img: Each360ProductResponse) =>
        ThreeSixtymediaUrl(img.side_image)
      );
      formatted.push({ name: p.product_name, images: urls });
      allUrls.push(...urls);
    });

    preloadAllImagesWithProgress(allUrls, (p) => setProgress(p)).then(() => {
      setPreloadedProducts(formatted);
      setAllImagesLoaded(true);
    });
  }, [products]);

  /* ------------------ SHOW GLOBAL LOADER UNTIL DONE ------------------ */

  if (productsLoading || !allImagesLoaded) {
    return (
      <Box sx={{ padding: "100px 0" }}>
        <Container fixed>
          <CommonHeader
            mainTitle="360"
            subTitle="Exclusive"
            degree_val="0"
            sub_break_title="view"
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              height: "300px",
              gap: 3
            }}
          >
            {/* Circular Progress with Percentage */}
            <Box sx={{ position: "relative", display: "inline-flex" }}>
              <CircularProgress
                variant="determinate"
                value={progress}
                size={90}
                thickness={4}
                sx={{
                  color: "#1976d2"
                }}
              />

              {/* Percentage Text */}
              <Box
                sx={{
                  top: 0,
                  left: 0,
                  bottom: 0,
                  right: 0,
                  position: "absolute",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ fontWeight: 600, color: "#1976d2" }}
                >
                  {`${progress}%`}
                </Typography>
              </Box>
            </Box>

            <Typography
              variant="h5"
              sx={{ textAlign: "center", color: "#444", mt: 1 }}
            >
              Loading your 360° experience…
            </Typography>
          </Box>
        </Container>
      </Box>
    );
  }

  /* --------------------------- MAIN RENDER --------------------------- */

  return (
    <ExclusiveStyled className="cmn_gap cmn_gap_top">
      <Container fixed>
        <CommonHeader
          mainTitle="360"
          subTitle="Exclusive"
          degree_val="0"
          sub_break_title="view"
        />

        <Box className="exclusive_Section">
          <Typography variant="h3" className="water_mark">
            360° view
          </Typography>

          <Box ref={sliderWrapperRef}>
            <SliderButtons
              onClickNext={() => sliderRef.current?.slickNext()}
              onClickPrev={() => sliderRef.current?.slickPrev()}
              sx={{
                position: "absolute",
                left: "50%",
                bottom: "40px",
                transform: "translateX(-50%)",
                top: "auto",
                right: "auto",
                zIndex: 9999
              }}
            />

            <Slider ref={sliderRef} {...settings}>
              {preloadedProducts.map((item, index) => (
                <Box key={index}>
                  <figure className="rotaion_image">
                    <ExclusiveRotaionComponent
                      sourceImages={item.images}
                      product_name={item.name}
                    />
                  </figure>
                </Box>
              ))}
            </Slider>
          </Box>

          <Image
            src={assest?.rotate_img}
            alt="rotate_img"
            width={970}
            height={110}
            className="rotate_img"
          />
        </Box>
      </Container>
    </ExclusiveStyled>
  );
};

export default Exclusive;
