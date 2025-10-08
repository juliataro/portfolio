import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import imgMain from "../../assets/images/drinkupp/drinkupp.png";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

const DrinkuppProject: React.FC = () => {
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
                DrinkUpp – Smart hydration assistant for daily water intake and
                healthy routines.
              </Typography>

              <Typography variant="body3" color="text.secondary" sx={{ mb: 2 }}>
                Designed for personal use with clean, intuitive interface and
                mobile optimization. In addition to standard tracking functions,
                the application includes motivational features — it allows a
                user to log each drink, track progress throughout the day, and
                receive encouraging feedback. The application is currently in
                the prototype development stage.
              </Typography>

              {/* ➕ Additional Info Section */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Landing Page:
                </Typography>

                <a
                  href="https://drinkupp.framer.website/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  DrinkUpp
                </a>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  Technologies planned to be used:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Kotlin (Android), Node.js, TensorFlow Lite / ML Kit for camera
                  sip detection, WorkManager & notifications, HealthKit / Google
                  Fit integration, Jetpack Compose, Figma, local database
                  (Room/SQLite), analytics (Google Analytics).
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  My duties in the project:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Defining the vision and concept of the app Designing UX/UI,
                  flows, and motivational features Deciding on features,
                  packages, and pricing strategy Planning prototype development
                  and testing Gathering user feedback and iterating the product
                  Coordinating with developers on technical implementation
                </Typography>
              </Box>

              {/* ➕ Extra Images 
              <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
                <CardMedia,
                  component="img"
                  image={imgDetail1}
                  alt="Almarpuit system detail 1"
                  sx={{ borderRadius: 2 }}
                />
                <CardMedia
                  component="img"
                  image={imgDetail2}
                  alt="Almarpuit system detail 2"
                  sx={{ borderRadius: 2 }}
                />
              </Box>
              */}
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default DrinkuppProject;
