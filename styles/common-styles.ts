export const CommonStyles = {
  highlightText: {
    fontSize: "6.25vw",
    fontWeight: 700,
    position: "absolute",
    color: "#000",
    textShadow:
      "-1px -1px 0 green, 1px -1px 0 green, -1px 1px 0 green, 1px 1px 0 green;",
    opacity: 0.7,
    textDecoration: "none",
    ":hover": {
      opacity: 1,
    },
  },
  sideHightlightText: {
    fontSize: "3.35vw",
    fontWeight: 700,
    zIndex: 1,
  },
  container: {
    display: "flex",
    width: "100%",
    textAlign: "center",
  },
};
