import React from "react";
import { createTheme, ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import DirtyDozen from "./components/DirtyDozen.js";

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
      </Routes>
    </ThemeProvider>
  );
};

export default App;
