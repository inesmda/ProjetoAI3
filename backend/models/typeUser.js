const mongoose = require("../database");

const SchemaTypeUser = new mongoose.Schema({
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

const TypeUser = mongoose.model("typeUser", SchemaTypeUser);

module.exports = TypeUser;