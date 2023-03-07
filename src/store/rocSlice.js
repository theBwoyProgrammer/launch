/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';

// declare rocSlice to get data
const rocSlice = createSlice({
  name: 'rockets',
  initialState: [],
  reducers: {
    // get data from api
    getRockets: (state, action) => action.payload,
  },
});

export const { getRockets } = rocSlice.actions;
export default rocSlice.reducer;
