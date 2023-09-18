const express = require("express");
const {
  createCategory,
  getAllCategory,
} = require("../controllers/category-controller");

const categoryRoutes = express.Router();
// Route to get all category annd associated products
categoryRoutes.get("/", getAllCategory);
// Route to create category
categoryRoutes.post("/", createCategory);
module.exports = categoryRoutes;
