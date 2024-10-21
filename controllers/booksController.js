const { default: mongoose } = require("mongoose");
const Book = require("../models/BookModel");
const { validationResult } = require("express-validator");

//@desc Get all books
//@route GET /api/books
const getAllBooks = async (req, res) => {
  try {
    //Retrive books from db
    const books = await Book.find();
    if (!books) return res.status(404).json({ error: "No books found" });

    return res.status(200).json(books);
  } catch (err) {
    console.log("Error getting all books ", err);
    res.status(500).json({ error: "internal server error. Please try again later" });
  }
};

//@desc Add a new book
//@route GET /api/books
const addBook = async (req, res) => {
  try {
    //Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    const { title, authors, isbn, yearPublished, publisher, price, stockQuantity, description } =
      req.body;

    const book = await Book.findOne({ title, isbn });
    if (book) return res.status(400).json({ error: "Book already exists" });

    const newBook = new Book({
      title,
      authors,
      isbn,
      yearPublished,
      publisher,
      price,
      stockQuantity,
      description,
    });

    const savedBook = await newBook.save();

    return res.status(201).json({ message: `"${title}" added successfully`, book: savedBook });
  } catch (err) {
    console.log("Error adding new book", err);
    res.status(500).json({ error: "Internal server error. Please try again later" });
  }
};

//@desc Updates a book details
//@route PUt /api/books/:id
const updateBook = async (req, res) => {
  try {
    //Validate input data
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ error: errors.array() });

    const { id } = req.params;
    const { price, title, authors, category, stockQuantity } = req.body;

    // Check if id is a valid ObjectId
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: "Invalid book Id" });

    //fetch book data
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ error: "Book not found" });

    //Update fields
    if (price) book.price = price;
    if (title) book.title = title;
    if (authors) book.authors = authors;
    if (category) book.category = category;
    if (stockQuantity) book.stockQuantity = stockQuantity;

    //Save updated book
    const updateBook = await book.save();

    return res.status(200).json({ message: `Book updated successfully`, book: updateBook });
  } catch (err) {
    console.log("Error updating book: ", err);
    res
      .status(500)
      .json({ message: "Internal server error. Please try again later", error: err.message });
  }
};

//@desc Delete a book
//@route DELETE /api/books/:id
const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id)) return res.status(400).json({ error: "Invalid book Id" });

    //find and delete book in database
    await Book.findByIdAndDelete(id);

    return res.status(200).json({ message: "Deleted successfully" });
  } catch (err) {
    console.log("Error getting all books ", err);
    res.status(500).json({ error: "Internal server error. Please try again later" });
  }
};

module.exports = { getAllBooks, addBook, updateBook, deleteBook };
