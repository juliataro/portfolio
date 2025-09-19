import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import img1 from "./assets/images/almarpuit/almar-design.jpg";
import img2 from "./assets/images/bodydetox/bodydetox2.jpg";
import img3 from "./assets/images/peipsikaup/peipsikaup.jpg";
import img4 from "./assets/images/spavarska/spa_varska.jpg";
import img5 from "./assets/images/nagemisteraapia/nagemistr1.jpg";
import img6 from "./assets/images/tobrox/tobrox-wood.jpg";
import img7 from "./assets/images/tvplay/tvplay_car.jpg";
import img8 from "./assets/images/mpkinnisvara/mpkinnisvara.jpg";
import Footer from "./components/footer/Footer";
import ReadMoreArea from "@foxeian/react-read-more";
import Navigation from "./components/navigation/Navigation";
import { Box } from "@mui/material";
import Services from "./components/services";
import Clients from "./components/clients";

const webProjects = [
  {
    name: "Almar Puit OÜ",
    description: "Custom infosystem for timber business workflows",
    link: "/projects/almarpuit",
    image: img1,
  },
  {
    name: "Tobroxwood.ee",
    description: "Corporate website for timber product sales",
    link: "/projects/tobroxwood",
    image: img6,
  },
  {
    name: "Spavarska.ee",
    description:
      "Estonian Spa center website providing detailed information about their services",
    link: "/projects/spavarska",
    image: img4,
  },
  {
    name: "BodyDetox.ee",
    description:
      "Wellness platform helps users find personalized medical procedures based on their symptoms",
    link: "/projects/bodydetox",
    image: img2,
  },
  {
    name: "Peipsikaup.ee",
    description: "E-commerce store for local handmade products.",
    description2: "→ WordPress/Elementor, multilingual, hosting & support.",
    link: "/projects/peipsikaup",
    image: img3,
  },
  {
    name: "Nagemisteraapia.ee",
    description: "Eye therapy website with mobile-friendly UX design",
    link: "/projects/nagemisteraapia",
    image: img5,
  },
];

const designProjects = [
  {
    image: img7,
    name: "TV Play Bus Design",
    description: "Design as part of marketing campaign of TV Play, Estonia",
    link: "https://www.behance.net/gallery/87278983/VIASAT-BALTICS-BUS?tracking_source=project_owner_other_projects",
  },
  {
    image: img8,
    name: "Other Print Design Projects",
    description:
      "Some print design projects over the different years with different clients",
    link: "https://www.behance.net/juliataro",
  },
];

export default function HomePage() {
  const buttonStyle = { color: "#05d7e6" };

  return (
    <>
      <main>
        <header className="main-nav">
          <Navigation />
        </header>

        <section className="intro-section row-full">
          <div className="section-inner">
            <h1 className="main-header">
              Turnkey Websites for Businesses & Creators
            </h1>

            <p className="sub-header">
              Web Design | Web Development | Copywriting | SEO Basics | Support
            </p>

            <div className="cta-box">
              <button className="cta-green">
                <a href="mailto:info@adverbum.ee">
                  Free Advice on Your Website
                </a>
              </button>
              <button className="cta-white">
                <a href="mailto:info@adverbum.ee">Start Your Project</a>
              </button>
            </div>
          </div>
        </section>
        {/**  Clients  */}
        <section className="intro-section row-full">
          <div className="clients">
            <Box>
              <Clients />
            </Box>
          </div>
        </section>
        {/**  ----------Services ----------------   */}
        <section className="intro-section-serv row-full">
          <div className="section-inner">
            <div>
              <Box sx={{ mt: "1rem", mb: "5rem" }}>
                <Services />
              </Box>
            </div>
          </div>
        </section>
        {/**  Projects  */}
        <section className="web-projects-section row-full">
          <div className="section-inner">
            <h2 className="web-dev">Websites</h2>
            <div className="grid">
              {webProjects.map((project) => (
                <Link
                  to={project.link}
                  key={project.name}
                  className="project-card"
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <p>{project.description2}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        <section className="design-print-section">
          <div className="section-inner">
            <h2>Design & Print</h2>
            <div className="grid">
              {designProjects.map((project) => (
                <a
                  href={project.link}
                  key={project.name}
                  className="project-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project.image}
                    alt={`${project.name} preview`}
                    className="project-image"
                  />
                  <h5>{project.name}</h5>
                  <p>{project.description}</p>
                  <p>{project.description2}</p>
                </a>
              ))}
            </div>
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}
