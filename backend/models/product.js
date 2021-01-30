const mongoose = require("../database");

const SchemaProduct = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    category:{
        type: String,
        required: true,
    },
    name: {
        type: String,
    },
    stock: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("Product", SchemaProduct);

module.exports = Product;