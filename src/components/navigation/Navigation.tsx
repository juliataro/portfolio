import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import WebIcon from "@mui/icons-material/Web";
import MenuIcon from "@mui/icons-material/Menu";

import React from "react";
import "./Nav.css";

export default function Navigation() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: "30px",
        color: "#170c45",
        fontFamily: "Inter, sans-serif",
        marginRight: "20px",
      }}
    >
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <WebIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          color="inherit"
          fontFamily={"inherit"}
          sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
        >
          Julia Taro / Web Development
        </Typography>
        <Box
          sx={{ display: { xs: "none", md: "flex" } }}
          fontFamily={"inherit"}
        >
          <div>
            <Button
              id="basic-button"
              className="menu-btn"
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onMouseOver={handleClick}
              color="inherit"
              disableRipple
              sx={{ mr: 3 }}
            >
              PROJECTS
            </Button>
            <Menu
              id="basic-menu"
              className="menu-btn"
              sx={{ ml: "8px" }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              slotProps={{
                list: {
                  "aria-labelledby": "basic-button",
                },
              }}
            >
              <MenuItem onClick={handleClose}>AlmarPuit</MenuItem>
              <MenuItem onClick={handleClose}>TobroxWood</MenuItem>
              <MenuItem onClick={handleClose}>Spavärska</MenuItem>
              <MenuItem onClick={handleClose}>BodyDetox</MenuItem>
              <MenuItem onClick={handleClose}>Peipsikaup</MenuItem>
              <MenuItem onClick={handleClose}>Nägemisteraapia</MenuItem>
            </Menu>
          </div>
          <Button
            disableRipple
            className="menu-btn"
            color="inherit"
            sx={{ mr: 3 }}
          >
            PROCESS
          </Button>
          <Button
            className="menu-btn"
            disableRipple
            color="inherit"
            sx={{ mr: 3 }}
          >
            <a
              href="https://www.behance.net/juliataro"
              target="_blank"
              rel="noopener noreferrer"
            >
              BEHANCE
            </a>
          </Button>
          <Button
            className="menu-btn"
            disableRipple
            disableFocusRipple
            color="inherit"
            sx={{ mr: 3 }}
          >
            ABOUT
          </Button>
        </Box>
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton>
            <MenuIcon />
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="logo"
              sx={{ display: { xs: "flex", md: "none", ml: "10px" } }}
            >
              <WebIcon />
            </IconButton>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
