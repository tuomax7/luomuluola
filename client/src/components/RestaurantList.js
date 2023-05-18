import React from "react";
import {
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
} from "@mui/material";

import RestaurantItem from "./RestaurantItem";

const RestaurantList = ({ restaurants }) => {
  return (
    <Table style={{ width: "60%", columnGap: 0 }}>
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell>Rating</TableCell>
          <TableCell>Address</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {restaurants.map((restaurant) => (
          <RestaurantItem key={restaurant.kitchen} restaurant={restaurant} />
        ))}
      </TableBody>
    </Table>
  );
};

export default RestaurantList;
