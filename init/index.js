const mongoose = require("mongoose");
const db_config = require("../configs/db.config");
const initData = require("./data");
const Listing = require("../models/listing.model");


mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to the MongoDB",error)
});

db.once("open", () => {
    console.log("Connected to MongoDB")
});


const initDB = async () => {
    await Listing.deleteMany({});
    await Listing.insertMany(initData);
    console.log("Data was initialized");
}

initDB();