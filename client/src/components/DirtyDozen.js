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

//had detectable amounts of pesticides
//img-urlit tilalle?
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
        <Box width="50%">
          <Typography variant="h2" textAlign="center">
            The Dirty Dozen
          </Typography>
          The following 12 fruits & vegetables are the highest in pesticides
          measured by the{" "}
          <ReferenceLink
            url="https://www.ewg.org/foodnews/summary.php"
            label="Environmental Working Group"
            title="EWG Dirty Dozen 2023"
          />{" "}
          in USA. When you go shopping, try to buy at least these products
          organic!
        </Box>
        <Table style={{ width: "80%", columnGap: 0 }}>
          <TableBody>
            {dirtyDozenData.map((foodName, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Typography fontSize={25}>{index + 1}.</Typography>
                </TableCell>
                <TableCell>
                  <Typography fontSize={30}>{foodName}</Typography>
                </TableCell>
                <TableCell>
                  <Box
                    component="img"
                    sx={{
                      width: 200,
                    }}
                    src={`/images/${foodName}.jpeg`}
                  ></Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box width="50%">
          Read more about the Dirty Dozen and its counterpart the Clean Fifteen
          from{" "}
          <ReferenceLink
            url="https://www.ewg.org/foodnews/summary.php"
            label="here!"
            title="EWG Dirty Dozen 2023"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default DirtyDozen;
