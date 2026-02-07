import { Box, styled } from "@mui/material";

export const CommonStyledSection = styled(Box)`
  background-color: #fff;
  p {
    color: #231f20;
    font-weight: 500;
  }
  .csr_img_block {
    position: relative;
    figure {
      height: 600px;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
  .color_block {
    position: absolute;
    left: 0;
    bottom: 35px;
    padding: 20px 40px;
    background-color: #a82480;

    @media (max-width: 1199px) {
      padding: 15px 30px;
    }
    @media (max-width: 899px) {
      padding: 15px 20px;
    }
    @media (max-width: 599px) {
      padding: 10px 15px;
    }
    p {
      font-weight: 700;
      font-size: 30px;
      letter-spacing: 0.00585938em;
      color: #ffffff;
      @media (max-width: 899px) {
        font-size: 25px;
      }
      @media (max-width: 599px) {
        font-size: 20px;
      }
    }
  }
  .list_block {
    /* padding-left: 70px; */
    color: #231f20;
    /* @media (max-width: 1199px) {
      padding-left: 50px;
    }
    @media (max-width: 899px) {
      padding-left: 30px;
    }
    @media (max-width: 599px) {
      padding-left: 20px;
    } */
    li {
      color: #231f20;
      display: flex;
      flex-wrap: wrap;
      span {
        display: inline;
        font-weight: 700;
        font-size: 25px;
        margin: 0 5px;
        @media (max-width: 899px) {
          font-size: 22px;
        }
        @media (max-width: 599px) {
          font-size: 18px;
        }
      }
      &:not(:last-of-type) {
        margin-bottom: 40px;
        @media (max-width: 899px) {
          margin-bottom: 30px;
        }
        @media (max-width: 599px) {
          margin-bottom: 20px;
        }
      }
    }
  }
  .gray_block {
    padding: 40px 70px;
    background-color: #e6e7e8;

    @media (max-width: 1199px) {
      padding: 30px 50px;
    }
    @media (max-width: 899px) {
      padding: 20px 40px;
    }
    @media (max-width: 599px) {
      padding: 15px 30px;
    }
    figure {
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
`;
