import { Box, styled } from "@mui/material";

export const SupportSectionWrap = styled(Box)`
  background: #fff;
  padding: 100px 0;

  .supportCard {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 25px;
    border-radius: 16px;

    .supportIcon {
      border: 1px solid #1f1d1e;
      width: 212px;
      height: 150px;
      border-radius: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
    }

    .supportTitle {
      font-weight: 500;
      font-size: 29px;
      color: #1f1d1e;
    }
  }
`;
