"use client";

import { Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactItem from "../../components/contact-item";
import { CommonStyles } from "../../styles/common-styles";
import { useInView } from "react-intersection-observer";
import { useAppCtx } from "@/context";
import { useEffect } from "react";

let timeout: NodeJS.Timeout;

const contactData = [
  { title: "Github", icons: <GitHubIcon /> },
  { title: "truongduchainguyen@gmail.com", icons: <EmailIcon /> },
  { title: "+84 346 333 767", icons: <PhoneIphoneIcon /> },
  { title: "linkedin/truongduchainguyen", icons: <LinkedInIcon /> },
];

const { highlightText, container, sideHightlightText } = CommonStyles;

const currentSection = { id: "contact-page", index: 3 };

const ContactPage = () => {
  const { ref, inView } = useInView();
  const { selectedSection, setSelectSection } = useAppCtx();
  useEffect(() => {
    if (inView || selectedSection === currentSection)
      timeout = setTimeout(() => setSelectSection(currentSection), 500);
    return () => clearTimeout(timeout);
  }, [inView, selectedSection, setSelectSection]);

  return (
    <Box
      id="contact-page"
      sx={{
        ...container,
        flexDirection: "column",
        alignItems: "center",
        gap: "60px",
        height: "80vh",
      }}
    >
      <Box
        ref={ref}
        className={`hidden-left-to-right ${inView ? "show-horizontal" : ""}`}
        sx={{
          ...container,
          justifyContent: "flex-start",
          alignItems: "flex-end",
          position: "relative",
        }}
      >
        <Typography sx={{ ...sideHightlightText }}>Contact Us</Typography>
        <Typography
          sx={{
            ...highlightText,
          }}
        >
          CONTACT
        </Typography>
      </Box>
      <Box sx={{ ...container, justifyContent: "space-between" }}>
        <Box
          ref={ref}
          className={`hidden-left-to-right ${inView ? "show-horizontal" : ""}`}
          sx={{
            ...container,
            flexDirection: "column",
            textAlign: "left",
            gap: "16px",
          }}
        >
          <Typography sx={{ fontSize: "22px", mb: "16px" }}>
            We are always open to discuss your project and interesting thing!
          </Typography>
          {contactData.map((item) => (
            <ContactItem
              key={item.title}
              title={item.title}
              icons={item.icons}
            />
          ))}
        </Box>
        <Box
          ref={ref}
          className={`hidden-top-to-bottom ${inView ? "show-vertical" : ""}`}
          component="img"
          src="/landingpage.png"
          sx={{ width: "100%", height: 400, maxWidth: 400 }}
          alt=""
        />
      </Box>
    </Box>
  );
};

export default ContactPage;
