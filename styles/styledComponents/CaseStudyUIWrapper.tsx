import assest from "@/json/assest";
import { Box, styled } from "@mui/material";

export const CaseStudyUIWrapper = styled(Box)`
  .caseStudyBnrImg {
    height: 1125px;
    /* height: 100%; */
    line-height: 0;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.35);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const DigitalSignageCompWrap = styled(Box)`
  .digitalSignageBlk {
    background: url(${assest.digitalSignBg}) center no-repeat;
    background-size: cover;
    width: 100%;
    padding: 120px 0 60px;

    &.successStory {
      background: url(${assest.successStoryBg}) center no-repeat !important;
      background-size: cover !important;
    }

    .secHeadWrap {
      margin-bottom: 60px;
    }

    .digitalSignageHeading {
      font-size: 30px;
      font-weight: 500;
      background: linear-gradient(
        90deg,
        #004f7a -4.41%,
        #00517c 0.79%,
        #006c93 4.37%,
        #008aac 9.57%,
        #009fbe 14.67%,
        #00aecb 20.41%,
        #00b7d3 26.48%,
        #00bcd7 33.64%,
        #00bbd6 44.92%,
        #00a9c1 50.99%,
        #00879a 59.66%,
        #005865 69.74%,
        #00292f 79.07%,
        #000101 86.66%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;

      margin-bottom: 10px;
      span {
        font-size: 22px;
        font-weight: 400;
      }
    }
    .digitalSignageDescription {
      font-size: 20px;
      font-weight: 400;
    }
    .objectiveResultWrapper {
      .objectiveTitle {
        font-size: 30px;
      }
      .objectiveDescription {
        margin-bottom: 20px;
        line-height: 1.5;
        font-size: 20px;
        margin-top: 15px;
      }
    }

    .resultList {
      list-style: disc;
      padding-left: 20px;
      margin-top: 15px;
      li {
        display: list-item;
        padding: 0;
        list-style: disc;
        font-size: 20px;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }

    .digitalRgtSecFig {
      overflow: hidden;
      border-radius: 30px;
      line-height: 0;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;

export const SmartClassroomWrap = styled(Box)`
  background: #fff;
  padding: 60px 0;

  .smartClassroomSection {
    .smartClassroomHeading {
      background: #0e131a;
      font-size: 30px;
      font-weight: 500;
      padding: 5px 15px 5px 5px;
      display: inline-block;
      margin-bottom: 10px;
      span {
        font-size: 22px;
        font-weight: 400;
        text-transform: capitalize;
      }
    }

    .smartClassroomDescription {
      color: #000;
      font-size: 20px;
    }

    .smartClassroomContent {
      margin-top: 60px;

      .smartClassroomFigure {
        overflow: hidden;
        border-radius: 30px;
        line-height: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .objectiveTitle {
        font-size: 30px;
        color: #000;
      }
      .objectiveDescription {
        color: #000;
        font-size: 20px;
        margin-top: 15px;
      }

      .resultTitle {
        font-size: 30px;
        color: #000;
        margin-top: 20px;
      }

      .resultList {
        list-style: disc;
        padding-left: 20px;
        margin-top: 15px;
        li {
          display: list-item;
          padding: 0;
          list-style: disc;
          font-size: 20px;
          color: #000;
          &:not(:last-child) {
            margin-bottom: 10px;
          }
        }
      }
    }
  }
`;
