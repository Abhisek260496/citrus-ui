/* eslint-disable import/order */
/* eslint-disable import/no-extraneous-dependencies */
import { Box, Container, Typography, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

import { ourStoryMediaUrl } from "@/api/endpoints";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

interface IAimSectionProps {
  block_three_title?: string;
  block_three_sub_title?: string;
  block_three_image?: string | null;
  block_three_image_alt_tag?: string | null;
  block_three_description?: string;
}

const AimSection = ({ ...props }: IAimSectionProps) => {
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
          start: "top 10%",
          end: "top 20%",
          scrub: 2
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
          src={ourStoryMediaUrl(String(props?.block_three_image))}
          alt="aim_banner"
          width={1600}
          height={1000}
        />
      </figure>
      <Box className="aim_content">
        <Container fixed>
          <Box className="aim_wrapper">
            <Box className="fade-up">
              <CommonHeader
                mainTitle={props?.block_three_sub_title}
                subTitle={props?.block_three_title}
              />
            </Box>

            <Box className="fade-up">
              <Typography>{props?.block_three_description}</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </AimSectionStyled>
  );
};

export default AimSection;
