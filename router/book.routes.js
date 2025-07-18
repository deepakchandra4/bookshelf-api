import { Router } from 'express';
import Books from '../models/book.model.js';

const bookRouter = Router();

// Get all the Books
bookRouter.get('/', async (req, res) => {
  try {
    const books = await Books.find();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get a specific book
bookRouter.get('/:id', async (req, res) => {
  try {
    const book = await Books.findById(req.params.id);
    if (!book) return res.status(404).json({ message: 'Book not found' });
    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Add a new book
bookRouter.post('/', async (req, res) => {
  try {
    const newBook = await Books.create(req.body);
    res.json({ message: 'The book has been added', book: newBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update a book
bookRouter.put('/:id', async (req, res) => {
  try {
    const updatedBook = await Books.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: `The book with ID ${req.params.id} has been updated`, book: updatedBook });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete a book
bookRouter.delete('/:id', async (req, res) => {
  try {
    const deletedBook = await Books.findByIdAndDelete(req.params.id);
    if (!deletedBook) return res.status(404).json({ message: 'Book not found' });
    res.json({ message: `Book with id #${req.params.id} has been deleted` });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default bookRouter;