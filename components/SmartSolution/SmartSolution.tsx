/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
/* eslint-disable unused-imports/no-unused-imports */
import { Box, BoxProps, Container, Typography } from "@mui/material";
import Image from "next/image";
import React, { useMemo, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { eachSmartElements } from "../../json/dummy/index";
import {
  EachSmartSolutionStyled,
  SmartSolutionStyled
} from "../../styles/styledComponents/SmartSolutionStyled";
import SliderButtons from "../../ui/Buttons/SliderButtons";
import CommonHeader from "../CommonHeader/CommonHeader";
import { useQuery } from "react-query";
import { getIndustrySliders } from "@/api/functions/cms.api";
import { ISliderResponse } from "@/interface/apiresp.interfaces";
import { mediaUrl } from "@/api/endpoints";

interface EachPowerFullElementProps extends BoxProps, ISliderResponse {}
const EachPowerFullElement = ({
  slider_description,
  slider_image,
  slider_title,
  ...props
}: EachPowerFullElementProps) => {
  // powerfull_image1
  return (
    <EachSmartSolutionStyled {...props}>
      <figure>
        <Image
          src={mediaUrl(`industry-slider/${slider_image}`)}
          alt="powerfull_image"
          width={900}
          height={500}
        />
      </figure>
      <Box className="powerfull_content">
        <Typography variant="h3">{slider_title}</Typography>
        <Box dangerouslySetInnerHTML={{ __html: slider_description }} />
      </Box>
    </EachSmartSolutionStyled>
  );
};

const SmartSolution = (): React.ReactElement => {
  const { data: industrySlidersData } = useQuery({
    queryKey: ["getIndustrySlidersDetails"],
    queryFn: getIndustrySliders
  });

  const activeSliders = useMemo(() => {
    if (industrySlidersData?.length) {
      return industrySlidersData?.filter((item) => item?.slider_is_active);
    }
  }, [industrySlidersData?.length]);

  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "150px",
    autoplay: false,
    autoplaySpeed: 2000
    // afterChange: () => updateSlideWidths()
  };

  return (
    <SmartSolutionStyled className="cmn_gap cmn_gap_top">
      {/* <Typography>Hello</Typography> */}
      <Container fixed>
        <Box
          sx={{
            position: "relative"
          }}
        >
          <CommonHeader
            subTitle="Smart solution "
            mainTitle="across industries"
            sx={{ mb: "54px" }}
          />

          <SliderButtons
            sx={{
              top: "50%",
              transform: "translateY(-50%)"
            }}
            onClickNext={() => {
              sliderRef.current?.slickNext();
              //   setTimeout(updateSlideWidths, 50);
            }}
            onClickPrev={() => {
              sliderRef.current?.slickPrev();
              //   setTimeout(updateSlideWidths, 50);
            }}
          />
        </Box>
      </Container>
      <Box className="global_slick" ref={sliderWrapperRef}>
        <Slider ref={sliderRef} {...settings}>
          {activeSliders?.map((item, index) => (
            <EachPowerFullElement key={index} {...item} />
          ))}
        </Slider>
      </Box>
    </SmartSolutionStyled>
  );
};

export default SmartSolution;
