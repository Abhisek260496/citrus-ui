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
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.15);
    z-index: 99;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerContainer {
    background-color: #00bfdf !important;
    padding: 16px 0;
    transition: all 0.4s;
    position: relative;
    &::after {
      content: "";
      width: 100%;
      height: 16px;
      background: #1c51a0;
      position: absolute;
      left: 0;
      bottom: -16px;
      z-index: 999;
    }
  }

  .headerLogo {
    width: 160px;
    display: inline-block;
    transition: all 0.4s;

    @media (max-width: 899px) {
      width: 130px;
    }
    @media (max-width: 599px) {
      width: 100px;
    }
    img {
      width: 100%;
    }
  }
  .navbar {
    margin-left: auto;
    margin-right: 40px;
    display: flex;
    align-items: center;

    @media (max-width: 1499px) {
      display: none;
    }

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

  .hdr_rgt {
    display: flex;
    align-items: center;

    .emilBtn {
      @media (max-width: 899px) {
        display: none;
      }
    }
    .menuBtn {
      margin-left: 20px;
      display: none;
      transition: all 0.3s ease-in-out;

      &:hover {
        color: #febd11;
      }

      @media (max-width: 1499px) {
        display: flex;
      }
    }
  }
`;

export const DrawerStyle = styled(Box)`
  height: 100%;
  background: #000717;
  padding: 15px;
  position: relative;
  .crossBtn {
    position: absolute;
    top: 10px;
    left: -15px;
    color: #febd11;
  }
  .drawerInnerContent {
    .listUtrWrap {
      margin-top: 20px;
      max-height: calc(100svh - 120px);
      height: 100%;
      overflow-y: auto;
      padding-right: 15px;
      margin-right: -15px;
    }
    .navList {
      li {
        &:not(:last-child) {
          margin-bottom: 15px;
        }
        a {
          color: #fff;
          transition: all 0.3s ease-in-out;
          font-size: 16px;
          &:hover {
            color: #febd11;
          }

          &.active {
            color: #febd11;
          }
        }
      }
      .MuiAccordion-root {
        width: 100%;
        background: transparent;

        .MuiAccordionSummary-root {
          padding: 0;
          min-height: auto;

          .MuiAccordionSummary-content {
            margin: 0;
          }
        }
        .MuiAccordionDetails-root {
          padding: 0;
          margin-top: 10px;

          .MuiButtonBase-root {
            padding: 0;
            justify-content: flex-start;
          }
        }
      }
    }
  }
  .emilBtn {
    margin-top: 20px;
    display: none;
    @media (max-width: 599px) {
      display: flex;
    }
  }
`;
