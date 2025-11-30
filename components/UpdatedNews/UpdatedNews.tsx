/* eslint-disable import/order */
import { newsMediaUrl } from "@/api/endpoints";
import { getAllNews } from "@/api/functions/cms.api";
import {
  EachUpdatedElementStyled,
  UpdatedNewsStyled
} from "@/styles/styledComponents/UpdatedNewsStyled";
import CalenderIcon from "@/ui/Icons/CalenderIcon";
import Loader from "@/ui/Loader/Loder";
import { Box, BoxProps, Container, Typography } from "@mui/material";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { useQuery } from "react-query";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SliderButtons from "../../ui/Buttons/SliderButtons";
import CommonHeader from "../CommonHeader/CommonHeader";

interface UpadteElementProps extends BoxProps {
  image: string;
  title: string;
  publishDate: string;
  redirectUrl: string;
  news_link: string;
}
const EachUpdatedElement = ({
  publishDate,
  image,
  title,
  redirectUrl,
  news_link,
  ...props
}: UpadteElementProps) => {
  return (
    <EachUpdatedElementStyled {...props}>
      <figure>
        <Image
          src={newsMediaUrl(image)}
          alt="powerfull_image"
          width={900}
          height={500}
        />
      </figure>
      <Box className="updated_content">
        <Typography>
          <Typography variant="caption">
            <CalenderIcon />
          </Typography>
          {publishDate}
        </Typography>
        <Typography variant="h5">
          {/* <Link href={`/news-details/${redirectUrl}`}>{title}</Link> */}
          <Link href={`${redirectUrl}`} target="blank">
            {title}
          </Link>
        </Typography>
      </Box>
    </EachUpdatedElementStyled>
  );
};

const UpdatedNews = () => {
  const { data: news, isLoading: newsLoading } = useQuery({
    queryKey: ["getALlNews"],
    queryFn: () => getAllNews()
  });

  const sliderRef = useRef<Slider | null>(null);
  const sliderWrapperRef = useRef<HTMLDivElement | null>(null);

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000
  };

  console.log(news, "news");

  return (
    <UpdatedNewsStyled id="new_articles" className="cmn_gap">
      {newsLoading ? (
        <Loader />
      ) : (
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
              }}
              onClickPrev={() => {
                sliderRef.current?.slickPrev();
              }}
            />
          </Box>
          <Box className="global_slick" ref={sliderWrapperRef}>
            {!!news && news.length ? (
              <Slider ref={sliderRef} {...settings}>
                {news?.map((item, index) => (
                  <EachUpdatedElement
                    key={index}
                    image={item?.news_image}
                    title={item?.news_title}
                    publishDate={moment(item?.news_created_at).format(
                      "MMM DD, YYYY"
                    )}
                    redirectUrl={item?.news_link}
                  />
                ))}
              </Slider>
            ) : null}
          </Box>
        </Container>
      )}
    </UpdatedNewsStyled>
  );
};

export default UpdatedNews;
