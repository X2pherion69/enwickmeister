"use client";
import { Box, Typography, IconButton } from "@mui/material";
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [isOpenDrawer, setOpenDrawer] = useState(false);
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        py: "40px",
        mb: "40px",
      }}
    >
      <Box
        component="img"
        alt=""
        src="/logo.png"
        sx={{ width: "100%", height: 16, maxWidth: 120 }}
      />
      <Typography>Now available for work!</Typography>
      <IconButton
        onClick={(event: React.KeyboardEvent | React.MouseEvent) => {
          if (
            event.type === "keydown" &&
            ((event as React.KeyboardEvent).key === "Tab" ||
              (event as React.KeyboardEvent).key === "Shift")
          ) {
            return;
          }

          setOpenDrawer((prev) => !prev);
        }}
        sx={{ width: "100%", maxWidth: 120 }}
      >
        <MenuIcon color="primary" />
      </IconButton>
      <Sidebar isOpen={isOpenDrawer} setOpenDrawer={setOpenDrawer} />
    </Box>
  );
};

export default Header;
