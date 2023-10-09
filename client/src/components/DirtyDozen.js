import React from "react";
import { Box, CssBaseline, Typography } from "@mui/material";

import ReferenceLink from "./elements/ReferenceLink";
import NavBar from "./elements/NavBar";
import DirtyDozenItems from "./elements/DirtyDozenItems";

const DirtyDozen = () => {
  return (
    <Box>
      <CssBaseline />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <NavBar />
        <Box sx={{ width: { sx: "80%", sm: "50%" } }}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ fontSize: { xs: 40, sm: 50 } }}
          >
            The Dirty Dozen
          </Typography>
          <Typography fontSize={18} mx={5} textAlign="justify">
            The following 12 fruits & vegetables are the highest in pesticides
            measured by the{" "}
            <ReferenceLink
              url="https://www.ewg.org/foodnews/summary.php"
              label="Environmental Working Group"
              title="EWG Dirty Dozen 2023"
            />{" "}
            in USA. When you go shopping, try to buy at least these products
            organic!
          </Typography>
        </Box>

        <DirtyDozenItems />
        <Box width="50%" my={5} textAlign="center">
          <Typography fontSize={18}>
            Read more about the Dirty Dozen and its counterpart the Clean
            Fifteen from{" "}
            <ReferenceLink
              url="https://www.ewg.org/foodnews/summary.php"
              label="here!"
              title="EWG Dirty Dozen 2023"
            />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default DirtyDozen;
