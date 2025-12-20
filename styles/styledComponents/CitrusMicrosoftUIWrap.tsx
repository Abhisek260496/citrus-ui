import { Box, styled } from "@mui/material";

export const CitrusMicrosoftUIWrap = styled(Box)`
  .headerStack {
    background: #fff;

    .headerLeft {
      padding: 47px 60px;
      .msLogoWrap {
        position: relative;
        padding-left: 40px;

        &::before {
          content: "";
          position: absolute;
          top: -20px;
          left: 0;
          width: 1px;
          height: 100px;
          background: #000;
        }
      }
      a {
        display: block;
      }
      img {
        display: inline-block;
      }
    }
    .msCitrusHeaderRgtFig {
      height: 200px;
      width: 575px;
    }
  }

  .msCitrusbnrBlk {
    figure {
      line-height: 0;
      height: 700px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .heroSec {
    background: #fff;
    padding: 50px 0;

    @media (max-width: 899px) {
      padding: 40px 0;
    }
    @media (max-width: 599px) {
      padding: 30px 0;
    }
    .heroDesc {
      color: #231f20;
      font-size: 20px;
      padding-bottom: 50px;
      line-height: 1.8;
      @media (max-width: 899px) {
        font-size: 18px;
        padding-bottom: 40px;
      }
      @media (max-width: 599px) {
        font-size: 16px;
        padding-bottom: 25px;
      }
    }
  }

  .heroGridWrap {
    .cmnSmallWindowImg {
      width: 290px;
      height: auto;
      object-fit: contain;
      margin: 30px 0;

      @media (max-width: 899px) {
        margin: 20px 0;
        width: 200px;
      }
      @media (max-width: 599px) {
        margin: 15px 0;
        width: 150px;
      }
    }

    .heroCard {
      figure {
        line-height: 0;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      p {
        color: #231f20;
        line-height: 1.8;
        font-size: 20px;
        @media (max-width: 899px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 16px;
        }
      }
    }
  }
  .ftrStack {
    padding: 120px 0 70px;
    background: linear-gradient(90deg, #fde5cd 0%, #d9cefd 100%);

    @media (max-width: 1199px) {
      padding: 100px 0 50px;
      flex-direction: column;
    }
    @media (max-width: 899px) {
      padding: 70px 0 40px;
    }
    @media (max-width: 899px) {
      padding: 50px 0 30px;
    }

    .ftrInrStack {
      gap: 190px;
      @media (max-width: 1199px) {
        gap: 90px;
        flex-direction: column;
      }
      @media (max-width: 899px) {
        gap: 50px;
      }
      @media (max-width: 599px) {
        gap: 30px;
      }
      figure {
        width: 450px;
        line-height: 0;
        flex-shrink: 0;
        @media (max-width: 1199px) {
          width: 350px;
        }
        @media (max-width: 899px) {
          width: 250px;
        }
        @media (max-width: 599px) {
          width: 200px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }

      p {
        color: #231f20;
        font-size: 21px;
        font-weight: 400;

        @media (max-width: 899px) {
          font-size: 18px;
        }
        @media (max-width: 599px) {
          font-size: 16px;
        }
      }
    }
  }
`;
