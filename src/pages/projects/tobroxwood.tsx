import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
  ListItem,
  List,
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
              <Typography variant="body3" color="text.secondary" sx={{ mb: 2 }}>
                This project was delivered as a turnkey website under a tight
                timeline, without a prior design phase. The focus was on fast
                implementation, stability, and future scalability. The website
                was built using the WordPress Astra theme, chosen for its
                flexibility and compatibility with WooCommerce, allowing future
                e-commerce expansion.
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
                  Yes. The basic SEO optimization is in the progress.
                </Typography>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Key implementation steps included:
                </Typography>
                <List
                  sx={{
                    listStyleType: "disc",
                    listStylePosition: "inside",
                  }}
                >
                  <ListItem sx={{ display: "list-item" }}>
                    Website structure setup and content integration
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Configuration of essential security plugins (login
                    protection, CAPTCHA)
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Backup system setup
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Performance and uptime monitoring via UptimeRobot
                  </ListItem>
                  <ListItem sx={{ display: "list-item" }}>
                    Basic optimization for reliability and maintainability
                  </ListItem>
                </List>
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
