import React from "react";
import { Typography, Box, CssBaseline } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import Introduction from "./Introduction";
import Footer from "./Footer";

const Home = () => {
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
        <Box display="flex" flexDirection="row">
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
            }}
            src="https://users.aalto.fi/~nummelt3/luomuluolalogo.png"
          ></Box>
          <Typography variant="h1">LuomuLuola</Typography>
        </Box>

        <Typography variant="h2">Hyppää luomuostoksille!</Typography>
        <VideoPlayer />
        <Introduction />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
