const Product = require("../model/Products");
const Category = require("../model/Categories");

const getproducts = async (req, res) => {
  try {
    const products = await Product.find();

    res.json({
      code: 200,
      success: true,
      message: "All products retrieved successfully",
      data: products,
    });
  } catch (err) {
    res.status(500).json({ error: "could not create products " });
  }
};

const createProducts = async (req, res) => {
  try {
    const { productName, price, description, specifications, image, category } =
      req.body;

    // Check if the specified category exists
    const categoryfound = await Category.findById(category);
    if (!categoryfound) {
      return res.json({
        error: "Category not found.",
      });
    }

    // Create a new product using the Product model
    const product = new Product({
      productName,
      price,
      description,
      specifications,
      image,
      category,
    });

    // Save the product to the database
    await product.save();
    categoryfound.products.push(product);
    categoryfound.save();

    res.json({
      code: 201,
      message: "product created successfully",
    });
  } catch (error) {
    res.status(500).json({ error: "could not create products " });
  }
};

module.exports = {
  getproducts,
  createProducts,
};
