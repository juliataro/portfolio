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

{
  /* ------------ EDUCATION DATA ---------------*/
}

const educationList: ListItemData[] = [
  {
    id: 1,
    primary: "Tartu University, Estonia, 2025-2029",
    secondary: "Business and Project Management",
    icon: <SchoolIcon />,
  },
  {
    id: 2,
    primary: "VOCO, Tartu, Estonia (2020-2022)",
    secondary: "Junior Full Stack Developer ",
    icon: <SchoolIcon />,
  },
  {
    id: 3,
    primary: "BHS, Moscow, Russia",
    secondary: "Graphic Designer (2001-2003)",
    icon: <SchoolIcon />,
  },
];
{
  /* ------------ SKILLS DATA ---------------*/
}
const skillsList: ListItemData[] = [
  {
    id: 1,
    primary: "Web Development:",
    secondary:
      "React/Redux, Angular(studying), TS, ExpressJS, Java, PHP, RestAPI, GitHub, SQL, NoSQL. CMS - WordPress, Framer, Wix.",
    icon: <CodeIcon />,
  },

  {
    id: 2,
    primary: "Web Design:",
    secondary:
      "Figma, Photoshop, Illustrator. UX/UI. Image editing, Color and Composition.",
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

const AboutProject: React.FC = () => {
  return (
    <>
      <header className="main-nav">
        <Navigation />
      </header>
      <Box className="bcg-color">
        <Container maxWidth="md">
          {/* --------------- About Page / Desktop View --------------  */}
          <Card
            sx={{
              display: "flex",
              pl: 4,
              pr: 4,
              pt: 4,

              boxShadow: 0,
              transition: "2s",
              borderRadius: "8px",
            }}
          >
            {/* Julia Taro about description */}
            <CardMedia
              component="img"
              sx={{
                width: 150,
                height: 224,
                mr: 2,
                borderRadius: "5px",
                display: { xs: "none", md: "flex" },
              }}
              image={imgMain}
              alt="Live from space album cover"
            />

            <Box
              sx={{
                flexDirection: "row",
                mt: "-1.4rem",

                display: { xs: "none", md: "flex" },
              }}
            >
              <CardContent>
                <Typography component="div" variant="h5">
                  Business Thinking Developer
                </Typography>

                <Typography
                  variant="body3"
                  component="div"
                  color="text.secondary"
                  sx={{ mb: "-1rem !important", mt: "0.5rem" }}
                >
                  Hi, my name is Julia Taro. I have more than 10 years of design
                  experience both as a team-member and freelancer. Participated
                  and led end-to-end projects, created products from concept and
                  print production (magazines, brochures, exhibition stands) to
                  webpages implementations and small business tools. <br />{" "}
                  Graduated from VOCO and now am studying Business
                  Administration at the University of Tartu. This path from
                  design to development to business lets me approach products
                  holistically: I like to turn idea to digital implementation,
                  deep in learning of intuitive user experiences, and consider
                  strategic goals. My aim is to build practical digital
                  solutions and save your time on that are with customer-first
                  approach, attractive and effective.
                </Typography>
              </CardContent>
            </Box>
          </Card>
          {/*  ----------------- Julia Taro About / Mobile View ------------------*/}
          <Card
            sx={{
              display: "column",
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
                width: 150,
                height: 203,
                ml: 0,
                mt: "-1rem",
                mb: "2rem",
                borderRadius: "5px",
                display: { xs: "flex", md: "none " },
              }}
              image={imgMain}
              alt="Live from space album cover"
            />

            <Box
              sx={{
                flexDirection: "row",
                mt: "-1.4rem",
                ml: "-1rem",
                mb: "-2rem",
                display: { xs: "flex", md: "none " },
              }}
            >
              <CardContent>
                <Typography component="div" variant="h5">
                  Business-Thinking Developer
                </Typography>
              </CardContent>
              <Box
                sx={{ display: "flex", alignItems: "center", pl: 1, pb: 1 }}
              ></Box>
            </Box>
          </Card>

          <Card
            sx={{
              p: 2,
              boxShadow: 0,
              transition: "0.3s",
              borderRadius: "5px",
              marginTop: "1rem",
            }}
          >
            <CardContent>
              <Typography variant="h5" sx={{ mt: 2, mb: -1 }} gutterBottom>
                EDUCATION
              </Typography>
              {/*------------- Reusable Education list -----------------v*/}
              <Typography
                alignItems="flex-start"
                variant="h4"
                sx={{ ml: "-5" }}
                gutterBottom
              >
                <ReusableList items={educationList} />
              </Typography>
              <Typography variant="h5" sx={{ mt: 4, mb: 0 }} gutterBottom>
                SKILLS
              </Typography>
              {/*------------- Reusable Skills list -----------------v*/}
              <Typography
                variant="h4"
                sx={{ ml: "-5", mb: "-1.5rem" }}
                gutterBottom
              >
                <ReusableList items={skillsList} />
              </Typography>
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AboutProject;
