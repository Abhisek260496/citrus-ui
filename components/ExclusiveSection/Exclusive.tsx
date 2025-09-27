/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/order */
import assest from "@/json/assest";
import { ExclusiveStyled } from "@/styles/styledComponents/ExclusiveStyled";
import { Box, Button, Container, Typography } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";
import { useRef, useState } from "react";
import { ReactImageTurntable } from "react-image-turntable";
import type { ReactImageTurntableProps } from "react-image-turntable";
import SliderButtons from "@/ui/Buttons/SliderButtons";
import Slider from "react-slick";

interface IRotationalElementsType {
  imagePath: string;
  folderPath: string;
}

interface IExclusiveRotaionComponentProps
  extends Partial<ReactImageTurntableProps> {
  imagePath: string;
  folderPath: string;
}

const ExclusiveRotaionComponent = (props: IExclusiveRotaionComponentProps) => {
  const [rotationDisabled, setRotationDisabled] = useState<boolean>(true);

  const handleKeyDown = (ev: React.KeyboardEvent<HTMLDivElement>) => {
    if (rotationDisabled) return;

    if (ev.key === "ArrowLeft" || ev.key === "ArrowRight") {
      setRotationDisabled(true);
    }
  };

  const eonProRotationImages = Array.from({ length: 120 }, (_, i) => {
    const num = i.toString().padStart(3, "0");
    return `/assets/images/${props?.folderPath}/${props?.imagePath}${num}.png`;
  });
  return (
    <ReactImageTurntable
      images={eonProRotationImages}
      autoRotate={{ disabled: rotationDisabled, interval: 200 }}
      onPointerDown={() => setRotationDisabled(true)}
      onPointerUp={() => setRotationDisabled(true)}
      onKeyDown={handleKeyDown}
      onKeyUp={() => setRotationDisabled(true)}
      {...props}
    />
  );
};

const rotationalElements: IRotationalElementsType[] = [
  {
    folderPath: "EON_ProX",
    imagePath: "EON_PROX"
  },
  {
    folderPath: "EON_ProX",
    imagePath: "EON_PROX"
  }
];

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
    autoplaySpeed: 2000,
    draggable: false, // disable mouse dragging
    swipe: false, // disable touch swipe
    touchMove: false
  };

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
                position:"absolute",
                left:"50%",
                bottom:"40px",
                transform:"translateX(-50%)",
                top:"auto",
                right:"auto",
                zIndex:9999
              }}
            />
            <Slider ref={sliderRef} {...settings}>
              {rotationalElements?.map((item, index: number) => (
                <Box>
                  <figure className="rotaion_image" key={index + 1}>
                    <ExclusiveRotaionComponent
                      folderPath={item?.folderPath}
                      imagePath={item?.imagePath}
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
          {/* <Button disableRipple className="btm_title">
            Click activate 360° view
          </Button> */}
        </Box>
      </Container>
    </ExclusiveStyled>
  );
};

export default Exclusive;
