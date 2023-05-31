"use client";

import { Box, Typography } from "@mui/material";
import React, { useCallback, useEffect, useState } from "react";
import { CommonStyles } from "../../styles/common-styles";
import { useInView } from "react-intersection-observer";
import { useAppCtx } from "@/context";

const buttonsData = [
  { name: "Languages", img: "/Languages.png" },
  { name: "Website", img: "/Web-skills.png" },
  { name: "Data", img: "/Data-skills.png" },
];

const { highlightText, container, sideHightlightText } = CommonStyles;

const currentSection = { id: "skills-page", index: 2 };

let timeout: NodeJS.Timeout;

export default function SkillsPage() {
  const { ref, inView } = useInView();
  const { selectedSection, setSelectSection } = useAppCtx();

  const [imgPath, setImgPath] = useState<string>(buttonsData[0].img);
  const [shouldReanimation, setReanimation] = useState(false);

  const changeImageHandler = useCallback(
    (img: string) => {
      if (img === imgPath) return;
      setReanimation(true);
      setTimeout(() => {
        setImgPath(img);
        setReanimation(false);
      }, 1500);
    },
    [imgPath]
  );

  useEffect(() => {
    if (inView || selectedSection === currentSection)
      timeout = setTimeout(() => setSelectSection(currentSection), 750);
    return () => clearTimeout(timeout);
  }, [inView, selectedSection, setSelectSection]);

  return (
    <Box
      id="skills-page"
      sx={{
        ...container,
        flexDirection: "column",
        gap: "80px",
        height: "80vh",
      }}
    >
      <Box
        ref={ref}
        className={`hidden-left-to-right ${inView ? "show-horizontal" : ""}`}
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
          ref={ref}
          className={`hidden-left-to-right ${
            inView && !shouldReanimation ? "show-horizontal" : ""
          }`}
          component="img"
          src={imgPath}
          alt=""
          sx={{ width: "100%", maxWidth: "500px", height: "500px" }}
        />

        <Box
          ref={ref}
          className={`hidden-right-to-left ${inView ? "show-horizontal" : ""}`}
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
            ref={ref}
            className={`hidden-left-to-right ${
              inView ? "show-horizontal" : ""
            }`}
            component="img"
            src="/Skills.png"
            alt=""
            sx={{ width: "100%", maxWidth: "400px", height: "400px" }}
          />
        </Box>
      </Box>
    </Box>
  );
}
