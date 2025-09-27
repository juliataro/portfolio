// src/pages/PrintPage.tsx
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

// ✅ Use Vite's URL pattern to avoid TS2307 on image imports

import imgTvPlaySouvenirs from "../assets/images/tvplay/tv_play_souvenirs.jpg";
const imgTvPlay = new URL(
  "../assets/images/tvplay/tvplay_car.jpg",
  import.meta.url
).href;
const imgMPKinnisvara = new URL(
  "../assets/images/mpkinnisvara/mpkinnisvara.jpg",
  import.meta.url
).href;

const TV_PLAY_URL =
  "https://www.behance.net/gallery/87279113/TVPLAY-VIASAT-BALTICS-marketing-products?tracking_source=project_owner_other_projects";

const printProjects = [
  {
    name: "TV Play Bus Design",
    description: "Design as part of marketing campaign of TV Play, Estonia",
    link: "https://www.behance.net/gallery/87278983/VIASAT-BALTICS-BUS?tracking_source=project_owner_other_projects", // external
    image: imgTvPlay,
  },
  {
    name: "Other Print Design Projects",
    description:
      "Some print design projects over the different years with different clients",
    link: "https://www.behance.net/juliataro", // external
    image: imgMPKinnisvara,
  },
];

export default function PrintPage() {
  return (
    <>
      <header className="main-nav">
        <Navigation />
      </header>

      <section className="web-projects-section row-full">
        <div className="section-inner">
          <Typography
            variant="h3"
            component="h2"
            sx={{
              mt: { xs: 3, md: 5 },
              mb: { xs: 3, md: 5 },
              color: "#170c45",
              textAlign: "left",
            }}
          >
            Print & Design
          </Typography>

          {/* Hero image linking to TV Play source */}
          <Box
            component="a"
            href={TV_PLAY_URL}
            target="_blank"
            rel="noopener noreferrer"
            sx={{ display: "block", mb: 8 }}
            aria-label="Open TV Play Bus Design project on Behance"
          >
            {/* -------------- Main Image on the page --------------*/}
            <Box
              component="img"
              src={imgTvPlaySouvenirs}
              alt="TV Play Bus Design — campaign visuals"
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
                maxHeight: 700,
                objectFit: "cover",
                borderRadius: "8px",
                boxSizing: "border-box",
                mb: { sm: 0, lg: 2 },
              }}
            />
          </Box>

          {/* 2-per-row grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: { xs: 2, sm: 3, md: 4 },
            }}
          >
            {printProjects.map((p) => (
              <Card
                key={p.name}
                elevation={0}
                sx={{
                  borderRadius: 2,
                  overflow: "hidden",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow:
                      "0 6px 18px rgba(23,12,69,0.08), 0 2px 8px rgba(23,12,69,0.06)",
                  },
                }}
              >
                <CardActionArea
                  component="a"
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <CardMedia
                    component="img"
                    image={p.image}
                    alt={p.name}
                    loading="lazy"
                    sx={{
                      display: "block",
                      width: "100%",
                      height: "auto",
                      aspectRatio: "16 / 10",
                      objectFit: "cover",
                    }}
                  />
                  <CardContent sx={{ p: { xs: 2, sm: 2.5 } }}>
                    <Typography
                      component="h3"
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        color: "#170c45",
                        mb: 0.75,
                        lineHeight: 1.2,
                      }}
                    >
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {p.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
        </div>
      </section>

      <Footer />
    </>
  );
}
