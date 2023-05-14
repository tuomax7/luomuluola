import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";

import StarRating from "./StarRating";

import { Link } from "react-router-dom";

import { ratingByRestaurant } from "../api";

const RestaurantList = ({ restaurants }) => {
  return (
    <Table style={{ width: "80%", columnGap: 0 }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {restaurants.map((restaurant) => (
          <TableRow key={restaurant.id}>
            <TableCell>
              <Link
                to={restaurant.cleanurl}
                style={{ textDecoration: "none", color: "white" }}
              >
                {restaurant.kitchen}
              </Link>
            </TableCell>

            <TableCell>
              <StarRating rating={ratingByRestaurant(restaurant.id)} />
            </TableCell>
            <TableCell>{restaurant.address}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default RestaurantList;
