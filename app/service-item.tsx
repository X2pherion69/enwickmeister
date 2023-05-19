"use client";

import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface ServiceItemProps {
  title: string;
  description: string;
  imgUrl: string;
}

const ServiceItem: FC<ServiceItemProps> = ({ title, description, imgUrl }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        textAlign: "center",
        maxWidth: 300,
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
      }}
    >
      <Box
        component="img"
        alt={title}
        src={imgUrl}
        sx={{ width: "100%", height: 40, maxWidth: 40 }}
      />
      <Typography sx={{ fontSize: "1.25vw", fontWeight: 500 }}>
        {title}
      </Typography>
      <Typography>{description}</Typography>
    </Box>
  );
};

export default ServiceItem;
