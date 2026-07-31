import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Grid";
import CardMedia from "@mui/material/CardMedia";
import logos from "../assets/logos/logos.png";

export default function Clients() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {/* Left box */}
        <Grid size={{ xs: 12, md: 2 }} />

        <Grid size={{ xs: 12, md: 8 }}>
          <CardMedia
            component="img"
            image={logos}
            alt="Clients"
            sx={{
              width: "100%",
              height: "auto",
              display: "block",
            }}
          />
        </Grid>

        {/* Right box */}
        <Grid size={{ xs: 12, md: 2 }} />
      </Grid>
    </Box>
  );
}
