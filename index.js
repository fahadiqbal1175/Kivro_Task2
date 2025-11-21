require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();

const booksRouter = require('./routes/book');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI not set in .env');
  process.exit(1);
}

// Middleware
app.use(express.json()); // parse JSON body

// Routes
app.use('/books', booksRouter);

// Root
app.get('/', (req, res) => {
  res.json({ message: 'Book Management API. Use /books' });
});

// Connect to MongoDB and start server
mongoose.connect(MONGODB_URI)
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});
