import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = {
  books: [
    { id: nanoid(), title: 'X', author: 'sadiq', price: 250 },
    { id: nanoid(), title: 'Y', author: 'Sojib', price: 350 },
  ],
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    deleteBook: (state, actions) => {
      const id = actions.payload;
      state.books = state.books.filter((book) => book.id !== id);
    },
    addBook: (state, actions) => {
      const newItem = actions.payload;
      state.books.push(newItem);
      console.log(newItem);
    },
    editBook: (state, actions) => {
      const { id, title, author, price } = actions.payload;
      const existingBook = state.books.find((book) => book.id === id);

      if (existingBook) {
        existingBook.title = title;
        existingBook.author = author;
        existingBook.price = price;
      }
    },
  },
});

export const { deleteBook, addBook, editBook } = bookSlice.actions;

export default bookSlice.reducer;
