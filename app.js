const express = require("express");
const app = express();
const connection = require("./db/config")


// Routes Config
app.use(express.json({
    extended: false
}))

//parse incoming request body in JSON format.
app.use('/', require("./routes/redirects"))
app.use('/api/', require('./routes/url'))


module.exports = app;