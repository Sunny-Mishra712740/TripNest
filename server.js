const express  = require("express");
const app = express();
const mongoose = require("mongoose");
const server_config = require("./configs/server.config");
const db_config = require("./configs/db.config");
const Listing = require("./models/listing.model")
const path = require("path")

// Connection with mongodb

mongoose.connect(db_config.DB_URL);
const db = mongoose.connection;

db.on("error", () => {
    console.log("Error while connecting to the MongoDB",error)
});

db.once("open", () => {
    console.log("Connected to MongoDB")
});


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


app.get("/listings", async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings.views/index", {allListings})
})




// app.get("/testListing", async(req,res) => {

//     let sampleListing = new Listing({
//         title : "My New Villa",
//         description : "By the beach",
//         price : 1200,
//         location : "Calangute, Goa",
//         country : "India",
//     });

//     await sampleListing.save();
//     console.log("sample was saved");
//     res.send("successfull testing");
// },)


// Starting the server

app.listen(server_config.PORT, () => {
    console.log(`Server is listening to port ${8080}`)
})