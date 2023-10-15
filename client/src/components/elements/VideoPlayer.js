import React from "react";
import { IconButton } from "@mui/material";
import PlayArrow from "@mui/icons-material/PlayArrow";
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <ReactPlayer
      url="https://users.aalto.fi/~nummelt3/promovideo.mp4"
      controls
      playIcon={
        <IconButton aria-label="play-video">
          <PlayArrow
            sx={{ transform: "scale(8)", stroke: "white", strokeWidth: 1 }}
            color="primary"
          />
        </IconButton>
      }
      light="https://users.aalto.fi/~nummelt3/promovideotease.png"
      playing
      width={window.innerWidth < 860 ? window.innerWidth * 0.93 : 800}
      height={
        window.innerWidth < 860 ? (168 / 300) * window.innerWidth * 0.93 : 450
      }
    />
  );
};

export default VideoPlayer;
