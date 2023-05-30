"use client";
import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "94%",
        justifyContent: "space-between",
        alignItems: "center",
        py: "40px",
        position: "fixed",
        zIndex: 999,
      }}
    >
      <Box
        component="img"
        alt=""
        src="/logo.png"
        sx={{ width: "100%", height: 16, maxWidth: 120 }}
      />
      <Typography>Now available for work!</Typography>
      <Button variant="contained">Contact Us</Button>
    </Box>
  );
};

export default Header;
