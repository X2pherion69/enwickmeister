"use client";

import { useAppCtx } from "@/context";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const currentSection = { id: "home-page", index: 0 };

let timeout: NodeJS.Timeout;

export default function HomePage() {
  const { ref, inView } = useInView();
  const { selectedSection, setSelectSection } = useAppCtx();
  useEffect(() => {
    if (inView || selectedSection === currentSection)
      timeout = setTimeout(() => setSelectSection(currentSection), 500);
    return () => clearTimeout(timeout);
  }, [inView, selectedSection, setSelectSection]);

  return (
    <Box
      id="home-page"
      sx={{
        display: "flex",
        gap: "120px",
        width: "100%",
        maxWidth: 1024,
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Box
        ref={ref}
        className={`hidden-left-to-right ${inView ? "show-horizontal" : ""}`}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Typography sx={{ fontSize: 32 }}>
          Hi! We are <b></b>
        </Typography>
        <Typography sx={{ fontSize: 96, fontWeight: 600 }}>
          Entwmeister
        </Typography>
        <Typography sx={{ fontSize: 28 }}>
          &apos; <i>The tech speaks for itself</i> &apos; - Richard Hendricks
        </Typography>
      </Box>
      <Box
        ref={ref}
        className={`hidden-right-to-left ${inView ? "show-horizontal" : ""}`}
        component="img"
        alt=""
        src="/Home.png"
        sx={{ width: "100%", height: 360, maxWidth: 1440 }}
      />
    </Box>
  );
}
