const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  avatar: {
    type: String,
    default: "",
    required: false,
  },
  address: {
    type: String,
    required: false,
  },
  country: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  zipcode: {
    type: String,
    required: false,
  },
  cardNumber: {
    type: String,
    required: false,
  },
  cvv: {
    type: String,
    required: false,
  },
  expDate: {
    type: String,
    required: false,
  },
  otp: {
    type: String,
    required: false,
  },
  token: {
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

const User = mongoose.model("User", userSchema);

module.exports = User;
