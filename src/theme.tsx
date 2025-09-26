// src/theme/theme.ts
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    background: {
      default: "#ffffff",
    },

    text: {
      primary: "#170c45",
      // Set a proper secondary color used by list secondary text
      secondary: "rgba(23, 12, 69, 0.6)",
    },
  },
  typography: {
    fontFamily: '"Inter", "Cal Sans", sans-serif',
    body1: {
      color: "#170c45",
      fontFamily: '"Inter", sans-serif',
      lineHeight: 1.6,
    },
    // Make body2 sane for in-list captions; avoid centering globally
    body2: {
      color: "rgba(23, 12, 69, 0.6)", // usually same as palette.text.secondary
      fontFamily: '"Inter", sans-serif',
      fontSize: "0.875rem", // 14px
      lineHeight: 1.4,
    },
    body3: {
      color: "#170c45",
      fontFamily: '"Inter", sans-serif',
      fontSize: "15px",
    },

    h1: {
      fontSize: "1rem",
      fontWeight: 500,
      marginBottom: "2rem",
      letterSpacing: "-0.5px",
      lineHeight: "3rem",
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
      fontWeight: "100",
    },
    h4: {
      textAlign: "left",
      fontFamily: '"Inter", sans-serif',
      fontWeight: "300",
      fontSize: "1.8rem",
    },
    h5: {
      textAlign: "left",
      fontFamily: '"Inter", sans-serif',
      fontWeight: "600",
      fontSize: "1.3rem",
    },
    h6: {
      fontFamily: '"Inter", sans-serif',
      fontWeight: "500",
      fontSize: "1rem",
    },
  },
});
