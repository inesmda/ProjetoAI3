const mongoose = require("../database");

const SchemaUser = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    nif: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        select: false
    },
    phonenumber: {
        type: Number,
        unique: true
    },
    address: {
        type: String
    },
    postalcode: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    },
    createdat: {
        type: Date,
        default: Date.now
    },
});

const User = mongoose.model("Users", SchemaUser);

module.exports = User;