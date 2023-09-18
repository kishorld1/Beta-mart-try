const Category = require("../model/Categories");

// Logic to create category
const createCategory = async (req, res) => {
  try {
    const { categoryName, categoryImage } = req.body;
    // Create a new category using the Category model
    const category = new Category({ categoryName, categoryImage });
    // Save the category to the database
    await category.save();
    res.json({
      code: 201,
      message: "category created successfully",
    });
  } catch (error) {
    res.json({ error: "could not create category" });
  }
};

// Logic to get category and asscoiated products
const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.find().populate("products"); // Populate products within each category
    res.json({
      success: true,
      message: "Categories and associated products retrieved successfully",
      data: categories,
    });
  } catch (err) {
    res.json({ error: "Could not fetch categories and products" });
  }
};

module.exports = {
  createCategory,
  getAllCategory,
};
