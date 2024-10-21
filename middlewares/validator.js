const { body, validationResult } = require("express-validator");

const addBookValidation = [
  body("title").notEmpty().trim().escape().withMessage("Book title is required"),
  body("authors").notEmpty().withMessage("At least one author is required"),
  body("isbn")
    .isLength({ max: 13 })
    .trim()
    .withMessage("ISBN should not be more than 13 characters"),
  body("yearPublished")
    .isNumeric()
    .isLength({ min: 4, max: 4 })
    .trim()
    .withMessage("Year published must be 4 digits long"),
  body("publisher").notEmpty().isString().trim().withMessage("Publisher name is required"),
  body("price").isNumeric().trim().withMessage("Price is required"),
  body("stockQuantity").isNumeric().trim().withMessage("Stock quantity is required"),
  body("description")
    .isString()
    .trim()
    .escape()
    .withMessage("A description of the book is required"),
  body("coverImage").isURL().withMessage("Invalid cover image value"),
];

const updateBookValidation = [
  body("price").optional().isNumeric().trim().withMessage("Price is required"),
  body("title").optional().isString().trim().withMessage("Price is required"),
  body("author").optional().isString().trim().withMessage("Price is required"),
  body("stockQuantity").optional().isNumeric().trim().withMessage("Stock quantity is required"),
  body("coverImage").optional().isURL().withMessage("Invalid cover image value"),
];

module.exports = { addBookValidation, updateBookValidation };
