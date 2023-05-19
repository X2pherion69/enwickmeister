"use client";

import { Box, Typography } from "@mui/material";
import React, { FC } from "react";

interface ContactItemProps {
  icons: JSX.Element;
  title: string;
}

const ContactItem: FC<ContactItemProps> = ({ icons, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        gap: "20px",
        alignItems: "center",
        pl: "20px",
      }}
    >
      <Box>{icons}</Box>
      <Typography>{title}</Typography>
    </Box>
  );
};

export default ContactItem;
