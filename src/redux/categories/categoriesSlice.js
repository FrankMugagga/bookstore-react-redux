import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  check: 'Under construction',
};

const categoriesSlice = createSlice({
  name: 'category',
  initialState,

  reducers: {
    checkstatus: () => 'Under construction',

  },
});

export const { checkstatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
