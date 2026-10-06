const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DEFAULT_IMG =
  "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    filename: {
      type: String,
      default: "listingimage",
    },
    url: {
      type: String,
      default: DEFAULT_IMG,
      set: (v) => (v === "" ? DEFAULT_IMG : v),
    },
  },
  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;













// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const listingSchema = new Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   image: {
//     type: String,
//     default: "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     set: (v) =>
//       v === ""
//         ? "https://images.unsplash.com/photo-1667125095636-dce94dcbdd96?q=80&w=852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//         : v,
//   },
//   price: Number, 
//   location: String, 
//   country: String, 
// });

// const listing = mongoose.model("listing" , listingSchema);
// module.exports = listing;



