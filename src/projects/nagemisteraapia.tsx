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
import imgMain from "../assets/images/nagemisteraapia/nagemistr1.jpg";
//import imgDetail1 from "../assets/images/almarpuit/detail1.jpg"; // Replace with real file
//import imgDetail2 from "../assets/images/almarpuit/detail2.jpg"; // Replace with real file
import "./styles/index.css";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";

const NagemisteraapiaProject: React.FC = () => {
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
              alt="Nagemisteraapia website"
              sx={{
                borderRadius: 2,
                maxHeight: 600,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                Nagemisteraapia.ee redesign
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                Silmatark OÜ is an Estonian company specializing in vision
                therapy, helping children and adults improve eyesight and
                overcome issues such as double vision, eye strain, or reading
                difficulties. They operate clinics in Tartu and Tallinn and also
                provide optical products through their webshop.
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
                  href="https://nagemisteraapia.ee"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://nagemisteraapia.ee
                </a>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Application Design:
                </Typography>

                <a
                  href="https://bit.ly/4d68pMD"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                >
                  https://bit.ly/4d68pMD
                </a>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  Technologies:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  WordPress, Figma
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: "bold", marginTop: "1em" }}
                >
                  Support:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  No
                </Typography>

                <Typography variant="body1" sx={{ mt: 2, fontWeight: "bold" }}>
                  My duties in the project:
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  Project management: Analisys, planning, client communication,
                  project handover and training. Development: wireframes and
                  design, design implementation, plugins installation, sequrity,
                  testing and deployment, .
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

export default NagemisteraapiaProject;
