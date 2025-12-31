import * as React from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Link from "@mui/material/Link";

// Reuse your images:
import img1 from "../assets/images/drinkupp/drinkupp.webp";
import img2 from "../assets/images/bodydetox/bodydetox2.jpg";
import img3 from "../assets/images/peipsikaup/peipsikaup.jpg";
import img4 from "../assets/images/spavarska/spa_varska.jpg";
import img5 from "../assets/images/nagemisteraapia/nagemistr1.jpg";
import img6 from "../assets/images/tobrox/tobrox-wood.png";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

const webProjects = [
  {
    name: "DrinkUpp",
    description: "Smart hydration assistant for daily water intake",
    link: "/projects/websites/drinkupp",
    image: img1,
  },
  {
    name: "Tobroxwood.ee",
    description: "Corporate website for timber product sales",
    link: "/projects/websites/tobroxwood",
    image: img6,
  },
  {
    name: "Spavarska.ee",
    description:
      "Estonian Spa center website providing detailed information about their services",
    link: "/projects/websites/spavarska",
    image: img4,
  },
  {
    name: "BodyDetox.ee",
    description:
      "Wellness platform helps users find personalized medical procedures based on their symptoms",
    link: "/projects/websites/bodydetox",
    image: img2,
  },
  {
    name: "Peipsikaup.ee",
    description: "E-commerce store for local handmade products.",
    link: "/projects/websites/peipsikaup",
    image: img3,
  },
  {
    name: "Nagemisteraapia.ee",
    description: "Eye therapy website with mobile-friendly UX design",
    link: "/projects/websites/nagemisteraapia",
    image: img5,
  },
];

export default function WebsitesPage() {
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
            Websites
          </Typography>

          <Box sx={{ mb: 10 }}>
            <Typography variant="body2" sx={{ mt: 2, fontWeight: "bold" }}>
              Current project:
            </Typography>
            <Typography sx={{ mt: 1 }}>
              Administrative system for a wood-processing company (Almar Puit
              OÜ). A real business case focused on improving internal processes
              and data flow.
            </Typography>
            <Typography sx={{ mt: 1 }}>
              My role covers the full product discovery phase — from
              understanding business needs and defining the problem to shaping
              product logic, UX flows and technical implementation.
            </Typography>
            <Typography sx={{ mt: 1 }}>Completed so far:</Typography>
            <Typography sx={{ ml: 2 }}>
              <ul>
                <li>Problem analysis & business goals</li>
                <li>Product requirements (PRD)</li>
                <li>Prototype design</li>
              </ul>
            </Typography>
            ""
            <Typography>
              <Link
                sx={{ textDecoration: "none", color: "red" }}
                underline="none"
                variant="body1"
                href="https://docs.google.com/document/d/1QM6ferpC5oIzlljenawGArDW3qCIoZP29-MYWaukCCQ/edit?usp=sharing"
              >
                Documentation
              </Link>
              {" and "}
              <Link underline="none" href="https://bit.ly/498WzzC">
                Prototype Design
              </Link>
            </Typography>
            <Typography sx={{ mt: 1, fontStyle: "italic" }}>
              Development is planned as the next stage.
            </Typography>
          </Box>

          {/* same 2-per-row grid, but inside your homepage wrappers */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "minmax(0, 1fr)",
                sm: "repeat(2, minmax(0, 1fr))",
              },
              gap: { xs: 5, sm: 3, md: 4 },
            }}
          >
            {/* Cards of Projects */}
            {webProjects.map((p) => (
              <Card
                key={p.name}
                elevation={0}
                sx={{
                  borderRadius: 3,

                  overflow: "hidden",
                  transition: "transform 160ms ease, box-shadow 160ms ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow:
                      "0 6px 18px rgba(23,12,69,0.08), 0 2px 8px rgba(23,12,69,0.06)",
                  },
                }}
              >
                <CardActionArea component={Link} to={p.link}>
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
                      pt: "20px",
                      pl: "20px",
                      pr: "20px",
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
                    <Typography variant="body3" color="text.secondary">
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
