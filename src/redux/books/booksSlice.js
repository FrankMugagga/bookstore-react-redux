import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,

  reducers: {
    addbook: { },
    removebook: { },

  },
});

export const { addbook, removebook } = booksSlice.actions;
export default booksSlice.reducer;
