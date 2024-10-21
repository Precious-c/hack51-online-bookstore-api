# hack51-online-bookstore-api
A fully functional RESt API that performs CRud operations for managing book information in a store's database.

## Base URL
localhost:8000/api

Endpoints
| **HTTP Method** | **Endpoint** |     **Description**     |
|:---------------:|:------------:|:-----------------------:|
| ````GET ````            | ````/books ````       | Get all books           |
| ````POST ````            | ````/books ````       | Add a new book          |
| ````PUT ````             | ````/books/:id ````   | Update an existing book |
| ````DELETE ````          | ````/books/:id ````   | Delete a book           |

## GET: Get all books
### Description
Gets all books in the database

### Endpoint 
```` /books/ ````

**No request bodies or parameters**

### Response Structure
The request returns an array of book objects

````
[
  {
    "_id": "",
    "title": "",
    "authors": [""],
    "isbn": "",
    "yearPublished": "",
    "publisher": "",
    "price": 0,
    "stockQuantity": 0,
    "description": "",
    "language": "",
    "format": "",
    "reviews": [],
    "__v": 0
  }
]
````

## POST: Add a new Book
### Description 
This endpoint allows clients to create a new book in the database.

### Endpoint 
```` /books/ ````

### Request Parameters
No URL parameters required.

### Request Body (JSON)
+ title (string): The title of the book.
+ authors (array): The author(s) of the book.
+ format (string): The format of the book (e.g., paperback, hardcover).
+ isbn (string): The ISBN of the book.
+ yearPublished (string): The year the book was published.
+ publisher (string): The publisher of the book.
+ price (number): The price of the book.
+ stockQuantity (number): The quantity of the book in stock.
+ description (string): A brief description of the book.
+ language (string, default: "English"): The language of the book.
+ rating (number, optional): The rating of the book.

### Example Request Body
````
{
  "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
  "authors": ["Susan Cain"],
  "format": "paperback",
  "isbn": "9780307352156",
  "yearPublished": "2013",
  "publisher": "Crown Publishing Group",
  "price": 21440,
  "stockQuantity": 14,
  "description": "Experience the book that started the Quiet Movement...",
  "language": "English",
  "rating": 4.1
}
````

### Example Response Body
````
{
  "message": "Quiet: The Power of Introverts in a World That Can't Stop Talking" added successfully",
  "book": {
    "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    "authors": ["Susan Cain"],
    "isbn": "9780307352156",
    "yearPublished": "2013",
    "publisher": "Crown Publishing Group",
    "price": 21440,
    "stockQuantity": 14,
    "description": "Experience the book that started the Quiet Movement...",
    "language": "English",
    "format": "paperback",
    "reviews": [],
    "_id": "6716613228155d167785c001"
  }
}

````

## PUT - Update Book Details
### Endpoint 
```` /books/:id ````

### Description
This endpoint updates the details of a specific book in the database.

### Path Parameters
+ id: The ID of the book to be updated.
+ Request Body (JSON)
+ price (number): The updated price of the book.
+ stockQuantity (number): The updated quantity of the book in stock.
+ coverImage (string): The updated cover image URL for the book.
  
### Example Request Body

````
{
  "price": 52000,
  "stockQuantity": 22
}
````
### Example Response 
````
{
  "message": "Book updated successfully",
  "book": {
    "_id": "6716344ff0f5b500b92f2ada",
    "title": "Quiet: The Power of Introverts in a World That Can't Stop Talking",
    "authors": ["Susan Cain"],
    "isbn": "9780307352156",
    "yearPublished": "2013",
    "publisher": "Crown Publishing Group",
    "price": 52000,
    "stockQuantity": 22,
    "description": "Experience the book that started the Quiet Movement...",
    "language": "English",
    "format": "paperback",
    "reviews": [],
    "__v": 0
  }
}
````

## DELETE - Delete a Book
### Endpoint: 
````/books/:id````

### Description
This endpoint deletes a book from the database.

### Path Parameters
+ id: The ID of the book to be deleted.
  
### Request Body
No request body required.

### Response Example
````
{
  "message": "Book deleted successfully"
}
````

## Error
If any error is encountered, the api response which an error status code and a message stating the cause of the error.
