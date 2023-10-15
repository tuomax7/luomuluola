import React from "react";
import { Rating, Box, Typography } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";

export default function OrganicRating({ rating }) {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: "column", sm: "column", md: "row" }, my: 1 }}
      justifyContent="center"
      textAlign="center"
    >
      <Rating
        name="organicRating"
        value={rating}
        readOnly
        max={3}
        icon={
          <SpaIcon
            style={{ color: "green" }}
            fontSize="inherit"
            sx={{ stroke: "black", strokeWidth: 1 }}
          />
        }
        emptyIcon={<SpaIcon fontSize="inherit" />}
      />
      <Typography>( {rating} / 3 organic)</Typography>
    </Box>
  );
}
