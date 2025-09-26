import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";

const cards = [
  {
    id: 1,
    title: "Web Design",
    description: "Clean, modern User / Mobile-friendly interface",
    bg: "#ff7a59",
  },
  {
    id: 2,
    title: "Web Development",
    description:
      "WordPress, Wix, Framer or Custom-Coded websites tailored to your needs",
  },
  {
    id: 4,
    title: "Copywriting",
    description: "No time to write your texts? We’ll handle it for you.",
  },
  {
    id: 3,
    title: "SEO Basics",
    description: "Website can be a profitable tool with smart optimisation",
  },

  {
    id: 5,
    title: "BI Analisys",
    description: "Humans depend on plants and animals for survival.",
  },
  {
    id: 6,
    title: "Print",
    description: "Humans depend on plants and animals for survival.",
  },
];

function Services() {
  const [selectedCard, setSelectedCard] = React.useState(0);
  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(min(250px, 100%), 1fr))",
        gap: 3,
      }}
    >
      {cards.map((card, index) => (
        <Card
          sx={{
            boxShadow: 0,
            borderRadius: "8px",
            backgroundColor: "#b7c8ec",
          }}
        >
          <CardActionArea
            disableRipple
            onClick={() => setSelectedCard(index)}
            data-active={selectedCard === index ? "" : undefined}
            sx={{
              borderRadius: "8px",
            }}
          >
            <CardContent sx={{ height: "100%" }}>
              <Typography
                variant="h4"
                component="div"
                sx={{ textAlign: "left", mb: "0.4rem", color: "#170c45" }}
              >
                {card.title}
              </Typography>
              <Typography
                className="serv-description"
                variant="body3"
                color="text.secondary"
                align="left"
              >
                {card.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}

export default Services;
