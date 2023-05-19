"use client";

import React from "react";
import Head from "next/head";
import { NextPage } from "next";
import { Box, Typography } from "@mui/material";

const Custom404Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>The page you were looking for doesnt exist | 404</title>
      </Head>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: 540,
          justifyContent: "center",
          alignItems: "center",
          alignContent: "center",
        }}
      >
        {/* <B src="/favicons/custom-404.jpeg" width="320" height="320" /> */}
        <Typography sx={{ marginTop: 10 }}>This page does not exist</Typography>
        <Typography sx={{ marginTop: 10 }}>
          <a href="/">Return to Home Page</a>
        </Typography>
      </Box>
    </>
  );
};

export default Custom404Page;
