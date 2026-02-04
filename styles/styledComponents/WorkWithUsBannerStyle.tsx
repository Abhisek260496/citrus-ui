import { Box, styled } from "@mui/material";

export const WorkWithUsBannerStyle = styled(Box)`
  position: relative;
  .workWithUsBnr {
    line-height: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .bnrTextBox {
    position: absolute;
    bottom: 9%;
    left: 70px;
    @media (max-width: 899px) {
      left: 25px;
    }
    h1 {
      font-weight: 700;
      font-size: 112px;
      color: #fff;

      @media (max-width: 1799px) {
        font-size: 100px;
      }
      @media (max-width: 1499px) {
        font-size: 80px;
      }
      @media (max-width: 1299px) {
        font-size: 60px;
      }
      @media (max-width: 1199px) {
        font-size: 45px;
      }
      @media (max-width: 899px) {
        font-size: 35px;
      }
      @media (max-width: 599px) {
        font-size: 30px;
      }
    }

    .subText {
      font-weight: 300;
      font-size: 43px;
      color: #fff;
      @media (max-width: 1499px) {
        font-size: 33px;
      }
      @media (max-width: 1299px) {
        font-size: 25px;
      }
      @media (max-width: 1199px) {
        font-size: 22px;
      }
      @media (max-width: 899px) {
        font-size: 18px;
      }
      @media (max-width: 599px) {
        font-size: 16px;
      }
    }
  }
`;

export const JobListSectionWrap = styled(Box)`
  background: #fff;
  .jobCard {
    cursor: pointer;
  }
  .jobListSection {
    .jobCard {
      display: flex;
      align-items: center;
      gap: 20px;
      &:not(:last-child) {
        margin-bottom: 100px;

        @media (max-width: 1199px) {
          margin-bottom: 80px;
        }
        @media (max-width: 899px) {
          margin-bottom: 60px;
        }
        @media (max-width: 599px) {
          margin-bottom: 40px;
        }
      }

      .jobIcon {
        svg {
          @media (max-width: 1199px) {
            width: 65px;
            height: auto;
          }
          @media (max-width: 899px) {
            width: 55px;
          }
          @media (max-width: 599px) {
            width: 35px;
          }
        }
      }

      .jobContent {
        .jobTitle {
          font-weight: 500;
          font-size: 24.3px;
          color: #2c2e35;
          @media (max-width: 1199px) {
            font-size: 22px;
          }
          @media (max-width: 899px) {
            font-size: 20px;
          }
          @media (max-width: 599px) {
            font-size: 18px;
          }
        }

        .jobDescription {
          font-weight: 300;
          font-size: 20px;
          color: #2c2e35;
          margin-bottom: 20px;
          @media (max-width: 899px) {
            font-size: 18px;
          }
          @media (max-width: 599px) {
            font-size: 16px;
          }
        }

        .jobMetaText {
          font-weight: 500;
          font-size: 20px;
          color: #2c2e35;
          @media (max-width: 899px) {
            font-size: 18px;
          }
          @media (max-width: 599px) {
            font-size: 16px;
          }
        }
      }

      .jobArrow {
        color: #2c2e35;
        padding: 0;
        transition: all 0.3s ease-in-out;

        svg {
          @media (max-width: 899px) {
            width: 10px;
          }
        }

        &:hover {
          background: transparent;
          color: #febd11;
        }
      }
    }
  }

  .jobDetailStack {
    @media (max-width: 599px) {
      flex-direction: column;
    }
  }
`;
