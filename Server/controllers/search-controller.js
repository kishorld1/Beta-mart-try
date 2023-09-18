const Product = require("../model/Products");
const Category = require("../model/Categories");

const searchProdsCategory = async (req, res) => {
  try {
    const { name } = req.query;
    const categories = await Category.find({
      categoryName: { $regex: name, $options: "i" },
    }).populate("products");
    if (categories.length === 0) {
      const products = await Product.find({
        productName: { $regex: name, $options: "i" },
      });
      if (products == 0) {
        res.json({ code: 404, data: "Soryy Products not found try again" });
      } else {
        res.json({ code: 200, data: products });
      }
    } else {
      const products = categories.map((item) => item.products);
      res.json({ code: 200, data: products });
    }
  } catch (error) {
    res.json({ code: 500, error: "internal server error" });
  }
};

const searchAutoComplete = async (req, res) => {
  try {
    let payload = req.body.payload.trim();
    let search = await Product.find({
      productName: { $regex: new RegExp(payload + ".*", "i") },
    }).exec();
    const productNameArray = search.map((item) => item.productName).slice(0, 7);
    res.send({ payload: productNameArray });
  } catch (error) {
    res.json({
      code: 500,
      error: "Internal server error",
    });
  }
};

module.exports = {
  searchProdsCategory,
  searchAutoComplete,
};
