import React from "react";
import { Rating, Box, Typography } from "@mui/material";

export default function StarRating({ rating }) {
  return (
    <Box display="flex" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
      <Rating name="professor-rating" value={rating} readOnly precision={0.1} />
      <Typography style={{ textAlign: "center" }}>( {rating} )</Typography>
    </Box>
  );
}
