import React from "react";
import { Box, Typography } from "@mui/material";
import ReferenceLink from "./ReferenceLink";
const Footer = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      sx={{ marginTop: "auto", bgcolor: "primary.main" }}
      width="100%"
    >
      <Typography variant="h3" fontSize={30} textAlign="center">
        Intro video music and logo materials
      </Typography>
      <ReferenceLink
        url="https://pixabay.com/music/corporate-wake-up-to-the-renaissance-135540/"
        title="background music"
        label={`'Wake up to the renaissance' – by Denys Kyshchuk (AudioCoffee) – Pixabay`}
      />

      <ReferenceLink
        url="https://www.flaticon.com/free-icons/cave"
        title="cave icons"
        label={`Luolaikoni – by Freepik – Flaticon`}
      />
      <ReferenceLink
        url="https://www.flaticon.com/free-icons/seedling"
        title="seedling icons"
        label={`Kasvi-ikoni – by Umeicon – Flaticon`}
      />
    </Box>
  );
};

export default Footer;
