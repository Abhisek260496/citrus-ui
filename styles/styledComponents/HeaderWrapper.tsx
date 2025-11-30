import palette from "@/themes/palette";
import { Box, styled } from "@mui/material";

export const HeaderWrap = styled(Box)`
  .fixedHeader {
    position: fixed !important;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1200;
    animation: slideDown 0.3s ease;
    background: #fff; /* important */
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
  }

  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }

  .MuiToolbar-root {
    min-height: auto;
  }

  .headerContainer {
    background-color: #000717 !important;
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
      a,
      button {
        font-family: "karla";
        color: ${palette?.common?.white};
        padding: 0;
        font-size: 16px;
        font-weight: 500;
        position: relative;
        transition: color 0.3s ease;

        &:hover {
          color: ${palette?.text?.primary};
          background-color: transparent;
        }

        &.active {
          color: ${palette?.text?.primary};
          background-color: transparent;
        }
      }
    }
  }
`;
