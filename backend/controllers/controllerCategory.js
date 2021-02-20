const Category = require("../models/Category");

exports.AddCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    return res.send({ category });
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.ListCategory = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.send({ categories });
  } catch (err) {
    res.status(500).send(err);
  }
};
