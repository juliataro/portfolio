import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Bodydetox from "./pages/projects/bodydetox";
import Spavarska from "./pages/projects/spavarska";
import Tobroxwood from "./pages/projects/tobroxwood";
import Nagemisteraapia from "./pages/projects/nagemisteraapia";
import Almarpuit from "./pages/projects/almarpuit";
import Peipsikaup from "./pages/projects/peipsikaup";
import Process from "./pages/process"; // ✅ add this
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
import About from "./pages/about";
import Websites from "./pages/websites";
import Print from "./pages/print";

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
                <Route path="/about" element={<About />} />
                <Route path="/process" element={<Process />} />
                <Route path="/projects/websites" element={<Websites />} />
                <Route path="/projects/print" element={<Print />} />
                <Route
                  path="/projects/websites/almarpuit"
                  element={<Almarpuit />}
                />
                <Route
                  path="/projects/websites/tobroxwood"
                  element={<Tobroxwood />}
                />
                <Route
                  path="/projects/websites/spavarska"
                  element={<Spavarska />}
                />
                <Route
                  path="/projects/websites/bodydetox"
                  element={<Bodydetox />}
                />
                <Route
                  path="/projects/websites/peipsikaup"
                  element={<Peipsikaup />}
                />
                <Route
                  path="/projects/websites/nagemisteraapia"
                  element={<Nagemisteraapia />}
                />

                <Route path="/pages/cv" element={<CVProject />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </SmoothScroll>
          </BrowserRouter>
        </SCThemeProvider>
      </MuiThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);
