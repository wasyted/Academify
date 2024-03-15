const mongoose = require('mongoose')
mongoose.set("strictQuery", false);
const dev_db_url = "mongodb+srv://wasyted:1186matias@dev.hforsbw.mongodb.net/?retryWrites=true&w=majority&appName=dev";

const mongoDB = process.env.MONGODB_URI || dev_db_url;

mongoose.connect(mongoDB);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "mongo connection error"));

module.exports = db;