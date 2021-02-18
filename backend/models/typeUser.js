const mongoose = require("../database")

const SchemaTypeUser = new mongoose.Schema({
    type:{
        type: String,
        required: true,
    }
});

const UserType = mongoose.model('UserType', SchemaTypeUser);

module.exports = UserType;