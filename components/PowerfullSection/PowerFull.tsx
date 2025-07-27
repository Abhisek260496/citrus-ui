import { eachPowerFullElements } from "@/json/dummy";
import {
  PowerFullElementStyled,
  PowerFullStyle
} from "@/styles/styledComponents/PowerFullStyle";
import SliderButtons from "@/ui/Buttons/SliderButtons";
import { Box, BoxProps, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import CommonHeader from "../CommonHeader/CommonHeader";

interface EachPowerFullElementProps extends BoxProps {
  image: string;
  title: string;
  description: string;
}
const EachPowerFullElement = ({
  description,
  image,
  title,
  ...props
}: EachPowerFullElementProps) => {
  // powerfull_image1
  return (
    <PowerFullElementStyled {...props}>
      <figure>
        <Image src={image} alt="powerfull_image" width={900} height={500} />
      </figure>
      <Box className="powerfull_content">
        <Typography variant="h3">{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </PowerFullElementStyled>
  );
};

const PowerFull = (): React.ReactElement => {
  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  //   const updateSlideWidths = () => {
  //     const wrapper = sliderWrapperRef.current;
  //     if (!wrapper) return;

  //     const slides = Array.from(wrapper.querySelectorAll(".slick-slide")).filter(
  //       (slide) => {
  //         const el = slide as HTMLElement;
  //         return (
  //           !el.classList.contains("slick-cloned") && el.offsetParent !== null
  //         );
  //       }
  //     ) as HTMLElement[];

  //     if (slides.length === 0) return;

  //     // Get the leftmost visible slide (first in viewport)
  //     const wrapperLeft = wrapper.getBoundingClientRect().left;
  //     let firstVisibleSlide: HTMLElement | null = null;

  //     slides.forEach((slide) => {
  //       const slideLeft = slide.getBoundingClientRect().left;
  //       if (slideLeft >= wrapperLeft && firstVisibleSlide === null) {
  //         firstVisibleSlide = slide;
  //       }
  //     });

  //     // Set widths
  //     slides.forEach((slide) => {
  //       if (slide === firstVisibleSlide) {
  //         slide.style.width = "80%";
  //       } else {
  //         slide.style.width = "20%";
  //       }
  //     });
  //   };
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    // afterChange: () => updateSlideWidths()
  };

  return (
    <PowerFullStyle className="cmn_gap">
      <Container fixed>
        <CommonHeader
          subTitle="powerful"
          mainTitle="performance PCS"
          sx={{ mb: "54px" }}
        />

        <Box className="global_slick" ref={sliderWrapperRef}>
          <SliderButtons
            onClickNext={() => {
              sliderRef.current?.slickNext();
              //   setTimeout(updateSlideWidths, 50);
            }}
            onClickPrev={() => {
              sliderRef.current?.slickPrev();
              //   setTimeout(updateSlideWidths, 50);
            }}
          />
          <Slider ref={sliderRef} {...settings}>
            {eachPowerFullElements?.map((item, index) => (
              <EachPowerFullElement
                key={index}
                image={item?.image}
                title={item?.title}
                description={item?.description}
              />
            ))}
          </Slider>
        </Box>
      </Container>
    </PowerFullStyle>
  );
};

export default PowerFull;
