const express = require("express");
const {
  getproducts,
  createProducts,
} = require("../controllers/products-controller");

const productRoutes = express.Router();
// Route  to get all products
productRoutes.get("/", getproducts);
// Route  to create products
productRoutes.post("/", createProducts);
module.exports = productRoutes;
