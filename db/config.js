const mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/shortenerDB",{useNewUrlParser: true,useUnifiedTopology: true});
const connection = mongoose.connection;
connection.on("error",(error) => console.error(error));
connection.once("open",() => console.log("Connected to db"));

module.exports = connection;