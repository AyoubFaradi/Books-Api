import Book from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
  try {

    const books = await Book.find().sort({ id: 1 });
    res.json(books);

  } catch (error) {
    res.status(500).json(error);
  }
};


export const getBookById = async (req, res) => {

  try {

    const book = await Book.findOne({ id: req.params.id });

    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);

  } catch (error) {
    res.status(500).json(error);
  }

};


export const createBook = async (req, res) => {

  try {

    const book = new Book(req.body);
    const saved = await book.save();

    res.status(201).json(saved);

  } catch (error) {
    res.status(500).json(error);
  }

};


export const updateBook = async (req, res) => {

  try {

    const book = await Book.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );

    res.json(book);

  } catch (error) {
    res.status(500).json(error);
  }

};


export const deleteBook = async (req, res) => {

  try {

    await Book.findOneAndDelete({ id: req.params.id });

    res.json({ message: "Book deleted" });

  } catch (error) {
    res.status(500).json(error);
  }

};