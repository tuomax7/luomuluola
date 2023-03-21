import React from "react";
import {
  Typography,
  Box,
  createTheme,
  ThemeProvider,
  CssBaseline,
} from "@mui/material";
import VideoPlayer from "./components/VideoPlayer";
import Introduction from "./components/Introduction";
import Footer from "./components/Footer";

const customTheme = createTheme({
  root: {
    fontFamily: "sans-serif",
  },
  palette: {
    background: {
      default: "#CDA169",
    },
    text: {
      primary: "#ffffff",
    },
    primary: {
      main: "#CDA169",
    },
    secondary: {
      main: "#926E50",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={customTheme}>
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
    </ThemeProvider>
  );
};

export default App;
