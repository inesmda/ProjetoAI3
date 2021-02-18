const { mongo } = require("../database");
const mongoose = require("../database")

const SchemaProduct = new mongoose.Schema({
    name: {
        type: String,
    },
    category:{
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Category',
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

module.exports = mongoose.model('Product', SchemaProduct);