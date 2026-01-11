/* eslint-disable import/order */
import { mediaUrl } from "@/api/endpoints";
import { getSliders } from "@/api/functions/cms.api";
import { ISliderResponse } from "@/interface/apiresp.interfaces";
import {
  PowerFullElementStyled,
  PowerFullStyle
} from "@/styles/styledComponents/PowerFullStyle";
import SliderButtons from "@/ui/Buttons/SliderButtons";
import { Box, BoxProps, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CommonHeader from "../CommonHeader/CommonHeader";

interface EachPowerFullElementProps extends BoxProps, ISliderResponse {}
const EachPowerFullElement = ({
  slider_description,
  slider_image,
  slider_title,
  ...props
}: EachPowerFullElementProps) => {
  return (
    <PowerFullElementStyled {...props}>
      <figure>
        <Image
          src={mediaUrl(`slider/${slider_image}`)}
          alt="powerfull_image"
          width={900}
          height={500}
        />
      </figure>
      <Box className="powerfull_content">
        <Typography variant="h3">{slider_title}</Typography>
        <Typography
          dangerouslySetInnerHTML={{
            __html: slider_description
          }}
        />
      </Box>
    </PowerFullElementStyled>
  );
};

const PowerFull = (): React.ReactElement => {
  const { data: slidersData } = useQuery({
    queryKey: ["getSliderDetails"],
    queryFn: getSliders
  });

  const activeSliders = useMemo(() => {
    if (slidersData?.length) {
      return slidersData?.filter((item) => item?.slider_is_active);
    }
  }, [slidersData?.length]);

  // console.log(activeSliders, "slidersData");

  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <PowerFullStyle className="cmn_gap">
      <Container fixed>
        <CommonHeader
          subTitle="powerful"
          mainTitle="performance PCS"
          sx={{
            mb: {
              xl: "54px",
              lg: "100px",
              xs: "100px"
            }
          }}
        />

        <Box className="global_slick" ref={sliderWrapperRef}>
          <SliderButtons
            onClickNext={() => {
              sliderRef.current?.slickNext();
            }}
            onClickPrev={() => {
              sliderRef.current?.slickPrev();
            }}
            className="powerfulSecSliderBtn"
          />
          <Slider ref={sliderRef} {...settings}>
            {activeSliders?.map((item, index) => (
              <EachPowerFullElement key={index} {...item} />
            ))}
          </Slider>
        </Box>
      </Container>
    </PowerFullStyle>
  );
};

export default PowerFull;
