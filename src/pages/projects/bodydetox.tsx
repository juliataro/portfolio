import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import imgMain from "../../assets/images/bodydetox/bodydet_d.jpg";
import imgDetail1 from "../../assets/images/bodydetox/bodydetox2.jpg";
import imgDetail2 from "../../assets/images/bodydetox/bodydetox1.jpg"; // Replace with real fileimport imgDetail2 from "../assets/images/almarpuit/detail2.jpg"; // Replace with real file
// Replace with real fileimport imgDetail2 from "../assets/images/almarpuit/detail2.jpg"; // Replace with real file
import "./styles/index.css";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

const bodydetoxProject: React.FC = () => {
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
              image={imgDetail1}
              alt="BodyDetox website"
              sx={{
                borderRadius: "5px",
                maxHeight: 600,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Web application Bodydetox.ee
              </Typography>

              <Typography variant="body3" color="text.secondary" sx={{ mb: 2 }}>
                The application allows users to select treatments in advance
                based on their symptoms and conditions before visiting the
                clinic, and provides the option to send the selected treatments
                to their email.
              </Typography>

              {/* ➕ Additional Info Section */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Website:
                </Typography>
                <a
                  href="https://bodydetox.ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://bodydetox.ee
                </a>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Software Documentation(in estonian):
                </Typography>
                <a
                  href="https://bit.ly/3P2qtgu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://bit.ly/3P2qtgu
                </a>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Application Design:
                </Typography>

                <a
                  href="https://www.figma.com/design/QN2UYyg18MYUAjeoQcbtSE/Disainikavand?node-id=0-1&t=2tEjRlLI9VVxln9k-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://bit.ly/44wGPpD
                </a>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Technologies:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  React, NodeJS/Express, MySQL, GitHub, Hetzner Cloud Server,
                  UptimeRobot
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Support:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Yes
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  My duties in the project:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Project management and development. Planning, client
                  communication, system design and database schema modeling,
                  front-end & back-end development, testing and deployment,
                  project handover and training. <br />
                  The application was developed for the defense of Junior
                  full-stack developer diploma in Tartu Vocational College
                  entirely by me.
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

export default bodydetoxProject;
