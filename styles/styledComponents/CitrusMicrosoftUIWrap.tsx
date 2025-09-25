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
    .heroDesc {
      color: #231f20;
      font-size: 20px;
      padding-bottom: 50px;
      line-height: 1.8;
    }
  }

  .heroGridWrap {
    .cmnSmallWindowImg {
      width: 290px;
      height: auto;
      object-fit: contain;
      margin: 30px 0;
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
      }
    }
  }
  .ftrStack {
    padding: 120px 0 70px;
    background: linear-gradient(90deg, #fde5cd 0%, #d9cefd 100%);

    .ftrInrStack {
      gap: 190px;
      figure {
        width: 450px;
        line-height: 0;
        flex-shrink: 0;
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
      }
    }
  }
`;
