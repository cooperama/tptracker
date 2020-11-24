const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
  },
  price: {
    type: Number,
  },
  description: {
    type: String,
  },
  image: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
