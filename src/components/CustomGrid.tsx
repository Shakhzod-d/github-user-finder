import React from "react";
import { Box } from "@mui/material";
import type { SxProps, Theme } from "@mui/material/styles";

interface CustomGridProps {
  children: React.ReactNode;
  columns?: {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
  };
  gap?: number;
  justifyContent?: string;
  alignItems?: string;
  sx?: SxProps<Theme>;
}

export const CustomGrid = ({
  children,
  columns = {
    xs: "1fr",
    sm: "repeat(2, 1fr)",
    md: "repeat(3, 1fr)",
  },
  gap = 2,
  justifyContent = "center",
  alignItems = "start",
  sx,
}: CustomGridProps) => {
  return (
    <Box
      sx={{
        display: "grid",
        gap,
        justifyContent,
        alignItems,
        gridTemplateColumns: columns,
        ...sx,
      }}
    >
      {children}
    </Box>
  );
};
