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
  IconButton,
  FormControl,
  TextField,
  Rating,
  Button,
} from "@mui/material";

import NavBar from "./NavBar";
import { useParams } from "react-router-dom";
import StarRating from "./StarRating";
import OrganicRating from "./OrganicRating";
import LoadingSpinner from "./LoadingSpinner";
import ReferenceLink from "./ReferenceLink";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

import { restaurantByUrl, rating } from "../api";

const Restaurant = () => {
  const { urlid } = useParams();

  const url = `/toimipaikat/${urlid}`;

  const [restaurant, setRestaurant] = useState(null);
  const [commentInput, setCommentInput] = useState("");
  const [starsInput, setStarsInput] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRestaurant = await restaurantByUrl(url);
      await setRestaurant(fetchedRestaurant);
    };
    fetchData();
  }, [url]);

  const handleVote = (id, amount) => {
    const reviewToUpdate = restaurant.reviews.find(
      (review) => review.id === id
    );
    const updatedReview = {
      ...reviewToUpdate,
      upvotes: reviewToUpdate.upvotes + amount,
    };
    const updatedReviews = restaurant.reviews.map((review) =>
      review.id === id ? updatedReview : review
    );

    setRestaurant({ ...restaurant, reviews: updatedReviews });
  };

  const handleSubmit = () => {
    const updatedReviews = restaurant.reviews.concat({
      id: restaurant.reviews.length + 1,
      kitchen: restaurant.kitchen,
      content: commentInput,
      rating: starsInput,
      upvotes: 0,
    });

    setRestaurant({
      ...restaurant,
      reviews: updatedReviews,
      rating: rating(updatedReviews),
    });

    setCommentInput("");
    setStarsInput(0);
  };

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
                mb={2}
              >
                <Typography variant="h2" textAlign="center">
                  {restaurant.kitchen}
                </Typography>
                <StarRating rating={restaurant.rating} />

                <OrganicRating rating={Number(restaurant.porras)} />

                <Typography fontSize={20}>{restaurant.address}</Typography>
                <Typography fontSize={20}>
                  {restaurant.zip} {restaurant.city}
                </Typography>
                <ReferenceLink
                  url={restaurant.www}
                  label={restaurant.www}
                  title={restaurant.kitchen}
                />
              </Box>

              <Table style={{ width: "80%", columnGap: 0 }}>
                <TableBody>
                  {restaurant.reviews.map((review) => (
                    <TableRow key={review.id}>
                      <TableCell width="60%">
                        <Typography fontSize={16}>{review.content}</Typography>
                      </TableCell>
                      <TableCell width="30%">
                        <StarRating rating={review.rating} />
                      </TableCell>
                      <TableCell>
                        <Box
                          display="flex"
                          flexDirection="row"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Typography>{review.upvotes}</Typography>
                          <IconButton onClick={() => handleVote(review.id, 1)}>
                            <ThumbUpIcon style={{ color: "green" }} />
                          </IconButton>
                          <IconButton onClick={() => handleVote(review.id, -1)}>
                            <ThumbDownIcon style={{ color: "#CB1615" }} />
                          </IconButton>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              <FormControl
                sx={{
                  my: 2,
                  border: "1px solid black",
                  borderRadius: "10px",
                  padding: 2,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  minWidth: 350,
                }}
              >
                <TextField
                  id="outlined-multiline-static"
                  label="Publish a new review!"
                  color="secondary"
                  multiline
                  rows={4}
                  placeholder="Comment here..."
                  onChange={(event) => setCommentInput(event.target.value)}
                  value={commentInput}
                  size="medium"
                  fullWidth
                />

                <Box display="flex" flexDirection="row" sx={{ my: 1 }}>
                  <Rating
                    name="given-rating"
                    value={starsInput}
                    defaultValue={0}
                    onChange={(event, value) =>
                      setStarsInput(value === null ? 0 : value)
                    }
                    size="large"
                  />
                  <Typography>({starsInput} / 5)</Typography>
                </Box>
                <Button
                  type="submit"
                  variant="contained"
                  onClick={handleSubmit}
                  disabled={commentInput.trim().length === 0}
                >
                  Submit!
                </Button>
              </FormControl>
            </Box>
          ) : null}
        </LoadingSpinner>
      </Box>
    </Box>
  );
};

export default Restaurant;
