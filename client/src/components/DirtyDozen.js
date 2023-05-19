import React from "react";
import {
  Box,
  CssBaseline,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
} from "@mui/material";

import ReferenceLink from "./ReferenceLink";
import NavBar from "./NavBar";

const dirtyDozenData = [
  "Strawberries",
  "Spinach",
  "Kale, Collards & Mustard Greens",
  "Peaches",
  "Pears",
  "Nectarines",
  "Apples",
  "Grapes",
  "Bell & Hot Peppers",
  "Cherries",
  "Blueberries",
  "Green beans",
];

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
          <Typography fontSize={18} mx={5}>
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
        <Table style={{ width: "80%", columnGap: 0 }}>
          <TableBody>
            {dirtyDozenData.map((foodName, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Box
                    display="flex"
                    flexDirection="column"
                    width="100%"
                    alignItems="center"
                  >
                    <Typography fontSize={25}>
                      {index + 1}. {foodName}
                    </Typography>

                    <Box
                      component="img"
                      sx={{
                        width: {
                          xs: 250,
                          sm: 300,
                        },
                        border: 4,
                        borderRadius: 3,
                      }}
                      src={`/images/${foodName}.jpeg`}
                    ></Box>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
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
