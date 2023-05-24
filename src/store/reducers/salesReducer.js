import { createSlice } from '@reduxjs/toolkit';

const salesReducer = createSlice({
  name: 'sales',
  initialState: [],
  reducers: {
    dailySales: (state, action) => {
      return action.payload;
    },
  },
});

export const { dailySales } = salesReducer.actions;

export default salesReducer.reducer;
