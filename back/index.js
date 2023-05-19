const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const fs = require("fs");

const axios = require("axios");

app.use(cors());

app.use(express.static("build"));

app.use("/reviews", async (req, res) => {
  fs.readFile("reviews.json", (error, data) => {
    if (error) {
      console.error(error);

      throw err;
    }

    const reviews = JSON.parse(data);
    res.json(reviews);
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "..", "back/build", "index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
