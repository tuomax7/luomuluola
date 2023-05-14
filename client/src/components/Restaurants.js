import { React, useState } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  FormControl,
  TextField,
  IconButton,
} from "@mui/material";

import ClearIcon from "@mui/icons-material/Clear";

import { useQuery } from "@tanstack/react-query";

import NavBar from "./NavBar";
import LoadingSpinner from "./LoadingSpinner";
import RestaurantList from "./RestaurantList";

import { getRestaurantsBySearchQuery } from "../api";

const Restaurants = () => {
  const [searchQuery, setSearchQuery] = useState(
    sessionStorage.getItem("searchQuery") === null
      ? ""
      : sessionStorage.getItem("searchQuery")
  );

  //const [restaurants, setRestaurants] = useState([]);

  const { data: restaurants, isFetching } = useQuery({
    queryKey: [searchQuery, "search"],
    queryFn: () => getRestaurantsBySearchQuery(searchQuery),
    enabled: searchQuery.length >= 3,
    placeholderData: [],
    staleTime: 1000 * 2,
  });

  const handleQueryChange = async (event) => {
    setSearchQuery(event.target.value);
    sessionStorage.setItem("searchQuery", event.target.value);
  };
  const handleClearClick = () => {
    setSearchQuery("");
    sessionStorage.setItem("searchQuery", "");
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
        <Box width="80%">
          <Typography variant="h2" textAlign="center">
            Organic Restaurants
          </Typography>
        </Box>
        <FormControl>
          <TextField
            variant="outlined"
            color="secondary"
            placeholder={`Search for cities...`}
            onChange={handleQueryChange}
            value={searchQuery}
            style={{ width: "auto", minWidth: 350 }}
            sx={{ my: 1 }}
            fontSize={20}
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
        {restaurants.length <= 0 ? (
          <Typography>
            No results found! Type at least 3 characters to search.
          </Typography>
        ) : (
          <LoadingSpinner fetching={isFetching} style={{ height: "50vh" }}>
            {searchQuery.length < 3 && (
              <Typography>
                Start searching by typing at least 3 characters
              </Typography>
            )}
            {searchQuery.length >= 3 && restaurants.length === 0 && (
              <Typography>No results found</Typography>
            )}
            <RestaurantList restaurants={restaurants} />
          </LoadingSpinner>
        )}
      </Box>
    </Box>
  );
};

export default Restaurants;
