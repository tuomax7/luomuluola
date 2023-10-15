import React from "react";
import { Rating, Box, Typography } from "@mui/material";

export default function StarRating({ rating }) {
  return (
    <Box
      display="flex"
      sx={{ flexDirection: { xs: "column", sm: "column", md: "row" } }}
      justifyContent="center"
      textAlign="center"
    >
      <Rating
        name="restaurantRating"
        value={rating}
        readOnly
        precision={0.1}
        sx={{ stroke: "black", strokeWidth: 1 }}
      />
      <Typography>( {rating} )</Typography>
    </Box>
  );
}
