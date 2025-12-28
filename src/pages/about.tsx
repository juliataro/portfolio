import React from "react";
import {
  Container,
  Typography,
  Box,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";
import imgMain from "../assets/images/Julia_Taro.png";
import Footer from "../components/footer/Footer";
import Navigation from "../components/navigation/Navigation";
import ReusableList, { ListItemData } from "../components/list-items";
import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

import "./styles/index.css";

/* ------------ EDUCATION DATA ---------------*/
const educationList: ListItemData[] = [
  {
    id: 1,
    primary: "Tartu University, Estonia, 2025-",
    secondary: "Business and Project Management",
    icon: <SchoolIcon />,
  },
  {
    id: 2,
    primary: "VOCO, Tartu, Estonia (2020-2022)",
    secondary: "Junior Full Stack Developer",
    icon: <SchoolIcon />,
  },
  {
    id: 3,
    primary: "BHS, Moscow, Russia",
    secondary: "Graphic Designer (2001-2003)",
    icon: <SchoolIcon />,
  },
];

/* ------------ SKILLS DATA ---------------*/
const skillsList: ListItemData[] = [
  {
    id: 1,
    primary: "Web Development:",
    secondary:
      "React/Redux, Angular (studying), TS, ExpressJS, Java, REST API, GitHub, SQL, NoSQL. CMS — WordPress, Framer, Wix.",
    icon: <CodeIcon />,
  },
  {
    id: 2,
    primary: "Web Design:",
    secondary:
      "Figma, Photoshop, Illustrator. UX/UI. Image editing, color and composition.",
    icon: <DesignServicesIcon />,
  },
  {
    id: 3,
    primary: "Project Management:",
    secondary:
      "Basic experience with Agile, task coordination, delivery tracking. Kanban, Jira, Toggl.",
    icon: <ManageAccountsIcon />,
  },
];

const aboutText = (
  <>
    Hi, my name is Julia Taro. I have more than 10 years of design experience
    both as a team member and freelancer. I’ve participated in and led
    end-to-end projects, creating products from concepts and print production
    (magazines, brochures, exhibition stands) to webpage implementations and
    small business tools.
    <br />
    <br />I graduated from VOCO and now I’m studying Business Administration at
    the University of Tartu. This path from design to development to business
    lets me approach products holistically: I like to turn ideas into digital
    implementations, dive deep into intuitive user experiences, and consider
    strategic goals. My aim is to build practical digital solutions with a
    customer-first approach — attractive and effective — and to save your time.
  </>
);

const AboutProject: React.FC = () => {
  return (
    <>
      <header className="main-nav">
        <Navigation />
      </header>
      <Box className="bcg-color">
        <Container maxWidth="md">
          {/* --------------- About / Desktop View --------------  */}
          <Card
            className="about-description"
            sx={{
              display: { xs: "none", md: "flex" },
              p: 4,
              mt: 2,
              boxShadow: 0,
              transition: "2s",
              borderRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 224,
                mr: 2,
                borderRadius: "5px",
                display: { xs: "none", md: "flex" },
                objectFit: "cover",
              }}
              image={imgMain}
              alt="Portrait of Julia Taro"
            />

            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ pt: 0 }}>
                <Typography component="h1" variant="h5">
                  Business-Thinking Developer
                </Typography>

                <Typography
                  variant="body2"
                  component="div"
                  color="text.secondary"
                  sx={{ mt: 1 }}
                >
                  {aboutText}
                </Typography>
              </CardContent>
            </Box>
          </Card>

          {/*  ----------------- About / Mobile View ------------------*/}
          <Card
            sx={{
              display: { xs: "flex", md: "none" },
              flexDirection: "column",
              p: 4,
              mt: "-1rem",
              mb: "-3rem !important",
              boxShadow: 0,
              transition: "2s",
              borderRadius: "5px",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: { xs: "40%", md: 150 }, // full width on mobile, fixed on desktop
                height: { xs: "auto", md: 224 }, // auto height on mobile
                borderRadius: "5px",
                objectFit: "cover",
                mt: { xs: "0rem", md: 0 }, // margin-top 1rem on mobile only
                mb: { xs: "2rem", md: 0 },
                mr: { xs: 0, md: 2 }, // right margin only on desktop 2025-2029
                display: { xs: "flex", md: "flex" }, // make sure it's visible everywhere
              }}
              image={imgMain}
              alt="Portrait of Julia Taro"
            />

            {/* Title (mobile) */}
            <CardContent sx={{ pt: 0 }}>
              <Typography component="h1" variant="h5" sx={{ mb: 1 }}>
                Business-Thinking Developer
              </Typography>

              {/* ✅ New: Mobile text under image */}
              <Typography variant="body2" color="text.secondary">
                {aboutText}
              </Typography>
            </CardContent>
          </Card>

          <Card
            sx={{
              p: 2,
              boxShadow: 0,
              transition: "0.3s",
              borderRadius: "5px",
              mt: "1rem",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mt: 2, mb: -1 }} gutterBottom>
                EDUCATION
              </Typography>

              <Box sx={{ mt: 1 }}>
                <ReusableList items={educationList} />
              </Box>

              <Typography variant="h5" sx={{ mt: 4, mb: 0 }} gutterBottom>
                SKILLS
              </Typography>

              <Box sx={{ mt: 1, mb: "-1.5rem" }}>
                <ReusableList items={skillsList} />
              </Box>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AboutProject;
