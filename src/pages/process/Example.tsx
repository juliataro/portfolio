import * as React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { clamp } from "framer-motion";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

function useScrollConstraints(ref) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const element = ref.current;
    const viewportHeight = element.offsetHeight;
    const contentHeight = element.firstChild.offsetHeight;

    setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
  }, []);

  return constraints;
}

export const Example = () => {
  const y = useMotionValue(0);
  const ref = useRef(null);

  const { top, bottom } = useScrollConstraints(ref);

  function handleWheel(event) {
    event.preventDefault();
    const newY = y.get() - event.deltaY;
    const clampedY = clamp(top, bottom, newY);
    y.stop();
    y.set(clampedY);
  }

  return (
    <div className="container" ref={ref} onWheel={handleWheel}>
      <motion.div
        drag="y"
        dragConstraints={{ top, bottom }}
        className="scrollable"
        style={{ y }}
      >
        {/* -------------------------1 step ------------------------ */}
        <Box className="item">
          {" "}
          <Typography variant="h6" gutterBottom>
            1 STEP
          </Typography>
          <Typography variant="body1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Box>
        {/* -------------------------2 step ------------------------ */}
        <Box className="item">
          {" "}
          <Typography variant="h6" gutterBottom>
            2 STEP
          </Typography>
          <Typography variant="body1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Box>
        {/* -------------------------3 step ------------------------ */}
        <Box className="item">
          {" "}
          <Typography variant="h6" gutterBottom>
            3 STEP
          </Typography>
          <Typography variant="body1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Box>
        {/* -------------------------4 step ------------------------ */}
        <Box className="item">
          {" "}
          <Typography variant="h6" gutterBottom>
            4 STEP
          </Typography>
          <Typography variant="body1" gutterBottom>
            subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quos blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur subtitle1. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur subtitle1.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur
          </Typography>
        </Box>
      </motion.div>
    </div>
  );
};
