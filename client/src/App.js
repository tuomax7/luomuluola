import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import DirtyDozen from "./components/DirtyDozen.js";
import Restaurants from "./components/Restaurants.js";
import Restaurant from "./components/Restaurant.js";

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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dirtydozen" element={<DirtyDozen />} />
        <Route path="/toimipaikat" element={<Restaurants />} />
        <Route path="/toimipaikat/:urlid" element={<Restaurant />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
