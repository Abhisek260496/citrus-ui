import palette from "@/themes/palette";
import { Box, styled } from "@mui/material";

export const ExclusiveStyled = styled(Box)`
  .exclusive_Section {
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    position: relative;
    /* .rotaion_image{
      width: 100%;
      height: 400px;
      img{
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    } */
    .water_mark {
      position: absolute;
      width: 100%;
      left: 50%;
      top: 81px;
      transform: translateX(-50%);
      font-family: "Poppins";
      font-style: normal;
      font-weight: 700;
      font-size: 280px;
      line-height: 1;
      leading-trim: both;
      text-edge: cap;
      text-align: center;
      letter-spacing: -0.02em;
      text-transform: uppercase;
      background: linear-gradient(
        180deg,
        #12132f 26.19%,
        rgba(1, 2, 20, 0.64) 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      text-fill-color: transparent;
      z-index: -1;

      @media (max-width: 1499px) {
        font-size: 240px;
      }
      @media (max-width: 1199px) {
        font-size: 200px;
      }
      @media (max-width: 899px) {
        font-size: 140px;
      }
      @media (max-width: 599px) {
        font-size: 80px;
      }
    }
    .rotate_img {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      bottom: 60px;

      @media (max-width: 599px) {
        bottom: 45px;
      }
    }
    .btm_title {
      font-family: "Karla";
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 1;
      text-align: center;
      color: ${palette.common.white};
      transform: translateY(-60px);
      background-color: transparent;
      &:hover {
        background-color: transparent;
        color: ${palette.text.primary};
      }
    }
  }

  .exclusiveSecSliderBtn {
    @media (max-width: 599px) {
      bottom: 25px;
    }
  }
`;
