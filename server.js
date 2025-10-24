const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server_config = require("./configs/server.config")
const db_config = require("./configs/db.config")


// Connnection with MongoDB

mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to the MongoDB", error);
})

db.once("open", () => {
  console.log("Connected to MongoDB")
})

app.get("/", (req, res) => {
  return res.send("This is root path");
})


// Starting the server
app.listen(server_config.PORT, () => {
  console.log(`Server is listening to port ${server_config.PORT}`)
})