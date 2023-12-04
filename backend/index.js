const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/api/restaurant", (req, res) => {
  const restaurantData = require("./restaurantData.json");

  res.json(restaurantData);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
