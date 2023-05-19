"use client";

import React from "react";
import { Box, Typography } from "@mui/material";
import ServiceItem from "../service-item";
import { CommonStyles } from "../common-styles";

const servicesData = [
  {
    title: "UX & UI Design",
    description: "Beautifull designs that show your ideal brands",
    imgUrl: "/web.png",
  },
  {
    title: "Website",
    description: "Fast and smooth websites delivered blazingly fast",
    imgUrl: "/Icon_UXUI.png",
  },
  {
    title: "Data",
    description: "All things data will be done by our experts",
    imgUrl: "/Icon_Data.png",
  },
];

const { highlightText, container, sideHightlightText } = CommonStyles;

export default function ServicePage() {
  return (
    <Box
      sx={{
        ...container,
        flexDirection: "column",
        alignItems: "center",
        p: "60px",
        gap: "80px",
      }}
    >
      <Box
        sx={{
          ...container,
          justifyContent: "flex-end",
          alignItems: "flex-end",
          position: "relative",
        }}
      >
        <Typography sx={{ ...sideHightlightText }}>Our Services</Typography>
        <Typography
          sx={{
            ...highlightText,
          }}
        >
          Our Services
        </Typography>
      </Box>
      <Box
        sx={{
          ...container,
          justifyContent: "space-around",
        }}
      >
        {servicesData.map((item) => (
          <ServiceItem
            key={item.title}
            title={item.title}
            description={item.description}
            imgUrl={item.imgUrl}
          />
        ))}
      </Box>
      <Box
        component="img"
        alt=""
        src="/CryingWallpaper.png"
        sx={{ width: "100%", height: 240, maxWidth: 1440 }}
      />
    </Box>
  );
}
