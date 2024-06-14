const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  itemNumber: {
    type: String,
    required: true,
  },
  Category: {
    type: String,
    required: true,
  },
  productImage: {
    type: String,
    default: "",
    required: false,
  },
  license: {
    type: String,
    required: false,
  },
  productType: {
    type: String,
    required: false,
  },
  imagrUrl: {
    type: String,
  },
  is_deleted: {
    type: Boolean,
    default: false,
    required: true,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
