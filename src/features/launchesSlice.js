/* eslint-disable import/no-extraneous-dependencies */
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const launchesSlice = createSlice({
  name: 'launches',
  initialState: [],
  reducers: {
    setLaunches: (state, action) => action.payload,
  },
});

export const { setLaunches } = launchesSlice.actions;

export const fetchLaunches = () => async (dispatch) => {
  try {
    const response = await axios.get(
      'https://api.spacexdata.com/latest/launches',
    );
    dispatch(setLaunches(response.data));
  } catch (error) {
    console.error(error.message);
  }
};

export default launchesSlice.reducer;
