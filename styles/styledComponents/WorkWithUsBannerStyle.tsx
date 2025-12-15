import { Box, styled } from "@mui/material";

export const WorkWithUsBannerStyle = styled(Box)`
  position: relative;
  .workWithUsBnr {
    line-height: 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .bnrTextBox {
    position: absolute;
    bottom: 9%;
    left: 70px;
    h1 {
      font-weight: 700;
      font-size: 112px;
      color: #fff;
    }

    .subText {
      font-weight: 300;
      font-size: 43px;
      color: #fff;
    }
  }
`;

export const JobListSectionWrap = styled(Box)`
  padding: 100px 0;
  background: #fff;

  .jobListSection {
    .jobCard {
      &:not(:last-child) {
        margin-bottom: 100px;
      }

      .jobContent {
        .jobTitle {
          font-weight: 500;
          font-size: 24.3px;
          color: #2c2e35;
        }

        .jobDescription {
          font-weight: 300;
          font-size: 20px;
          color: #2c2e35;
          margin-bottom: 20px;
        }

        .jobMetaText {
          font-weight: 500;
          font-size: 20px;
          color: #2c2e35;
        }
      }

      .jobArrow {
        color: #2c2e35;
        padding: 0;
        transition: all 0.3s ease-in-out;

        &:hover {
          background: transparent;
          color: #ff6106;
        }
      }
    }
  }
`;
