import React from "react";
import { Rating, Box, Typography } from "@mui/material";
import SpaIcon from "@mui/icons-material/Spa";

export default function OrganicRating({ rating }) {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: "column", sm: "row" }, my: 1 }}
    >
      <Rating
        name="organicRating"
        value={rating}
        readOnly
        max={3}
        icon={<SpaIcon style={{ color: "green" }} fontSize="inherit" />}
        emptyIcon={<SpaIcon fontSize="inherit" />}
      />
      <Typography style={{ textAlign: "center" }}>
        ( {rating} / 3 organic)
      </Typography>
    </Box>
  );
}
