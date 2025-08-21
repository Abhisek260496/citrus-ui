import { Typography, TypographyProps, styled } from "@mui/material";

const CustomHeadingStyle = styled(Typography)<{ isBgWhite?: boolean }>`
  text-transform: uppercase;
  position: relative;
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
    }
  }
  .sub_break_title {
    font-weight: 700;
    display: inline-block;
    margin-left: 30px;
  }
`;

interface ICustomCommonHeader extends TypographyProps {
  mainTitle?: string;
  subTitle?: string;
  degree_val?: string;
  sub_break_title?: string;
  isBgWhite?: boolean;
}
const CommonHeader = ({
  mainTitle,
  subTitle,
  degree_val,
  sub_break_title,
  ...props
}: ICustomCommonHeader) => {
  return (
    <CustomHeadingStyle variant="h2" {...props}>
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
    </CustomHeadingStyle>
  );
};

export default CommonHeader;
