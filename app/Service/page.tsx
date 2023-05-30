"use client";

import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import ServiceItem from "../../components/service-item";
import { CommonStyles } from "../../styles/common-styles";
import { useInView } from "react-intersection-observer";
import { useAppCtx } from "@/context";

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

const currentSection = { id: "service-page", index: 1 };

let timeout: NodeJS.Timeout;

export default function ServicePage() {
  const { ref, inView } = useInView();
  const { selectedSection, setSelectSection } = useAppCtx();
  useEffect(() => {
    if (inView || selectedSection === currentSection)
      timeout = setTimeout(() => setSelectSection(currentSection), 500);
    return () => clearTimeout(timeout);
  }, [inView, selectedSection, setSelectSection]);
  return (
    <Box
      id="service-page"
      sx={{
        ...container,
        flexDirection: "column",
        alignItems: "center",
        gap: "80px",
        height: "80vh",
      }}
    >
      <Box
        ref={ref}
        className={`hidden-right-to-left ${inView ? "show-horizontal" : ""}`}
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
        className={`hidden-left-to-right ${inView ? "show-horizontal" : ""}`}
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
        className={`hidden-top-to-bottom ${inView ? "show-vertical" : ""}`}
        component="img"
        alt=""
        src="/CryingWallpaper.png"
        sx={{
          width: "100%",
          height: 240,
          maxWidth: 1440,
          transition: "all 2s",
        }}
      />
    </Box>
  );
}
