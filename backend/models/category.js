const mongoose = require("../database");

const SchemaCategory = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true,
    }
});

const Category = mongoose.model("Category", SchemaCategory);

module.exports = Category;