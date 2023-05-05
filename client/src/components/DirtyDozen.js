import React from "react";
import {
  Typography,
  Box,
  CssBaseline,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";

import ReferenceLink from "./ReferenceLink";
import NavBar from "./NavBar";

//had detectable amounts of pesticides
//img-urlit tilalle?
const dirtyDozenData = [
  { name: "Strawberries", pesticides: ">99%" },
  { name: "Spinach", pesticides: "75%" },
  { name: "Kale, Collards & Mustard Greens", pesticides: "86%" },
  { name: "Peaches", pesticides: ">90%" },
  { name: "Pears", pesticides: "90%" },
  { name: "Nectarines", pesticides: ">90%" },
  { name: "Apples", pesticides: "90%" },
  { name: "Grapes", pesticides: "90%" },
  { name: "Bell & Hot Peppers", pesticides: "90%" },
  { name: "Cherries", pesticides: "90%" },
  { name: "Blueberries", pesticides: "90%" },
  { name: "Green beans", pesticides: "90%" },
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
        <p>
          The following 12 fruits & vegetables are the highest in pesticides
          measured by the{" "}
          <ReferenceLink
            url="https://www.ewg.org/foodnews/summary.php"
            label="Environmental Working Group"
            title="EWG Dirty Dozen 2023"
          />{" "}
          in USA. When you go shopping, try to buy at least these products
          organic!
        </p>
        <Table>
          <TableBody>
            {dirtyDozenData.map((foodItem, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{foodItem.name}</TableCell>
                <TableCell>{foodItem.pesticides}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
};

export default DirtyDozen;
