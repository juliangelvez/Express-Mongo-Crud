const dbConfig = require("../config/db.config");
const mongoose = require("mongoose");

mongoose.Promise =  global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
db.comments = require("./comment.model.js")(mongoose)

module.exports = db;