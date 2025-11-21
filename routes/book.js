// routes/books.js
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Book = require('../models/Book');

// GET /books  -> list all books
router.get('/', async (req, res) => {
  try {
    const books = await Book.find().sort({ createdAt: -1 });
    res.json(books);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /books/:id -> get 1 book
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    const book = await Book.findById(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /books -> create a book
router.post('/', async (req, res) => {
  const { title, author, publishedDate, pages, genre } = req.body;

  if (!title || !author) {
    return res.status(400).json({ error: 'title and author are required' });
  }

  try {
    const book = new Book({ title, author, publishedDate, pages, genre });
    await book.save();
    res.status(201).json(book);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /books/:id -> delete a book
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ID' });

  try {
    const book = await Book.findByIdAndDelete(id);
    if (!book) return res.status(404).json({ error: 'Book not found' });
    res.json({ message: 'Book deleted', book });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
