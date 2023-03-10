import { createTheme } from "@mui/material";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "800"],
});

export const theme = createTheme({
  palette: {
    mode: "dark",
    // primary: {
    //   main: "#90caf9",
    //   light: "#e3f2fd",
    //   dark: "#42a5f5",
    //   contrastText: "rgba(0,0,0,0.87)",
    // },
    // secondary: {
    //   light: "#0066ff",
    //   main: "#0044ff",
    //   contrastText: "#ffcc00",
    // },

    grey: {
      100: "#FDFDFD",
      200: "#EEEEEE",
      300: "#DADBDC",
      400: "#B3B6BC",
      500: "#898D94",
      600: "#52565F",
      700: "#40454F",
      800: "#2D323E",
      900: "#1A212E",
      A100: "#F8FBFF",
      A200: "#EBF4FF",
    },
  },
  typography: {
    fontSize: 14,
    fontFamily: poppins.style.fontFamily,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    h1: {
      // ***
      fontSize: "clamp(1.6rem, 3vw, 2.5rem)",
      fontWeight: 700,
      lineHeight: 1.167,
    },
    h2: {
      // ***
      fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
      fontWeight: 300,
      lineHeight: 1.2,
    },
    h3: {
      fontSize: "3rem",
      fontWeight: 400,
      lineHeight: 1.167,
    },
    h4: { fontSize: "2.125rem", fontWeight: 400, lineHeight: 1.235 },
    h5: {
      fontSize: "1.5rem",
      fontWeight: 400,
      lineHeight: 1.334,
    },
    h6: {
      fontWeight: 500,
      fontSize: "1.25rem",
      lineHeight: 1.6,
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 400,
      lineHeight: 1.75,
    },
    subtitle2: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.57,
    },
    body1: {
      // ***
      fontSize: "clamp(1rem, 2.5vw, 1.1rem)",
      fontWeight: 400,
      lineHeight: 1.5,
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: 1.43,
    },

    caption: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: 1.66,
    },

    button: {
      fontWeight: 500,
      fontSize: "0.875rem",
      lineHeight: 1.75,
    },
  },
});
