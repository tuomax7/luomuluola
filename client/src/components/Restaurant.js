import React from "react";
import {
  Box,
  CssBaseline,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
} from "@mui/material";

import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";

import {
  restaurantById,
  reviewsByRestaurant,
  ratingByRestaurant,
} from "../api";

const Restaurant = () => {
  const { id } = useParams();
  const restaurantId = parseInt(id);
  const restaurant = restaurantById(restaurantId);
  return (
    <Box>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <NavBar />
        <Box width="50%">
          <Typography variant="h2" textAlign="center">
            {restaurant.name}
          </Typography>
        </Box>
        <Table style={{ width: "80%", columnGap: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell>Review</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell>Upvotes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reviewsByRestaurant(restaurantId).map((review) => (
              <TableRow key={review.id}>
                <TableCell>{review.content}</TableCell>
                <TableCell>
                  <StarRating rating={review.rating} />
                </TableCell>
                <TableCell>{review.upvotes}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default Restaurant;
