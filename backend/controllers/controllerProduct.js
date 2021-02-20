const Product = require("../models/Product");

exports.AddProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    return res.send({ product });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.ListProduct = async (req, res) => {
  try {
    const products = await Product.find();
    return res.send({ products });
  } catch (err) {
    res.status(500).send(err);
  }
};
