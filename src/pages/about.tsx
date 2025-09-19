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
import imgMain from "../assets/images/spavarska/spa_varska.jpg";

import "./styles/index.css";
import Footer from "../components/footer/Footer";

const AlmarpuitProject: React.FC = () => {
  return (
    <>
      <Nav />
      <Box className="bcg-color">
        <Container maxWidth="md">
          <Card
            sx={{
              p: 2,
              boxShadow: 3,
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
              alt="Spavarska website"
              sx={{
                borderRadius: 2,
                maxHeight: 400,
                objectFit: "cover",
                mb: 2,
              }}
            />
            <CardContent>
              <Typography variant="h4" gutterBottom>
                ABOUT
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                I worked for about 15 years as a Graphic Designer both as a team
                member and freelancer, participate in marketing campaigns,
                competitions and helped make public service announcements as a
                volunteer. <br />
                For refreshing my career I transitioned into Web Design and
                Development. After finishing school where I learned programming
                I decided to take a break for my family needs but was continuing
                with small projects. I tried both roles - Project Manager and
                Developer. Now I am working on administrational info system for
                timber firm Almar Puit OÜ.
              </Typography>

              <Typography variant="h4" gutterBottom>
                SKILLS
              </Typography>

              <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                <ul>
                  <li>
                    <strong className="skill-name">Web Development:</strong> JS,
                    React, Angular(studying), TS, ExpressJS, Java, PHP, RestAPI,
                    GitHub, SQL, NoSQL. CMS WordPress.
                  </li>
                  <li>
                    <strong className="skill-name">Web Design:</strong> Figma,
                    Photoshop, Illustrator. UX/UI. Image editing, color and
                    composition.
                  </li>
                  <li>
                    <strong className="skill-name">Project Management:</strong>{" "}
                    Basic experience with Agile, task coordination, delivery
                    tracking. Jira, Kanban
                  </li>
                </ul>
              </Typography>

              {/* ➕ Additional Info Section */}
            </CardContent>
          </Card>
        </Container>
      </Box>
      <Footer />
    </>
  );
};

export default AlmarpuitProject;
