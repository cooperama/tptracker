const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  weekends: [
    {
      type: Number,
    },
  ],
  weekdays: [
    {
      type: Number,
    },
  ],
  location: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Store = mongoose.model("Store", StoreSchema);

module.exports = Store;
