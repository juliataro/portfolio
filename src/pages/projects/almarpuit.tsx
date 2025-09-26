import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

import imgMain from "../../assets/images/almarpuit/almar-design.jpg";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/navigation/Navigation";

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
                Almar Puit – Administrational Info System for management and
                workers.
              </Typography>

              <Typography variant="body3" color="text.secondary" sx={{ mb: 2 }}>
                Custom information system for timber business workflows.
                Designed for internal use with clean layout and mobile
                optimization. In addition to standard administrative functions,
                the application includes a motivational feature — it allows an
                employee to enter data about completed work and see their
                progress through a growing monthly salary total. Application is
                under development.
              </Typography>

              {/* ➕ Additional Info Section */}
              <Box>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Software Documentation:
                </Typography>
                <a
                  href="https://bit.ly/4fzukMr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://bit.ly/4fzukMr
                </a>

                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Application Design:
                </Typography>

                <a
                  href="https://www.figma.com/proto/7r9WAcGyFEjHgjBXF6yOhP/Almar-Puit?node-id=44-644&t=BeBAlorwEJjSqZKi-1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://bit.ly/4jHU2QZ
                </a>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  Technologies planned to be used:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  AngularJS, SpringBoot, PostgreSQL, BitBucket
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  My duties in the project:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Planning, client communication, system design and database
                  schema modeling, front-end & back-end development, testing and
                  deployment, project handover and training.
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

export default AlmarpuitProject;
