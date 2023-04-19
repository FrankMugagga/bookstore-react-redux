import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,

  reducers: {
    checkstatus: {},

  },
});

export const { checkstatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
