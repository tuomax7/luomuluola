import React from "react";
import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton.js";

const NavBar = () => {
  return (
    <AppBar sx={{ mb: 2, py: 1 }} position="static">
      <Toolbar
        sx={{
          flexDirection: {
            xs: "column",
            sm: "row",
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <Box
            component="img"
            sx={{
              height: 100,
              width: 100,
            }}
            src="https://users.aalto.fi/~nummelt3/luomuluolalogo.png"
          ></Box>
        </Link>

        <Typography variant="h1">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            LuomuLuola
          </Link>
        </Typography>
        <LinkButton to="/dirtydozen" label="Dirty Dozen" type="navbar" />
        <LinkButton
          to="/toimipaikat"
          label="Organic Restaurants"
          type="navbar"
        />
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
