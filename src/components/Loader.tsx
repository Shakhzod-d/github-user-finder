import { Box, CircularProgress } from "@mui/material";

export const Loader = () => (
  <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
    <CircularProgress />
  </Box>
);
