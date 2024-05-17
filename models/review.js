const mongoose = require("mongoose");
const { type, max } = require("../schema");
const { string, ref } = require("joi");

const reviewSchema = new mongoose.Schema({
  comment: { type: String },
  rating: { type: Number, min: 1, max: 5 },
  createdAt: { type: Date, default: Date.now() },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Review = new mongoose.model("Review", reviewSchema);
module.exports = Review;
