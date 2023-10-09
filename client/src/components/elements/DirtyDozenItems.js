import React from "react";
import {
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography,
  Grid,
} from "@mui/material";

const dirtyDozenData = [
  "Strawberries",
  "Spinach",
  "Kales & Collards",
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

const FoodItem = ({ index, foodName }) => (
  <Box display="flex" flexDirection="column" width="100%" alignItems="center">
    <Typography fontSize={25}>
      {index + 1}. {foodName}
    </Typography>

    <Box
      component="img"
      sx={{
        width: {
          xs: 200,
          sm: 250,
        },
        height: {
          xs: 112.5,
          sm: 141,
        },
        border: 4,
        borderRadius: 3,
      }}
      src={`/images/${foodName}.jpeg`}
    ></Box>
  </Box>
);

const DirtyDozenItems = () => {
  if (window.innerWidth > 500) {
    return (
      <Grid container rowSpacing={2} columnSpacing={0}>
        {dirtyDozenData.map((foodName, index) => (
          <Grid item key={index} xs={6}>
            <FoodItem index={index} foodName={foodName} />
          </Grid>
        ))}
      </Grid>
    );
  }
  return (
    <Table style={{ width: "80%", columnGap: 0 }}>
      <TableBody>
        {dirtyDozenData.map((foodName, index) => (
          <TableRow key={index}>
            <TableCell>
              <FoodItem index={index} foodName={foodName} />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DirtyDozenItems;
