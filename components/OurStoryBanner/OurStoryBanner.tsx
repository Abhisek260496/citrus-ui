/* eslint-disable import/order */
import assest from "@/json/assest";
import palette from "@/themes/palette";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import Image from "next/image";
import CountUp from "react-countup";

const OurStoryBannerWrapper = styled(Box)`
  position: relative;
  .banner_content_wrapper {
    padding: 75px 0;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 2;
    .story_content {
      margin-bottom: 85px;
      h1 {
        max-width: 1021px;
        line-height: 1.2;
        margin-bottom: 10px;
      }
      p {
        max-width: 815px;
      }
    }
  }
  .story_fig {
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
    }
  }
  .counter_part2,
  .counter_part1 {
    h2 {
      display: inline-flex;
      align-items: center;
      .sub_title {
        font-family: "poppins", sans-serif;
        font-weight: 400;
        font-size: 35px;
        text-transform: capitalize;
        display: inline-block;
        margin-left: 5px;
      }
    }
  }
  .counter_part1 {
    margin-bottom: 60px;
    h2 {
      margin-right: 45px;
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
    .extended_content_stack {
      flex-wrap: wrap;
      position: relative;
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
    }
    figure {
      width: 300px;
      height: 350px;
      transition: all 0.3s ease-in-out;
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
    }
    &:hover {
      .expanded_block {
        transform: translateX(0);
      }
      .collpsed_block {
        width: 30%;
      }
      figure {
        width: 224px;
      }
    }
  } 
`;

const OurStoryBanner = () => {
  return (
    <OurStoryBannerWrapper>
      <Box className="story_fig">
        <figure>
          <Image
            src={assest?.about_us_banner}
            alt="Our Story Banner"
            width={1630}
            height={950}
          />
        </figure>
      </Box>
      <Box className="banner_content_wrapper">
        <Container fixed>
          <Box className="story_content">
            <Typography variant="h1">
              The essence of two decades driven by passion & excellence
            </Typography>
            <Typography variant="body1">
              The journey so far was about pushing boundaries, embracing change
              and most importantly making things happen!
            </Typography>
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
                    Corporates
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
                    Years
                  </Typography>
                </Typography>
              )}
            </CountUp>

            <CountUp start={0} end={350} delay={0}>
              {({ countUpRef }) => (
                <Typography variant="h2">
                  <Typography variant="caption" ref={countUpRef} /> +
                  <Typography variant="caption" className="sub_title">
                    SME clients
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
                <Typography>
                  Our journey of innovation began in 2004 with a bold vision to
                  redene computing through eco-friendly, low-maintenance, and
                  energy-ecient computing devices. Anticipating a future where
                  IT infrastructures could be smarter and more sustainable, we
                  set out to develop solutions that would maximize eciency &
                  minimize power consumption
                </Typography>
              </Box>
              <figure>
                <Image
                  src={assest?.collpsed_img}
                  alt="Collpsed Image"
                  width={224}
                  height={416}
                />
              </figure>
              <Box className="expanded_block">
                <Typography>
                  Being one of the pioneers that introduced a paramount change
                  in the landscape of the IT industry in instituting Thin Client
                  technology into the Indian Market we were able to engineer
                  cutting-edge solutions that were always ahead of the
                  competition by sourcing all components from OEMs. With the
                  unwavering support of Intel and Microsoft every solution we
                  engineered was not only better but also a benchmark for
                  reliability and eciency in terms of Innovation.
                </Typography>

                <Typography>
                  Technology never stands still, and neither did we. Over the
                  years, our expertise has expanded to include Micro PCs, Small
                  Form Factor PCs (SFF), Rugged PCs and Industrial PCs catering
                  to the ever-changing demands of the IT landscape
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Container>
      </Box>
    </OurStoryBannerWrapper>
  );
};

export default OurStoryBanner;
