import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgba(0, 0, 0, 0.4)", // dark overlay
        backdropFilter: "blur(3px)", // smooth blur
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999 // stays above everything
      }}
    >
      <CircularProgress size={60} thickness={4} sx={{ color: "#fff" }} />
    </Box>
  );
}
