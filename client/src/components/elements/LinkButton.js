import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function LinkButton({ to, label }) {
  return (
    <Button sx={{ mx: 2 }} color="inherit">
      <Link
        to={to}
        style={{
          textDecoration: "none",
          color: "white",
          fontSize: 22,
        }}
      >
        {label}
      </Link>
    </Button>
  );
}
