import { TypographyOptions } from "@mui/material/styles/createTypography";
import palette from "./palette";

// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||========================== //
export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

interface responsiveFontSizesProps {
  sm: number;
  md: number;
  lg: number;
}

export function responsiveFontSizes({ sm, md, lg }: responsiveFontSizesProps) {
  return {
    "@media (min-width:320px)": {
      fontSize: `${sm}px`
    },
    "@media (min-width:900px)": {
      fontSize: `${md}px`
    },
    "@media (min-width:1200px)": {
      fontSize: `${lg}px`
    }
  };
}

const Typography = (fontFamily: string): TypographyOptions => ({
  htmlFontSize: 18,
  fontFamily,
  h1: {
    fontFamily: "Poppins",
    lineHeight: 1,
    fontWeight: 700,
    color: palette.common.white,
    ...responsiveFontSizes({ sm: 32, md: 46, lg: 58 })
  },
  h2: {
    fontFamily: "Poppins",
    lineHeight: 1,
    color: palette.common.white,
    fontWeight: 700,
    ...responsiveFontSizes({ sm: 32, md: 46, lg: 58 })
  },
  h3: {
    fontFamily: "Poppins",
    fontWeight: 700,
    color: palette.common.white,
    lineHeight: 1,
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 88 })
  },
  h4: {
    fontFamily: "Poppins",
    color: palette.common.white,
    lineHeight: 1.5,
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
  },
  h5: {
    fontFamily: "Poppins",
    color: palette.common.white,
    lineHeight: 1.5,
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontFamily: "Poppins",
    color: palette.common.white,
    fontWeight: 600,
    lineHeight: 1.5,
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: 26
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: 14
  },
  body1: {
    lineHeight: 1.5,
    fontSize: 18,
    fontFamily: "karla",
    fontWeight: 400,
    color: palette.common.white
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: 14,
    fontFamily: "karla",
    color: palette.common.white
  },
  caption: {
    lineHeight: "inherit",
    fontSize: "inherit",
    fontWeight: "inherit",
    fontFamily: "inherit",
    color: "inherit"
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: 12,
    textTransform: "uppercase"
  }
});

export default Typography;
