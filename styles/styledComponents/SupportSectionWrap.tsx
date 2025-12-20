import { Box, styled } from "@mui/material";

export const SupportSectionWrap = styled(Box)`
  background: #fff;


  @media (max-width: 1199px) {
  }

  .supportCard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    border-radius: 16px;
    @media (max-width: 899px) {
      gap: 20px;
      border-radius: 10px;
    }
    @media (max-width: 599px) {
      gap: 15px;
    }

    .supportIcon {
      border: 1px solid #1f1d1e;
      width: 212px;
      height: 150px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
      svg {
        @media (max-width: 1199px) {
          width: 85px;
          height: auto;
        }
        @media (max-width: 899px) {
          width: 65px;
        }
      }
    }

    .supportTitle {
      font-weight: 500;
      font-size: 29px;
      color: #1f1d1e;

      @media (max-width: 1199px) {
        font-size: 25px;
      }
      @media (max-width: 899px) {
        font-size: 22px;
      }
      @media (max-width: 599px) {
        font-size: 20px;
      }
    }
  }
`;
