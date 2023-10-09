import React from "react";
import { Link } from "@mui/material";

const ReferenceLink = ({ url, label, title }) => {
  return (
    <Link
      color="inherit"
      href={url}
      title={title}
      target="_blank"
      rel="noopener"
      mb={0.5}
      textAlign="center"
    >
      {label}
    </Link>
  );
};

export default ReferenceLink;
