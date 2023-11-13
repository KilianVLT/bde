const express = require('express');
const User = require("./User.route");
const app = express();

app.use("/user", User)

module.exports = app