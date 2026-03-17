import { Typography, TypographyProps, styled } from "@mui/material";

const CustomHeadingStyle = styled(Typography)<{ isBgWhite?: boolean }>`
  text-transform: uppercase;
  position: relative;

  h2 {
    @media (max-width: 1199px) {
      font-size: 48px;
    }
    @media (max-width: 899px) {
      font-size: 38px;
    }
    @media (max-width: 599px) {
      font-size: 18px;
    }
  }
  span {
    font-weight: 400;
  }
  .degree_val_parent {
    font-weight: 700;
    position: relative;
    .degree_val {
      position: absolute;
      top: 6px;
      left: 109px;
      font-size: 33px;
      font-weight: 700;

      @media (max-width: 1199px) {
        top: -6px;
        left: 90px;
        font-size: 25px;
      }
      @media (max-width: 899px) {
        left: 48px;
        font-size: 18px;
      }
    }
  }
  .sub_break_title {
    font-weight: 700;
    display: inline-block;
    margin-left: 30px;
    @media (max-width: 899px) {
      margin-left: 20px;
    }
  }
`;

interface ICustomCommonHeader extends TypographyProps {
  mainTitle?: string;
  subTitle?: string;
  degree_val?: string;
  sub_break_title?: string;
  isBgWhite?: boolean;
  isReversed?: boolean;
}
const CommonHeader = ({
  mainTitle,
  subTitle,
  degree_val,
  sub_break_title,
  isReversed,
  ...props
}: ICustomCommonHeader) => {
  return (
    <CustomHeadingStyle variant="h2" {...props}>
      {!isReversed ? (
        <>
          {subTitle && <Typography variant="caption">{subTitle}</Typography>}{" "}
          {mainTitle && degree_val ? (
            <Typography variant="caption" className="degree_val_parent">
              {mainTitle}
              <Typography variant="caption" className="degree_val">
                {degree_val}
              </Typography>
              <Typography variant="caption" className="sub_break_title">
                {sub_break_title}
              </Typography>
            </Typography>
          ) : (
            mainTitle || null
          )}
        </>
      ) : (
        <>
          {mainTitle && degree_val ? (
            <Typography variant="caption" className="degree_val_parent">
              {mainTitle}
              <Typography variant="caption" className="degree_val">
                {degree_val}
              </Typography>
              <Typography variant="caption" className="sub_break_title">
                {sub_break_title}
              </Typography>
            </Typography>
          ) : (
            mainTitle || null
          )}
          {subTitle && <Typography variant="caption">{subTitle}</Typography>}{" "}
        </>
      )}
    </CustomHeadingStyle>
  );
};

export default CommonHeader;
