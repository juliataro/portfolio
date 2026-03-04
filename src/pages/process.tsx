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
    title: "1. Discovery – Understanding Your Business",
    text: "At this stage, we take the time to understand your business, vision, target audience, and unique value proposition. You will complete a structured questionnaire that helps clarify your goals and expectations. ",
  },
  {
    title: "2. Goal Definition",
    text: "Together, we define the primary objectives of your website — whether it’s generating sales, capturing leads, building brand awareness, or providing information. Clear goals ensure every design and technical decision supports measurable results.",
  },
  {
    title: "3. Structure & Sitemap Planning",
    text: "We develop a clear sitemap and user flow to ensure visitors intuitively navigate your website. A well-structured sitemap also helps search engines crawl and index your pages efficiently, ensuring important content is prioritized and properly organized.",
  },
  {
    title: "4. Strategic Copywriting",
    text: "If you don’t have time to write the content, we can assist with professionally crafted, keyword-aware copy. Well-structured text strengthens your message and supports a strong SEO foundation from the start.",
  },
  {
    title: "5. Design with Purpose",
    text: "We create clean, modern layouts and visuals that communicate your message clearly and reinforce your brand identity. Every design element is intentional and aligned with your goals.",
  },
  {
    title: "6. Website Development",
    text: "This stage includes coding, CMS setup, and fully responsive implementation to ensure your website performs seamlessly across all devices.",
  },
  {
    title: "7. Performance & SEO Optimization",
    text: "We implement foundational SEO practices, performance optimization, proper metadata, and lightweight image formatting to improve visibility and support organic traffic growth.",
  },
  {
    title: "8. Testing & Quality Assurance",
    text: "Before launch, we thoroughly test speed, responsiveness, and usability across mobile, tablet, and desktop devices to ensure consistent performance.",
  },
  {
    title: "9. Launch",
    text: "We configure domain and hosting settings and perform final technical checks before your website goes live.",
  },
  {
    title: "10. Ongoing Improvement",
    text: "If needed, we set up Google Analytics and Google Search Console to monitor performance and user behavior. This allows you to track metrics such as page views, session duration, and traffic sources — helping guide future improvements.",
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
        marginTop: -2,
        gridTemplateColumns: {
          xs: "minmax(0,1fr)",
          md: "repeat(3, minmax(0,1fr))",
        },
        gap: { xs: 2.5, md: 2.5 },
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
            <Typography variant="h5">{it.title}</Typography>
            <Typography variant="body3" color="text.secondary">
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
        gap: { xs: 2.5, md: 2.5 },
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
            <Typography variant="h5">{it.title}</Typography>
            <Typography variant="body3" color="text.secondary">
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
          <Box sx={{ py: { xs: 3, md: 6 }, mt: -4 }}>
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

            <Box sx={{ display: "grid", gap: { xs: 2.5, md: 2.5 } }}>
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
