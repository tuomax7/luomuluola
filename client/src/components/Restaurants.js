import { React, useState } from "react";
import {
  Box,
  CssBaseline,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  TableHead,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";

import NavBar from "./NavBar";
import StarRating from "./StarRating";
import { Link } from "react-router-dom";

import { restaurants, ratingByRestaurant } from "../api";

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState(
    sessionStorage.getItem("searchQuery") === null
      ? ""
      : sessionStorage.getItem("searchQuery")
  );

  function handleQueryChange(event) {
    setSearchQuery(event.target.value);
    sessionStorage.setItem("searchQuery", event.target.value);
  }
  function handleClearClick() {
    setSearchQuery("");
    sessionStorage.setItem("searchQuery", "");
  }

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
            Organic Restaurants
          </Typography>
          Search for Organic restaurants nearby or in a specific city. Make sure
          to leave a comment after your visit!
        </Box>
        <FormControl>
          <TextField
            id="outlined"
            placeholder={`Search for cities...`}
            onChange={handleQueryChange}
            value={searchQuery}
            style={{ width: "auto", minWidth: 350 }}
            sx={{ my: 1 }}
            InputProps={{
              endAdornment: (
                <IconButton
                  sx={{ display: searchQuery === "" ? "none" : "inline" }}
                  onClick={handleClearClick}
                >
                  <ClearIcon />
                </IconButton>
              ),
            }}
          />
        </FormControl>
        <Table style={{ width: "80%", columnGap: 0 }}>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurants.map((restaurant) => (
              <TableRow key={restaurant.id}>
                <TableCell>
                  <Link
                    to={`/restaurants/${restaurant.id}`}
                    style={{ textDecoration: "none", color: "white" }}
                  >
                    {restaurant.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <StarRating rating={ratingByRestaurant(restaurant.id)} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default Restaurants;
