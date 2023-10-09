import React from "react";
import { Box, Typography } from "@mui/material";

const style = {
  fontSize: 20,
  marginBottom: 15,
};

const Introduction = () => {
  return (
    <Box
      sx={{ width: { xs: "80%", md: "60%" } }}
      marginBottom={10}
      textAlign="justify"
    >
      <Typography
        variant="h3"
        marginBottom={5}
        marginTop={5}
        textAlign="center"
      >
        Enter LuomuLuola!
      </Typography>
      <Typography style={style}>
        Compared to conventional production, organically produced food contains
        significantly less pesticide residues and no artificial colorings,
        sweeteners or flavorings. Organic production also develops biodiversity
        and maintains the soil's growth condition. The health benefits of
        organically produced food compared to conventionally produced food may
        have conflicting display, but for most it would certainly be
        enlightening to at least to get to know the basics of organic food
        consumption.
      </Typography>
      <Typography style={style}>
        LuomuLuola is an everyman's guide designed to help you eat more
        natural!🍃
      </Typography>
    </Box>
  );
};

export default Introduction;
