const mongoose = require("../database")

const SchemaOrder = new mongoose.Schema({
    items:[{
        product: {
            type: mongoose.SchemaTypes.ObjectId,
            ref: 'Product'
        },
        quantity: {
            type: Number
        }
    }],
    orderDate: {
        type: Date,
        required: true,
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
    finalPrice: {
        type: Number,
        required: true
    }
});

const Order = mongoose.model("Order", SchemaOrder);

module.exports = Order;