const mongoose = require("../database")
var bcrypt = require('bcryptjs');


const SchemaUser = new mongoose.Schema({
    typeId: {
        type: mongoose.Types.ObjectId,
        ref: 'UserType'
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName:{
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
    phoneNumber: {
        type: Number,
        unique: true
    },
    address: {
        type: String
    },
    postalCode: {
        type: String
    },
    city: {
        type: String
    },
    country: {
        type: String
    }
});

SchemaUser.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.password, 10);
    this.password = hash;
  
    next();
  });

const Users = mongoose.model("Users", SchemaUser);

module.exports = Users;