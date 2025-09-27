/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import assest from "@/json/assest";
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

const AimSectionStyled = styled(Box)`
  position: relative;
  overflow: hidden;
  .fade-up {
    h2,
    p {
      color: inherit;
    }
  }
  &::after {
    content: "";
    position: absolute;
    width: 454px;
    height: 454px;
    right: -4%;
    top: -14%;
    background: rgba(0, 159, 227, 0.4);
    filter: blur(200px);
    z-index: 1;
    pointer-events: none;
  }
  &::before {
    content: "";
    position: absolute;
    width: 454px;
    height: 454px;
    right: -4%;
    bottom: -14%;
    background: rgba(0, 159, 227, 0.4);
    filter: blur(200px);
    z-index: 1;
    pointer-events: none;
  }
  figure {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .aim_content {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 100%;
    .aim_wrapper {
      width: 565px;
      margin-left: auto;
      p {
        margin-top: 25px;
      }
    }
  }
`;

const AimSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Text movement + opacity (scrubbed full range)
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: -100,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 50%",
          scrub: 1.5
        }
      }
    );
    gsap.fromTo(
      sectionRef.current.querySelectorAll(".fade-up"),
      { color: "#7ce3fe" },
      {
        color: "#ffffff",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 10%", // start when section enters at 70%
          end: "top 20%", // stretch animation over a longer distance
          scrub: 2 // smoother, slower blend
        }
      }
    );

    // Image fade-in (same as before)
    gsap.fromTo(
      sectionRef.current.querySelector(".transition_img"),
      {
        y: 300,
        opacity: 0,
        scale: 1.05
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  return (
    <AimSectionStyled ref={sectionRef}>
      <figure className="transition_img">
        <Image
          src={assest?.aim_banner}
          alt="aim_banner"
          width={1600}
          height={1000}
        />
      </figure>
      <Box className="aim_content">
        <Container fixed>
          <Box className="aim_wrapper">
            <Box className="fade-up">
              <CommonHeader mainTitle="AIM FOR" subTitle="WE" />
            </Box>

            <Box className="fade-up">
              <Typography>
                We strive to build upon our expertise to develop
                high-performance, eco-friendly computing solutions that not only
                drive innovation but also grow in harmony with nature. With an
                even greater zeal to push the boundaries of technology, we are
                committed to empowering businesses with enhanced efficiency,
                unwavering reliability, and a future-focused approach to
                sustainability.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </AimSectionStyled>
  );
};

export default AimSection;
