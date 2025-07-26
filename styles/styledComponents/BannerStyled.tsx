import palette from "@/themes/palette";
import { Box, styled } from "@mui/material";

export const BannerStyled = styled(Box)`
  figure {
    line-height: 0;
    font-size: 0;
    img {
      width: 100%;
    }
  }
  .banner_btm_block {
    background-color: ${palette.background.neutral};
    padding: 30px 0;
    ul {
      display: flex;
      padding: 0;
      justify-content: space-between;
      li {
        width: auto;
        padding: 0;
        &:nth-last-of-type() {
          margin-right: 15px;
        }
        a {
          text-transform: capitalize;
          color: inherit;
          &:hover {
            color: ${palette?.text.primary};
          }
        }
      }
    }
  }
`;
