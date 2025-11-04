import React from "react";
import { Box, Typography, Link } from "@mui/material";
import "./Footer.css";

const Footer: React.FC = () => {
  return (
    <Box component="footer" className="footer">
      <Box className="footer-row">
        <Typography variant="body1" className="footer-text">
          Contact:
          <Link
            href="mailto:info@adverbum.ee"
            className="footer-link"
            underline="hover"
          >
            info@adverbum.ee
          </Link>
        </Typography>

        <Typography variant="body1" className="footer-text">
          Phone:
          <Link
            href="tel:+372-538-10-300"
            className="footer-link"
            underline="hover"
          >
            +372 538 10 300
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
