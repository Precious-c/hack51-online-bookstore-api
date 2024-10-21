const express = require("express");
const router = express.Router();
const { getAllBooks, addBook, updateBook, deleteBook } = require("../controllers/booksController");
const { addBookValidation, updateBookValidation } = require("../middlewares/validator");

//Book routes
router.get("/", getAllBooks);
router.post("/", addBookValidation, addBook);
router.put("/:id", updateBookValidation, updateBook);
router.delete("/:id", deleteBook);

module.exports = router;
