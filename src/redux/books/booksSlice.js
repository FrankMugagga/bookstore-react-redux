import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';

import axios from 'axios';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tse6hShNv4W6W1aVZoIY/books';

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const resp = await axios.get(url);
  /*eslint-disable */
  const data = resp.data;
  const books = Object.keys(data).map((key) => ({
    ...data[key][0],
    item_id: key,
  }));
  return { books };
});

export const addNewBook = createAsyncThunk('books/addNewBook', async (initialPost) => {
  const resp = await axios.post(url, initialPost);
  return resp.data;
});

export const removeBook = createAsyncThunk('books/removeBook', async (id) => {
  await axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/tse6hShNv4W6W1aVZoIY/books/${id}`);
  return id;
})

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addbook: (state, action) => {
      const newBook = {
        item_id: nanoid(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.book.push(newBook);
    },
    removebook: (state, action) => {
      const bookId = action.payload;
      state.books = state.books.filter((book) => book.item_id !== bookId);
    },

  },

  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload.books;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
      builder.addCase(addNewBook.fulfilled, (state, action) => {
        state.status = 'succeeded'
        console.log(action)
      })
      builder.addCase(addNewBook.rejected, (state, action) => {
        state.status = 'failed'
      })
      builder.addCase(addNewBook.pending, (state, action) => {
        state.status = 'isLoading'
      })
      builder.addCase(removeBook.fulfilled, (state, action) => {
        const id = action.payload;
        state.books = state.books.filter((book) => book.item_id !== id)
      })
      builder.addCase(removeBook.rejected,(state) => {
        state.status = 'rejected'
      })
  },
});

export const getBooksStatus = (state) => state.books.status;
export const getBooksError = (state) => state.books.error;

export const { addbook, removebook } = booksSlice.actions;

export default booksSlice.reducer;
