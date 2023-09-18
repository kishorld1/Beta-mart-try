const express = require("express");
const {
  searchProdsCategory,
  searchAutoComplete,
} = require("../controllers/search-controller");
const searchRoutes = express.Router();
searchRoutes.get("/search", searchProdsCategory);
searchRoutes.post("/get-autoComplete", searchAutoComplete);

module.exports = searchRoutes;
