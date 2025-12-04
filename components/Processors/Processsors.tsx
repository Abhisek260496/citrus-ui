/* eslint-disable import/order */
import assest from "@/json/assest";
import { Box, Container, styled } from "@mui/material";
import Image from "next/image";
import CommonHeader from "../CommonHeader/CommonHeader";

const ProcessorsStyled = styled(Box)`
  /* padding-top: 150px; */
  figure {
    height: 1200px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  position: relative;
  .processor_content {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    padding: 150px 0;
    text-align: center;
    .circuit_board_otr {
      position: relative;
      width: 100%;
      height: 900px;
    }
    .circuit_board_wrapper {
      position: absolute;
      width: 231px;
      height: 231px;
      padding: 0;
      transition: all 0.3s ease-in-out;
      &:nth-of-type(1) {
        left: 0;
        top: 100px;
        /* animation: leftCenterRight 3s linear infinite; */
      }
      &:nth-of-type(2) {
        right: 0;
        top: 100px;
        /* animation: RightCenterLeft 3s linear infinite; */
      }
      &:nth-of-type(3) {
        left: 0;
        bottom: 0;
        /* animation: leftCenterRight 3s linear infinite; */
      }
      &:nth-of-type(4) {
        right: 0;
        bottom: 0px;
        /* animation: RightCenterLeft 3s linear infinite; */
      }
      .circuit_board {
        width: 100%;
        height: 100%;
        object-fit: contain;
        transition: all 0.3s ease-in-out;
        &:hover {
          transform: scale(1.2);
        }
      }
      &:hover {
        animation-play-state: paused;
      }
    }
  }
  @keyframes leftCenterRight {
    0% {
      transform: translateX(-50px);
    }
    33.33% {
      transform: translateX(0);
    }
    66.66% {
      transform: translateX(50px);
    }
    100% {
      transform: translateX(-50px);
    }
  }

  @keyframes RightCenterLeft {
    0% {
      transform: translateX(50px);
    }
    33.33% {
      transform: translateX(0);
    }
    66.66% {
      transform: translateX(-50px);
    }
    100% {
      transform: translateX(50px);
    }
  }
`;

const Processsors = () => {
  return (
    <ProcessorsStyled>
      <Box className="processors_fig">
        <figure>
          <Image
            src={assest?.processors_img}
            alt="processors_img"
            width={1600}
            height={986}
          />
        </figure>
      </Box>
      <Box className="processor_content">
        <Container fixed>
          <CommonHeader mainTitle="processors" subTitle="our core" />
          <Box className="circuit_board_otr">
            <figure className="circuit_board_wrapper">
              <Image
                src={assest?.circuit_board1}
                alt="circuit board 1"
                width={231}
                height={231}
                className="circuit_board"
              />
            </figure>
            <figure className="circuit_board_wrapper">
              {" "}
              <Image
                src={assest?.circuit_board2}
                alt="circuit board 2"
                width={231}
                height={231}
                className="circuit_board"
              />
            </figure>

            <figure className="circuit_board_wrapper">
              {" "}
              <Image
                src={assest?.circuit_board3}
                alt="circuit board 3"
                width={231}
                height={231}
                className="circuit_board"
              />
            </figure>

            <figure className="circuit_board_wrapper">
              {" "}
              <Image
                src={assest?.circuit_board4}
                alt="circuit board 4"
                width={231}
                height={231}
                className="circuit_board"
              />
            </figure>
          </Box>
        </Container>
      </Box>
    </ProcessorsStyled>
  );
};

export default Processsors;
