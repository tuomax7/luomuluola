import { React } from "react";
import { TableRow, TableCell, Typography } from "@mui/material";

import StarRating from "../ratings/StarRating";
import OrganicRating from "../ratings/OrganicRating";

import { Link } from "react-router-dom";

const RestaurantItem = ({ restaurant }) => {
  return (
    <TableRow style={{ height: 125 }}>
      <TableCell width="33%" align="center">
        <Link to={restaurant.cleanurl} style={{ color: "white" }}>
          <Typography fontSize={20}>{restaurant.kitchen}</Typography>
        </Link>
      </TableCell>

      <TableCell width="33%" margin="auto" textAlign="center">
        <StarRating rating={restaurant.rating} />
        <OrganicRating rating={Number(restaurant.porras)} />
      </TableCell>
      {window.innerWidth > 600 && (
        <TableCell width="33%" align="center">
          <Typography fontSize={18}>
            {restaurant.address}
            {restaurant.city ? " (" + restaurant.city + ")" : null}
          </Typography>
        </TableCell>
      )}
    </TableRow>
  );
};

export default RestaurantItem;
