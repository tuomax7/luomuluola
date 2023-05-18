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
import ReferenceLink from "./ReferenceLink";

import {
  restaurantByUrl,
  reviewsByRestaurant,
  ratingByRestaurant,
} from "../api";

const Restaurant = () => {
  const { urlid } = useParams();

  const url = `/toimipaikat/${urlid}`;

  const [restaurant, setRestaurant] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRestaurant = await restaurantByUrl(url);
      await setRestaurant(fetchedRestaurant);

      const fetchedReviews = await reviewsByRestaurant(
        fetchedRestaurant.kitchen
      );
      await setReviews(fetchedReviews);

      const fetchedRating = await ratingByRestaurant(fetchedRestaurant.kitchen);
      await setRating(fetchedRating);
    };
    fetchData();
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
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="80%"
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
              >
                <Typography variant="h2" textAlign="center">
                  {restaurant.kitchen}
                </Typography>
                <StarRating rating={rating} />
                <Typography>{restaurant.address}</Typography>
                <Typography>
                  {restaurant.zip} {restaurant.city}
                </Typography>
                <ReferenceLink
                  url={restaurant.www}
                  label={restaurant.www}
                  title={restaurant.kitchen}
                />
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
                  {reviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell width="60%">{review.content}</TableCell>
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
