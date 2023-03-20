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
          <PlayArrow sx={{ transform: "scale(8)" }} color="secondary" />
        </IconButton>
      }
      light="https://users.aalto.fi/~nummelt3/promovideotease.png"
      playing
      width={800}
      height={450}
    />
  );
};

export default VideoPlayer;
