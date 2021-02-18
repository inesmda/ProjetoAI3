const mongoose = require("../database")

const SchemaCategory = new mongoose.Schema({
    category:{
        type: String,
        required: true,
    }
});

const Category = mongoose.model("Category", SchemaCategory);

module.exports = Category;