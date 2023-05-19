"use client";

import styles from "./page.module.css";
import { Box, Button, Typography } from "@mui/material";

export default function Home() {
  return (
    <main className={styles.main}>
      <Box
        sx={{
          display: "flex",
          gap: "120px",
          width: "100%",
          maxWidth: 1024,
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            alignItems: "start",
            gap: "10px",
          }}
        >
          <Typography sx={{ fontSize: 32 }}>
            Hi! We are <b></b>
          </Typography>
          <Typography sx={{ fontSize: 96, fontWeight: 600 }}>
            Entwmeister
          </Typography>
          <Typography sx={{ fontSize: 28 }}>
            &apos; <i>The tech speaks for itself</i> &apos; - Richard Hendricks
          </Typography>
          <Button variant="outlined" color="success" sx={{ mt: "20px" }}>
            Contact Us
          </Button>
        </Box>
        <Box
          component="img"
          alt=""
          src="/landingpage.png"
          sx={{ width: "100%", height: 360, maxWidth: 1440 }}
        />
      </Box>
    </main>
  );
}
