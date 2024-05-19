import { Router } from "express";
import { getBooks, saveBooks } from "../bookkam.js";

const router = Router();

// To get all books
router.get("/", (req, res) => {
  res.json(getBooks());
});

// To get a specific book
router.get("/:id", (req, res) => {
  const id = req.params.id;
  const book = getBooks().filter((book) => book.id == id);
  if (book.length > 0) {
    res.json(book[0]);
  } else {
    res.status(404).send("Book not found");
  }
});

// To add a book
router.post("/", (req, res) => {
  const newBook = req.body;
  const books = getBooks();

  // Check if a book with the same ID already exists
  const existingBook = books.find((book) => book.id === newBook.id);
  if (existingBook) {
    res.status(400).send("Book with the same ID already exists");
    return;
  }

  // Add the new book and save the updated list
  books.push(newBook);
  saveBooks(books);
  res.send("Book added successfully");
});

export default router;
