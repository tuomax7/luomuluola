import { React, useEffect, useState } from "react";
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
import LoadingSpinner from "./LoadingSpinner";

import {
  restaurantByUrl,
  reviewsByRestaurant,
  ratingByRestaurant,
} from "../api";

const Restaurant = () => {
  const { urlid } = useParams();

  const url = `/toimipaikat/${urlid}`;

  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const fetchRestaurant = async () => {
      const fetchedRestaurant = await restaurantByUrl(url);
      await setRestaurant(fetchedRestaurant);
    };
    fetchRestaurant();
  }, [url]);

  return (
    <Box>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="50vh"
      >
        <NavBar />

        <LoadingSpinner
          fetching={restaurant == null}
          style={{ height: "50vh" }}
        >
          {restaurant != null ? (
            <Box>
              <Box width="50%">
                <Typography variant="h2" textAlign="center">
                  {restaurant.kitchen}
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
                  {reviewsByRestaurant(restaurantByUrl(url)).map((review) => (
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
          ) : null}
        </LoadingSpinner>
      </Box>
    </Box>
  );
};

export default Restaurant;
