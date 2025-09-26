import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Navigation from "../components/navigation/Navigation";
import Footer from "../components/footer/Footer";

import "./../index.css";

/* Card style */
const Card = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  height: "100%",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  gap: theme.spacing(1),
  borderRadius: 8,
  background: "#fff",
  boxShadow: "none",
  border: "1px solid rgba(23,12,69,0.06)",
}));

/* 10 steps */
const steps = [
  {
    title: "1 STEP - Understand your business",
    text: "I will learn your idea, audience and what makes you unique.",
  },
  {
    title: "2 STEP - Set goals",
    text: "We define primary outcomes: sales, leads, brand or information.",
  },
  {
    title: "3 STEP - Map the structure",
    text: "I sketch sitemap and flows so visitors always know where to go next.",
  },
  {
    title: "4 STEP - Write meaningful content",
    text: "Template texts and keyword-aware copy to start the site strong.",
  },
  {
    title: "5 STEP - Design with clarity",
    text: "Readable, calm layouts and visuals that support your message.",
  },
  {
    title: "6 STEP - Build the website",
    text: "Coding, CMS setup and responsive implementation.",
  },
  {
    title: "7 STEP - Optimize speed & SEO",
    text: "Performance tuning, proper tags and lightweight images for discoverability.",
  },
  {
    title: "8 STEP - Test on real devices",
    text: "Phone, tablet and desktop testing — nothing gets left unchecked.",
  },
  {
    title: "9 STEP - Launch with confidence",
    text: "Domain, hosting and final checks before going live.",
  },
  {
    title: "10 STEP - Keep improving",
    text: "Analytics and gradual improvements after launch.",
  },
];

/* -------- Group 1: tall middle + stacked sides (items 0..4) --------
   Mobile: renders in natural order (1..5)
   md+: places items via grid lines without changing DOM order
*/
function GroupGridClassic({
  items,
  rowHeightMd = 140,
}: {
  items: typeof steps;
  rowHeightMd?: number;
}) {
  // Positions for md+ while DOM order stays 0..4
  const mdPositions = [
    { col: 1, row: "1 / span 2" }, // 0
    { col: 1, row: "3 / span 2" }, // 1
    { col: 2, row: "1 / span 4" }, // 2 (tall middle)
    { col: 3, row: "1 / span 2" }, // 3
    { col: 3, row: "3 / span 2" }, // 4
  ];

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "minmax(0,1fr)",
          md: "repeat(3, minmax(0,1fr))",
        },
        gap: { xs: 2, md: 1 },
        gridTemplateRows: { xs: "auto", md: `repeat(4, ${rowHeightMd}px)` },
        alignItems: "stretch",
      }}
    >
      {items.map((it, idx) => (
        <Box
          key={it.title}
          sx={{
            gridColumn: { xs: "1", md: String(mdPositions[idx].col) },
            gridRow: { xs: "auto", md: mdPositions[idx].row },
          }}
        >
          <Card>
            <Typography variant="h6">{it.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {it.text}
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

/* -------- Group 2: left stacked; top of col2+3; bottom wide spanning col2+3 (items 5..9) --------
   Mobile: renders in natural order (6..10)
   md+: custom layout using grid lines
*/
function GroupGridCustom({
  items,
  rowHeightMd = 140,
}: {
  items: typeof steps;
  rowHeightMd?: number;
}) {
  // 0..4 within this group correspond to steps 6..10 overall
  const mdPositions = [
    { col: 1, row: "1 / span 2" }, // left top (item 0)
    { col: 2, row: "1 / span 2" }, // middle top (item 1)
    { col: 3, row: "1 / span 2" }, // right top (item 2)
    { col: 1, row: "3 / span 2" }, // left bottom (item 3)
    { col: "2 / span 2", row: "3 / span 2" }, // bottom wide spanning cols 2-3 (item 4)
  ] as const;

  return (
    <Box
      sx={{
        width: "100%",
        display: "grid",
        gridTemplateColumns: {
          xs: "minmax(0,1fr)",
          md: "repeat(3, minmax(0,1fr))",
        },
        gap: { xs: 2, md: 1 },
        gridTemplateRows: { xs: "auto", md: `repeat(4, ${rowHeightMd}px)` },
        alignItems: "stretch",
      }}
    >
      {items.map((it, idx) => (
        <Box
          key={it.title}
          sx={{
            gridColumn: { xs: "1", md: String(mdPositions[idx].col) },
            gridRow: { xs: "auto", md: mdPositions[idx].row },
          }}
        >
          <Card>
            <Typography variant="h6">{it.title}</Typography>
            <Typography variant="body2" color="text.secondary">
              {it.text}
            </Typography>
          </Card>
        </Box>
      ))}
    </Box>
  );
}

/* -------- Page -------- */
export default function TenStepsPage() {
  const group1 = steps.slice(0, 5); // 1..5
  const group2 = steps.slice(5, 10); // 6..10

  return (
    <>
      <header className="main-nav">
        <Navigation />
      </header>

      {/* Use the same wrappers as homepage for consistent width */}
      <section className="process-section row-full">
        <div className="section-inner">
          <Box sx={{ py: { xs: 3, md: 6 } }}>
            <Typography
              variant="h3"
              sx={{
                mt: { xs: 3, md: 0 },
                mb: { xs: 3, md: 5 },
                textAlign: "left",
                color: "#170c45",
                fontWeight: 500,
                letterSpacing: "-0.01em",
              }}
            >
              Process
            </Typography>

            <Box sx={{ display: "grid", gap: { xs: 2.5, md: 4 } }}>
              <GroupGridClassic items={group1} rowHeightMd={140} />
              <GroupGridCustom items={group2} rowHeightMd={140} />
            </Box>
          </Box>
        </div>
      </section>

      <Footer />
    </>
  );
}
