import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#2E5749", // brand navy
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#24453A", // teal
    },
    info: {
      main: "#24453A", // CTA accent
    },
    text: {
      primary: "#24453A",
    },
    background: {
      default: "#F1F1EF",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700, fontSize: "2rem" },
    h2: { fontWeight: 600, fontSize: "1.25rem" },
    body1: { fontSize: "1rem" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true, variant: "contained" },
      styleOverrides: {
        root: { borderRadius: 10 },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        "html, body, #root": {
          height: "100%",
        },
        body: {
          margin: 0,
          padding: 0,
          WebkitFontSmoothing: "antialiased",
          MozOsxFontSmoothing: "grayscale",
        },
        "*": {
          boxSizing: "border-box",
        },
      },
    },
  },
});

export default theme;
