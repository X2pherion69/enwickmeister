"use client";

import { Box, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { CommonStyles } from "../common-styles";

const buttonsData = [
  { name: "Languages", img: "/Web-skills.png" },
  { name: "Website", img: "/Web-skills.png" },
  { name: "Data", img: "/Data-skills.png" },
];

const { highlightText, container, sideHightlightText } = CommonStyles;

export default function SkillsPage() {
  const [imgPath, setImgPath] = useState<string>(buttonsData[0].img);
  const changeImageHandler = useCallback((img: string) => {
    setImgPath(img);
  }, []);

  return (
    <Box
      sx={{
        ...container,
        flexDirection: "column",
        gap: "80px",
        p: " 60px 0 0",
      }}
    >
      <Box
        sx={{
          ...container,
          position: "relative",
          alignItems: "flex-end",
          marginLeft: "40px",
        }}
      >
        <Typography sx={{ ...sideHightlightText }}>Our Skills</Typography>
        <Typography
          sx={{
            ...highlightText,
            letterSpacing: 10,
            left: 10,
          }}
        >
          SKILLS
        </Typography>
      </Box>
      <Box
        sx={{
          ...container,
          justifyContent: "space-around",
          gap: "60px",
          px: "20px",
        }}
      >
        <Box
          component="img"
          src={imgPath}
          alt=""
          sx={{ width: "100%", maxWidth: "500px", height: "500px" }}
        />

        <Box
          sx={{
            ...container,
            gap: "60px",
            justifyContent: "flex-end",
          }}
        >
          <Box
            sx={{
              ...container,
              flexDirection: "column",
              maxWidth: "200px",
            }}
          >
            {buttonsData.map((item) => (
              <Typography
                key={item.name}
                onClick={() => changeImageHandler(item.img)}
                sx={{
                  cursor: "pointer",
                  textAlign: "right",
                  mt: "40px",
                  fontSize: 28,
                  fontWeight: 600,
                }}
              >
                {item.name}
              </Typography>
            ))}
          </Box>
          <Box
            component="img"
            src="/Skills.png"
            alt=""
            sx={{ width: "100%", maxWidth: "400px", height: "500px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
