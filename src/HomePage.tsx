import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import img1 from "./assets/images/drinkupp/drinkupp1.webp";

import img7 from "./assets/images/tvplay/tv_play_car_1.jpg";

import Footer from "./components/footer/Footer";

import Navigation from "./components/navigation/Navigation";
import { Box, Button } from "@mui/material";
import Services from "./components/services";
import Clients from "./components/clients";

const webProjects = [
  {
    id: 1,
    name: "Web Development",
    description: "Custom infosystem for timber business workflows",
    link: "/projects/websites",
    image: img1,
  },
  {
    id: 2,
    name: "Design & Print",
    description: "Corporate website for timber product sales",
    link: "/projects/print",
    image: img7,
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

        <section className="hero-section row-full">
          <div className="section-inner">
            <h1 className="main-header">
              Turnkey Websites for Businesses & Creators
            </h1>

            <p className="sub-header">
              Web Design | Web Development | Copywriting | SEO Basics | Support
            </p>

            <div className="cta-box">
              {/* -------------- Green Button -------------- */}
              <Button
                disableElevation
                sx={{
                  backgroundColor: "#4ccb4c",
                  borderRadius: "8px",
                  color: " #170c45",
                  textTransform: "none",
                  mr: 2.5,
                  pt: "-1",
                  boxShadow: "0 14px 32px #a9eeae",
                  fontWeight: 700,
                  fontSize: 16,
                  height: "45px",
                  p: 3,
                  buttonShadow: "20 10px 24px #170c45", // <-- colored shadow
                  "&:hover": {
                    backgroundColor: "#ffffff",
                    boxShadow: "0 14px 32px #b7c8ec", // stronger on hover
                  },
                }}
                variant="contained"
              >
                <a href="mailto:info@adverbum.ee">Free Site Audit</a>
              </Button>
              {/* -------------- White  Button -------------- */}
              <Button
                disableElevation
                sx={{
                  backgroundColor: "#ffffff",
                  borderRadius: "8px",
                  color: " #170c45",
                  textTransform: "none",
                  height: "45px",
                  p: 3,

                  fontWeight: 500,
                  fontSize: 16,
                }}
                variant="contained"
              >
                <a href="https://docs.google.com/forms/d/1N6MsHxZ1D75HOOesnkedG5JycW34cCKy7y7z6wcQ6LA/edit">
                  Let's Start
                </a>
              </Button>
            </div>
          </div>
        </section>
        {/**  Clients  */}
        <section className="hero-section-clients row-full">
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
        <section className="homepage-projects-section row-full">
          {" "}
          <div className="section-inner">
            {" "}
            <h2 className="web-dev">Projects</h2>{" "}
            <div className="grid">
              {" "}
              {webProjects.map((project) => (
                <Link
                  to={project.link}
                  key={project.name}
                  className="project-card"
                >
                  {" "}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />{" "}
                  <h5>{project.name}</h5>{" "}
                </Link>
              ))}{" "}
            </div>{" "}
            {/* <h2 className="lets-talk">Lets Talk!</h2>{" "} */}
          </div>{" "}
        </section>

        <Footer />
      </main>
    </>
  );
}
