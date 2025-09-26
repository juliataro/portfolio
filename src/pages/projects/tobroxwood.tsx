import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import imgMain from "../../assets/images/tobrox/tobrox-wood.png";
import "./styles/index.css";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

const TobroxwoodProject: React.FC = () => {
  return (
    <>
      <header className="main-nav">
        <Navigation />
      </header>
      <Box className="bcg-color">
        <Container maxWidth="md">
          <Card
            sx={{
              p: 2,
              boxShadow: 0,
              mt: "2rem",
              transition: "0.3s",
              borderRadius: "5px",
            }}
          >
            <CardMedia
              component="img"
              image={imgMain}
              alt="Almarpuit website"
              sx={{
                borderRadius: "5px",
                maxHeight: 600,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Tobroxwood.ee
              </Typography>

              <Typography variant="body3" color="text.secondary" sx={{ mb: 2 }}>
                The company is engaged in the production of sawn timber, wooden
                pallets, and wooden structures for transporting goods of various
                sizes and shapes.
              </Typography>

              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Website:
                </Typography>
                <a
                  href="https://tobroxwood.ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://tobroxwood.ee
                </a>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Technologies used:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  WordPress WooCommerce, Elementor PB, Custom CSS, UptimeRobot
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Support:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Yes. SEO optimization is in progress.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  My duties in the project:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Project management and development. This is turnkey website
                  that was made without sketch, as it was ordered to be done
                  ASAP. <br />
                  Astra theme had been chosen for need to use WooComerce in the
                  future.
                  <br />
                  Installed plugins to secure the login page, for backups, had
                  been installed UptimeRobot for real-time monitoring
                  performance and CAPTCHA and other useful plugins.
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default TobroxwoodProject;
