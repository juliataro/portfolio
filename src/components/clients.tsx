import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Grid";
import styled from "@mui/system/styled";
import CardMedia from "@mui/material/CardMedia";
import imgBiospa from "../assets/logos/biospa.png";
import imgSpaVarska from "../assets/logos/varska_spa.png";
import imgAlmarPuit from "../assets/logos/almar_puit.png";
import imgLionsClub from "../assets/logos/lions_club.png";
import imgSilmaTark from "../assets/logos/silmatark_logo.png";
import imgKinnisvara from "../assets/logos/mp_kinnisvara.png";
import imgTobrox from "../assets/logos/tobrox_wood.png";
import imgTvPlay from "../assets/logos/tvplay.png";

import "../index.css";

const Item = styled("div")(({ theme }) => ({
  backgroundColor: "#e7e7f1",
  border: "1px solid",
  borderColor: "#e7e7f1",
  padding: theme.spacing(1),
  borderRadius: "4px",
  textAlign: "center",
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
    borderColor: "#444d58",
  }),
}));

export default function FullWidthGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 2 }}>
          <Item sx={{ border: 0 }}></Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia component="img" image={imgBiospa} alt="Paella dish" />
          </Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia
              sx={{ marginTop: "-4px" }}
              component="img"
              image={imgSpaVarska}
              alt="Spa Värska"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia
              sx={{ marginTop: "-19px" }}
              component="img"
              image={imgAlmarPuit}
              alt="Almar Puit"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia
              sx={{ marginTop: "-14px" }}
              component="img"
              image={imgLionsClub}
              alt="Lions Club"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia
              sx={{ marginTop: "-33px" }}
              component="img"
              image={imgSilmaTark}
              alt="Silma Tark"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia
              sx={{ marginTop: "-14px" }}
              component="img"
              image={imgKinnisvara}
              alt="MP Kinnisvara"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia
              sx={{ marginTop: "-3px" }}
              component="img"
              image={imgTobrox}
              alt="TobroxWood"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 3, md: 1 }}>
          <Item sx={{ border: 0 }}>
            <CardMedia
              sx={{ marginTop: "-20px" }}
              component="img"
              image={imgTvPlay}
              alt="TV Play"
            />
          </Item>
        </Grid>
        <Grid size={{ xs: 12, md: 2 }}>
          <Item sx={{ border: 0 }}></Item>
        </Grid>
      </Grid>
    </Box>
  );
}
