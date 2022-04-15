import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      light: "#805dd0",
      main: "#4e329e",
      dark: "#15076f",
      contrastText: "#fff",
    },
    secondary: {
      light: "#e25f4b",
      main: "#aa2e22",
      dark: "#740000",
      contrastText: "#000",
    },
    action: {
      hoverOpacity: 0.3,
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
});
