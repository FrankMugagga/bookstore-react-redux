import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  book: [
    {
      item_id: 'item1',
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      item_id: 'item2',
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      item_id: 'item3',
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addbook: (state, action) => {
      const newBook = {
        item_id: `item${state.book.length + 1}`,
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.book.push(newBook);
    },
    removebook: (state, action) => {
      const bookId = action.payload;
      state.book = state.book.filter((book) => book.item_id !== bookId);
    },

  },
});

export const { addbook, removebook } = booksSlice.actions;
export default booksSlice.reducer;
