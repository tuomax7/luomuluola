import React from "react";
import Box from "@mui/material/Container";
import DataUsageOutlinedIcon from "@mui/icons-material/DataUsageOutlined";
import { AnimateKeyframes } from "react-simple-animate";

const LoadingSpinner = ({ fetching, children, size = 55, style }) => {
  return (
    <>
      {fetching ? (
        <Box
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            ...style,
          }}
        >
          <AnimateKeyframes
            play
            duration={2}
            iterationCount="infinite"
            direction="reverse"
            keyframes={["transform: rotate(0deg)", "transform: rotate(360deg)"]}
          >
            <DataUsageOutlinedIcon sx={{ fontSize: size }} />
          </AnimateKeyframes>
        </Box>
      ) : (
        children
      )}
    </>
  );
};

export default LoadingSpinner;
