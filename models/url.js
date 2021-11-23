const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: Date,
        default: Date.now()
    }
});

const Url = mongoose.model("Url",urlSchema);
module.exports = Url;