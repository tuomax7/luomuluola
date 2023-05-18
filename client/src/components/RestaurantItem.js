import { React } from "react";
import { TableRow, TableCell, Typography } from "@mui/material";

import StarRating from "./StarRating";

import { Link } from "react-router-dom";

const RestaurantItem = ({ restaurant }) => {
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
        <StarRating rating={restaurant.rating} />
      </TableCell>
      <TableCell width="33%">
        {restaurant.address}, {restaurant.city}
      </TableCell>
    </TableRow>
  );
};

export default RestaurantItem;
