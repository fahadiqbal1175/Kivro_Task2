// models/Book.js
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  author: { type: String, required: true, trim: true },
  publishedDate: { type: Date },       // optional
  pages: { type: Number, min: 1 },     // optional
  genre: { type: String, trim: true }
}, {
  timestamps: true
});

module.exports = mongoose.model('Book', bookSchema);
