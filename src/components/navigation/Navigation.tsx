// Navigation.tsx
import React, { useState, MouseEvent } from "react";
import {
  AppBar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Divider,
} from "@mui/material";

import WebIcon from "@mui/icons-material/Web";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import { Link as RouterLink } from "react-router-dom";
import "./Nav.css";
import logoSrc from "../../assets/logos/adverbum_logo.svg";

export default function Navigation() {
  // --- Projects hover menu (desktop) ---
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const openProjects = Boolean(anchorEl);
  const handleProjectsOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProjectsClose = () => setAnchorEl(null);

  // --- Mobile hamburger menu ---
  const [navOpen, setNavOpen] = useState(false);
  const handleNavOpen = (e: MouseEvent<HTMLElement>) => setNavOpen(true);
  const handleNavClose = () => setNavOpen(false);

  // Dimensions
  const APPBAR_HEIGHT = 64; // tweak if your mobile AppBar is 56
  const OFFSET_PX = 16; // = 1rem (adjust to taste)
  const MENU_TOP = APPBAR_HEIGHT + OFFSET_PX;

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        color: "#170c45",
        fontFamily: "Inter, sans-serif",
        // No margin/radius on mobile; keep your look on desktop
        borderRadius: { xs: "30px", md: "30px" },
        mr: { xs: 0, md: "20px" },
      }}
    >
      <Toolbar>
        <Box sx={{ display: "flex", p: 1, borderRadius: 1, width: "100%" }}>
          {/* Logo / Home */}
          <Box>
            <IconButton
              size="large"
              color="inherit"
              disableRipple
              aria-label="Home"
              component={RouterLink}
              to="/"
              sx={{
                p: 0.5,
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <Box
                component="img"
                src={logoSrc}
                alt="Adverbum logo"
                sx={{
                  display: "block",
                  width: 30, // tweak size as you like (e.g., 32)
                  height: 30,
                  pt: 0.5,
                  mr: 1,
                  mt: 0,
                  objectFit: "contain",
                }}
              />
            </IconButton>
          </Box>

          {/* Title */}
          <Box sx={{ flexGrow: 1, mt: 0 }}>
            <Typography variant="h6">Turnkey Websites</Typography>
          </Box>

          {/* Desktop menu */}
          <Box
            sx={{ display: { xs: "none", md: "flex" } }}
            fontFamily={"inherit"}
          >
            <div>
              <Button
                id="projects-button"
                className="menu-btn"
                aria-controls={openProjects ? "projects-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={openProjects ? "true" : undefined}
                onMouseOver={handleProjectsOpen}
                onFocus={handleProjectsOpen}
                onClick={handleProjectsOpen}
                color="inherit"
                disableRipple
                sx={{
                  mr: 3,
                  mt: 0.3,
                  "&:hover": { backgroundColor: "transparent" },
                }}
              >
                PROJECTS
              </Button>

              <Menu
                id="projects-menu"
                anchorEl={anchorEl}
                open={openProjects}
                onClose={handleProjectsClose}
                slotProps={{ list: { onMouseLeave: handleProjectsClose } }}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
              >
                <MenuItem
                  component={RouterLink}
                  to="/projects/websites"
                  onClick={handleProjectsClose}
                  sx={{ "&:hover": { color: "#170c45 !important" } }}
                >
                  Websites
                </MenuItem>
                <MenuItem
                  component={RouterLink}
                  to="/projects/print"
                  onClick={handleProjectsClose}
                  sx={{ "&:hover": { color: "#170c45 !important" } }}
                >
                  Print
                </MenuItem>
              </Menu>
            </div>

            <Button
              disableRipple
              className="menu-btn"
              color="inherit"
              component={RouterLink}
              to="/process"
              sx={{
                mr: 3,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#170c45 !important",
                },
              }}
            >
              PROCESS
            </Button>

            <Button
              className="menu-btn"
              disableRipple
              color="inherit"
              component="a"
              href="https://www.behance.net/juliataro"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mr: 3,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#170c45 !important",
                },
                "&, & *": {
                  textDecoration: "none !important",
                  color: "inherit !important",
                },
              }}
            >
              BEHANCE
            </Button>

            <Button
              className="menu-btn"
              color="inherit"
              disableRipple
              component={RouterLink}
              to="/about"
              sx={{
                mr: 3,
                "&:hover": {
                  backgroundColor: "transparent",
                  color: "#170c45 !important",
                },
              }}
            >
              ABOUT
            </Button>
          </Box>

          {/* Mobile hamburger */}
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              edge="end"
              color="inherit"
              disableRipple
              onClick={handleNavOpen}
              aria-controls={navOpen ? "mobile-nav-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={navOpen ? "true" : undefined}
              sx={{
                color: "#170c45",
                fontWeight: "600 !important",
                "&:hover": { backgroundColor: "transparent" },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* ------------------ Mobile View --------------------- */}
            <Menu
              id="mobile-nav-menu"
              // Use anchorPosition instead of anchorEl, so we can make it full-bleed
              anchorReference="anchorPosition"
              anchorPosition={{ top: MENU_TOP, left: 0 }}
              marginThreshold={0} // remove the default 16px viewport margin
              open={navOpen}
              onClose={handleNavClose}
              keepMounted
              disableScrollLock
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              slotProps={{
                paper: {
                  sx: {
                    // Full-bleed below the AppBar
                    width: "100vw",
                    maxWidth: "100vw",
                    height: `calc(100vh - ${MENU_TOP}px)`,
                    borderRadius: 0,
                    marginTop: "2rem",
                    boxShadow: "none",
                    backgroundColor: "#e7e7f1",
                    // Safe area insets for iOS notch
                    paddingLeft: "env(safe-area-inset-left)",
                    paddingRight: "env(safe-area-inset-right)",
                  },
                },
                list: {
                  sx: {
                    px: 2,
                    py: 2,
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    overflowY: "auto",
                  },
                },
              }}
            >
              {/* Projects group header */}
              <MenuItem sx={{ opacity: 1, fontWeight: 700, px: 3, py: 2 }}>
                PROJECTS
              </MenuItem>

              <MenuItem
                component={RouterLink}
                to="/projects/websites"
                onClick={handleNavClose}
                sx={{ px: 3, py: 1.5 }}
              >
                Websites
              </MenuItem>
              <MenuItem
                component={RouterLink}
                to="/projects/print"
                onClick={handleNavClose}
                sx={{ px: 3, py: 1.5 }}
              >
                Print
              </MenuItem>

              <Divider sx={{ my: 0.5 }} />

              <MenuItem
                component={RouterLink}
                to="/process"
                onClick={handleNavClose}
                sx={{ px: 3, py: 1.5 }}
              >
                Process
              </MenuItem>

              <MenuItem
                component="a"
                href="https://www.behance.net/juliataro"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleNavClose}
                sx={{ px: 3, py: 1.5 }}
              >
                Behance
              </MenuItem>

              <MenuItem
                component={RouterLink}
                to="/about"
                onClick={handleNavClose}
                sx={{ px: 3, py: 1.5 }}
              >
                About
              </MenuItem>
            </Menu>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
