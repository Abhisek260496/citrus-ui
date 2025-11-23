import palette from "@/themes/palette";
import { Box, styled } from "@mui/material";

export const NewsDetailStyled = styled(Box)`
  figure {
    margin-bottom: 50px;
    img {
      width: 100%;
    }
  }
  .updated_content {
    position: relative;
    z-index: 2;
    p {
      &.date {
        display: flex;
        align-items: center;
      }
      margin-bottom: 13px;
      span {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin-right: 5px;
      }
    }
    h5 {
      color: ${palette.text.primary};
      margin-bottom: 20px;
    }
    .news_content {
      padding-bottom: 100px;
      p {
        &:not(:last-of-type) {
          margin-bottom: 15px;
        }
      }
    }
  }
`;
