const mongoose = require("../database");

const SchemaOrder = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: true
    },
    productId:{
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    shipDate: {
        type: Date,
        required: true,
    },
    deliveryDate: {
        type: Date,
    },
    status: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model("Order", SchemaOrder);

module.exports = Order;