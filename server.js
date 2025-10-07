
const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");

// Connection with mongodb

mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to the MongoDB")
});

db.once("open", () => {
    console.log("Connected to MongoDB")
});



app.get("/", (req,res) => {
    res.send("Hi i am root")
})

app.listen(server_config.PORT, () => {
    console.log(`Server is listening to port ${8080}`)
})