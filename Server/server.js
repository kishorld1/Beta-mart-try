const dotenv = require("dotenv").config();
const express = require("express");
require("./config/dbConnect");
const ProductRoutes = require("./routes/products-route");
const CategoryRoutes = require("./routes/categories-route");
const searchRoutes = require("./routes/search-route");

const app = express();

// Middlewares
app.use(express.json());

app.use("/api/v1/beta-mart/products/", ProductRoutes);

app.use("/api/v1/beta-mart/categories/", CategoryRoutes);
app.use("/api/v1/beta-mart/", searchRoutes);
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});
//server configure
PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
