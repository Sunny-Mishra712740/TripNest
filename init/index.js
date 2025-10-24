const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.model");
const db_config = require("../configs/db.config")

mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to the MongoDB", error);
});
db.once("open", () => {
    console.log("Connected to MongoDB");
})

const initDB = () => {
    Listing.deleteMany({});
    Listing.insertMany(initData.data);
    console.log("data was initialized");
};

initDB();