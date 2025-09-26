import * as React from "react";
import Box from "@mui/system/Box";
import Grid from "@mui/system/Grid"; // Grid v2 from @mui/system
import "../index.css";

// import imgBiospa from "../assets/logos/biospa.png";
// import imgSpaVarska from "../assets/logos/varska_spa.png";
// import imgAlmarPuit from "../assets/logos/almar_puit.png";
// import imgLionsClub from "../assets/logos/lions_club.png";
// import imgSilmaTark from "../assets/logos/silmatark_logo.png";
// import imgKinnisvara from "../assets/logos/mp_kinnisvara.png";
// import imgTobrox from "../assets/logos/tobrox_wood.png";
// import imgTvPlay from "../assets/logos/tvplay.png";

import imgBiospa from "../assets/logos_c/biospa.png";
import imgSpaVarska from "../assets/logos/varska_spa.png";
import imgAlmarPuit from "../assets/logos/almar_puit.png";
import imgLionsClub from "../assets/logos/lions_club.png";
import imgSilmaTark from "../assets/logos/silmatark_logo.png";
import imgKinnisvara from "../assets/logos/mp_kinnisvara.png";
import imgTobrox from "../assets/logos/tobrox_wood.png";
import imgTvPlay from "../assets/logos/tvplay.png";
import { maxWidth, width } from "@mui/system";

const logos = [
  { src: imgBiospa, alt: "Biospa" },
  { src: imgSpaVarska, alt: "Spa Värska", mt: -4 },
  { src: imgAlmarPuit, alt: "Almar Puit", mt: -2 },
  { src: imgLionsClub, alt: "Lions Club", mt: -2 },
  { src: imgSilmaTark, alt: "Silma Tark", mt: -10 },
  { src: imgKinnisvara, alt: "MP Kinnisvara", mt: -5 },
  { src: imgTobrox, alt: "TobroxWood", mt: -3 },
  { src: imgTvPlay, alt: "TV Play", mt: -10 },
];

export default function ClientLogos() {
  return (
    <Box sx={{ px: { xs: 1, sm: 2, md: 6 } }}>
      <Grid
        container
        spacing={{ xs: 1.5, md: 3 }}
        alignItems="center"
        justifyContent="center"
        wrap="nowrap" // single row
        sx={{ maxWidth: "100%", mx: "auto" }}
      >
        {logos.map((l, idx) => (
          <Grid
            key={l.alt}
            size={{ xs: "auto" }} // <-- Grid v2 uses `size`
            sx={{
              flex: "0 0 auto", // don't shrink
              display: { xs: idx >= 4 ? "none" : "block", sm: "block" }, // hide last 4 on xs
            }}
          >
            <Box
              component="img"
              src={l.src}
              alt={l.alt}
              loading="lazy"
              sx={{
                display: "block",
                height: 48, // constant visual size (tweak if needed)
                width: 100,
                objectFit: "contain",
                mt: l.mt ? `${l.mt}px` : 0,
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
