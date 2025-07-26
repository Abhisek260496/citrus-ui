import { Box, BoxProps, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { eachPowerFullElements } from "../../json/dummy/index";
import {
  EachSmartSolutionStyled,
  SmartSolutionStyled
} from "../../styles/styledComponents/SmartSolutionStyled";
import SliderButtons from "../../ui/Buttons/SliderButtons";
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
    <EachSmartSolutionStyled {...props}>
      <figure>
        <Image src={image} alt="powerfull_image" width={900} height={500} />
      </figure>
      <Box className="powerfull_content">
        <Typography variant="h3">{title}</Typography>
        <Typography>{description}</Typography>
      </Box>
    </EachSmartSolutionStyled>
  );
};

const SmartSolution = (): React.ReactElement => {
  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
    // afterChange: () => updateSlideWidths()
  };

  return (
    <SmartSolutionStyled className="cmn_gap">
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
    </SmartSolutionStyled>
  );
};

export default SmartSolution;
