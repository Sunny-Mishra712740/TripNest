const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    default : "https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBpbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D",
    set: (v) =>
      v === ""
        ? "https://plus.unsplash.com/premium_photo-1661964095477-fe68b487f700?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVpbGRpbmclMjBpbiUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D"
        : v,
  },
  price: Number,
  location: String,
  country: String,
},{timestamps : true , versionKey : false});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
