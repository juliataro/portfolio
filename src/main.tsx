import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Bodydetox from "./projects/bodydetox";
import Spavarska from "./projects/spavarska";
import Tobroxwood from "./projects/tobroxwood";
import Nagemisteraapia from "./projects/nagemisteraapia";
import Almarpuit from "./projects/almarpuit";
import Peipsikaup from "./projects/peipsikaup";
import CVProject from "./pages/cv";
import {
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";
import { ThemeProvider as SCThemeProvider } from "styled-components";
import { theme } from "./theme";

import SmoothScroll from "./SmoothScroll"; // 👈 import it
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <SCThemeProvider theme={theme}>
          <BrowserRouter>
            <SmoothScroll>
              {/* 👈 wrap your whole app */}
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route
                  path="http://localhost:5173/projects/bodydetox"
                  element={<Bodydetox />}
                />
                <Route path="/projects/spavarska" element={<Spavarska />} />
                <Route path="/projects/tobrox-wood" element={<Tobroxwood />} />
                <Route
                  path="/projects/nagemisteraapia"
                  element={<Nagemisteraapia />}
                />
                <Route path="/projects/almarpuit" element={<Almarpuit />} />
                <Route path="/projects/peipsikaup" element={<Peipsikaup />} />
                <Route path="/pages/cv" element={<CVProject />} />
                <Route path="/pages/about" element={<CVProject />} />
              </Routes>
            </SmoothScroll>
          </BrowserRouter>
        </SCThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
