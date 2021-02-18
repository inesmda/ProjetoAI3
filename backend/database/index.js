const mongoose = require("mongoose");
mongoose.set('useNewUrlParser',true);
mongoose.set('useCreateIndex',true);
mongoose.connect("mongodb+srv://inesmda:ines1234@cluster0.h0ost.mongodb.net/AI3", 
{ useNewUrlParser: true, useUnifiedTopology: true });

mongoose.Promise = global.Promise;

module.exports = mongoose;
