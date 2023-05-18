import { React, useState, useEffect } from "react";
import { TableRow, TableCell, Typography } from "@mui/material";

import StarRating from "./StarRating";

import { Link } from "react-router-dom";

import { ratingByRestaurant } from "../api";

const RestaurantItem = ({ restaurant }) => {
  const [rating, setRating] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedRating = await ratingByRestaurant(restaurant.kitchen);
      await setRating(fetchedRating);
    };
    fetchData();
  }, [restaurant]);

  return (
    <TableRow>
      <TableCell width="33%">
        <Link
          to={restaurant.cleanurl}
          style={{ textDecoration: "none", color: "white" }}
        >
          <Typography fontSize={20}>{restaurant.kitchen}</Typography>
        </Link>
      </TableCell>

      <TableCell width="33%">
        <StarRating rating={rating} />
      </TableCell>
      <TableCell width="33%">
        {restaurant.address}, {restaurant.city}
      </TableCell>
    </TableRow>
  );
};

export default RestaurantItem;
