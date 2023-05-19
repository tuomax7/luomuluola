import { React, useState } from "react";
import {
  Box,
  CssBaseline,
  Typography,
  FormControl,
  TextField,
  IconButton,
  RadioGroup,
  FormControlLabel,
  Radio,
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

  const { data: restaurants, isFetching } = useQuery({
    queryKey: [searchQuery, "search"],
    queryFn: () => getRestaurantsBySearchQuery(searchQuery),
    enabled: searchQuery.length >= 3,
    placeholderData: [],
    staleTime: 1000 * 2,
  });

  const [sortBy, setSortBy] = useState("best");

  const sortedRestaurants = () => {
    switch (sortBy) {
      case "best":
        return restaurants.sort((r1, r2) => r2.rating - r1.rating);
      case "worst":
        return restaurants.sort((r1, r2) => r1.rating - r2.rating);

      case "organic":
        return restaurants.sort((r1, r2) => r2.porras - r1.porras);
      default:
        return restaurants.sort((r1, r2) => r2.rating - r1.rating);
    }
  };

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
        minHeight="30vh"
      >
        <NavBar />
        <Box sx={{ width: { sx: "80%", sm: "50%" } }}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontSize: { xs: 40, sm: 50 } }}
          >
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
            style={{ width: "auto", minWidth: 300 }}
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
          <Typography mx={5}>
            No results found! Type at least 3 characters to search for Finnish
            cities (e.g. Helsinki, Tampere)
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
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              value={sortBy}
              name="radio-buttons-group"
              onChange={(event) => setSortBy(event.target.value)}
              sx={{
                my: 1,
                mx: 2,
              }}
              row
            >
              <FormControlLabel
                value="best"
                control={<Radio disableRipple color="default" />}
                label="Best rated first"
              />
              <FormControlLabel
                value="worst"
                control={<Radio disableRipple color="default" />}
                label="Worst rated first"
              />
              <FormControlLabel
                value="organic"
                control={<Radio disableRipple color="default" />}
                label="Most organic first"
              />
            </RadioGroup>
            <RestaurantList restaurants={sortedRestaurants()} />
          </LoadingSpinner>
        )}
      </Box>
    </Box>
  );
};

export default Restaurants;
