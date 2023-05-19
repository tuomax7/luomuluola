import { React } from "react";
import { TableRow, TableCell, Typography } from "@mui/material";

import StarRating from "./StarRating";
import OrganicRating from "./OrganicRating";

import { Link } from "react-router-dom";

const RestaurantItem = ({ restaurant }) => {
  return (
    <TableRow>
      <TableCell width="33%">
        <Link to={restaurant.cleanurl} style={{ color: "white" }}>
          <Typography fontSize={20}>{restaurant.kitchen}</Typography>
        </Link>
      </TableCell>

      <TableCell width="33%">
        <StarRating rating={restaurant.rating} />
        <OrganicRating rating={Number(restaurant.porras)} />
      </TableCell>
      {window.innerWidth > 600 && (
        <TableCell width="33%">
          <Typography fontSize={18}>
            {restaurant.address}, {restaurant.city}
          </Typography>
        </TableCell>
      )}
    </TableRow>
  );
};

export default RestaurantItem;
