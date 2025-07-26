import palette from "@/themes/palette";
import { Box, styled } from "@mui/material";

export const ExclusiveStyled = styled(Box)`
  .exclusive_Section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
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
    }
    .rotate_img {
      transform: translateY(-100px);
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
`;
