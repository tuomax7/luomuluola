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
    >
      {label}
    </Link>
  );
};

export default ReferenceLink;
