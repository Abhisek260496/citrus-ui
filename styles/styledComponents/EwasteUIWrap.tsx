import { Box, styled } from "@mui/material";

export const EwasteUIWrap = styled(Box)`
  .EwasteUIHeader {
    padding: 40px 60px;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    width: 100%;
  }
  .bnrWrap {
    min-height: 100vh;
    position: relative;
    overflow: hidden;

    figure {
      margin: 0;
      width: 100%;
      height: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .bnrContentWrap {
      position: absolute;
      bottom: 80px;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      color: #fff;
      width: 100%;
      padding: 0 20px;

      .bnrHeader {
        max-width: 750px;
        margin: 0 auto;

        h1 {
          font-size: 40px;
          font-weight: 600;
          line-height: 1.4;
        }
      }
    }
  }

  .ewasteInfoSection {
    background: #fff;
    padding: 80px 0;

    h2 {
      color: #000;
      font-weight: 500;
      font-size: 40px;
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 100px;
    }

    .ewasteInfoText {
      color: #231f20;
      line-height: 1.6;
      font-size: 20px;
      text-align: center;
    }

    .ewasteInfoContent {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 40px;

      @media (max-width: 900px) {
        flex-direction: column;
        text-align: center;
      }
    }

    .ewasteInfoLeft {
      flex: 1;
      color: #fff;
      border-radius: 12px;
      position: relative;

      .ewasteInfoHeading {
        font-size: 32px;
        font-weight: 600;
        margin-bottom: 20px;
        position: absolute;
        top: 20px;
        left: 40px;
      }

      figure {
        margin: 0;
        img {
          width: 100%;
          max-width: 100%;
          height: auto;
        }
      }
    }

    .ewasteInfoRight {
      flex: 1;
      padding: 20px;
      background: #f1f2f2;

      .ewasteSubHeading {
        font-size: 20px;
        font-weight: 600;
        margin: 30px 0 15px;
      }

      .ewasteInfoText {
        margin-bottom: 15px;
        font-size: 16px;
        line-height: 1.6;
        color: #333;
      }
    }
  }

  .electronicWrap {
    background: #fff;
    padding: 80px 0;

    h2 {
      color: #000;
      font-weight: 500;
      font-size: 40px;
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 60px;
    }

    h3 {
      color: #020202;
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 15px;
      text-transform: capitalize;
    }

    p {
      color: #231f20;
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .MuiGrid-item {
      margin-bottom: 40px;
    }
  }

  .chlPartner {
    background: #000;
    padding: 20px 0 80px;

    h2 {
      color: #ffffff;
      font-weight: 500;
      font-size: 40px;
      text-align: center;
      text-transform: capitalize;
    }

    .partnerLogos {
      margin-top: 75px;
    }
  }

  .awarenessWrap {
    background: #fff;
    padding: 80px 20px;

    h2 {
      color: #000;
      font-weight: 500;
      font-size: 40px;
      text-align: center;
      text-transform: capitalize;
      margin-bottom: 40px;
    }

    h3 {
      color: #020202;
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 15px;
    }

    p {
      color: #231f20;
      font-size: 20px;
      line-height: 1.6;
      margin-bottom: 20px;
    }

    .introText {
      text-align: center;
    }
  }

  .dosDontsWrap {
    background: #AFBFAE;
    padding: 80px 60px;

    .sectionTitle {
      color: #000;
      font-weight: 500;
      font-size: 40px;
      text-align: center;
      margin-bottom: 40px;
    }

    .subHeading {
      color: #020202;
      font-size: 25px;
      font-weight: 600;
      margin-bottom: 20px;
    }

    .listWrap {
      list-style-type: disc;
      padding-left: 20px;

      li {
        color: #231f20;
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 15px;
            list-style-type: inherit;    
      }
    }
  }
`;
