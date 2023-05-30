"use client";

import { Box } from "@mui/material";
import ContactPage from "./Contact/page";
import HomePage from "./Home/page";
import ServicePage from "./Service/page";
import SkillsPage from "./Skills/page";
import VerticalSteps from "@/components/vertical-steps";

export default function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pr: "80px",
        ml: "100px",
        gap: "380px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <VerticalSteps />
      <HomePage />
      <ServicePage />
      <SkillsPage />
      <ContactPage />
    </Box>
  );
}
