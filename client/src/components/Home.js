import React from "react";
import { Typography, Box, CssBaseline } from "@mui/material";
import VideoPlayer from "./VideoPlayer";
import Introduction from "./Introduction";
import Footer from "./Footer";
import NavBar from "./NavBar";

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
        <NavBar />

        <Typography
          variant="h2"
          textAlign="center"
          sx={{ fontSize: { xs: 40, sm: 50 } }}
        >
          Explore Organic Shopping!
        </Typography>
        <VideoPlayer />
        <Introduction />
        <Footer />
      </Box>
    </Box>
  );
};

export default Home;
