import { createTheme } from "@mui/material/styles";
import palette from "./palette";
import shadows from "./shadows";
import Typography from "./typography";

const themeTypography = Typography(`'Poppins', sans-serif`);
const theme = createTheme({
  palette,
  shape: { borderRadius: 6 },
  typography: themeTypography,
  shadows: shadows()
  // components: {
  //   MuiContainer: {
  //     styleOverrides: {
  //       maxWidthLg: {
  //         maxWidth: 1280
  //       }
  //     }
  //   }
  // }
});

export default theme;
