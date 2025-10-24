const express = require("express");
const app = express();
const mongoose = require("mongoose");
const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const Listing = require("./models/listing.model");


// Connnection with MongoDB
mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
  console.log("Error while connecting to the MongoDB", error);
});
db.once("open", () => {
  console.log("Connected to MongoDB")
});





app.get("/testListing", async (req, res) => {
  let sampleListing = new Listing({
    title : "My New Villa",
    description : "By the Beach",
    price : 1200,
    location : "Calangute, Goa",
    country : "India",
  })
  await sampleListing.save();
  console.log("Sample was saved")
  return res.status(200).send("Successful testing")
})

app.get("/", (req, res) => {
  return res.send("This is root path");
})









// Starting the server
app.listen(server_config.PORT, () => {
  console.log(`Server is listening to port ${server_config.PORT}`)
})