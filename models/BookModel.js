const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  authors: [
    {
      type: String,
      required: true,
    },
  ],
  isbn: {
    type: String,
  },
  category: {
    type: String,
  },
  yearPublished: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stockQuantity: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
  },
  language: {
    type: String,
    default: "English",
  },
  coverImage: {
    type: String,
  },
  format: {
    type: String,
    enum: ["hardcover", "paperback", "ebook"],
    default: "ebook",
  },
  reviews: [{ type: String }],
  rating: Number,
});

module.exports = mongoose.model("book", BookSchema);
