/* eslint-disable import/order */
import {
  EachUpdatedElementStyled,
  UpdatedNewsStyled
} from "@/styles/styledComponents/UpdatedNewsStyled";
import CalenderIcon from "@/ui/Icons/CalenderIcon";
import { Box, BoxProps, Container, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { updatedDataList } from "../../json/dummy/index";
import SliderButtons from "../../ui/Buttons/SliderButtons";
import CommonHeader from "../CommonHeader/CommonHeader";

interface UpadteElementProps extends BoxProps {
  image: string;
  title: string;
  publishDate: string;
  redirectUrl: string;
}
const EachUpdatedElement = ({
  publishDate,
  image,
  title,
  redirectUrl,
  ...props
}: UpadteElementProps) => {
  // powerfull_image1
  return (
    <EachUpdatedElementStyled {...props}>
      <figure>
        <Image src={image} alt="powerfull_image" width={900} height={500} />
      </figure>
      <Box className="updated_content">
        <Typography>
          <Typography variant="caption">
            <CalenderIcon />
          </Typography>
          {publishDate}
        </Typography>
        <Typography variant="h5">
          <Link href={redirectUrl}>{title}</Link>
        </Typography>
      </Box>
    </EachUpdatedElementStyled>
  );
};

const UpdatedNews = () => {
  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
    // afterChange: () => updateSlideWidths()
  };
  return (
    <UpdatedNewsStyled className="cmn_gap">
      <Container fixed>
        <Box
          sx={{
            position: "relative"
          }}
        >
          <CommonHeader
            subTitle="Updated "
            mainTitle="news & articles"
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
        <Box className="global_slick" ref={sliderWrapperRef}>
          <Slider ref={sliderRef} {...settings}>
            {updatedDataList?.map((item, index) => (
              <EachUpdatedElement
                key={index}
                image={item?.image}
                title={item?.title}
                publishDate={item?.publishDate}
                redirectUrl={item?.redirectUrl}
              />
            ))}
          </Slider>
        </Box>
      </Container>
    </UpdatedNewsStyled>
  );
};

export default UpdatedNews;
