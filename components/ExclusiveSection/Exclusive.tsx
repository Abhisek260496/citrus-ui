/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import { ThreeSixtymediaUrl } from "@/api/endpoints";
import { get360Products } from "@/api/functions/cms.api";
import { Each360ProductResponse } from "@/interface/apiresp.interfaces";
import assest from "@/json/assest";
import { ExclusiveStyled } from "@/styles/styledComponents/ExclusiveStyled";
import SliderButtons from "@/ui/Buttons/SliderButtons";
import Loader from "@/ui/Loader/Loder";
import { Box, Container, Typography, styled } from "@mui/material";
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
    /* position: absolute;
    left: 50%;
    transform: translateX(-50%);
    z-index: 20;
    top: 100px; */
    margin-top: 20px;
  }
`;

interface IExclusiveRotaionComponentProps
  extends Partial<ReactImageTurntableProps> {
  sourceImages: Each360ProductResponse[];
  product_name: string;
}

const ExclusiveRotaionComponent = ({
  product_name,
  ...props
}: IExclusiveRotaionComponentProps) => {
  const [images, setImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [rotationDisabled, setRotationDisabled] = useState<boolean>(true);

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (rotationDisabled) return;

    if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
      setRotationDisabled(true);
    }
  };

  useEffect(() => {
    if (!props.sourceImages) return;

    const timeout = setTimeout(() => {
      const urls = props.sourceImages.map((item) =>
        ThreeSixtymediaUrl(item.side_image)
      );
      setImages(urls);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timeout);
  }, [props.sourceImages]);

  if (loading) return <Loader />;

  return (
    <TurnableBlock>
      <CommonHeader mainTitle={product_name} className="product_name" />
      {images?.length ? (
        <ReactImageTurntable
          images={images}
          autoRotate={{ disabled: rotationDisabled, interval: 200 }}
          onPointerDown={() => setRotationDisabled(true)}
          onPointerUp={() => setRotationDisabled(true)}
          onKeyDown={handleKeyDown}
          onKeyUp={() => setRotationDisabled(true)}
          {...props}
        />
      ) : (
        <Loader />
      )}
    </TurnableBlock>
  );
};

const Exclusive = () => {
  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

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
              onClickNext={() => {
                sliderRef.current?.slickNext();
              }}
              onClickPrev={() => {
                sliderRef.current?.slickPrev();
              }}
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
            {productsLoading ? (
              <Loader />
            ) : (
              <>
                {!!products && products?.length && (
                  <Slider ref={sliderRef} {...settings}>
                    {products?.map((item, index) => (
                      <Box key={index}>
                        <figure className="rotaion_image">
                          <ExclusiveRotaionComponent
                            sourceImages={item.images}
                            product_name={item?.product_name}
                          />
                        </figure>
                      </Box>
                    ))}
                  </Slider>
                )}
              </>
            )}
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
