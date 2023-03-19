import React from "react";
import { Typography, Box } from "@mui/material";

const App = () => {
  return (
    <Box justifyContent="center">
      <Typography variant="h1">LuomuLuola</Typography>
      <div>Video tähän!</div>
      <div>Nopea esittelyteksti tähän!</div>
      <footer>
        <p>Kreditit musiikille ja logopohjille</p>
        <a href="https://www.flaticon.com/free-icons/cave" title="cave icons">
          Cave icons created by Freepik - Flaticon
        </a>
        <a
          href="https://www.flaticon.com/free-icons/seedling"
          title="seedling icons"
        >
          Seedling icons created by Umeicon - Flaticon
        </a>
      </footer>
    </Box>
  );
};

export default App;
