// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#e0d5e2", // global background
    },
    text: {
      primary: "#170c45", // default text color
    },
  },
  typography: {
    fontFamily: '"Inter", "Cal Sans", sans-serif',
    body1: {
      color: "#170c45",
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    body2: {
      textAlign: "center",
      justifyContent: "center",
      lineHeight: "9px",
      fontFamily: '"Cal Sans", sans-serif',
      fontWeight: 500,
      fontSize: "13px",
    },
    body3: {
      backgroundColor: "#ffffff",
      color: "#170c45",
      fontFamily: '"Inter", sans-serif',
      fontSize: "14px",
    },

    h1: {
      fontSize: "5rem",
      fontWeight: 500,
      marginBottom: "2rem",
      letterSpacing: "-0.5px",
      lineHeight: "5rem",
      fontFamily: '"Cal Sans", sans-serif',
    },
    h2: {
      color: "#0a0f2c",
      fontFamily: '"Cal Sans", sans-serif',
    },
    h3: {
      textAlign: "center",
      fontFamily: '"Cal Sans", sans-serif',
      fontSize: "2.3rem",
    },
    h4: {
      textAlign: "left",
      fontFamily: '"Inter", sans-serif',
      fontWeight: "600",
      fontSize: "1.8rem",
    },
    h5: {
      textAlign: "left",
      fontFamily: '"Inter", sans-serif',
      fontWeight: "700",
      fontSize: "1.3rem",
    },
    h6: {
      fontFamily: '"Cal Sans", sans-serif',
      fontWeight: "600",
      fontSize: "1rem",
    },
  },
});
