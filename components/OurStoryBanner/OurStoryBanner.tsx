/* eslint-disable import/order */
import { ourStoryMediaUrl } from "@/api/endpoints";
import palette from "@/themes/palette";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

const OurStoryBannerWrapper = styled(Box)`
  position: relative;
  @media (max-width: 599px) {
    padding: 45px 0;
  }
  .banner_content_wrapper {
    padding: 75px 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;

    @media (max-width: 899px) {
      padding: 55px 0;
    }
    @media (max-width: 599px) {
      position: relative;
      padding: 0;
    }
    .story_content {
      margin-bottom: 85px;

      @media (max-width: 1199px) {
        margin-bottom: 65px;
      }
      @media (max-width: 899px) {
        margin-bottom: 45px;
      }
      @media (max-width: 599px) {
        margin-bottom: 25px;
      }
      h1 {
        max-width: 1021px;
        line-height: 1.2;
        margin-bottom: 10px;

        @media (max-width: 599px) {
          font-size: 25px;
        }
      }
      p {
        max-width: 815px;
      }
    }
  }
  .story_fig {
    @media (max-width: 599px) {
      position: absolute;
      height: 100%;
      top: 0;
      left: 0;
      width: 100%;
    }
    figure {
      margin: 0;
      width: 100%;
      height: 950px;
      overflow: hidden;
      position: relative;
      line-height: 0;
      font-size: 0;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background-color: #000;
        opacity: 0.7;
        position: absolute;
        left: 0;
        top: 0;
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      @media (max-width: 599px) {
        height: 100%;
      }
    }
  }
  .counter_part2,
  .counter_part1 {
    h2 {
      display: inline-flex;
      align-items: center;
      @media (max-width: 599px) {
        font-size: 25px;
      }
      .sub_title {
        font-family: "poppins", sans-serif;
        font-weight: 400;
        font-size: 35px;
        text-transform: capitalize;
        display: inline-block;
        margin-left: 5px;
        @media (max-width: 599px) {
          font-size: 25px;
        }
      }
    }
  }
  .counter_part1 {
    margin-bottom: 60px;
    @media (max-width: 1199px) {
      margin-bottom: 45px;
    }

    @media (max-width: 899px) {
      justify-content: flex-start;
      margin-bottom: 25px;
    }
    @media (max-width: 599px) {
      margin-bottom: 15px;
    }
    h2 {
      margin-right: 45px;
      @media (max-width: 599px) {
        margin-right: 0;
      }
    }
  }

  .counter_part2 {
    @media (max-width: 599px) {
      flex-direction: column;
      gap: 15px;
      align-items: flex-start;
    }
  }

  .extended_sec {
    transform: translateY(120px);
    margin-top: 60px;
    background-color: ${palette?.common?.white};
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    @media (max-width: 1199px) {
      transform: translateY(40px);
    }
    @media (max-width: 899px) {
      margin-top: 30px;
    }
    @media (max-width: 599px) {
      transform: translateY(0px);
    }
    .extended_content_stack {
      flex-wrap: wrap;
      position: relative;
      @media (max-width: 1199px) {
        flex-direction: column;
        padding: 30px;
        gap: 15px;
      }
    }
    p {
      color: ${palette?.common?.black};
      &:not(:last-child) {
        margin-bottom: 20px;
      }
    }
    .collpsed_block {
      /* width: 30%; */
      width: calc(100% - 300px);
      padding: 50px;
      transition: all 0.3s ease-in-out;
      @media (max-width: 1199px) {
        width: 100%;
        padding: 0;
        order: 1;
      }
    }
    figure {
      width: 300px;
      height: 350px;
      transition: all 0.3s ease-in-out;
      line-height: 0;
      @media (max-width: 1199px) {
        max-width: 500px;
        height: 350px;
        width: 100%;
        order: 3;
        border-radius: 15px;
        overflow: hidden;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .expanded_block {
      width: calc(100% - (30% + 224px));
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      padding: 50px;
      transform: translateX(100%);
      transition: all 0.3s ease-in-out;
      @media (max-width: 1199px) {
        width: 100%;
        padding: 0;
        transform: translateX(0);
        position: relative;
        order: 2;
      }
    }
    &:hover {
      .expanded_block {
        transform: translateX(0);
      }
      .collpsed_block {
        width: 30%;
        @media (max-width: 1199px) {
          width: 100%;
        }
      }
      figure {
        width: 224px;
        @media (max-width: 1199px) {
          width: 100%;
        }
      }
    }
  }
`;
interface IOurStoryBannerProps {
  title?: string;
  banner_title?: string;
  banner_content?: string;
  banner_bg_img?: string | null;
  banner_sub_elmts_one?: string;
  banner_sub_elmts_one_desc?: string;
  banner_sub_elmts_two?: string;
  banner_sub_elmts_two_desc?: string;
  banner_sub_elmts_three?: string;
  banner_sub_elmts_three_desc?: string;
  banner_sub_desc_one?: string;
  banner_sub_desc_two?: string;
  banner_sub_desc_three?: string;
  banner_sub_image?: string | null;
}

const OurStoryBanner = ({ ...props }: IOurStoryBannerProps) => {
  return (
    <OurStoryBannerWrapper>
      <Box className="story_fig">
        <figure>
          <Image
            src={ourStoryMediaUrl(String(props?.banner_bg_img))}
            alt="Our Story Banner"
            width={1630}
            height={950}
          />
        </figure>
      </Box>
      <Box className="banner_content_wrapper">
        <Container fixed>
          <Box className="story_content">
            <Typography variant="h1">{props?.banner_title}</Typography>
            <Typography variant="body1">{props?.banner_content}</Typography>
          </Box>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="flex-end"
            className="counter_part1"
          >
            <CountUp start={0} end={50} delay={0}>
              {({ countUpRef }) => (
                <Typography variant="h2">
                  <Typography variant="caption" ref={countUpRef} /> +
                  <Typography variant="caption" className="sub_title">
                    {props?.banner_sub_elmts_two_desc}
                  </Typography>
                </Typography>
              )}
            </CountUp>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            justifyContent="space-between"
            className="counter_part2"
          >
            <CountUp start={0} end={20} delay={0}>
              {({ countUpRef }) => (
                <Typography variant="h2">
                  <Typography variant="caption" ref={countUpRef} /> +
                  <Typography variant="caption" className="sub_title">
                    {props?.banner_sub_elmts_one_desc}
                  </Typography>
                </Typography>
              )}
            </CountUp>

            <CountUp start={0} end={350} delay={0}>
              {({ countUpRef }) => (
                <Typography variant="h2">
                  <Typography variant="caption" ref={countUpRef} /> +
                  <Typography variant="caption" className="sub_title">
                    {props?.banner_sub_elmts_three_desc}
                  </Typography>
                </Typography>
              )}
            </CountUp>
          </Stack>

          <Box className="extended_sec">
            <Stack
              direction="row"
              alignItems="center"
              className="extended_content_stack"
            >
              <Box className="collpsed_block">
                <Typography>{props?.banner_sub_desc_one}</Typography>
              </Box>
              <figure>
                <Image
                  src={ourStoryMediaUrl(String(props?.banner_sub_image))}
                  alt="Collpsed Image"
                  width={224}
                  height={416}
                />
              </figure>
              <Box className="expanded_block">
                <Typography>{props?.banner_sub_desc_two}</Typography>

                <Typography>{props?.banner_sub_desc_three}</Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </OurStoryBannerWrapper>
  );
};

export default OurStoryBanner;
