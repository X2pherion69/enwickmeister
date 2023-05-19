"use client";

import React, { FC } from "react";
import {
  Box,
  Drawer,
  DrawerProps,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

interface SidebarProps extends DrawerProps {
  isOpen: boolean;
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>;
}

const sidebarData = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/Service" },
  { name: "Skills", path: "/Skills" },
  { name: "Contact", path: "/Contact" },
];

const Sidebar: FC<SidebarProps> = ({ isOpen, setOpenDrawer, ...rest }) => {
  return (
    <Drawer {...rest} open={isOpen} anchor="right">
      <List
        sx={{
          width: 250,
          height: "100%",
          paddingTop: "100px",
          bgcolor: "#3A3A3A",
          color: "#fff",
          position: "relative",
        }}
      >
        <Box
          sx={{ position: "absolute", top: 10, right: 10, cursor: "pointer" }}
          onClick={() => setOpenDrawer(false)}
        >
          <CloseIcon sx={{ width: "40px", height: "40px" }} />
        </Box>
        {sidebarData.map((item, index) => (
          <ListItem key={item.name} disablePadding sx={{ mb: "12px" }}>
            <ListItemButton onClick={() => setOpenDrawer(false)}>
              <Link href={item.path} style={{ width: "100%" }}>
                <Typography sx={{ fontSize: "24px" }}>{item.name}</Typography>
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
