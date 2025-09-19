import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import Nav from "../components/navigation/Navigation";
import imgMain from "../assets/images/spavarska/spa_varska.jpg";
import imgDetail1 from "../assets/images/spavarska/spavarska_h.jpg"; // Replace with real file
import imgDetail2 from "../assets/images/spavarska/Varska_Spa_sookJPEG.jpg"; // Replace with real file
import "./styles/index.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

const AlmarpuitProject: React.FC = () => {
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
              mt: "5rem",
              transition: "0.3s",
              borderRadius: 3,
              "&:hover": {
                boxShadow: 6,
                transform: "translateY(-4px)",
              },
            }}
          >
            <CardMedia
              component="img"
              image={imgMain}
              alt="Spavarska website"
              sx={{
                borderRadius: 2,
                maxHeight: 400,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Spavarska.ee website
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Värska Spa is a unique spot in the Baltic countries, offering
                treatments that use local mineral mud and water. The website
                allows users to explore and book procedure and packages,
                includes a shop for purchasing mineral water. The site consists
                of over 130 pages and is made with WordPress.
              </Typography>

              {/* ➕ Additional Info Section */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Application Design:
                </Typography>

                <a
                  href="https://www.figma.com/design/jFsOYkK0bs0epevCR6h7tK/VarskaSpa?node-id=0-1&t=IKLp5TO7tFfoV4tz-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://bit.ly/4jHU2QZ
                </a>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Visit website:
                </Typography>
                <a
                  href="https://spavarska.ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://spavarska.ee
                </a>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  Technologies:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  WordPress / Astra WooCommerce, Elementor PB, Figma
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Support:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  2022 - 12.2024
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  My duties in the project:
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Developer. It was large project with redesign of existing
                  site, images editing and size/weight optimization, creation,
                  css customization.
                </Typography>
              </Box>

              {/* ➕ Extra Images  */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  marginTop: "2rem",
                }}
              >
                <CardMedia
                  component="img"
                  image={imgDetail1}
                  alt="Almarpuit system detail 1"
                  sx={{ borderRadius: 2 }}
                />
                <CardMedia
                  component="img"
                  image={imgDetail2}
                  alt="Almarpuit system detail 2"
                  sx={{ borderRadius: 2, marginTop: "2em" }}
                />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AlmarpuitProject;
