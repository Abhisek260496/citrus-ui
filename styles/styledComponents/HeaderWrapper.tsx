import palette from "@/themes/palette";
import { Box, styled } from "@mui/material";

export const HeaderWrap = styled(Box)`
  .MuiToolbar-root {
    min-height: auto;
  }

  .headerContainer {
    background-color: transparent !important;
    padding: 16px 0;
    transition: all 0.4s;
  }

  .headerLogo {
    width: 160px;
    display: inline-block;
    transition: all 0.4s;
    img {
      width: 100%;
    }
  }
  .navbar {
    margin-left: auto;
    margin-right: 40px;
    display: flex;
    align-items: center;
    li {
      margin-right: 30px;
      width: auto;
      color: ${palette?.common?.black};
      &:last-child {
        margin-right: 0;
      }
      &:first-child {
        margin-left: 0;
      }
      a {
        color: ${palette?.common?.white};
        &:hover {
          color: ${palette?.text?.primary};
        }

        &.active {
          color: ${palette?.text?.primary};
        }
      }
    }
  }
`;
